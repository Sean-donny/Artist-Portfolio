import { useState, useEffect, ReactNode } from 'react';
import { useInView, IntersectionObserverProps } from 'react-intersection-observer';

interface UseInViewAnimationProps {
  initialOpacity?: number;
  initialPosition?: number;
  intersectionObserverOptions?: IntersectionObserverProps;
}

interface UseInViewAnimationResult {
  ref: (node?: Element | null) => void;
  inView: boolean;
  opacity: number;
  position: number;
}

const useInViewAnimation = ({
  initialOpacity = 0,
  initialPosition = 20,
  intersectionObserverOptions = {
      triggerOnce: true,
      children: function (): ReactNode {
          throw new Error('Function not implemented.');
      }
  },
}: UseInViewAnimationProps = {}): UseInViewAnimationResult => {
  const [inView, setInView] = useState(false);
  const [opacity, setOpacity] = useState(initialOpacity);
  const [position, setPosition] = useState(initialPosition);

  const handleInViewChange = (inView: boolean) => {
    if (inView) {
      setTimeout(() => {
        setOpacity(1);
        setPosition(0);
      }, 50);
    }
  };

  const [viewRef] = useInView({
    ...intersectionObserverOptions,
    onChange: handleInViewChange,
  });

  useEffect(() => {
    // viewRef function doesn't return anything (void), so we can't use it in a truthiness check
    setInView(true);
  }, [viewRef]);

  return {
    ref: viewRef,
    inView,
    opacity,
    position,
  };
};

export default useInViewAnimation;
