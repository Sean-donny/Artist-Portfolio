import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  api: { bodyParser: false }, // Required for Stripe to send raw body
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  console.log('✅ Webhook received!');

  // Echo back some headers just for visibility
  console.log('Headers:', req.headers);

  // Send Stripe the expected response
  res.status(200).send('Webhook test successful');
}
