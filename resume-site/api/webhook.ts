import Stripe from 'stripe';
import { buffer } from 'micro';
import type { VercelRequest, VercelResponse } from '@vercel/node';
// import { db } from '../lib/firebaseAdmin';
// import { resend } from './resend';
import { render } from '@react-email/render';
import {
  AdminOrderEmail,
  CustomerOrderEmail,
} from '../src/components/emails/OrderConfirmationEmail';

// Validate required environment variables
if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error('Missing required Stripe environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Firebase
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

export const db = admin.firestore();

// Resend
import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature']!;
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    console.error(
      'Webhook signature verification failed:',
      err instanceof Error ? err.message : err,
    );
    return res
      .status(400)
      .send(
        `Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}`,
      );
  }

  console.log(`Received webhook event: ${event.type}, ID: ${event.id}`);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session & {
      shipping_details?: { address?: Stripe.Address };
    };

    const sessionId = session.id;
    let shippingAddress = session.customer_details?.address;

    if ('shipping_details' in session && session.shipping_details?.address) {
      shippingAddress = session.shipping_details.address;
    }

    // Parse cart data
    let parsedCart = null;
    if (session.metadata?.cart) {
      try {
        parsedCart = JSON.parse(session.metadata.cart);
      } catch (parseError) {
        console.warn('Failed to parse cart metadata:', parseError);
        parsedCart = session.metadata.cart; // Keep as string if parsing fails
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

    console.log(
      `Processing order for session: ${sessionId}, customer: ${order.email}, amount: $${order.amountTotal}`,
    );

    try {
      // Use transaction to prevent race conditions
      const orderRef = db.collection('orders').doc(sessionId);
      await db.runTransaction(async transaction => {
        const doc = await transaction.get(orderRef);
        if (doc.exists) {
          console.warn(
            `Duplicate order detected for session: ${sessionId}. Skipping.`,
          );
          throw new Error('DUPLICATE_ORDER');
        }
        transaction.set(orderRef, order);
      });

      console.log(`Order saved successfully for session: ${sessionId}`);
    } catch (error) {
      if (error instanceof Error && error.message === 'DUPLICATE_ORDER') {
        return res.status(200).send('Duplicate order. Skipped.');
      }
      console.error('Firestore transaction error:', error);
      return res.status(500).send('Internal Server Error');
    }

    // Prepare email data
    const emailData = {
      name: order.name,
      email: order.email,
      sessionId: order.sessionId,
      cart: order.cart,
      shipping: order.shipping,
      amountTotal: order.amountTotal,
      currency: order.currency,
      paymentStatus: order.paymentStatus,
      date: order.date,
    };

    // Email to store admin
    try {
      const adminEmailHtml = await render(AdminOrderEmail(emailData));

      await resend.emails.send({
        from: 'sean@seandonny.com',
        to: [process.env.STORE_ADMIN_EMAIL!],
        subject: `🛒 New Order from ${order.name} - $${formattedAmount}`,
        html: adminEmailHtml,
      });
      console.log(`Admin notification sent for order: ${sessionId}`);
    } catch (resendError) {
      console.error('Failed to send admin email:', resendError);
    }

    // Email to customer
    if (order.email) {
      try {
        const customerEmailHtml = await render(CustomerOrderEmail(emailData));

        await resend.emails.send({
          from: 'sean@seandonny.com',
          to: [order.email],
          subject: `🧾 Order Confirmation - $${formattedAmount}`,
          html: customerEmailHtml,
        });
        console.log(`Customer confirmation sent to: ${order.email}`);
      } catch (resendError) {
        console.error('Failed to send customer email:', resendError);
      }
    }
  } else {
    console.log(`Unhandled event type: ${event.type}`);
  }

  res.status(200).send('Event received');
}
