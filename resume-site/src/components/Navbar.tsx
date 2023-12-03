import { motion } from 'framer-motion';
import { MenuOverlayProps } from '../components/MenuOverlayProps';

const Navbar = ({ menuOverlayOpen, setMenuOverlayOpen }: MenuOverlayProps) => {
  return (
    <nav className="w-full fixed px-5 py-2 z-50">
      <ul className="flex justify-between">
        <li>
          <a href="https://www.dominos.co.uk">
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
              Menu
            </motion.button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
