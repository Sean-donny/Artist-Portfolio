import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MenuOverlay from '../components/MenuOverlay';
import { CartProvider } from '../context/CartContext';
import CartPanel from '../components/CartPanel';

const AppLayout = () => {
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);
  const location = useLocation();
  // const navigate = useNavigate();

  const [cartOpen, setCartOpen] = useState(false);

  // Open cart if URL contains `?cart=open`
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('cart') === 'open') {
      setCartOpen(true);
    }
  }, [location]);

  // Optional: clean up the URL when cart is closed
  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   if (!cartOpen && params.get('cart') === 'open') {
  //     params.delete('cart');
  //     navigate(`${location.pathname}`, { replace: true });
  //   }
  // }, [cartOpen, location, navigate]);

  return (
    <>
      <CartProvider>
        <Navbar
          menuOverlayOpen={menuOverlayOpen}
          setMenuOverlayOpen={setMenuOverlayOpen}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
        <AnimatePresence initial={false} mode="wait">
          <CartPanel isOpen={cartOpen} onClose={() => setCartOpen(false)} />

          {menuOverlayOpen && (
            <MenuOverlay
              menuOverlayOpen={menuOverlayOpen}
              setMenuOverlayOpen={setMenuOverlayOpen}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
            />
          )}
        </AnimatePresence>
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
};

export default AppLayout;
