import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full fixed px-5 py-2">
      <motion.p
        className="font-custom font-semibold text-aquatic tracking-tight cursor-crosshair"
        whileHover={{ scale: 1.2618 }}
        whileTap={{ scale: 0.9 }}
      >
        Sean Donny
      </motion.p>
      <motion.button
        className="font-custom font-semibold text-aquatic tracking-tight cursor-crosshair"
        whileHover={{ scale: 1.2618 }}
        whileTap={{ scale: 0.9 }}
      >
        Menu
      </motion.button>
    </nav>
  );
};

export default Navbar;
