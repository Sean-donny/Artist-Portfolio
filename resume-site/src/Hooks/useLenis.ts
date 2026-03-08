import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) {
      if (typeof window !== 'undefined') {
        window.__lenis = undefined;
      }
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Make Lenis accessible for route-level scroll resets.
    if (typeof window !== 'undefined') {
      window.__lenis = lenis;
    }

    const onLenisScroll = (event: { scroll: number }) => {
      ScrollTrigger.update();

      // Notify components that depend on scroll visibility logic (e.g. tooltip).
      window.dispatchEvent(
        new CustomEvent('lenisScroll', {
          detail: { scrollY: event.scroll },
        }),
      );
    };

    lenis.on('scroll', onLenisScroll);

    const onGsapTick = (time: number) => {
      // GSAP ticker provides seconds; Lenis expects milliseconds.
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onGsapTick);
    gsap.ticker.lagSmoothing(0);

    // 1. Stop scrolling immediately on load
    lenis.stop();

    // 2. Wait for the browser to settle, then refresh GSAP and start Lenis
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      lenis.start();
    }, 100); // 100ms is usually the "sweet spot"

    return () => {
      gsap.ticker.remove(onGsapTick);
      lenis.off('scroll', onLenisScroll);
      lenis.destroy();
      clearTimeout(timer);

      if (typeof window !== 'undefined') {
        window.__lenis = undefined;
      }
    };
  }, [enabled]);
}
