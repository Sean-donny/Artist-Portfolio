import { useCart } from '../../context/useCart';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const CartIcon = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenCart = () => {
    const params = new URLSearchParams(location.search);
    params.set('cart', 'open');
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [highlight, setHighlight] = useState(false);

  // Trigger pulse animation on cart change
  useEffect(() => {
    if (cart.length > 0) {
      setHighlight(true);
      const timeout = setTimeout(() => setHighlight(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [cart]);

  if (cart.length === 0) return null;

  return (
    <motion.button
      onClick={handleOpenCart}
      className="relative p-2"
      animate={highlight ? { scale: 1.5 } : { scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      <img
        src="/optimised/sean_donny_skull_logo.png"
        alt="Cart"
        className="w-6 h-6"
      />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </motion.button>
  );
};

export default CartIcon;
