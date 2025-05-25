import { motion } from 'framer-motion';
import { useCart } from '../../context/useCart';
import { CartItem } from '../../interfaces/CartItem';
import { useLocation, useNavigate } from 'react-router-dom';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const MAX_QUANTITY = 1000;

const CartPanel = ({ isOpen, onClose }: CartPanelProps) => {
  const { cart, updateCart, removeItem } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseCart = () => {
    const params = new URLSearchParams(location.search);
    params.delete('cart');
    navigate(`${location.pathname}`, { replace: true });
  };

  if (!isOpen) return null;

  const increment = (item: CartItem) => {
    updateCart(prev =>
      prev.map(ci => {
        if (ci.title === item.title && ci.size === item.size) {
          return {
            ...ci,
            quantity: Math.min(ci.quantity + 1, MAX_QUANTITY),
          };
        }
        return ci;
      }),
    );
  };

  const decrement = (item: CartItem) => {
    updateCart(prev => {
      const updated = prev
        .map(ci => {
          if (ci.title === item.title && ci.size === item.size) {
            const newQty = ci.quantity - 1;
            if (newQty < 1) return null; // mark for removal
            return { ...ci, quantity: newQty };
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]; // remove nulls
      return updated;
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartItems: cart }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Checkout failed');
    }
  };

  return (
    <motion.aside
      className="fixed top-0 right-0 w-80 h-full bg-black text-slate-100 shadow-lg z-[3000] p-4 overflow-y-auto flex flex-col font-custom"
      initial={{ scaleY: 0.05 }}
      animate={{ scaleY: 1 }}
      transition={{
        type: 'spring',
        bounce: 0.1,
        duration: 0.2,
      }}
      exit={{ scaleY: 0 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button
          onClick={() => {
            onClose();
            handleCloseCart();
          }}
          className="text-red-600 text-xl font-bold"
          aria-label="Close cart"
        >
          ✕
        </button>
      </div>

      <div className="cart-scroll-container flex-grow">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4 flex-grow overflow-y-auto pr-1">
              {cart.map((item, index) => (
                <li
                  key={`${item.title}-${item.size}`}
                  id={`${index}`}
                  className="flex items-center border-b border-gray-800 pb-3"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-cover mr-3 rounded"
                    loading="lazy"
                  />
                  <div className="flex flex-col flex-grow">
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm font-medium text-gray-400">
                      Size: {item.size}
                    </p>
                    <p className="text-sm font-medium text-gray-400">
                      £{item.price.toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeItem(item.title, item.size)}
                    aria-label={`Remove ${item.title} from cart`}
                    className=" text-white px-2 py-1 rounded text-sm hover:bg-red-600  transition"
                  >
                    ✕
                  </button>
                  <div className="flex items-center space-x-2 ml-3">
                    <button
                      onClick={() => decrement(item)}
                      disabled={item.quantity >= MAX_QUANTITY}
                      aria-label={`Increase quantity of ${item.title}`}
                      className=" text-white px-2 py-1 rounded text-sm hover:bg-white hover:text-black transition disabled:opacity-50"
                    >
                      -
                    </button>
                    <span className="text-white text-sm min-w-[1.5rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increment(item)}
                      aria-label={`Decrease quantity of ${item.title}`}
                      className=" text-white px-2 py-1 rounded text-sm hover:bg-white hover:text-black transition disabled:opacity-50"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4">
              <p className="text-lg font-semibold text-white">
                Total: £{total.toFixed(2)}
              </p>
              <button
                className="w-full mt-3 bg-white text-black py-2 rounded hover:bg-gray-200 transition"
                onClick={handleCheckout}
                aria-label="Checkout"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </motion.aside>
  );
};

export default CartPanel;
