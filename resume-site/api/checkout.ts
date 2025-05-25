import Stripe from 'stripe';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { CartItem } from '../src/interfaces/CartItem';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    console.log('Request body:', req.body);

    const { cart } = req.body;

    if (!cart || !Array.isArray(cart)) {
      console.log('Invalid cart data:', cart);
      return res.status(400).json({ error: 'Invalid cart data' });
    }

    const line_items = cart.map((item: CartItem) => ({
      price: item.stripePriceId,
      quantity: item.quantity,
    }));

    console.log('Line items:', line_items);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: 'https://seandonny.com/store',
      cancel_url: 'https://seandonny.com/store',
      metadata: {
        cart: JSON.stringify(cart),
      },
    });

    console.log('Session created:', session.id);
    res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
