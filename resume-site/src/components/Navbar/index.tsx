import { motion } from 'framer-motion';
import { MenuOverlayProps } from '../../interfaces/MenuOverlayProps';

const Navbar = ({ menuOverlayOpen, setMenuOverlayOpen }: MenuOverlayProps) => {
  const menuButtonText = { option1: 'Menu', option2: 'Close' };
  return (
    <nav className="w-full fixed px-5 py-2 z-50">
      <ul className="flex justify-between">
        <li>
          <a href="/">
            <motion.h1
              className="font-custom font-semibold text-aquatic tracking-tight text-lg"
              whileHover={{ scale: 1.2618 }}
              whileTap={{ scale: 0.9 }}
            >
              Sean Donny
            </motion.h1>
          </a>
        </li>
        <li>
          <div onClick={() => setMenuOverlayOpen(!menuOverlayOpen)}>
            <motion.button
              className="font-custom font-semibold text-aquatic tracking-tight text-lg"
              whileHover={{ scale: 1.2618 }}
              whileTap={{ scale: 0.9 }}
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
