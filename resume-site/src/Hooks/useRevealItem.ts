import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 1. Define the possible animation types
export type RevealVariant =
  | 'slideUp'
  | 'fade'
  | 'scaleUp'
  | 'warp'
  | 'slideLeft';

interface RevealOptions {
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  triggerRef?: React.RefObject<HTMLElement>;
  scrub?: boolean | number; // For parallax-style reveals
}

export const useReveal = <T extends HTMLElement>({
  variant = 'slideUp',
  delay = 0,
  duration = 1.4,
  triggerRef,
  scrub = false,
}: RevealOptions = {}) => {
  const itemRef = useRef<T>(null);

  useLayoutEffect(() => {
    const element = itemRef.current;
    if (!element) return;

    const triggerElement = triggerRef?.current || element;

    const ctx = gsap.context(() => {
      // 2. Define Presets
      const variants: Record<
        RevealVariant,
        { from: gsap.TweenVars; to: gsap.TweenVars }
      > = {
        slideUp: {
          from: {
            yPercent: 110, // Uses % of the element's own height
            skewY: 5,
            opacity: 0,
          },
          to: {
            yPercent: 0,
            skewY: 0,
            opacity: 1,
          },
        },
        fade: {
          from: { opacity: 0, y: 20 },
          to: {
            y: '0%',
            opacity: 1,
            autoAlpha: 1, // autoAlpha toggles visibility: visible automatically
          },
        },
        scaleUp: {
          from: { scale: 0.8, opacity: 0, filter: 'blur(10px)' },
          to: { scale: 1, opacity: 1, filter: 'blur(0px)' },
        },
        warp: {
          from: { scaleX: 1.5, scaleY: 0.5, opacity: 0, skewX: 20 },
          to: { scaleX: 1, scaleY: 1, opacity: 1, skewX: 0 },
        },
        slideLeft: {
          from: { x: '50%', opacity: 0 },
          to: { x: '0%', opacity: 1 },
        },
      };

      const { from, to } = variants[variant];

      gsap.fromTo(element, from, {
        ...to,
        duration: duration,
        delay: delay,
        ease: 'expo.out', // The premium ease
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top 92%',
          toggleActions: 'play none none none',
          once: !scrub,
          scrub: scrub,
          invalidateOnRefresh: true,
        },
      });
    }, element);

    return () => ctx.revert();
  }, [variant, delay, duration, triggerRef, scrub]);

  return itemRef;
};
