import { useEffect, useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { gsap, SplitText } from '.././lib/gsap';

type RevealType = 'lines' | 'words' | 'chars';

interface UseTextRevealOptions {
  /**
   * 'lines'  → paragraph body copy, each line rises from the floor
   * 'words'  → headings / single lines, each word rises
   * 'chars'  → nav items / logos, each character rises
   */
  type?: RevealType;
  /** Seconds between each unit animating in. Default: 0.05 */
  stagger?: number;
  /** Animation duration per unit. Default: 0.8 */
  duration?: number;
  /** How far below the floor each unit starts (px). Default: '105%' */
  yOffset?: string | number;
  /** ScrollTrigger start position. Default: 'top 88%' */
  triggerStart?: string;
  /**
   * Set false to fire immediately on mount rather than on scroll.
   * Useful for above-the-fold hero text.
   * Default: true
   */
  scrollTrigger?: boolean;
  /** Delay before the whole animation starts (seconds). Default: 0 */
  delay?: number;
}

export function useTextReveal<T extends HTMLElement>(
  options: UseTextRevealOptions = {},
) {
  const ref = useRef<T>(null);

  const {
    type = 'words',
    stagger = 0.055,
    duration = 0.85,
    yOffset = '105%',
    triggerStart = 'top 88%',
    scrollTrigger: useScroll = true,
    delay = 0,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) return;

    let ctx: gsap.Context;

    // eslint-disable-next-line prefer-const
    ctx = gsap.context(() => {
      SplitText.create(el, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type: `lines,${type}` as any,
        mask: 'lines', // built-in overflow:hidden per line — the "floor"
        autoSplit: true, // re-splits on resize, handles reflow automatically
        onSplit(self) {
          // Determine which units to animate
          const units =
            type === 'lines'
              ? self.lines
              : type === 'chars'
                ? self.chars
                : self.words;

          const animProps: gsap.TweenVars = {
            y: yOffset,
            autoAlpha: 0,
            duration,
            stagger,
            delay,
            ease: 'power4.out',
          };

          if (useScroll) {
            animProps.scrollTrigger = {
              trigger: el,
              start: triggerStart,
              toggleActions: 'play none none none',
              // Uncomment below to replay when scrolling back up:
              // toggleActions: 'play none none reverse',
            };
          }

          return gsap.from(units, animProps);
        },
      });
    }, el);

    return () => {
      ctx.revert();
    };
  }, [type, stagger, duration, yOffset, triggerStart, useScroll, delay]);

  return ref;
}
