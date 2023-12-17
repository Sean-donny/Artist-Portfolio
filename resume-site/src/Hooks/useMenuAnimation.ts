import { useEffect } from 'react';
import { useAnimate, stagger, anticipate } from 'framer-motion';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

export function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'li',
      isOpen
        ? { opacity: 1, scale: 1, transform: 'translate(0px,0px)' }
        : { opacity: 0, scale: 0.3, transform: 'translate(200px,0px)' },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
        ease: anticipate,
      },
    );
  }, [isOpen]);

  return scope;
}
