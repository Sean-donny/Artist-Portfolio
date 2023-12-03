import { useState } from 'react';

const MenuOverlay = () => {
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
    <div className="w-full min-h-screen bg-black">
      <div className="w-full min-h-screen flex items-center justify-center p-2">
        <div>
          <ul className="font-custom font-semibold tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 text-aquatic">
            <li
              className={`inline upright-text ${
                isFocused && highlightedIndex !== 0 ? 'text-black' : null
              }`}
              onMouseEnter={() => focus(0)}
              onMouseLeave={unFocus}
            >
              GALLERY
            </li>
            <li
              className={`inline upright-text ${
                isFocused && highlightedIndex !== 1 ? 'text-black' : null
              }`}
              onMouseEnter={() => focus(1)}
              onMouseLeave={unFocus}
            >
              PERSONA
              <br />
              LPROJEC
              <br />
              TS&#8226;&#8226;&#8226;&#8226;&#8226;
            </li>
            <li
              className={`inline upright-text ${
                isFocused && highlightedIndex !== 2 ? 'text-black' : null
              }`}
              onMouseEnter={() => focus(2)}
              onMouseLeave={unFocus}
            >
              CLIENTP
              <br />
              ROJECTS
            </li>
            <li
              className={`inline upright-text ${
                isFocused && highlightedIndex !== 3 ? 'text-black' : null
              }`}
              onMouseEnter={() => focus(3)}
              onMouseLeave={unFocus}
            >
              ABOUT&#8226;&#8226;
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
