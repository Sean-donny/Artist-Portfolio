import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// image imports
import headShot from '/optimised/sean_donny_portrait.jpg';
import nameTag from '/optimised/sean_name_tag.png';
import SEO from '../../components/SEO/SEO';

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
      <SEO
        title="About"
        description="A biography of the contemporary artist Sean Donny based in England, UK."
        type="article"
        url="https://seandonny.com/about"
        image={headShot}
      />
      <main>
        <article className="about-sean-donny-section w-full h-auto p-10 hd:w-[70%] m-auto flex flex-col hd:flex-row">
          <figure className="about-sean-donny-image-container flex flex-col items-center justify-center hd:w-2/5">
            <img
              src={headShot}
              className="about-sean-donny-image h-auto w-[475px] min-w-[100px]"
              alt="Head shot of artist Sean Donny against an orange background"
              title="Sean Donny head shot"
              loading="eager"
            />
          </figure>
          <div className="about-sean-donny-description-container hd:w-3/5 hd:px-10">
            <p className="about-sean-donny-description-text font-custom text-xl text-zinc-200 mt-5 hd:mt-0 w-full font-semibold">
              Sean Donny is a Nigerian-born visual artist currently based in
              England, specialising in 2D digital illustration. His creative
              works showcase a contemporary fusion of Nigerian and Western
              subcultures, with styles ranging from realism to stylised art.
              <br />
              <br />
              Sean has played a pivotal role in shaping the creative direction
              of diverse musical projects, collaborating with artists such as
              Odunsi &#40;The Engine&#41;, PsychoYp, Trill&nbsp;Tega, and more.
              Additionally, he is the Creative Director at the fashion label
              "Blvckfire" and has made notable contributions to other fashion
              projects, including Avera, Popwave, and Cruise Gang.
            </p>
          </div>
        </article>
      </main>
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
          alt="Sean Donny name tag"
          title="Sean Donny name tag"
          loading="eager"
        />
      </motion.div>
    </div>
  );
};

export default About;
