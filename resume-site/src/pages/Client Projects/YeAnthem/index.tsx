import { useAnimation, useInView, motion, anticipate } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import GalleryModal from '../../../components/GalleryModal';
import { ModalContent } from '../../../interfaces/ModalContent';

// Image imports
import yaBanner from '/optimised/smada_ye_anthem_banner.jpg';
import yaAddedEmotionSketch from '/optimised/smada_ye_anthem_sketch_extra_emotion.jpg';
import yaReference1 from '/optimised/smada_ye_anthem_king_perry_reference.jpg';
import yaReference2 from '/optimised/smada_ye_anthem_smada_main_reference.jpg';
import yaReference3 from '/optimised/smada_ye_anthem_toye_reference.jpg';
import yaNativeXDefJam from '/optimised/native_defjam.jpg';

import yeAnthemData from './data';
import SEO from '../../../components/SEO/SEO';

const YeAnthem = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({
    src: undefined,
    alt: undefined,
    title: undefined,
    year: undefined,
  });

  const handleImageFocus = (data: ModalContent) => {
    return () => {
      setModalContent({
        src: data.src,
        alt: data.alt,
        title: data.title,
        year: data.year,
      });
      setModalOpen(true);
    };
  };

  const handleImageExit = () => {
    setModalOpen(false);
    setModalContent({
      src: undefined,
      alt: undefined,
      title: undefined,
      year: undefined,
    });
  };
  // Stores the value of the vertical scroll
  const [scrollY, setScrollY] = useState(0);

  // Control Hero Y axis position
  const [heroTranslate, setHeroTranslate] = useState(0);

  // Sets the depth for the hero parallax effect
  const parallaxValue = 400;

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Controls used to animate motion properties
  const controls = useAnimation();

  // Animates element effects based on vertical scroll
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

  const windowWidth = window.innerWidth;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Declarations required for page section effects
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [heroOpacity, setHeroOpacity] = useState(0);
  const [heroPosition, setHeroPosition] = useState(20);

  useEffect(() => {
    if (heroInView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setHeroOpacity(1);
        setHeroPosition(0);
      }, 50);
    } else {
      setHeroOpacity(0);
      setHeroPosition(20);
    }
  }, [heroInView, scrollY]);

  const heroHeaderRef = useRef(null);
  const heroHeaderInView = useInView(heroHeaderRef, {
    once: true,
  });
  const [heroHeaderOpacity, setHeroHeaderOpacity] = useState(0);
  const [heroHeaderPosition, setHeroHeaderPosition] = useState(20);

  useEffect(() => {
    if (heroHeaderInView && scrollY > parallaxValue / 2.5) {
      setHeroHeaderOpacity(1);
      setHeroHeaderPosition(0);
    } else {
      setHeroHeaderOpacity(0);
      setHeroHeaderPosition(20);
    }
  }, [heroHeaderInView, scrollY]);

  const heroP1Ref = useRef(null);
  const heroP1InView = useInView(heroP1Ref, {
    once: true,
  });
  const [heroP1Opacity, setHeroP1Opacity] = useState(0);
  const [heroP1Position, setHeroP1Position] = useState(20);

  useEffect(() => {
    if (heroP1InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setHeroP1Opacity(1);
        setHeroP1Position(0);
      }, 50);
    } else {
      setHeroP1Opacity(0);
      setHeroP1Position(20);
    }
  }, [heroP1InView, scrollY]);

  const heroP2Ref = useRef(null);
  const heroP2InView = useInView(heroP2Ref, {
    once: true,
  });
  const [heroP2Opacity, setHeroP2Opacity] = useState(0);
  const [heroP2Position, setHeroP2Position] = useState(20);

  useEffect(() => {
    if (heroP2InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setHeroP2Opacity(1);
        setHeroP2Position(0);
      }, 50);
    } else {
      setHeroP2Opacity(0);
      setHeroP2Position(20);
    }
  }, [heroP2InView, scrollY]);

  const heroP3Ref = useRef(null);
  const heroP3InView = useInView(heroP3Ref, {
    once: true,
  });
  const [heroP3Opacity, setHeroP3Opacity] = useState(0);
  const [heroP3Position, setHeroP3Position] = useState(20);

  useEffect(() => {
    if (heroP3InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setHeroP3Opacity(1);
        setHeroP3Position(0);
      }, 50);
    } else {
      setHeroP3Opacity(0);
      setHeroP3Position(20);
    }
  }, [heroP3InView, scrollY]);

  // Uses custom hook to generate ref, and states for opacity & position values

  const {
    ref: yaRefinedSketchRef,
    opacity: yaRefinedSketchOpacity,
    position: yaRefinedSketchPosition,
  } = useInViewAnimation();

  const {
    ref: yaRefinedSketchHeaderRef,
    opacity: yaRefinedSketchHeaderOpacity,
    position: yaRefinedSketchHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: yaRefinedSketchParagraphRef,
    opacity: yaRefinedSketchParagraphOpacity,
    position: yaRefinedSketchParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: yaBackgroundPaintingRef,
    opacity: yaBackgroundPaintingOpacity,
    position: yaBackgroundPaintingPosition,
  } = useInViewAnimation();

  const {
    ref: yaBackgroundPaintingHeaderRef,
    opacity: yaBackgroundPaintingHeaderOpacity,
    position: yaBackgroundPaintingHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: yaBackgroundPaintingParagraphRef,
    opacity: yaBackgroundPaintingParagraphOpacity,
    position: yaBackgroundPaintingParagraphPosition,
  } = useInViewAnimation();

  //////////////////////////

  const {
    ref: yaRoughSketchRef,
    opacity: yaRoughSketchOpacity,
    position: yaRoughSketchPosition,
  } = useInViewAnimation();

  const {
    ref: yaRoughSketchHeaderRef,
    opacity: yaRoughSketchHeaderOpacity,
    position: yaRoughSketchHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: yaRoughSketchParagraphRef,
    opacity: yaRoughSketchParagraphOpacity,
    position: yaRoughSketchParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: yaColouredRoughSketchRef,
    opacity: yaColouredRoughSketchOpacity,
    position: yaColouredRoughSketchPosition,
  } = useInViewAnimation();

  const {
    ref: yaColouredRoughSketchHeaderRef,
    opacity: yaColouredRoughSketchHeaderOpacity,
    position: yaColouredRoughSketchHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: yaColouredRoughSketchParagraphRef,
    opacity: yaColouredRoughSketchParagraphOpacity,
    position: yaColouredRoughSketchParagraphPosition,
  } = useInViewAnimation();

  //////////////////////////

  const {
    ref: yaSingleCoverRef,
    opacity: yaSingleCoverOpacity,
    position: yaSingleCoverPosition,
  } = useInViewAnimation();

  const {
    ref: yaSingleCoverHeaderRef,
    opacity: yaSingleCoverHeaderOpacity,
    position: yaSingleCoverHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: yaSingleCoverParagraphRef,
    opacity: yaSingleCoverParagraphOpacity,
    position: yaSingleCoverParagraphPosition,
  } = useInViewAnimation();

  //////////////////////////

  const {
    ref: yaYkRemixRef,
    opacity: yaYkRemixOpacity,
    position: yaYkRemixPosition,
  } = useInViewAnimation();

  const {
    ref: yaYkRemixHeaderRef,
    opacity: yaYkRemixHeaderOpacity,
    position: yaYkRemixHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: yaYkRemixParagraphRef,
    opacity: yaYkRemixParagraphOpacity,
    position: yaYkRemixParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: yaSaRemixRef,
    opacity: yaSaRemixOpacity,
    position: yaSaRemixPosition,
  } = useInViewAnimation();

  const {
    ref: yaSaRemixHeaderRef,
    opacity: yaSaRemixHeaderOpacity,
    position: yaSaRemixHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: yaSaRemixParagraphRef,
    opacity: yaSaRemixParagraphOpacity,
    position: yaSaRemixParagraphPosition,
  } = useInViewAnimation();

  // Styling for embedded player

  const embedStyle = {
    width: '100%',
    maxWidth: '660px',
    overflow: 'hidden',
    borderRadius: '10px',
    transform: 'translateZ(0px)',
    animation: '2s ease 0s 6 normal none running loading-indicator',
    backgroundColor: 'rgba(228, 228, 228, 0)',
    margin: '10px 0px',
  };

  // Declarations for reference board

  const [referenceBoardUnderline, setReferenceBoardUnderline] = useState(0);

  const referenceBoardItemsRef = useRef(null);
  const referenceBoardItemsInView = useInView(referenceBoardItemsRef);

  useEffect(() => {
    if (referenceBoardItemsInView === true) {
      setReferenceBoardUnderline(1);
    } else {
      setReferenceBoardUnderline(0);
    }
  }, [referenceBoardItemsInView]);

  const [referenceBoard2Underline, setReferenceBoard2Underline] = useState(0);

  const referenceBoard2ItemsRef = useRef(null);
  const referenceBoard2ItemsInView = useInView(referenceBoard2ItemsRef);

  useEffect(() => {
    if (referenceBoard2ItemsInView === true) {
      setReferenceBoard2Underline(1);
    } else {
      setReferenceBoard2Underline(0);
    }
  }, [referenceBoard2ItemsInView]);

  // Translate values for reference images

  const [translateReference, setTranslateReference] = useState(windowWidth / 7);

  // Declarations for Project Deliverables section
  const {
    ref: projectDeliverablesHeaderRef,
    opacity: projectDeliverablesHeaderOpacity,
    position: projectDeliverablesHeaderPosition,
  } = useInViewAnimation();

  const [projectDeliverablesUnderline, setProjectDeliverablesUnderline] =
    useState(0);

  const projectDeliverablesItemsRef = useRef(null);
  const projectDeliverablesItemsInView = useInView(projectDeliverablesItemsRef);

  useEffect(() => {
    if (projectDeliverablesItemsInView === true) {
      setProjectDeliverablesUnderline(1);
    } else {
      setProjectDeliverablesUnderline(0);
    }
  }, [projectDeliverablesItemsInView]);

  const projectDeliverablesScope = useMenuAnimation(
    projectDeliverablesItemsInView,
  );

  const projectDeliverables = [
    'Main Single Cover',

    'Nigerian Remix Cover',

    'South-African Remix Cover',

    'Promotional Video',
  ];

  // Declarations for Project Navigate section
  const projectNavigateRef = useRef(null);
  const projectNavigateInView = useInView(projectNavigateRef);

  const projectNavigateScope = useMenuAnimation(projectNavigateInView);

  const previousProject = 'Menace Talk';
  const nextProject = 'NüNiverse';

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="client-project-container bg-black w-full h-auto">
      <SEO
        title="Ye Anthem | Client Projects"
        description="Explore a client project for Smada by contemporary artist Sean Donny, showcasing his creative direction expertise."
        type="article"
        url="https://www.seandonny.com/client-projects/ye-anthem"
        image={yaBanner}
      />
      {modalOpen && (
        <GalleryModal modalContent={modalContent} onClose={handleImageExit} />
      )}
      <div className="client-project-sections w-full h-auto flex flex-col items-center justify-center relative">
        <main>
          <figure
            className="client-project-hero w-full h-auto overflow-hidden sticky top-0 pointer-events-none"
            style={{
              transform: `translate3d(0px, ${-heroTranslate}px, 0px)`,
              WebkitTransform: `translate3d(0px, ${-heroTranslate}px, 0px)`,
              zIndex: 1,
            }}
          >
            <motion.img
              src={yaBanner}
              alt="A sketch of Smada mesmerized by a gorgeous lady"
              title="Ye Anthem Scene Sketch"
              loading="eager"
              className="client-project-hero-image w-full h-full object-cover object-center"
              initial={{ scale: 1, opacity: 1 }}
              animate={controls}
            />
          </figure>
          {/* height of safe space is set to the same as parallaxValue */}
          <div className={`client-project-hero-safe-space h-[400px] w-full`}>
            &nbsp;
          </div>
          <article className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-rose-500 selection:text-zinc-200">
            <div className="client-project-design-goal-description-container h-auto w-full hd:w-3/5 hd:max-h-[1500px] xl:pl-20">
              <motion.h1
                ref={heroHeaderRef}
                className="client-project-design-goal-description-header text-zinc-200 font-custom font-semibold italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mb-5"
                initial={{ opacity: 0 }}
                animate={{
                  translateY: heroHeaderPosition,
                  opacity: heroHeaderOpacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                Smada hit me on iMessage: "Great&nbsp;news!"
              </motion.h1>
              <motion.p
                className="client-project-design-goal-description-paragraph-1 text-zinc-400 font-custom font-medium italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={heroP1Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: heroP1Position,
                  opacity: heroP1Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                "I just got signed to{' '}
                <mark className="bg-rose-500 text-zinc-200">
                  <a
                    href="https://en.wikipedia.org/wiki/Native_Records_(Nigerian_record_label)"
                    target="_blank"
                    className="hover:underline"
                  >
                    NATIVE&nbsp;Records
                  </a>
                </mark>{' '}
                in partnership with{' '}
                <mark className="bg-rose-500 text-zinc-200">
                  <a
                    href="https://en.wikipedia.org/wiki/Def_Jam_Recordings"
                    target="_blank"
                    className="hover:underline"
                  >
                    Def&nbsp;Jam Recordings
                  </a>
                </mark>
                "...
              </motion.p>
              <motion.p
                className="client-project-design-goal-description-paragraph-2 text-zinc-400 font-custom font-normal italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={heroP2Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: heroP2Position,
                  opacity: heroP2Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                "I'm dropping a new single, and I want you to run the cover art.
                We've come a long way to get here"...
              </motion.p>
              <motion.p
                className="client-project-design-goal-description-paragraph-3 text-zinc-400 font-custom font-extralight italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={heroP3Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: heroP3Position,
                  opacity: heroP3Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                "Additionally, we'll need two more covers for the remixes
                releasing alongside the main single"
              </motion.p>
            </div>
            <figure className="client-project-design-goal-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
              <motion.img
                className="client-project-design-goal-image"
                src={yaAddedEmotionSketch}
                alt="A sketch of Smada reaching his palms out"
                title="Ye Anthem Cover Sketch"
                loading="eager"
                ref={heroRef}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: heroPosition,
                  opacity: heroOpacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              />
            </figure>
          </article>
          <article className="client-project-references-container bg-rose-500 selection:bg-black selection:text-zinc-200 w-full h-auto flex flex-col items-center justify-center p-5 pt-10">
            <h2
              className="client-project-reference-board-title font-custom text-5xl text-center text-black w-full font-semibold mb-5"
              ref={referenceBoardItemsRef}
            >
              Reference Board
            </h2>
            <motion.hr
              className="border-t-1 border-black w-full mt-5"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: referenceBoardUnderline,
              }}
              transition={{ duration: 1, ease: anticipate }}
            />
            <div
              className="client-project-references w-full h-auto flex flex-row items-center justify-center relative overflow-hidden mt-5"
              onMouseEnter={() => {
                setTranslateReference(0);
              }}
              onTouchStart={() => {
                setTranslateReference(0);
              }}
              onMouseLeave={() => {
                setTranslateReference(windowWidth / 7);
              }}
              onTouchEnd={() => {
                setTranslateReference(windowWidth / 7);
              }}
            >
              <motion.figure
                className="client-project-reference-image-container-1 h-auto w-1/3 flex flex-col items-center justify-center"
                animate={{
                  translateX: translateReference,
                }}
                transition={{ duration: 1, ease: anticipate }}
              >
                <img
                  src={yaReference1}
                  alt="King Perryy Reference"
                  title="King Perryy Reference"
                  loading="lazy"
                  className="client-project-reference-image-1"
                  style={{ zIndex: 1, border: 'solid black 1px' }}
                />
              </motion.figure>
              <motion.figure className="client-project-reference-image-container-2 h-auto w-1/3 flex flex-col items-center justify-center">
                <img
                  src={yaReference2}
                  alt="Smada Reference"
                  title="Smada Reference"
                  loading="lazy"
                  className="client-project-referencei-image-2"
                  style={{ zIndex: 3, border: 'solid black 1px' }}
                />
              </motion.figure>
              <motion.figure
                className="client-project-reference-image-container-3 h-auto w-1/3 flex flex-col items-center justify-center"
                animate={{
                  translateX: -translateReference,
                }}
                transition={{ duration: 1, ease: anticipate }}
              >
                <img
                  src={yaReference3}
                  alt="Toyé Reference"
                  title="Toyé Reference"
                  loading="lazy"
                  className="client-project-reference-image-3"
                  style={{ zIndex: 2, border: 'solid black 1px' }}
                />
              </motion.figure>
            </div>
            <motion.hr
              className="border-t-1 border-black w-full mt-5"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: referenceBoard2Underline,
              }}
              transition={{ duration: 1, ease: anticipate }}
            />
            <div
              className="client-project-reference-description-container w-full h-auto flex flex-col items-center justify-center py-5"
              ref={referenceBoard2ItemsRef}
            >
              <p className="client-project-reference-description-text w-full hd:w-4/5 m-auto font-custom text-lg md:text-xl hd:text-3xl text-left md:text-center text-black font-normal">
                Smada dropped the news: "It's gonna be an anthem, a Ye Anthem!"
                So, I set the scene poolside, keeping the focus on the artists
                and what's blowing their minds. Managing projects like this
                comes with its challenges, especially making sure I capture the
                likeness of the subjects, as well as conveying their emotions
                accurately—like being utterly mesmerized by a gorgeous lady.
                <br />
                He sent in his photo reference, mainly to highlight his
                hairstyle. As for the two featured artists, I had to search for
                the right references for them. Crafting their illustrations
                presented its own puzzle, considering the need to respect their
                individual brands, especially when it's not their project, so
                they are not really in the feedback loop during visual
                development.
                <br />I have found that taking references from their Instagram
                feeds is the best bet, because if they feel confident in that
                representation of themselves on there, I have a solid foundation
                to guide the illustration.
              </p>
            </div>
          </article>
          <article className="client-project-sketches-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-rose-500 selection:text-zinc-200">
            <div className="client-project-rough-sketch h-full w-full hd:w-1/2">
              <div className="client-project-rough-sketch-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-rough-sketch-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={yeAnthemData.RoughSketch.src}
                    alt={yeAnthemData.RoughSketch.alt}
                    title={yeAnthemData.RoughSketch.title}
                    loading="lazy"
                    className="mb-2"
                    ref={yaRoughSketchRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaRoughSketchPosition,
                      opacity: yaRoughSketchOpacity,
                    }}
                    onClick={handleImageFocus(yeAnthemData.RoughSketch)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-rough-sketch-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={yaRoughSketchHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaRoughSketchHeaderPosition,
                      opacity: yaRoughSketchHeaderOpacity,
                    }}
                  >
                    {yeAnthemData.RoughSketch.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={yaRoughSketchParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaRoughSketchParagraphPosition,
                      opacity: yaRoughSketchParagraphOpacity,
                    }}
                  >
                    {yeAnthemData.RoughSketch.paragraph}
                  </motion.p>
                </div>
              </div>
            </div>
            <div className="client-project-coloured-rough-sketch h-full w-full hd:w-1/2">
              <div className="client-project-coloured-rough-sketch-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <div className="client-project-coloured-rough-sketch-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={yeAnthemData.ColouredRoughSketch.src}
                    alt={yeAnthemData.ColouredRoughSketch.alt}
                    title={yeAnthemData.ColouredRoughSketch.title}
                    loading="lazy"
                    className="mb-2"
                    ref={yaColouredRoughSketchRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaColouredRoughSketchPosition,
                      opacity: yaColouredRoughSketchOpacity,
                    }}
                    onClick={handleImageFocus(yeAnthemData.ColouredRoughSketch)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </div>
                <div className="client-project-coloured-rough-sketch-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={yaColouredRoughSketchHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaColouredRoughSketchHeaderPosition,
                      opacity: yaColouredRoughSketchHeaderOpacity,
                    }}
                  >
                    {yeAnthemData.ColouredRoughSketch.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={yaColouredRoughSketchParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaColouredRoughSketchParagraphPosition,
                      opacity: yaColouredRoughSketchParagraphOpacity,
                    }}
                  >
                    {yeAnthemData.ColouredRoughSketch.paragraph}
                  </motion.p>
                </div>
              </div>
            </div>
          </article>
          <article className="client-project-process-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-rose-500 selection:text-zinc-200">
            <div className="client-project-refined-sketch h-full w-full hd:w-1/2">
              <div className="client-project-refined-sketch-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-refined-sketch-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={yeAnthemData.RefinedSketch.src}
                    alt={yeAnthemData.RefinedSketch.alt}
                    title={yeAnthemData.RefinedSketch.title}
                    loading="lazy"
                    className="mb-2"
                    ref={yaRefinedSketchRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaRefinedSketchPosition,
                      opacity: yaRefinedSketchOpacity,
                    }}
                    onClick={handleImageFocus(yeAnthemData.RefinedSketch)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-refined-sketch-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={yaRefinedSketchHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaRefinedSketchHeaderPosition,
                      opacity: yaRefinedSketchHeaderOpacity,
                    }}
                  >
                    {yeAnthemData.RefinedSketch.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={yaRefinedSketchParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaRefinedSketchParagraphPosition,
                      opacity: yaRefinedSketchParagraphOpacity,
                    }}
                  >
                    {yeAnthemData.RefinedSketch.paragraph}
                  </motion.p>
                </div>
              </div>
            </div>
            <div className="client-project-background-painting h-full w-full hd:w-1/2">
              <div className="client-project-background-painting-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <div className="client-project-background-painting-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={yeAnthemData.BackgroundPainting.src}
                    alt={yeAnthemData.BackgroundPainting.alt}
                    title={yeAnthemData.BackgroundPainting.title}
                    loading="lazy"
                    className="mb-2"
                    ref={yaBackgroundPaintingRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaBackgroundPaintingPosition,
                      opacity: yaBackgroundPaintingOpacity,
                    }}
                    onClick={handleImageFocus(yeAnthemData.BackgroundPainting)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </div>
                <div className="client-project-background-painting-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={yaBackgroundPaintingHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaBackgroundPaintingHeaderPosition,
                      opacity: yaBackgroundPaintingHeaderOpacity,
                    }}
                  >
                    {yeAnthemData.BackgroundPainting.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={yaBackgroundPaintingParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaBackgroundPaintingParagraphPosition,
                      opacity: yaBackgroundPaintingParagraphOpacity,
                    }}
                  >
                    {yeAnthemData.BackgroundPainting.paragraph}
                  </motion.p>
                </div>
              </div>
            </div>
          </article>
          <article className="client-project-final-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-rose-500 selection:text-zinc-200">
            <div className="client-project-single-cover h-full w-full hd:w-1/2 m-auto">
              <div className="client-project-single-cover-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-single-cover-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={yeAnthemData.SingleCover.src}
                    alt={yeAnthemData.SingleCover.alt}
                    title={yeAnthemData.SingleCover.title}
                    loading="lazy"
                    className="mb-2"
                    ref={yaSingleCoverRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaSingleCoverPosition,
                      opacity: yaSingleCoverOpacity,
                    }}
                    onClick={handleImageFocus(yeAnthemData.SingleCover)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-single-cover-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={yaSingleCoverHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaSingleCoverHeaderPosition,
                      opacity: yaSingleCoverHeaderOpacity,
                    }}
                  >
                    {yeAnthemData.SingleCover.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={yaSingleCoverParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaSingleCoverParagraphPosition,
                      opacity: yaSingleCoverParagraphOpacity,
                    }}
                  >
                    {yeAnthemData.SingleCover.paragraph}
                  </motion.p>
                </div>
              </div>
            </div>
          </article>
          <div className="client-project-remixes-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-rose-500 selection:text-zinc-200">
            <div className="client-project-yk-remix h-full w-full hd:w-1/2">
              <article className="client-project-yk-remix-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-yk-remix-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={yeAnthemData.YkRemix.src}
                    alt={yeAnthemData.YkRemix.alt}
                    title={yeAnthemData.YkRemix.title}
                    loading="lazy"
                    className="mb-2"
                    ref={yaYkRemixRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaYkRemixPosition,
                      opacity: yaYkRemixOpacity,
                    }}
                    onClick={handleImageFocus(yeAnthemData.YkRemix)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-yk-remix-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={yaYkRemixHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaYkRemixHeaderPosition,
                      opacity: yaYkRemixHeaderOpacity,
                    }}
                  >
                    {yeAnthemData.YkRemix.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={yaYkRemixParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaYkRemixParagraphPosition,
                      opacity: yaYkRemixParagraphOpacity,
                    }}
                  >
                    {yeAnthemData.YkRemix.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="client-project-sa-remix h-full w-full hd:w-1/2">
              <article className="client-project-sa-remix-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-sa-remix-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={yeAnthemData.SaRemix.src}
                    alt={yeAnthemData.SaRemix.alt}
                    title={yeAnthemData.SaRemix.title}
                    loading="lazy"
                    className="mb-2"
                    ref={yaSaRemixRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaSaRemixPosition,
                      opacity: yaSaRemixOpacity,
                    }}
                    onClick={handleImageFocus(yeAnthemData.SaRemix)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-sa-remix-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={yaSaRemixHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaSaRemixHeaderPosition,
                      opacity: yaSaRemixHeaderOpacity,
                    }}
                  >
                    {yeAnthemData.SaRemix.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={yaSaRemixParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: yaSaRemixParagraphPosition,
                      opacity: yaSaRemixParagraphOpacity,
                    }}
                  >
                    {yeAnthemData.SaRemix.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <section className="client-project-streaming-and-label-container w-full h-auto flex flex-col hd:flex-row items-center justify-center hd:py-20 selection:bg-rose-500">
            <div className="client-project-streaming-preview w-full h-auto hd:w-1/2 p-5 hd:py-20 hd:px-0 flex flex-col items-center justify-center bg-zinc-900">
              <iframe
                id="embedPlayer"
                src="https://embed.music.apple.com/us/album/ye-anthem/1654598976?i=1654598979&amp;app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
                height="175px"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                allow="autoplay *; encrypted-media *; clipboard-write"
                style={embedStyle}
              ></iframe>
              <iframe
                id="embedPlayer"
                src="https://embed.music.apple.com/us/album/ye-anthem-dj-yk-mule-remix/1654990284?i=1654990458&amp;app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
                height="175px"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                allow="autoplay *; encrypted-media *; clipboard-write"
                style={embedStyle}
              ></iframe>
              <iframe
                id="embedPlayer"
                src="https://embed.music.apple.com/us/album/ye-anthem-mellow-sleazy-remix/1655423128?i=1655423129&amp;app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
                height="175px"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                allow="autoplay *; encrypted-media *; clipboard-write"
                style={embedStyle}
              ></iframe>
            </div>
            <figure className="client-project-label-container h-auto w-full hd:w-1/2 p-5">
              <img
                src={yaNativeXDefJam}
                alt="A photo of the two labels involved in the Ye Anthem project: NATIVE Records and Def Jam Recordings"
                title="NATIVE Records and Def Jam Recordings"
                loading="lazy"
                className="client-project-label-image mb-2 p-5"
              />
            </figure>
          </section>
          <section className="client-project-deliverables-container h-auto w-full bg-green-400 selection:bg-black selection:text-zinc-200 p-5">
            <div className="client-project-deliverables flex flex-col items-start justify-center">
              <div className="client-project-deliverables-container w-full hd:w-3/5 m-auto h-auto flex flex-col items-center justify-center my-10 p-5 overflow-hidden">
                <motion.h2
                  className="client-project-deliverables-header font-custom text-4xl sm:text-5xl text-left text-black w-full font-semibold"
                  ref={projectDeliverablesHeaderRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: projectDeliverablesHeaderPosition,
                    opacity: projectDeliverablesHeaderOpacity,
                  }}
                >
                  Project Deliverables
                </motion.h2>
                <motion.div
                  className="w-full h-full"
                  ref={projectDeliverablesItemsRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: 20,
                    opacity: 1,
                  }}
                >
                  <motion.hr
                    className="border-t-1 border-black w-full mt-5"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: projectDeliverablesUnderline,
                    }}
                    transition={{ duration: 1, ease: anticipate }}
                  />
                  <ul
                    className="client-project-deliverables-paragraph font-custom text-2xl sm:text-3xl text-left text-black mt-5 w-full font-semibold"
                    ref={projectDeliverablesScope}
                  >
                    {projectDeliverables.map((deliverable, index) => (
                      <li key={index} className="list-none">
                        <p>{deliverable}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <nav className="client-project-navigate h-[468px] w-full bg-blue-500 selection:bg-black selection:text-zinc-200 p-5">
          <ul
            className="client-project-navigate-list flex flex-row justify-between items-center h-full overflow-hidden"
            ref={projectNavigateScope}
          >
            <li
              className="client-project-navigate-previous h-full w-2/5 hd:w-1/4 flex flex-col items-start justify-center cursor-pointer"
              onClick={() => {
                handleNavigate('client-projects/menace-talk');
              }}
            >
              <p className="client-project-navigate-previous-title font-custom text-2xl text-left text-black w-full font-normal">
                &larr;
              </p>
              <motion.p
                className="client-project-navigate-previous-title font-custom text-2xl md:text-3xl text-left text-black w-full font-semibold hover:underline underline-offset-2"
                whileTap={{ scaleY: 0.9 }}
                ref={projectNavigateRef}
              >
                {previousProject}
              </motion.p>
            </li>
            <li
              className="client-project-navigate-next h-full w-2/5 hd:w-1/4 flex flex-col items-end justify-center cursor-pointer"
              onClick={() => {
                handleNavigate('client-projects/nuniverse');
              }}
            >
              <p className="client-project-navigate-next-title font-custom text-2xl text-right text-black w-full font-normal">
                &rarr;
              </p>
              <motion.p
                className="client-project-navigate-next-title font-custom text-2xl md:text-3xl text-right text-black w-full font-semibold hover:underline underline-offset-2"
                whileTap={{ scaleY: 0.9 }}
              >
                {nextProject}
              </motion.p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default YeAnthem;
