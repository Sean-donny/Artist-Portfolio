import {
  createContext,
  useContext,
  useRef,
  useCallback,
  useMemo,
  useEffect,
  useLayoutEffect,
  useState,
  ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from '../../lib/gsap';

interface TransitionContextValue {
  navigateTo: (path: string) => void;
  setPageElement: (element: HTMLDivElement | null) => void;
}

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      'usePageTransition must be used inside <TransitionLayout>.',
    );
  }

  return {
    navigateTo: context.navigateTo,
  };
}

interface TransitionLayoutProps {
  children: ReactNode;
}

const OVERLAY_COLOR = 'rgba(255, 72, 0, 1)';

interface TransitionPageProps {
  children: ReactNode;
}

export function TransitionLayout({ children }: TransitionLayoutProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [pageElement, setPageElement] = useState<HTMLDivElement | null>(null);
  const [overlayMounted, setOverlayMounted] = useState(false);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  const navigate = useNavigate();
  const isAnimating = useRef(false);

  const navigateTo = useCallback(
    (path: string) => {
      if (isAnimating.current) return;

      const page = pageElement;

      // Transitions are mandatory in this layout mode. If no transition target
      // is mounted, we skip the route change to avoid non-animated navigation.
      if (!page) {
        return;
      }

      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (prefersReduced) {
        navigate(path);
        return;
      }

      isAnimating.current = true;
      setPendingPath(path);
      setOverlayMounted(true);
    },
    [navigate, pageElement],
  );

  useEffect(() => {
    if (!overlayMounted || !pendingPath || !pageElement) return;

    const overlay = overlayRef.current;
    const page = pageElement;

    if (!overlay) return;

    const tl = gsap.timeline({
      defaults: { ease: 'power4.inOut' },
    });

    // Ensure overlay ready
    tl.set(overlay, {
      autoAlpha: 1,
      scaleY: 0,
      transformOrigin: 'top',
      pointerEvents: 'auto',
    });

    // Animate current page out
    tl.to(
      page,
      {
        y: -40,
        opacity: 0,
        duration: 0.4,
      },
      0,
    );

    // Overlay expands
    tl.to(
      overlay,
      {
        scaleY: 1,
        duration: 0.6,
      },
      0,
    );

    // Change route while fully covered
    tl.call(() => {
      navigate(pendingPath);
      window.scrollTo(0, 0);
    });

    // Small wait for React to paint new page
    tl.call(() => {
      requestAnimationFrame(() => {});
    });

    // Prepare new page
    tl.set(page, {
      y: 40,
      opacity: 0,
    });

    // Overlay reveals new page
    tl.to(overlay, {
      scaleY: 0,
      transformOrigin: 'bottom',
      duration: 0.6,
    });

    // Animate new page in
    tl.to(
      page,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.4',
    );

    tl.call(() => {
      isAnimating.current = false;
      setPendingPath(null);
      setOverlayMounted(false);

      // Remove transform/opacity side effects after transition completes.
      // Sticky sections in article pages can break when an ancestor keeps a transform.
      gsap.set(page, { clearProps: 'transform,opacity' });
    });

    return () => {
      tl.kill();
    };
  }, [navigate, overlayMounted, pageElement, pendingPath]);

  const contextValue = useMemo(
    () => ({ navigateTo, setPageElement }),
    [navigateTo],
  );

  useEffect(() => {
    if (overlayMounted) {
      document.body.classList.add('transition-active');
    } else {
      document.body.classList.remove('transition-active');
    }

    return () => {
      document.body.classList.remove('transition-active');
    };
  }, [overlayMounted]);

  return (
    <TransitionContext.Provider value={contextValue}>
      {overlayMounted && (
        <div
          ref={overlayRef}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: OVERLAY_COLOR,
            pointerEvents: 'none',
            transform: 'scaleY(0)',
            transformOrigin: 'bottom',
          }}
        />
      )}
      {children}
    </TransitionContext.Provider>
  );
}

export function TransitionPage({ children }: TransitionPageProps) {
  const context = useContext(TransitionContext);
  const localPageRef = useRef<HTMLDivElement>(null);

  if (!context) {
    throw new Error('TransitionPage must be used inside <TransitionLayout>.');
  }

  useLayoutEffect(() => {
    context.setPageElement(localPageRef.current);

    if (localPageRef.current) {
      // Ensure freshly mounted routes don't keep previous transition inline styles.
      gsap.set(localPageRef.current, { clearProps: 'transform,opacity' });
    }

    return () => {
      context.setPageElement(null);
    };
  }, [context]);

  return <div ref={localPageRef}>{children}</div>;
}
