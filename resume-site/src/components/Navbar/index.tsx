import { motion } from 'framer-motion';
import { MenuOverlayProps } from '../../interfaces/MenuOverlayProps';
import { useLocation } from 'react-router-dom';
import CartIcon from '../CartIcon';

const Navbar = ({ menuOverlayOpen, setMenuOverlayOpen }: MenuOverlayProps) => {
  const menuButtonText = { option1: 'Menu', option2: 'Close' };
  const location = useLocation();

  const isShopping = location.pathname.startsWith('/store');
  return (
    <nav className="w-full fixed px-5 py-2 z-50">
      <ul className="flex justify-between">
        <li>
          <a href="/">
            <motion.p
              className="font-custom font-semibold text-aquatic tracking-tight text-lg"
              whileHover={{ scale: 1.2618 }}
              whileTap={{ scale: 0.9 }}
            >
              Sean Donny
            </motion.p>
          </a>
        </li>
        <li className="flex items-center gap-4">
          {isShopping && <CartIcon />}
          <div onClick={() => setMenuOverlayOpen(!menuOverlayOpen)}>
            <motion.button
              className="font-custom font-semibold text-aquatic tracking-tight text-lg"
              whileHover={{ scale: 1.2618 }}
              whileTap={{ scale: 0.9 }}
              aria-label={menuOverlayOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOverlayOpen
                ? menuButtonText['option2']
                : menuButtonText['option1']}
            </motion.button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
