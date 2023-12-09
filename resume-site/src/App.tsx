import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuOverlay from './components/MenuOverlay';
import Content from './components/Content';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);
  return (
    <div>
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
      <Content />
      <Footer />
    </div>
  );
}

export default App;
