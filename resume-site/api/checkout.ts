import Stripe from 'stripe';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { CartItem } from '../src/interfaces/CartItem';
import admin from 'firebase-admin';

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // console.log('Request body:', req.body);

    const { cart } = req.body;

    if (!cart || !Array.isArray(cart)) {
      // console.log('Invalid cart data:', cart);
      return res.status(400).json({ error: 'Invalid cart data' });
    }

    const line_items = cart.map((item: CartItem) => ({
      price: item.stripePriceId,
      quantity: item.quantity,
    }));

    const SHIPPING_RATES = {
      UK_A4: 'shr_1RTPcEHH4untY4LMjGm4lKrP',
      UK_LARGE: 'shr_1RTPbPHH4untY4LMvnZEXvkt',
      INTL_A4: 'shr_1RTPetHH4untY4LMOymhDFRe',
      INTL_LARGE: 'shr_1RTPfjHH4untY4LMXrUydrqy',
    };

    // Utility: check if every item is A4
    const isA4Only = cart.every((item: CartItem) => item.size === 'A4');
    const shipping_options = isA4Only
      ? [
          { shipping_rate: SHIPPING_RATES.UK_A4 },
          { shipping_rate: SHIPPING_RATES.INTL_A4 },
        ]
      : [
          { shipping_rate: SHIPPING_RATES.UK_LARGE },
          { shipping_rate: SHIPPING_RATES.INTL_LARGE },
        ];

    const all_countries: Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[] =
      [
        'AC',
        'AD',
        'AE',
        'AF',
        'AG',
        'AI',
        'AL',
        'AM',
        'AO',
        'AQ',
        'AR',
        'AT',
        'AU',
        'AW',
        'AX',
        'AZ',
        'BA',
        'BB',
        'BD',
        'BE',
        'BF',
        'BG',
        'BH',
        'BI',
        'BJ',
        'BL',
        'BM',
        'BN',
        'BO',
        'BQ',
        'BR',
        'BS',
        'BT',
        'BV',
        'BW',
        'BY',
        'BZ',
        'CA',
        'CD',
        'CF',
        'CG',
        'CH',
        'CI',
        'CK',
        'CL',
        'CM',
        'CN',
        'CO',
        'CR',
        'CV',
        'CW',
        'CY',
        'CZ',
        'DE',
        'DJ',
        'DK',
        'DM',
        'DO',
        'DZ',
        'EC',
        'EE',
        'EG',
        'EH',
        'ER',
        'ES',
        'ET',
        'FI',
        'FJ',
        'FK',
        'FO',
        'FR',
        'GA',
        'GB',
        'GD',
        'GE',
        'GF',
        'GG',
        'GH',
        'GI',
        'GL',
        'GM',
        'GN',
        'GP',
        'GQ',
        'GR',
        'GS',
        'GT',
        'GU',
        'GW',
        'GY',
        'HK',
        'HN',
        'HR',
        'HT',
        'HU',
        'ID',
        'IE',
        'IL',
        'IM',
        'IN',
        'IO',
        'IQ',
        'IS',
        'IT',
        'JE',
        'JM',
        'JO',
        'JP',
        'KE',
        'KG',
        'KH',
        'KI',
        'KM',
        'KN',
        'KR',
        'KW',
        'KY',
        'KZ',
        'LA',
        'LB',
        'LC',
        'LI',
        'LK',
        'LR',
        'LS',
        'LT',
        'LU',
        'LV',
        'LY',
        'MA',
        'MC',
        'MD',
        'ME',
        'MF',
        'MG',
        'MK',
        'ML',
        'MM',
        'MN',
        'MO',
        'MQ',
        'MR',
        'MS',
        'MT',
        'MU',
        'MV',
        'MW',
        'MX',
        'MY',
        'MZ',
        'NA',
        'NC',
        'NE',
        'NG',
        'NI',
        'NL',
        'NO',
        'NP',
        'NR',
        'NU',
        'NZ',
        'OM',
        'PA',
        'PE',
        'PF',
        'PG',
        'PH',
        'PK',
        'PL',
        'PM',
        'PN',
        'PR',
        'PS',
        'PT',
        'PY',
        'QA',
        'RE',
        'RO',
        'RS',
        'RU',
        'RW',
        'SA',
        'SB',
        'SC',
        'SD',
        'SE',
        'SG',
        'SH',
        'SI',
        'SJ',
        'SK',
        'SL',
        'SM',
        'SN',
        'SO',
        'SR',
        'SS',
        'ST',
        'SV',
        'SX',
        'SZ',
        'TC',
        'TD',
        'TF',
        'TG',
        'TH',
        'TJ',
        'TK',
        'TL',
        'TM',
        'TN',
        'TO',
        'TR',
        'TT',
        'TV',
        'TW',
        'TZ',
        'UA',
        'UG',
        'US',
        'UY',
        'UZ',
        'VA',
        'VC',
        'VE',
        'VG',
        'VN',
        'VU',
        'WF',
        'WS',
        'YE',
        'YT',
        'ZA',
        'ZM',
        'ZW',
      ];

    // console.log('Line items:', line_items);

    // Save the cart to Firestore
    const db = initializeFirebase();
    const cartRef = await db
      .collection('carts')
      .add({ cart, createdAt: new Date() });
    const cartId = cartRef.id;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      billing_address_collection: 'required',
      shipping_address_collection: { allowed_countries: all_countries },
      shipping_options: shipping_options,
      mode: 'payment',
      customer_creation: 'always',
      allow_promotion_codes: true,
      success_url: 'https://seandonny.com/store?status=success',
      cancel_url: 'https://seandonny.com/store?cart=open&status=cancel',
      metadata: {
        cartId,
      },
    });

    // console.log('Session created:', session.id);
    res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
