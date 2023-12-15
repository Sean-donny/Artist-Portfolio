import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import mtHeroBanner from '/optimised/trill_tega_menace_talk_video_still_1.jpg';
import hoodedTrill from '/optimised/trill_tega_menace_talk_hero.png';
import mtAlbumConceptArt1 from '/optimised/trill_tega_menace_talk_draft.jpg';
import mtSingleConceptArt1 from '/optimised/trill_tega_menace_talk_abstract.jpg';

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

  const trillAlbumDraft1Ref = useRef(null);
  const trillAlbumDraft1InView = useInView(trillAlbumDraft1Ref, {
    once: true,
  });
  const [trillAlbumDraft1Opacity, setTrillAlbumDraft1Opacity] = useState(0);
  const [trillAlbumDraft1Position, setTrillAlbumDraft1Position] = useState(20);

  useEffect(() => {
    if (trillAlbumDraft1InView && scrollY > parallaxValue) {
      setTimeout(() => {
        setTrillAlbumDraft1Opacity(1);
        setTrillAlbumDraft1Position(0);
      }, 50);
    }
  }, [trillAlbumDraft1InView, scrollY]);

  const trillAlbumDraft1DescriptionHeaderRef = useRef(null);
  const trillAlbumDraft1DescriptionHeaderInView = useInView(
    trillAlbumDraft1DescriptionHeaderRef,
    {
      once: true,
    },
  );
  const [
    trillAlbumDraft1DescriptionHeaderOpacity,
    setTrillAlbumDraft1DescriptionHeaderOpacity,
  ] = useState(0);
  const [
    trillAlbumDraft1DescriptionHeaderPosition,
    setTrillAlbumDraft1DescriptionHeaderPosition,
  ] = useState(20);

  useEffect(() => {
    if (trillAlbumDraft1DescriptionHeaderInView && scrollY > parallaxValue) {
      setTimeout(() => {
        setTrillAlbumDraft1DescriptionHeaderOpacity(1);
        setTrillAlbumDraft1DescriptionHeaderPosition(0);
      }, 50);
    }
  }, [trillAlbumDraft1DescriptionHeaderInView, scrollY]);

  const trillAlbumDraft1DescriptionParagraphRef = useRef(null);
  const trillAlbumDraft1DescriptionParagraphInView = useInView(
    trillAlbumDraft1DescriptionParagraphRef,
    {
      once: true,
    },
  );
  const [
    trillAlbumDraft1DescriptionParagraphOpacity,
    setTrillAlbumDraft1DescriptionParagraphOpacity,
  ] = useState(0);
  const [
    trillAlbumDraft1DescriptionParagraphPosition,
    setTrillAlbumDraft1DescriptionParagraphPosition,
  ] = useState(20);

  useEffect(() => {
    if (trillAlbumDraft1DescriptionParagraphInView && scrollY > parallaxValue) {
      setTimeout(() => {
        setTrillAlbumDraft1DescriptionParagraphOpacity(1);
        setTrillAlbumDraft1DescriptionParagraphPosition(0);
      }, 50);
    }
  }, [trillAlbumDraft1DescriptionParagraphInView, scrollY]);

  const trillSingleDraft1Ref = useRef(null);
  const trillSingleDraft1InView = useInView(trillSingleDraft1Ref, {
    once: true,
  });
  const [trillSingleDraft1Opacity, setTrillSingleDraft1Opacity] = useState(0);
  const [trillSingleDraft1Position, setTrillSingleDraft1Position] =
    useState(20);

  useEffect(() => {
    if (trillSingleDraft1InView && scrollY > parallaxValue) {
      setTimeout(() => {
        setTrillSingleDraft1Opacity(1);
        setTrillSingleDraft1Position(0);
      }, 50);
    }
  }, [trillSingleDraft1InView, scrollY]);

  const trillSingleDraft1DescriptionHeaderRef = useRef(null);
  const trillSingleDraft1DescriptionHeaderInView = useInView(
    trillSingleDraft1DescriptionHeaderRef,
    {
      once: true,
    },
  );
  const [
    trillSingleDraft1DescriptionHeaderOpacity,
    setTrillSingleDraft1DescriptionHeaderOpacity,
  ] = useState(0);
  const [
    trillSingleDraft1DescriptionHeaderPosition,
    setTrillSingleDraft1DescriptionHeaderPosition,
  ] = useState(20);

  useEffect(() => {
    if (trillSingleDraft1DescriptionHeaderInView && scrollY > parallaxValue) {
      setTimeout(() => {
        setTrillSingleDraft1DescriptionHeaderOpacity(1);
        setTrillSingleDraft1DescriptionHeaderPosition(0);
      }, 50);
    }
  }, [trillSingleDraft1DescriptionHeaderInView, scrollY]);

  const trillSingleDraft1DescriptionParagraphRef = useRef(null);
  const trillSingleDraft1DescriptionParagraphInView = useInView(
    trillSingleDraft1DescriptionParagraphRef,
    {
      once: true,
    },
  );
  const [
    trillSingleDraft1DescriptionParagraphOpacity,
    setTrillSingleDraft1DescriptionParagraphOpacity,
  ] = useState(0);
  const [
    trillSingleDraft1DescriptionParagraphPosition,
    setTrillSingleDraft1DescriptionParagraphPosition,
  ] = useState(20);

  useEffect(() => {
    if (
      trillSingleDraft1DescriptionParagraphInView &&
      scrollY > parallaxValue
    ) {
      setTimeout(() => {
        setTrillSingleDraft1DescriptionParagraphOpacity(1);
        setTrillSingleDraft1DescriptionParagraphPosition(0);
      }, 50);
    }
  }, [trillSingleDraft1DescriptionParagraphInView, scrollY]);

  return (
    <div className="client-project-container bg-black w-full h-auto">
      <div className="client-project-sections w-full h-auto flex flex-col items-center justify-center">
        <div
          className="client-project-hero w-full h-[1080] overflow-hidden sticky top-0"
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
        {/* height of safe space is set to the same as parallaxValue */}
        <div className={`client-project-hero-safe-space h-[400px] w-full`}>
          &nbsp;
        </div>
        <div className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5">
          <div className="client-project-design-goal-description-container h-auto w-full hd:w-3/5 hd:max-h-[1500px]">
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
        <div className="client-project-initial-concepts-container h-auto w-full flex flex-col hd:flex-row p-5">
          <div className="client-project-initial-concepts-album-cover h-full w-full hd:w-1/2">
            <div className="client-project-initial-concepts-album-cover-concept-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
              <div className="client-project-initial-concepts-album-cover-concept-artwork h-3/5 w-full">
                <motion.img
                  src={mtAlbumConceptArt1}
                  alt="An abstract drawing of trill tega shooting laser beams from his eyes with bat wings"
                  className="mb-2"
                  ref={trillAlbumDraft1Ref}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: trillAlbumDraft1Position,
                    opacity: trillAlbumDraft1Opacity,
                  }}
                />
              </div>
              <div className="client-project-initial-concepts-album-cover-concept-description h-2/5 w-full flex flex-col items-center justify-center">
                <motion.h4
                  className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold"
                  ref={trillAlbumDraft1DescriptionHeaderRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: trillAlbumDraft1DescriptionHeaderPosition,
                    opacity: trillAlbumDraft1DescriptionHeaderOpacity,
                  }}
                >
                  Album Cover Draft
                </motion.h4>
                <motion.p
                  className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium"
                  ref={trillAlbumDraft1DescriptionParagraphRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: trillAlbumDraft1DescriptionParagraphPosition,
                    opacity: trillAlbumDraft1DescriptionParagraphOpacity,
                  }}
                >
                  After discussing his vision, I sketched out a rough cover
                  design to see if the idea had potential. This step is crucial
                  to decide whether to proceed with an idea or pivot in a
                  different direction. Luckily, he liked the concept, giving us
                  the green light to move forward.
                </motion.p>
              </div>
            </div>
          </div>
          <div className="client-project-initial-concepts-single-cover h-full w-full hd:w-1/2">
            <div className="client-project-initial-concepts-single-cover-concept-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
              <div className="client-project-initial-concepts-single-cover-concept-artwork h-3/5 w-full">
                <motion.img
                  src={mtSingleConceptArt1}
                  alt="An abstract illustration of trill tega and his other personas"
                  className="mb-2"
                  ref={trillSingleDraft1Ref}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: trillSingleDraft1Position,
                    opacity: trillSingleDraft1Opacity,
                  }}
                />
              </div>
              <div className="client-project-initial-concepts-single-cover-concept-description h-2/5 w-full flex flex-col items-center justify-center">
                <motion.h4
                  className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold"
                  ref={trillSingleDraft1DescriptionHeaderRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: trillSingleDraft1DescriptionHeaderPosition,
                    opacity: trillSingleDraft1DescriptionHeaderOpacity,
                  }}
                >
                  Single Cover Draft
                </motion.h4>
                <motion.p
                  className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium"
                  ref={trillSingleDraft1DescriptionParagraphRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: trillSingleDraft1DescriptionParagraphPosition,
                    opacity: trillSingleDraft1DescriptionParagraphOpacity,
                  }}
                >
                  For the lead single cover, I aimed to capture Trill up close,
                  showcasing the intensity he brings to the project. I initially
                  designed a cover featuring clones, each representing a
                  distinct style he transitions between on the tape. However,
                  the direction of the cover was eventually revised to a
                  portrait of Trill himself.
                </motion.p>
              </div>
            </div>
          </div>
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
