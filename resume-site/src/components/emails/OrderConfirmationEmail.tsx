import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Section,
  Heading,
  Hr,
  Row,
  Column,
} from '@react-email/components';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

import type Stripe from 'stripe';

type ShippingAddress = Stripe.Address | null | undefined;

interface OrderConfirmationEmailProps {
  name: string;
  email: string;
  sessionId: string;
  cart: CartItem[] | string;
  shipping: ShippingAddress;
  amountTotal: number;
  currency: string;
  paymentStatus: string;
  date: string;
  isCustomer?: boolean;
}

export default function OrderConfirmationEmail({
  name,
  email,
  sessionId,
  cart,
  shipping,
  amountTotal,
  currency,
  paymentStatus,
  date,
  isCustomer = false,
}: OrderConfirmationEmailProps) {
  const formatCartItems = (cartData: CartItem[] | string) => {
    if (typeof cartData === 'string') {
      try {
        const parsed = JSON.parse(cartData);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return Array.isArray(cartData) ? cartData : [];
  };

  const formatAddress = (address: ShippingAddress) => {
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
  };

  const cartItems = formatCartItems(cart);
  const formattedAddress = formatAddress(shipping);

  return (
    <Html>
      <Head />
      <Body
        style={{
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f6f6f6',
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
          }}
        >
          <Section style={{ padding: '40px 30px' }}>
            <Heading
              style={{
                color: '#333333',
                fontSize: '24px',
                fontWeight: 'bold',
                margin: '0 0 20px 0',
              }}
            >
              {isCustomer
                ? '🧾 Thank you for your order!'
                : '🛒 New Order Received'}
            </Heading>

            {isCustomer && (
              <Text
                style={{
                  color: '#666666',
                  fontSize: '16px',
                  lineHeight: '24px',
                }}
              >
                Hello {name}, thank you for your purchase! Here are your order
                details:
              </Text>
            )}

            <Section
              style={{
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
                margin: '20px 0',
              }}
            >
              <Row>
                <Column>
                  <Text style={{ margin: '8px 0', fontSize: '14px' }}>
                    <strong>Order ID:</strong> {sessionId}
                  </Text>
                  <Text style={{ margin: '8px 0', fontSize: '14px' }}>
                    <strong>Customer:</strong> {name}
                  </Text>
                  <Text style={{ margin: '8px 0', fontSize: '14px' }}>
                    <strong>Email:</strong> {email}
                  </Text>
                  <Text style={{ margin: '8px 0', fontSize: '14px' }}>
                    <strong>Payment Status:</strong>{' '}
                    <span
                      style={{
                        color: paymentStatus === 'paid' ? '#22c55e' : '#f59e0b',
                      }}
                    >
                      {paymentStatus}
                    </span>
                  </Text>
                  <Text style={{ margin: '8px 0', fontSize: '14px' }}>
                    <strong>Total Amount:</strong> ${amountTotal.toFixed(2)}{' '}
                    {currency.toUpperCase()}
                  </Text>
                  <Text style={{ margin: '8px 0', fontSize: '14px' }}>
                    <strong>Date:</strong> {new Date(date).toLocaleString()}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Hr style={{ margin: '30px 0', borderColor: '#e6e6e6' }} />

            <Heading
              style={{
                color: '#333333',
                fontSize: '18px',
                fontWeight: 'bold',
                margin: '0 0 15px 0',
              }}
            >
              Items Ordered
            </Heading>

            <Section
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
              }}
            >
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <Section
                    key={index}
                    style={{
                      marginBottom: '10px',
                      paddingBottom: '10px',
                      borderBottom:
                        index < cartItems.length - 1
                          ? '1px solid #eee'
                          : 'none',
                    }}
                  >
                    <Text style={{ margin: '4px 0', fontSize: '14px' }}>
                      <strong>{item.name || 'Unknown item'}</strong>
                    </Text>
                    <Text
                      style={{
                        margin: '4px 0',
                        fontSize: '12px',
                        color: '#666',
                      }}
                    >
                      Quantity: {item.quantity || 1} × $
                      {(item.price || 0).toFixed(2)}
                    </Text>
                  </Section>
                ))
              ) : (
                <Text style={{ fontSize: '14px', color: '#666' }}>
                  No items found
                </Text>
              )}
            </Section>

            <Hr style={{ margin: '30px 0', borderColor: '#e6e6e6' }} />

            <Heading
              style={{
                color: '#333333',
                fontSize: '18px',
                fontWeight: 'bold',
                margin: '0 0 15px 0',
              }}
            >
              Shipping Address
            </Heading>

            <Section
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
              }}
            >
              <Text style={{ fontSize: '14px', lineHeight: '20px', margin: 0 }}>
                {formattedAddress || 'No shipping address provided'}
              </Text>
            </Section>

            {isCustomer && (
              <Section
                style={{
                  marginTop: '30px',
                  padding: '20px',
                  backgroundColor: '#f0f9ff',
                  borderRadius: '8px',
                }}
              >
                <Text style={{ fontSize: '14px', color: '#1e40af', margin: 0 }}>
                  📦 We'll send you a tracking number once your items ship.
                  Thank you for your business!
                </Text>
              </Section>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// components/emails/AdminOrderEmail.tsx
export function AdminOrderEmail(props: OrderConfirmationEmailProps) {
  return <OrderConfirmationEmail {...props} isCustomer={false} />;
}

// components/emails/CustomerOrderEmail.tsx
export function CustomerOrderEmail(props: OrderConfirmationEmailProps) {
  return <OrderConfirmationEmail {...props} isCustomer={true} />;
}
