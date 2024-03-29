import { useEffect, useState } from 'react';
import { anticipate, motion } from 'framer-motion';
import { MenuOverlayProps } from '../../interfaces/MenuOverlayProps';
import { useNavigate } from 'react-router-dom';

const MenuOverlay = ({
  menuOverlayOpen,
  setMenuOverlayOpen,
}: MenuOverlayProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const focus = (index: number) => {
    setIsFocused(true);
    setHighlightedIndex(index);
  };

  const unFocus = () => {
    setIsFocused(false);
    setHighlightedIndex(null);
  };

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0);
    navigate(`/${path}`);
    setMenuOverlayOpen(!menuOverlayOpen);
  };

  // Add an effect to handle the body class when the modal opens and closes
  useEffect(() => {
    // Add the 'menu-overlay-open' class to the body when the modal is open
    document.body.classList.add('menu-overlay-open');

    // Remove the 'menu-overlay-open' class from the body when the modal is closed
    return () => {
      document.body.classList.remove('menu-overlay-open');
    };
  }, []);
  return (
    <nav className={`w-full min-h-screen fixed inset-0 z-40 block`}>
      <motion.div
        className="w-full min-h-screen bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: anticipate }}
      >
        <div className="w-full min-h-screen flex items-center justify-center p-2">
          <div>
            <ul className="font-custom font-semibold tracking-tight lg:text-massive1 text-2xl lg:leading-massive1 text-aquatic cursor-pointer">
              <li
                className={`${
                  isFocused && highlightedIndex !== 0 ? 'opacity-20' : null
                }`}
                onMouseEnter={() => focus(0)}
                onMouseLeave={unFocus}
                onClick={() => handleNavigate('gallery')}
              >
                GALLERY&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;
              </li>

              <li
                className={`${
                  isFocused && highlightedIndex !== 1 ? 'opacity-20' : null
                }`}
                onMouseEnter={() => focus(1)}
                onMouseLeave={unFocus}
                onClick={() => handleNavigate('personal-projects')}
              >
                PERSONAL PROJECTS
              </li>

              <li
                className={`${
                  isFocused && highlightedIndex !== 2 ? 'opacity-20' : null
                }`}
                onMouseEnter={() => focus(2)}
                onMouseLeave={unFocus}
                onClick={() => handleNavigate('client-projects')}
              >
                CLIENT PROJECTS&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;
              </li>

              <li
                className={`${
                  isFocused && highlightedIndex !== 3 ? 'opacity-20' : null
                }`}
                onMouseEnter={() => focus(3)}
                onMouseLeave={unFocus}
                onClick={() => handleNavigate('about')}
              >
                ABOUT&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default MenuOverlay;
