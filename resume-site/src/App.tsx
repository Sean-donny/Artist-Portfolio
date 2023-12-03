import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuOverlay from './components/MenuOverlay';
import Content from './components/Content';

import { useState } from 'react';

function App() {
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);
  return (
    <div>
      <Navbar
        menuOverlayOpen={menuOverlayOpen}
        setMenuOverlayOpen={setMenuOverlayOpen}
      />
      <MenuOverlay
        menuOverlayOpen={menuOverlayOpen}
        setMenuOverlayOpen={setMenuOverlayOpen}
      />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
