import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// image imports
import headShot from '/optimised/sean_donny_portrait.jpg';
import nameTag from '/optimised/sean_name_tag.png';

const About = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const imageXRadius = 50;
  const imageYRadius = 35;
  const safeBoundary = 50;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(
        Math.min(
          Math.max(e.clientX - 50, safeBoundary),
          window.innerWidth - (safeBoundary + imageXRadius * 2),
        ),
      );
      cursorY.set(
        Math.min(
          Math.max(e.clientY - 35, safeBoundary),
          window.innerHeight - (safeBoundary + imageYRadius * 2),
        ),
      );
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <div
      className="about-container w-full h-auto min-h-screen bg-zima selection:bg-black selection:text-zinc-200 flex items-center justify-center"
      style={{ cursor: 'none' }}
    >
      <div className="about-sean-donny-section w-full h-auto p-10 hd:w-[70%] m-auto flex flex-col hd:flex-row">
        <div className="about-sean-donny-image-container flex flex-col items-center justify-center hd:w-2/5">
          <img
            src={headShot}
            className="about-sean-donny-image h-auto w-[475px] min-w-[100px]"
          />
        </div>
        <div className="about-sean-donny-description-container hd:w-3/5 hd:px-10">
          <p className="about-sean-donny-description-text font-custom text-xl text-zinc-200 mt-5 hd:mt-0 w-full font-semibold">
            Sean Donny is a Nigerian-born visual artist currently based in
            England, specializing in 2D digital illustration. Holding an
            undergraduate degree in Computer Science &#40;Software
            Engineering&#41;, his creative works showcase a contemporary fusion
            of Nigerian and Western subcultures.
            <br />
            <br />
            Sean has played a pivotal role in shaping the creative direction of
            diverse musical projects, collaborating with artists such as
            PsychoYp, Trill&nbsp;Tega, and more. Moreover, he holds the position
            of Creative Director at the fashion label "Blvckfire" and has made
            notable contributions to other fashion projects including Avera,
            Popwave, and Cruise Gang.
          </p>
        </div>
      </div>
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      >
        <img
          src={nameTag}
          // width is set to imageXRadius * 2
          className="about-sean-donny-name-tag h-auto w-[100px]"
        />
      </motion.div>
    </div>
  );
};

export default About;
