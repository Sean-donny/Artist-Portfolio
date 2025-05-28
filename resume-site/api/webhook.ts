import Stripe from 'stripe';
import { buffer } from 'micro';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import admin from 'firebase-admin';
import { Resend } from 'resend';
import { CartItem } from '../src/interfaces/CartItem';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Initialize Firebase Admin - moved to function to avoid module-level errors
function initializeFirebase(): admin.firestore.Firestore {
  try {
    // Check if Firebase is already initialized
    if (admin.apps.length > 0) {
      return admin.firestore();
    }

    // Validate required environment variables
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error('Missing Firebase configuration environment variables');
    }

    // Initialize Firebase
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });

    return admin.firestore();
  } catch (error) {
    console.error('Firebase initialization error:', error);
    throw error;
  }
}

export const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  api: { bodyParser: false },
};

function formatCartItems(cart: CartItem[]): string {
  if (typeof cart === 'string') {
    try {
      cart = JSON.parse(cart);
    } catch {
      return '<p>No items found</p>';
    }
  }

  if (!Array.isArray(cart)) return '<p>No items found</p>';

  return cart
    .map(
      (item: CartItem) => `
      <div style="margin-bottom:10px;border-bottom:1px solid #eee;padding-bottom:10px;">
        <strong>${item.title || 'Unknown item'}</strong><br/>
        Quantity: ${item.quantity || 1} × $${(item.price || 0).toFixed(2)}
      </div>`,
    )
    .join('');
}

function formatAddress(address: Stripe.Address | null | undefined): string {
  if (!address) return 'No shipping address provided';
  const parts = [
    address.line1,
    address.line2,
    address.city,
    address.state,
    address.postal_code,
    address.country,
  ].filter(Boolean);
  return parts.join(', ');
}

function generateEmailHTML(
  data: {
    sessionId: string;
    name: string;
    email: string;
    shipping: Stripe.Address | null | undefined;
    cart: CartItem[];
    paymentStatus: Stripe.Checkout.Session.PaymentStatus;
    amountTotal: number;
    currency: string;
    date: string;
  },
  isCustomer = false,
): string {
  const cartHtml = formatCartItems(data.cart);
  const address = formatAddress(data.shipping);

  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;background:#fff;">
    <h2>${isCustomer ? '🧾 Thank you for your order!' : '🛒 New Order Received'}</h2>
    ${
      isCustomer
        ? `<p>Hello ${data.name}, thank you for your purchase! Here are your order details:</p>`
        : ''
    }

    <div style="padding:10px;background:#f9f9f9;border-radius:8px;margin:20px 0;">
      <p><strong>Order ID:</strong> ${data.sessionId}</p>
      <p><strong>Customer:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Payment Status:</strong> <span style="color:${
        data.paymentStatus === 'paid' ? '#22c55e' : '#f59e0b'
      };">${data.paymentStatus}</span></p>
      <p><strong>Total Amount:</strong> $${data.amountTotal.toFixed(2)} ${data.currency.toUpperCase()}</p>
      <p><strong>Date:</strong> ${new Date(data.date).toLocaleString()}</p>
    </div>

    <h3>Items Ordered</h3>
    <div style="border:1px solid #ddd;border-radius:8px;padding:15px;margin-bottom:20px;">
      ${cartHtml}
    </div>

    <h3>Shipping Address</h3>
    <div style="border:1px solid #ddd;border-radius:8px;padding:15px;">
      ${address}
    </div>

    ${
      isCustomer
        ? `<div style="margin-top:30px;padding:20px;background:#f0f9ff;border-radius:8px;">
            <p style="color:#1e40af;">📦 We'll send you a tracking number once your items ship. Thank you for your business!</p>
          </div>`
        : ''
    }
  </div>
  `;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  // Validate environment variables
  const stripeSecret = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const resendApiKey = process.env.RESEND_API_KEY;
  const storeAdminEmail = process.env.STORE_ADMIN_EMAIL;

  if (!stripeSecret || !webhookSecret) {
    console.error('Missing Stripe environment variables');
    return res.status(500).send('Missing Stripe env vars');
  }

  if (!resendApiKey || !storeAdminEmail) {
    console.error('Missing email configuration');
    return res.status(500).send('Missing email configuration');
  }

  let buf: Buffer;
  try {
    buf = await buffer(req);
  } catch (error) {
    console.error('Error reading request body:', error);
    return res.status(400).send('Error reading request body');
  }

  const sig = req.headers['stripe-signature'];
  if (!sig) {
    console.error('Missing stripe-signature header');
    return res.status(400).send('Missing stripe-signature header');
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return res
      .status(400)
      .send(
        `Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}`,
      );
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session & {
      shipping_details?: { address?: Stripe.Address };
    };

    const sessionId = session.id;
    let shippingAddress = session.customer_details?.address;

    if ('shipping_details' in session && session.shipping_details?.address) {
      shippingAddress = session.shipping_details.address;
    }

    let parsedCart = null;
    if (session.metadata?.cart) {
      try {
        parsedCart = JSON.parse(session.metadata.cart);
      } catch (parseError) {
        console.warn('Failed to parse cart metadata:', parseError);
        parsedCart = session.metadata.cart;
      }
    }

    const order = {
      sessionId,
      name: session.customer_details?.name ?? '',
      email: session.customer_details?.email ?? '',
      shipping: shippingAddress ?? session.customer_details?.address,
      cart: parsedCart,
      paymentStatus: session.payment_status,
      amountTotal: session.amount_total ? session.amount_total / 100 : 0,
      currency: session.currency || 'gbp',
      date: new Date().toISOString(),
    };

    const formattedAmount = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: order.currency.toUpperCase(),
    }).format(order.amountTotal);

    // Save to Firestore with better error handling
    let db: admin.firestore.Firestore;
    try {
      db = initializeFirebase();
      const orderRef = db.collection('orders').doc(sessionId);
      await db.runTransaction(async transaction => {
        const doc = await transaction.get(orderRef);
        if (doc.exists) {
          console.warn(`Duplicate order: ${sessionId}`);
          throw new Error('DUPLICATE_ORDER');
        }
        transaction.set(orderRef, order);
      });
      console.log(`Order saved successfully: ${sessionId}`);
    } catch (error) {
      if (error instanceof Error && error.message === 'DUPLICATE_ORDER') {
        console.log('Duplicate order detected, skipping...');
        return res.status(200).send('Duplicate order. Skipped.');
      }
      console.error('Firestore error:', error);
      return res.status(500).send('Internal Server Error');
    }

    // Send emails
    const adminHtml = generateEmailHTML(order, false);
    const customerHtml = generateEmailHTML(order, true);

    // Send admin email
    try {
      await resend.emails.send({
        from: 'sean@seandonny.com',
        to: [storeAdminEmail],
        subject: `🛒 New Order from ${order.name} - ${formattedAmount}`,
        html: adminHtml,
      });
      console.log('Admin email sent successfully');
    } catch (e) {
      console.error('Failed to send admin email:', e);
    }

    // Send customer email
    if (order.email) {
      try {
        await resend.emails.send({
          from: 'sean@seandonny.com',
          to: [order.email],
          subject: `🧾 Order Confirmation - ${formattedAmount}`,
          html: customerHtml,
        });
        console.log('Customer email sent successfully');
      } catch (e) {
        console.error('Failed to send customer email:', e);
      }
    }
  }

  res.status(200).send('Event received');
}
