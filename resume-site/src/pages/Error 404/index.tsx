import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Error404 = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [ballRadius, setBallRadius] = useState(16);
  const safeBoundary = 50;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(
        Math.min(
          Math.max(e.clientX - ballRadius, safeBoundary),
          window.innerWidth - (safeBoundary + ballRadius * 2),
        ),
      );
      cursorY.set(
        Math.min(
          Math.max(e.clientY - ballRadius, safeBoundary),
          window.innerHeight - (safeBoundary + ballRadius * 2),
        ),
      );
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [ballRadius, cursorX, cursorY]);
  return (
    <div
      className="error-404-page-container bg-black w-full h-screen p-10 hd:p-20 flex flex-col items-center justify-center"
      style={{ cursor: 'none' }}
    >
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div>
        <h1 className="font-custom font-semibold tracking-tight text-white text-5xl hd:text-massive1 lg:leading-massive1 text-center mb-5">
          <span
            className="error-ball-expansion-zone-1"
            onMouseEnter={() => setBallRadius(prev => prev * 2)}
            onMouseLeave={() => setBallRadius(prev => prev / 2)}
          >
            Oops...
          </span>
        </h1>
        <p className="font-custom text-base text-center text-white">
          <span
            className="error-ball-expansion-zone-2"
            onMouseEnter={() => setBallRadius(prev => prev * 2)}
            onMouseLeave={() => setBallRadius(prev => prev / 2)}
          >
            You seem to be lurking in the wrong section.{' '}
            <a href="/" className="underline cursor-none">
              <span
                className="error-ball-expansion-zone-3"
                onMouseEnter={() => setBallRadius(prev => prev * 1.5)}
                onMouseLeave={() => setBallRadius(prev => prev / 1.5)}
              >
                Return home
              </span>
            </a>
          </span>
        </p>
      </div>
      <motion.div
        className="error-404-mouse-pointer"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 3,
          pointerEvents: 'none',
          backgroundColor: 'red',
          mixBlendMode: 'screen',
        }}
        animate={{
          width: ballRadius * 2,
          height: ballRadius * 2,
          borderRadius: ballRadius,
        }}
      />
    </div>
  );
};

export default Error404;
