import { useEffect, useRef, useState, useCallback, useContext } from 'react';
import { Poster } from '../../interfaces/Poster';
import richPosterData from './data';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import toast from 'react-hot-toast';

const Store = () => {
  const navigate = useNavigate();
  const [tooltipVisible, setTooltipVisible] = useState(true);

  // Responsive scroll increment and snap delay
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const scrollIncrement = isMobile ? 160 : 140;
  const snapDelay = isMobile ? 100 : 120;

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

  // Add refs for discrete scrolling
  const lastScrollTime = useRef(0);
  const scrollAccumulator = useRef(0);
  const isScrollingRef = useRef(false);
  const isDirectNavigatingRef = useRef(false); // NEW: Flag to prevent scroll interference

  const anglePerPoster = 360 / numberOfItems;
  const scrollHeight = scrollIncrement * numberOfItems;

  // Function to update carousel position
  const updateCarouselPosition = useCallback(
    (index: number) => {
      const rotation = index * anglePerPoster;

      if (sliderRef.current) {
        sliderRef.current.style.transition = 'transform 0.5s ease';
        sliderRef.current.style.transform = `perspective(2000px) rotateY(${-rotation}deg)`;

        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.style.transition = '';
          }
        }, 500);
      }
    },
    [anglePerPoster],
  );

  // Function to go to specific index with infinite scroll support
  const goToIndex = useCallback(
    (newIndex: number) => {
      let targetIndex = newIndex;

      // Handle infinite scroll wraparound
      if (newIndex >= numberOfItems) {
        // Going forward past the last item - wrap to first
        targetIndex = 0;
      } else if (newIndex < 0) {
        // Going backward past the first item - wrap to last
        targetIndex = numberOfItems - 1;
      }

      if (targetIndex !== currentIndexRef.current) {
        // Set flag to prevent scroll interference
        isDirectNavigatingRef.current = true;

        currentIndexRef.current = targetIndex;
        setCurrentIndex(targetIndex);
        updateCarouselPosition(targetIndex);

        // Only update scroll position on desktop
        if (!isMobile) {
          const targetScroll =
            (scrollHeight - window.innerHeight) *
            (targetIndex / (numberOfItems - 1));
          window.scrollTo({ top: targetScroll, behavior: 'smooth' });

          // Clear the flag after scroll completes
          setTimeout(() => {
            isDirectNavigatingRef.current = false;
          }, 600); // Slightly longer than smooth scroll duration
        } else {
          isDirectNavigatingRef.current = false;
        }
      }
    },
    [numberOfItems, scrollHeight, updateCarouselPosition, isMobile],
  );

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // On mobile, completely ignore scroll events for carousel control
      if (isMobile) return;

      // IMPORTANT: Ignore scroll events during direct navigation
      if (isDirectNavigatingRef.current) return;

      const now = Date.now();

      // Throttle scroll events
      if (now - lastScrollTime.current < 50) return;
      lastScrollTime.current = now;

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
        // Double-check we're not in direct navigation mode
        if (isDirectNavigatingRef.current) return;

        const snappedIndex = Math.round(rawRotation / anglePerPoster);

        currentIndexRef.current = snappedIndex;
        setCurrentIndex(Math.min(snappedIndex, numberOfItems - 1));
        updateCarouselPosition(snappedIndex);
      }, snapDelay);
    };

    const handleResize = () => {
      if (!isMobile) {
        handleScroll();
      }
    };

    // Touch handling for discrete navigation (mobile only)
    let touchStartY = 0;
    let touchCurrentY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (!isMobile) return;
      touchStartY = e.touches[0].clientY;
      touchCurrentY = touchStartY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMobile || isScrollingRef.current) {
        return;
      }

      // Prevent default scroll behavior on mobile
      e.preventDefault();

      touchCurrentY = e.touches[0].clientY;
      const deltaY = touchStartY - touchCurrentY;

      // Accumulate touch movement
      scrollAccumulator.current = deltaY;
    };

    const handleTouchEnd = () => {
      if (!isMobile || isScrollingRef.current) return;

      const deltaY = touchStartY - touchCurrentY;
      const threshold = 50;

      if (Math.abs(deltaY) >= threshold) {
        isScrollingRef.current = true;

        const direction = deltaY > 0 ? 1 : -1;
        const newIndex = currentIndexRef.current + direction;

        goToIndex(newIndex);

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 600);
      }

      // Reset accumulator
      scrollAccumulator.current = 0;
    };

    // Prevent scroll on mobile to avoid conflicts
    const handleWheel = (e: WheelEvent) => {
      if (isMobile) {
        e.preventDefault();
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    if (isMobile) {
      window.addEventListener('touchstart', handleTouchStart, {
        passive: true,
      });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd, { passive: true });
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (isMobile) {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('wheel', handleWheel);
      }

      clearTimeout(scrollTimeout);
    };
  }, [
    numberOfItems,
    anglePerPoster,
    scrollHeight,
    snapDelay,
    isMobile,
    updateCarouselPosition,
    goToIndex,
  ]);

  const sliderStyle = { '--quantity': numberOfItems } as React.CSSProperties;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>, path: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigate(path);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        goToIndex(currentIndexRef.current - 1);
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        goToIndex(currentIndexRef.current + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToIndex]);

  // Post Checkout flow
  const { clearCart } = useContext(CartContext)!;

  useEffect(() => {
    const handleOpenCart = () => {
      const params = new URLSearchParams(location.search);
      params.set('cart', 'open');
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    };
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');

    if (status === 'success') {
      // ✅ Clear the cart
      clearCart();

      // ✅ Show confirmation toast/message
      toast.custom(t => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="/optimised/sean_donny_skull_logo.png"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">Thank you!</p>
                <p className="mt-1 text-sm text-gray-500">
                  Your order is now being processed!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-zima hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    }

    if (status === 'cancel') {
      // Optional: open cart panel again
      handleOpenCart;

      toast.error('Checkout was cancelled.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            onClick={() => goToIndex(i)}
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
                onFocus={() => goToIndex(i)}
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

      {/* Navigation buttons for mobile */}
      {isMobile && (
        <>
          <button
            className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-slate-800 bg-opacity-50 text-white p-3 rounded-full"
            onClick={() => goToIndex(currentIndex - 1)}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-slate-800 bg-opacity-50 text-white p-3 rounded-full"
            onClick={() => goToIndex(currentIndex + 1)}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {isMobile && (
        <div
          className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 text-slate-300 text-sm flex flex-col items-center pointer-events-none w-60 tooltip-suggestion"
          id="store-navigation-tooltip"
          style={{ display: tooltipVisible ? 'flex' : 'none' }}
        >
          <span>Swipe up/down or use buttons</span>
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
