import { useEffect, useRef, useState } from 'react';
import { Poster } from '../../interfaces/Poster';
import richPosterData from './data';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Store = () => {
  const navigate = useNavigate();
  // Add tooltipVisible state, defaulting to true (or false as needed)
  const [tooltipVisible, setTooltipVisible] = useState(true);

  // Responsive scroll increment and snap delay
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const scrollIncrement = isMobile ? 120 : 140;
  const snapDelay = isMobile ? 80 : 120;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.innerWidth >= 640) return;

    let touchStartY = 0;
    let touchMoved = false;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchMoved = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
      if (deltaY > 10 && !touchMoved) {
        setTooltipVisible(false);
        touchMoved = true;
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0);
    navigate(`/store/${path}`);
  };
  const numberOfItems = Object.keys(richPosterData).length;
  const posters: Poster[] = Object.values(richPosterData);

  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollListenerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const anglePerPoster = 360 / numberOfItems;
  const scrollHeight = scrollIncrement * numberOfItems;

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollLimit = scrollHeight - viewportHeight;

      const rawRotation =
        (scrollTop / scrollLimit) * numberOfItems * anglePerPoster;

      if (rawRotation > 350) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        return;
      }

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const snappedIndex = Math.round(rawRotation / anglePerPoster);
        const snappedRotation = snappedIndex * anglePerPoster;

        currentIndexRef.current = snappedIndex;
        setCurrentIndex(Math.min(snappedIndex, numberOfItems - 1)); // trigger UI update

        if (sliderRef.current) {
          sliderRef.current.style.transition = 'transform 0.5s ease';
          sliderRef.current.style.transform = `perspective(2000px) rotateY(${-snappedRotation}deg)`;

          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = '';
            }
          }, 500);
        }
      }, snapDelay);
    };

    const handleResize = () => {
      // Optional: trigger a reflow or re-snap based on new viewport
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(scrollTimeout);
    };
  }, [numberOfItems, anglePerPoster, scrollHeight, snapDelay]);

  const sliderStyle = { '--quantity': numberOfItems } as React.CSSProperties;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>, path: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent spacebar from scrolling
      handleNavigate(path);
    }
  };

  return (
    <div className="store-gallery-container w-full h-full overflow-hidden relative store-page bg-zima">
      {/* Scroll-driving invisible div */}
      <div
        className="store-gallery-scroll-wrapper w-full relative"
        style={{ height: `${scrollHeight}px` }}
        ref={scrollListenerRef}
      ></div>

      {/* Dots Navigation */}
      <nav className="store-gallery-quick-navigation-indicator fixed right-3 lg:right-8 top-1/2 transform -translate-y-1/2 z-10">
        {posters.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full my-2 cursor-pointer ${
              i === currentIndex ? 'bg-orangutan' : 'bg-slate-300'
            }`}
            onClick={() => {
              const scrollTarget =
                (scrollHeight - window.innerHeight) * (i / numberOfItems);
              window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
            }}
          ></div>
        ))}
      </nav>

      {/* Poster Title */}
      <div className="store-gallery-title font-loud text-slate-100 z-50 fixed top-16 left-0 right-0 text-center text-massive2">
        <h1>{posters[Math.min(currentIndex, numberOfItems - 1)].title}</h1>
      </div>

      {/* Carousel */}
      <section className="store-gallery-banner-container w-full h-screen fixed top-0 left-0">
        <div className="store-gallery-banner">
          <div
            className="store-gallery-slider"
            style={sliderStyle}
            ref={sliderRef}
            aria-hidden={true}
          >
            {posters.map((poster, i) => (
              <figure
                className="store-gallery-item"
                key={i}
                style={{ '--i': i } as React.CSSProperties}
                onFocus={() => {
                  const scrollTarget =
                    (scrollHeight - window.innerHeight) * (i / numberOfItems);
                  window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
                }}
                onKeyDown={e => handleKeyDown(e, poster.slug)}
              >
                <motion.img
                  className="store-gallery-image cursor-pointer"
                  tabIndex={0}
                  role="button"
                  aria-label={`View poster ${poster.title}`}
                  src={poster.src}
                  alt={poster.title}
                  width={poster.width / 4}
                  height={poster.height / 4}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    handleNavigate(poster.slug);
                  }}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Info */}
      <div className="store-gallery-poster-number-container fixed bottom-8 md:bottom-16 lg:bottom-24 left-0 right-0 text-center">
        <p className="store-gallery-poster-number font-custom font-semibold inline-block text-slate-200">
          {currentIndex + 1}
        </p>
      </div>

      {window.innerWidth < 640 && (
        <div
          className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 text-slate-300 text-sm flex flex-col items-center pointer-events-none"
          id="store-navigation-tooltip"
          style={{ display: tooltipVisible ? 'flex' : 'none' }}
        >
          <span>Swipe up/down</span>
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
      )}
    </div>
  );
};

export default Store;
