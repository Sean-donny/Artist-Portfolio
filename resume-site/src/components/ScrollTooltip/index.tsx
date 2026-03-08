import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTooltip = () => {
  const location = useLocation();
  const [tooltipVisible, setTooltipVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Ensure tooltip is visible each time a route is entered.
    setTooltipVisible(true);

    const handleScroll = () => {
      const hasntScrolled = window.scrollY < 30;
      if (!hasntScrolled) {
        setTooltipVisible(false);
      } else setTooltipVisible(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);
  return (
    <div
      className="scroll-tooltip fixed bottom-[5%] left-1/2 transform -translate-x-1/2 z-30 text-slate-100 text-sm lg:text-lg flex flex-col items-center pointer-events-none w-60 tooltip-suggestion font-custom font-semibold"
      id="article-navigation-tooltip"
      style={{ display: tooltipVisible ? 'flex' : 'none' }}
    >
      <span
        style={{
          color: 'white',
          textShadow: '0px 2px 10px rgba(0,0,0,0.95)',
        }}
      >
        Scroll to read
      </span>
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 5v14M12 19l-4-4m4 4l4-4" />
      </svg>
    </div>
  );
};

export default ScrollTooltip;
