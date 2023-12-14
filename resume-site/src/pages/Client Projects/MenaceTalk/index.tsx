import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import mtHeroBanner from '/optimised/trill_tega_menace_talk_video_still_1.jpg';
import hoodedTrill from '/optimised/trill_tega_menace_talk_hero.png';

const MenaceTalk = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const [heroTranslate, setHeroTranslate] = useState(0);

  const parallaxValue = 400;

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (scrollY < parallaxValue) {
      controls.start({ scale: 1 + scrollY * 0.001, opacity: 1 });
      setHeroTranslate(0);
    } else {
      setHeroTranslate(scrollY - parallaxValue);

      if (scrollY > parallaxValue * 2.25) {
        const opacity = Math.min(
          1,
          Math.max(
            0,
            1 - (scrollY - parallaxValue * 2.25) / (parallaxValue * 1.2),
          ),
        );
        controls.start({ opacity: opacity });
      } else {
        controls.set({ opacity: 1 });
      }
    }
  }, [scrollY, controls]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hoodedTrillRef = useRef(null);
  const hoodedTrillInView = useInView(hoodedTrillRef, { once: true });
  const [hoodedTrillOpacity, setHoodedTrillOpacity] = useState(0);
  const [hoodedTrillPosition, setHoodedTrillPosition] = useState(20);

  useEffect(() => {
    if (hoodedTrillInView && scrollY > parallaxValue) {
      setTimeout(() => {
        setHoodedTrillOpacity(1);
        setHoodedTrillPosition(0);
      }, 50);
    }
  }, [hoodedTrillInView, scrollY]);

  const hoodedTrillHeaderRef = useRef(null);
  const hoodedTrillHeaderInView = useInView(hoodedTrillHeaderRef, {
    once: true,
  });
  const [hoodedTrillHeaderOpacity, setHoodedTrillHeaderOpacity] = useState(0);
  const [hoodedTrillHeaderPosition, setHoodedTrillHeaderPosition] =
    useState(20);

  useEffect(() => {
    if (hoodedTrillHeaderInView && scrollY > parallaxValue) {
      setTimeout(() => {
        setHoodedTrillHeaderOpacity(1);
        setHoodedTrillHeaderPosition(0);
      }, 50);
    }
  }, [hoodedTrillHeaderInView, scrollY]);

  const hoodedTrillP1Ref = useRef(null);
  const hoodedTrillP1InView = useInView(hoodedTrillP1Ref, {
    once: true,
  });
  const [hoodedTrillP1Opacity, setHoodedTrillP1Opacity] = useState(0);
  const [hoodedTrillP1Position, setHoodedTrillP1Position] = useState(20);

  useEffect(() => {
    if (hoodedTrillP1InView && scrollY > parallaxValue) {
      setTimeout(() => {
        setHoodedTrillP1Opacity(1);
        setHoodedTrillP1Position(0);
      }, 50);
    }
  }, [hoodedTrillP1InView, scrollY]);

  const hoodedTrillP2Ref = useRef(null);
  const hoodedTrillP2InView = useInView(hoodedTrillP2Ref, {
    once: true,
  });
  const [hoodedTrillP2Opacity, setHoodedTrillP2Opacity] = useState(0);
  const [hoodedTrillP2Position, setHoodedTrillP2Position] = useState(20);

  useEffect(() => {
    if (hoodedTrillP2InView && scrollY > parallaxValue) {
      setTimeout(() => {
        setHoodedTrillP2Opacity(1);
        setHoodedTrillP2Position(0);
      }, 50);
    }
  }, [hoodedTrillP2InView, scrollY]);

  const hoodedTrillP3Ref = useRef(null);
  const hoodedTrillP3InView = useInView(hoodedTrillP3Ref, {
    once: true,
  });
  const [hoodedTrillP3Opacity, setHoodedTrillP3Opacity] = useState(0);
  const [hoodedTrillP3Position, setHoodedTrillP3Position] = useState(20);

  useEffect(() => {
    if (hoodedTrillP3InView && scrollY > parallaxValue) {
      setTimeout(() => {
        setHoodedTrillP3Opacity(1);
        setHoodedTrillP3Position(0);
      }, 50);
    }
  }, [hoodedTrillP3InView, scrollY]);

  return (
    <div className="client-project-container bg-black w-full h-auto p-5">
      <div className="client-project-sections w-full h-auto flex flex-col items-center justify-center">
        <div
          className="client-project-hero w-full h-[1080] overflow-hidden sticky top-5"
          style={{
            transform: `translate(0px, ${-heroTranslate}px)`,
            zIndex: 1,
          }}
        >
          <motion.img
            src={mtHeroBanner}
            alt="Chrome skull emerges from purple hole in the desert on a dark moonlit night"
            className="client-project-hero-image w-full h-full object-cover object-center"
            initial={{ scale: 1, opacity: 1 }}
            animate={controls}
          />
        </div>
        <div className={`h-[${parallaxValue.toString()}px] w-full mb-10`}>
          {/* safe space */}
        </div>
        <div className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row">
          <div className="client-project-design-goal-description-container h-auto w-full hd:w-3/5 hd:max-h-[1500px] py-5">
            <motion.h2
              ref={hoodedTrillHeaderRef}
              className="client-project-design-goal-description-header text-zinc-200 font-custom font-semibold italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mb-5"
              initial={{ opacity: 0 }}
              animate={{
                translateY: hoodedTrillHeaderPosition,
                opacity: hoodedTrillHeaderOpacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            >
              Trill hit me on FaceTime and told me to "Go Crazy"
            </motion.h2>
            <motion.p
              className="client-project-design-goal-description-paragraph-1 text-zinc-400 font-custom font-medium italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
              ref={hoodedTrillP1Ref}
              initial={{ opacity: 0 }}
              animate={{
                translateY: hoodedTrillP1Position,
                opacity: hoodedTrillP1Opacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            >
              "I want it like them{' '}
              <mark className="bg-fuchsia-600 text-zinc-200">
                <a
                  href="https://genius.com/albums/Comethazine/Bawskee"
                  target="_blank"
                  className="hover:underline"
                >
                  Bawskee
                </a>
              </mark>{' '}
              covers Comethazine got, video game inspired, and most importantly
              I want it purple"...
            </motion.p>
            <motion.p
              className="client-project-design-goal-description-paragraph-2 text-zinc-400 font-custom font-normal italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
              ref={hoodedTrillP2Ref}
              initial={{ opacity: 0 }}
              animate={{
                translateY: hoodedTrillP2Position,
                opacity: hoodedTrillP2Opacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            >
              "I want the earth to open up, and I fly out of the netherealm with
              bat wings rocking full{' '}
              <mark className="bg-fuchsia-600 text-zinc-200">
                <a
                  href="https://www.mowalola.com/pages/ss20"
                  target="_blank"
                  className="hover:underline"
                >
                  Mowalola
                </a>
              </mark>
              , shooting laser beams from my eyes, warding off demons emerging
              from the depths below"...
            </motion.p>
            <motion.p
              className="client-project-design-goal-description-paragraph-3 text-zinc-400 font-custom font-extralight italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
              ref={hoodedTrillP3Ref}
              initial={{ opacity: 0 }}
              animate={{
                translateY: hoodedTrillP3Position,
                opacity: hoodedTrillP3Opacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            >
              "Oh, and don't forget the chain"
            </motion.p>
          </div>
          <div className="client-project-design-goal-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
            <motion.img
              className="client-project-design-goal-image w-auto h-full hd:h-auto object-cover object-center"
              src={hoodedTrill}
              ref={hoodedTrillRef}
              initial={{ opacity: 0 }}
              animate={{
                translateY: hoodedTrillPosition,
                opacity: hoodedTrillOpacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            />
          </div>
        </div>
        <div className="h-[1080px] w-full bg-slate-700">
          initial concepts & inspiration
        </div>
        <div className="h-[1080px] w-full bg-slate-800">process</div>
        <div className="h-[1080px] w-full bg-slate-900">final deliverables</div>
        <div className="h-[1080px] w-full bg-slate-950">external links</div>
        <div className="h-[1080px] w-full bg-black">other projects</div>
        <div className="h-[1080px] w-full bg-pink-500">fake</div>
      </div>
    </div>
  );
};

export default MenaceTalk;
