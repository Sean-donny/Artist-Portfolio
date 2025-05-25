import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import { buffer } from 'micro'; // install `micro` manually

export const config = {
  api: {
    bodyParser: false, // Stripe needs raw body
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const sig = req.headers['stripe-signature']!;
  const buf = await buffer(req);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Webhook error:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    } else {
      console.error('Webhook error:', err);
      return res.status(400).send('Webhook Error: Unknown error');
    }
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_email;

    // TODO:
    // 1. Save order to a CSV or DB
    // 2. Email customer + yourself
    // 3. Maybe clear user cart

    console.log('✅ Order confirmed for:', customerEmail);
  }

  res.status(200).json({ received: true });
}
