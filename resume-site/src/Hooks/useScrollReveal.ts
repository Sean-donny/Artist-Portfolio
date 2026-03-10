import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface UseScrollRevealOptions {
  start?: string;
  end?: string;
  toggleActions?: string;
  markers?: boolean;
  delay?: number;
  duration?: number;
  y?: number;
  opacity?: number;
  ease?: string;
}

/**
 * GSAP-powered scroll reveal hook for fade-up animations on scroll.
 * Animates elements when they enter the viewport using ScrollTrigger.
 *
 * @param options - Configuration for ScrollTrigger and animation
 * @returns ref - Attach to the element you want to animate
 */
const useScrollReveal = <T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {},
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let initialized = false;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

    // Wait for pageReady event before enabling animations
    const handlePageReady = () => {
      if (initialized) return;
      initialized = true;

      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
        fallbackTimer = null;
      }

      const {
        start = 'top 80%',
        end = 'top 20%',
        toggleActions = 'play none none none',
        markers = false,
        delay = 0,
        duration = 0.8,
        y = 20,
        opacity = 0,
        ease = 'power2.out',
      } = options;

      // Set initial state
      gsap.set(element, {
        opacity: opacity,
        y: y,
      });

      // Create scroll-triggered animation
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          toggleActions,
          markers,
        },
      });
    };

    // Check if page is already ready
    if (window.__pageReady) {
      handlePageReady();
    } else {
      window.addEventListener('pageReady', handlePageReady, { once: true });

      // Fallback timeout in case event doesn't fire
      fallbackTimer = setTimeout(handlePageReady, 3000);

      return () => {
        window.removeEventListener('pageReady', handlePageReady);
        if (fallbackTimer) {
          clearTimeout(fallbackTimer);
        }
      };
    }

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options]);

  return ref;
};

export default useScrollReveal;
