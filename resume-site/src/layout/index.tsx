import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MenuOverlay from '../components/MenuOverlay';

const AppLayout = () => {
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);
  return (
    <>
      <Navbar
        menuOverlayOpen={menuOverlayOpen}
        setMenuOverlayOpen={setMenuOverlayOpen}
      />
      <AnimatePresence initial={false} mode="wait">
        {menuOverlayOpen && (
          <MenuOverlay
            menuOverlayOpen={menuOverlayOpen}
            setMenuOverlayOpen={setMenuOverlayOpen}
          />
        )}
      </AnimatePresence>
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
