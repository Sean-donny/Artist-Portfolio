import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const { cart, customerEmail } = req.body;

    const line_items = cart.map(item => ({
      price: item.stripePriceId,
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      customer_email: customerEmail,
      success_url: `${process.env.PUBLIC_BASE_URL}/store`, // later implement success page
      cancel_url: `${process.env.PUBLIC_BASE_URL}/store`, // implement URL Params to be able to detect and set state of cart visibility
      metadata: {
        cart: JSON.stringify(cart),
      },
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
