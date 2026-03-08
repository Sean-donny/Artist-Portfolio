import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//image import
import sdLogo from '/optimised/sean_donny_skull_logo.webp';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null); // Now active

  const [isReady, setIsReady] = useState(false);
  const [showBootLayers, setShowBootLayers] = useState(true);

  useLayoutEffect(() => {
    if (showBootLayers) {
      document.body.classList.add('boot-loading');
    } else {
      document.body.classList.remove('boot-loading');
    }

    return () => {
      document.body.classList.remove('boot-loading');
    };
  }, [showBootLayers]);

  useLayoutEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsReady(true);
          setShowBootLayers(false);
          ScrollTrigger.refresh();

          // Signal to other parts of the app that the initial "load curtain" reveal is complete.
          // This helps avoid "pre-animated" intersection reveals on hard refresh.
          if (typeof window !== 'undefined') {
            window.__pageReady = true;
            window.dispatchEvent(new CustomEvent('pageReady'));
          }
        },
      });

      tl.set(contentRef.current, { autoAlpha: 0 })
        // 1. Logo Intro
        .fromTo(
          logoRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'expo.out' },
        )
        // 2. Logo Outro
        .to(logoRef.current, {
          y: -30,
          opacity: 0,
          duration: 0.8,
          ease: 'expo.in',
          delay: 0.8,
        })
        // 3. The "Double Lift" - Curtain followed by Loader
        // We move the curtain slightly slower/later for a layered effect
        .to([curtainRef.current, loaderRef.current], {
          yPercent: -100,
          duration: 1.4,
          ease: 'expo.inOut',
          stagger: 0.1, // This is the secret sauce
        })
        // 4. Content Reveal
        .to(
          contentRef.current,
          {
            autoAlpha: 1,
            duration: 1,
            ease: 'power2.out',
          },
          '-=1',
        ); // Overlap with the lift
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {showBootLayers && (
        <>
          {/* Layer 1: The Main Loader Background */}
          <div
            ref={loaderRef}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black"
            style={{ pointerEvents: 'all' }}
          >
            <div>
              <img src={sdLogo} height={100} width={100} ref={logoRef} />
            </div>
          </div>

          {/* Layer 2: The Secondary Curtain (Visual Depth) */}
          <div
            ref={curtainRef}
            className="fixed inset-0 z-[999] bg-neutral-900"
            style={{ pointerEvents: 'none' }}
          />
        </>
      )}

      {/* Main Content */}
      <div
        ref={contentRef}
        className={isReady ? undefined : 'page-content'}
        style={
          isReady
            ? undefined
            : {
                height: '100vh',
                overflow: 'hidden',
                pointerEvents: 'none',
                visibility: 'hidden',
              }
        }
      >
        {children}
      </div>
    </>
  );
}
