import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="w-full fixed px-5 py-2 z-10">
      <ul className="flex justify-between">
        <li>
          <motion.h1
            className="font-custom font-semibold text-aquatic tracking-tight cursor-crosshair text-lg"
            whileHover={{ scale: 1.2618 }}
            whileTap={{ scale: 0.9 }}
          >
            Sean Donny
          </motion.h1>
        </li>
        <li>
          <motion.button
            className="font-custom font-semibold text-aquatic tracking-tight cursor-crosshair text-lg"
            whileHover={{ scale: 1.2618 }}
            whileTap={{ scale: 0.9 }}
          >
            Menu
          </motion.button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
