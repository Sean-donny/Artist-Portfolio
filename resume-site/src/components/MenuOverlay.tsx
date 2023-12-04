import { useState } from 'react';
import { MenuOverlayProps } from './MenuOverlayProps';

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

  return (
    <nav
      className={`w-full min-h-screen fixed inset-0 z-40 ${
        menuOverlayOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="w-full min-h-screen bg-black">
        <div className="w-full min-h-screen flex items-center justify-center p-2">
          <div>
            <ul className="font-custom font-semibold tracking-tight lg:text-massive1 text-2xl lg:leading-massive1 text-aquatic">
              <a
                href="https://www.dominos.co.uk"
                onClick={() => setMenuOverlayOpen(!menuOverlayOpen)}
              >
                <li
                  className={`${
                    isFocused && highlightedIndex !== 0 ? 'opacity-20' : null
                  }`}
                  onMouseEnter={() => focus(0)}
                  onMouseLeave={unFocus}
                >
                  GALLERY&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;
                </li>
              </a>
              <a
                href="https://www.dominos.co.uk"
                onClick={() => setMenuOverlayOpen(!menuOverlayOpen)}
              >
                <li
                  className={`${
                    isFocused && highlightedIndex !== 1 ? 'opacity-20' : null
                  }`}
                  onMouseEnter={() => focus(1)}
                  onMouseLeave={unFocus}
                >
                  PERSONAL PROJECTS
                </li>
              </a>
              <a
                href="https://www.dominos.co.uk"
                onClick={() => setMenuOverlayOpen(!menuOverlayOpen)}
              >
                <li
                  className={`${
                    isFocused && highlightedIndex !== 2 ? 'opacity-20' : null
                  }`}
                  onMouseEnter={() => focus(2)}
                  onMouseLeave={unFocus}
                >
                  CLIENT
                  PROJECTS&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;
                </li>
              </a>
              <a
                href="https://www.dominos.co.uk"
                onClick={() => setMenuOverlayOpen(!menuOverlayOpen)}
              >
                <li
                  className={`${
                    isFocused && highlightedIndex !== 3 ? 'opacity-20' : null
                  }`}
                  onMouseEnter={() => focus(3)}
                  onMouseLeave={unFocus}
                >
                  ABOUT&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuOverlay;
