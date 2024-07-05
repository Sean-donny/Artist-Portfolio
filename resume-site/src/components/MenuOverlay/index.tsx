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

  const hoverEffect =
    'opacity linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%) 0.35s';

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
                  isFocused && highlightedIndex !== 0
                    ? 'opacity-20'
                    : 'opacity-100'
                }`}
                onMouseEnter={() => focus(0)}
                onMouseLeave={unFocus}
                onClick={() => handleNavigate('gallery')}
                style={{
                  transition: hoverEffect,
                }}
              >
                GALLERY&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;
              </li>

              <li
                className={`${
                  isFocused && highlightedIndex !== 1
                    ? 'opacity-20'
                    : 'opacity-100'
                }`}
                onMouseEnter={() => focus(1)}
                onMouseLeave={unFocus}
                onClick={() => handleNavigate('personal-projects')}
                style={{
                  transition: hoverEffect,
                }}
              >
                PERSONAL PROJECTS
              </li>

              <li
                className={`${
                  isFocused && highlightedIndex !== 2
                    ? 'opacity-20'
                    : 'opacity-100'
                }`}
                onMouseEnter={() => focus(2)}
                onMouseLeave={unFocus}
                onClick={() => handleNavigate('client-projects')}
                style={{
                  transition: hoverEffect,
                }}
              >
                CLIENT PROJECTS&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;
              </li>

              <li
                className={`${
                  isFocused && highlightedIndex !== 3
                    ? 'opacity-20'
                    : 'opacity-100'
                }`}
                onMouseEnter={() => focus(3)}
                onMouseLeave={unFocus}
                onClick={() => handleNavigate('about')}
                style={{
                  transition: hoverEffect,
                }}
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
