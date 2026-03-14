import { anticipate, motion, useAnimation, useInView } from 'framer-motion';
import higherEducationData from './data';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import GalleryModal from '../../../components/GalleryModal';
import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import { ModalContent } from '../../../interfaces/ModalContent';

// Image imports
import cashmannyBanner from '/optimised/cashmanny_banner.webp';
import cmIllustration from '/optimised/cashmanny_illustration.webp';
import cmReference1 from '/optimised/cashmanny_cover_reference_2.webp';
import cmReference2 from '/optimised/cashmanny_cover_reference_3.webp';
import cmReference3 from '/optimised/cashmanny_cover_reference_1.webp';
import cmBlenderGeoNodes from '/optimised/cashmanny_matrix_code_rain_geometry_nodes_setup.webp';

import SEO from '../../../components/SEO/SEO';
import ScrollTooltip from '../../../components/ScrollTooltip';
import embeddedAppleMusicStyle from '../../../utils/embeddedAppleMusicStyle';
import ProjectNavigation from '../../../components/ProjectNavigationSection';
import navigationMap from '../navigationMap';
import CardStack from '../../../components/ModularImageStack';
import ParallaxImageSection from '../../../components/ParallaxImageSection';
import CenteredImageStack from '../../../components/CenteredImageStack';
import { modelsData, moodBoardData, sketchesData } from './imageStackData';
import { oysterCardModel } from './threeJsModelData';
import { greenGraphPaper } from './styles';
import { higherEducationAsciiArt } from './asciiArt.ts';

const ThreeModelViewer = lazy(() => import('./ThreeDModelViewer'));

const HigherEducation = () => {
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

  const [viewportSize, setViewportSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  const threeViewerSectionRef = useRef(null);
  const shouldLoadThreeViewer = useInView(threeViewerSectionRef, {
    margin: '300px 0px',
    once: true,
  });

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
    ref: cashmannyCoverSketchesRef,
    opacity: cashmannyCoverSketchesOpacity,
    position: cashmannyCoverSketchesPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyCoverSketchesHeaderRef,
    opacity: cashmannyCoverSketchesHeaderOpacity,
    position: cashmannyCoverSketchesHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyCoverSketchesParagraphRef,
    opacity: cashmannyCoverSketchesParagraphOpacity,
    position: cashmannyCoverSketchesParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyCoverDraftRef,
    opacity: cashmannyCoverDraftOpacity,
    position: cashmannyCoverDraftPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyCoverDraftHeaderRef,
    opacity: cashmannyCoverDraftHeaderOpacity,
    position: cashmannyCoverDraftHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyCoverDraftParagraphRef,
    opacity: cashmannyCoverDraftParagraphOpacity,
    position: cashmannyCoverDraftParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyFinalCoverRef,
    opacity: cashmannyFinalCoverOpacity,
    position: cashmannyFinalCoverPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyFinalCoverHeaderRef,
    opacity: cashmannyFinalCoverHeaderOpacity,
    position: cashmannyFinalCoverHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyFinalCoverParagraphRef,
    opacity: cashmannyFinalCoverParagraphOpacity,
    position: cashmannyFinalCoverParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyMoodBoardRef,
    opacity: cashmannyMoodBoardOpacity,
    position: cashmannyMoodBoardPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyMoodBoardHeaderRef,
    opacity: cashmannyMoodBoardHeaderOpacity,
    position: cashmannyMoodBoardHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyMoodBoardParagraphRef,
    opacity: cashmannyMoodBoardParagraphOpacity,
    position: cashmannyMoodBoardParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyFocusriteRef,
    opacity: cashmannyFocusriteOpacity,
    position: cashmannyFocusritePosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyFocusriteHeaderRef,
    opacity: cashmannyFocusriteHeaderOpacity,
    position: cashmannyFocusriteHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyFocusriteParagraphRef,
    opacity: cashmannyFocusriteParagraphOpacity,
    position: cashmannyFocusriteParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyCodeRainRef,
    opacity: cashmannyCodeRainOpacity,
    position: cashmannyCodeRainPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyCodeRainHeaderRef,
    opacity: cashmannyCodeRainHeaderOpacity,
    position: cashmannyCodeRainHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: cashmannyCodeRainParagraphRef,
    opacity: cashmannyCodeRainParagraphOpacity,
    position: cashmannyCodeRainParagraphPosition,
  } = useInViewAnimation();

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

  const [translateReference, setTranslateReference] = useState(
    viewportSize.width / 7,
  );

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const projectDeliverables = ['Album Cover', 'Promotional Video'];

  useEffect(() => {
    console.log(higherEducationAsciiArt);
  }, []);

  return (
    <div className="client-project-container bg-black w-full h-auto">
      <SEO
        title="Higher Education | Client Projects"
        description="Explore a client project for Cashmanny by contemporary artist Sean Donny, showcasing his creative direction expertise."
        type="article"
        url="https://seandonny.com/client-projects/higher_education"
        image={cashmannyBanner}
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
              src={cashmannyBanner}
              alt="A matrix sequence of code rain"
              title="Matrix Code Rain"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="client-project-hero-image w-full h-full object-cover object-center"
              width={1920}
              height={1080}
              initial={{ scale: 1, opacity: 1 }}
              animate={controls}
            />
          </figure>
          {/* height of safe space is set to the same as parallaxValue */}
          <div
            className="client-project-hero-safe-space w-full"
            style={{ height: `${parallaxValue}px` }}
          >
            &nbsp;
          </div>
          <article className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-[#39ff85] selection:text-black">
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
                Cashmanny hit me on Instagram: "Yo bro! I really love your work"
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
                "I'm tryna drop a tape called Higher Education"...
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
                "I'ts a play on words, because I just finished uni, but I'm also
                speaking from the perspective where it's like I'm giving{' '}
                <mark className="bg-[#39ff85] text-black">
                  <a
                    href="https://www.musixmatch.com/lyrics/Cashmanny/Need-2#:~:text=That%27s%20cause%20nothing,care%20of%20itself"
                    target="_blank"
                    className="hover:underline"
                  >
                    advice
                  </a>
                </mark>
                {'"...'}
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
                "I want to be at a very high place to reflect that, and also
                reference my journey so far, and where I am heading to"
              </motion.p>
            </div>
            <figure className="client-project-client-illustration-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
              <motion.img
                className="client-project-client-illustration-image"
                src={cmIllustration}
                alt="An illustration of Cashmanny reaching into a portal without personal items coming out of it"
                title="Cashmanny"
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
          <article className="client-project-references-container bg-[#00c049] selection:bg-black selection:text-zinc-200 w-full h-auto flex flex-col items-center justify-center p-5 pt-10">
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
                setTranslateReference(viewportSize.width / 7);
              }}
              onTouchEnd={() => {
                setTranslateReference(viewportSize.width / 7);
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
                  src={cmReference1}
                  alt="Matrix Code Rain"
                  title="Matrix Code Rain"
                  loading="lazy"
                  className="client-project-reference-image-1"
                  style={{ zIndex: 1, border: 'solid black 1px' }}
                />
              </motion.figure>
              <motion.figure className="client-project-reference-image-container-2 h-auto w-1/3 flex flex-col items-center justify-center">
                <img
                  src={cmReference2}
                  alt="Naruto at the top af a high rise building"
                  title="Naruto"
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
                  src={cmReference3}
                  alt="A shot from the show Pantheon where they are observing multiple simulated universes"
                  title="Pantheon"
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
              <p className="client-project-reference-description-text w-full hd:w-4/5 m-auto font-custom text-lg md:text-xl hd:text-3xl text-left text-black font-normal leading-snug">
                Manny sent over a lot of references, which is always a great
                thing, it helped shape the vision he was tryna build. Among
                those were a lot of{' '}
                <a
                  href="https://en.wikipedia.org/wiki/The_Matrix"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Matrix
                </a>{' '}
                references, a theme seen across his{' '}
                <a
                  href="https://music.apple.com/gb/album/life-is-a-game/1626193090"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  other projects
                </a>
                . I studied the Wachowskis' work and developed a procedural
                system in Blender for this project.
                <br />
                <br />
                The Naruto reference stood out to me, not only because I grew up
                watching him, but because the artist did a great job of placing
                him within the context of his environment. Manny emphasized the
                high vantage point of the reference, so it was integral for me
                to translate that concept to the cover.
                <br />
                <br />
                The third was an idea I borrowed from{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Pantheon_(TV_series)"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Pantheon
                </a>
                , a show I had just watched around the time. It talked about a
                lot of interesting concepts, one that stood out to me was their
                take on the Universe. I snuck this concept into the project's{' '}
                <a
                  href="https://www.instagram.com/p/DScd-BNjQhu/"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  promotional video
                </a>
                .
              </p>
            </div>
          </article>
          <article
            className="client-project-sketch-choices-container h-auto w-full flex flex-col pb-24 pt-40 px-5 overflow-x-clip selection:bg-[#39ff85] selection:text-black"
            // Graph paper background
            style={greenGraphPaper}
          >
            <div className="client-project-sketch-choices-heading text-center">
              <motion.h1
                ref={cashmannyCoverSketchesHeaderRef}
                className="client-project-sketch-choices-heading-header text-zinc-200 font-custom font-semibold tracking-tight lg:text-massive2 text-6xl lg:leading-massive1 drop-shadow-lg"
                style={{
                  textShadow: '2px 2px 0 rgba(0, 0, 0, 0.7)',
                }}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: cashmannyCoverSketchesHeaderPosition,
                  opacity: cashmannyCoverSketchesHeaderOpacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                Sketches
              </motion.h1>
            </div>
            <div className="client-project-sketch-choices-description px-5 py-1">
              <motion.p
                className="client-project-sketch-choices-description-paragraph text-center font-custom text-xl text-zinc-400 mt-5 w-full font-semibold xl:px-80 drop-shadow-md"
                style={{
                  textShadow: '1px 1px 0 rgba(0, 0, 0, 0.7)',
                }}
                ref={cashmannyCoverSketchesParagraphRef}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: cashmannyCoverSketchesParagraphPosition,
                  opacity: cashmannyCoverSketchesParagraphOpacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                I sent over a few sketches to work out which composition he
                wanted.
              </motion.p>
            </div>
            <motion.div
              className="client-project-sketch-choices-image-stack-container h-auto w-full flex flex-col"
              ref={cashmannyCoverSketchesRef}
              initial={{ opacity: 0 }}
              animate={{
                translateY: cashmannyCoverSketchesPosition,
                opacity: cashmannyCoverSketchesOpacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            >
              <CardStack items={sketchesData} />
            </motion.div>
          </article>
          <div className="client-project-final-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-[#39ff85] selection:text-black">
            <div className="client-project-final-sketch h-full w-full hd:w-1/2">
              <article className="client-project-final-sketch-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-final-sketch-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={higherEducationData.CoverDraft.src}
                    alt={higherEducationData.CoverDraft.alt}
                    title={higherEducationData.CoverDraft.title}
                    loading="lazy"
                    className="mb-2"
                    ref={cashmannyCoverDraftRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cashmannyCoverDraftPosition,
                      opacity: cashmannyCoverDraftOpacity,
                    }}
                    onClick={handleImageFocus(higherEducationData.CoverDraft)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-sketch-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={cashmannyCoverDraftHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cashmannyCoverDraftHeaderPosition,
                      opacity: cashmannyCoverDraftHeaderOpacity,
                    }}
                  >
                    {higherEducationData.CoverDraft.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={cashmannyCoverDraftParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cashmannyCoverDraftParagraphPosition,
                      opacity: cashmannyCoverDraftParagraphOpacity,
                    }}
                  >
                    {higherEducationData.CoverDraft.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="client-project-final-single-cover h-full w-full hd:w-1/2">
              <article className="client-project-final-single-cover-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-final-single-cover-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={higherEducationData.FinalCover.src}
                    alt={higherEducationData.FinalCover.alt}
                    title={higherEducationData.FinalCover.title}
                    loading="lazy"
                    className="mb-2"
                    ref={cashmannyFinalCoverRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cashmannyFinalCoverPosition,
                      opacity: cashmannyFinalCoverOpacity,
                    }}
                    onClick={handleImageFocus(higherEducationData.FinalCover)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-single-cover-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={cashmannyFinalCoverHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cashmannyFinalCoverHeaderPosition,
                      opacity: cashmannyFinalCoverHeaderOpacity,
                    }}
                  >
                    {higherEducationData.FinalCover.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={cashmannyFinalCoverParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cashmannyFinalCoverParagraphPosition,
                      opacity: cashmannyFinalCoverParagraphOpacity,
                    }}
                  >
                    {higherEducationData.FinalCover.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <article
            className="client-project-mood-board-container h-auto w-full flex flex-col pb-24 pt-40 px-5 overflow-x-clip selection:bg-[#39ff85] selection:text-black"
            // Graph paper background
            style={greenGraphPaper}
          >
            <div className="client-project-mood-board-heading text-center">
              <motion.h1
                ref={cashmannyMoodBoardHeaderRef}
                className="client-project-mood-board-heading-header text-zinc-200 font-custom font-semibold tracking-tight lg:text-massive2 text-6xl lg:leading-massive1 drop-shadow-lg"
                style={{
                  textShadow: '2px 2px 0 rgba(0, 0, 0, 0.7)',
                }}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: cashmannyMoodBoardHeaderPosition,
                  opacity: cashmannyMoodBoardHeaderOpacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                Mood Board
              </motion.h1>
            </div>
            <div className="client-project-mood-board-description px-5 py-1">
              <motion.p
                className="client-project-mood-board-description-paragraph text-center font-custom text-xl text-zinc-400 mt-5 w-full font-semibold xl:px-80 drop-shadow-md"
                style={{
                  textShadow: '1px 1px 0 rgba(0, 0, 0, 0.7)',
                }}
                ref={cashmannyMoodBoardParagraphRef}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: cashmannyMoodBoardParagraphPosition,
                  opacity: cashmannyMoodBoardParagraphOpacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                I took inspo from a lot of places, notably Akira, Alberto
                Mielgo, Alien, Blade Runner: 2049, & Mary Had A Little Lamb.
              </motion.p>
            </div>
            <motion.div
              className="client-project-mood-board-image-stack-container h-auto w-full flex flex-col"
              ref={cashmannyMoodBoardRef}
              initial={{ opacity: 0 }}
              animate={{
                translateY: cashmannyMoodBoardPosition,
                opacity: cashmannyMoodBoardOpacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            >
              <CardStack items={moodBoardData} />
            </motion.div>
          </article>
          <div className="client-project-3D-technical-achievements-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-[#39ff85] selection:text-black">
            <div className="client-project-focusrite-model h-full w-full hd:w-1/2">
              <article className="client-project-focusrite-model-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-focusrite-model-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={higherEducationData.Focusrite.src}
                    alt={higherEducationData.Focusrite.alt}
                    title={higherEducationData.Focusrite.title}
                    loading="lazy"
                    className="mb-2"
                    ref={cashmannyFocusriteRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cashmannyFocusritePosition,
                      opacity: cashmannyFocusriteOpacity,
                    }}
                    onClick={handleImageFocus(higherEducationData.Focusrite)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-focusrite-model-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={cashmannyFocusriteHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cashmannyFocusriteHeaderPosition,
                      opacity: cashmannyFocusriteHeaderOpacity,
                    }}
                  >
                    {higherEducationData.Focusrite.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={cashmannyFocusriteParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cashmannyFocusriteParagraphPosition,
                      opacity: cashmannyFocusriteParagraphOpacity,
                    }}
                  >
                    {higherEducationData.Focusrite.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="client-project-matrix-code-rain h-full w-full hd:w-1/2">
              <article className="client-project-matrix-code-rain-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-matrix-code-rain-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={higherEducationData.CodeRain.src}
                    alt={higherEducationData.CodeRain.alt}
                    title={higherEducationData.CodeRain.title}
                    loading="lazy"
                    className="mb-2"
                    ref={cashmannyCodeRainRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cashmannyCodeRainPosition,
                      opacity: cashmannyCodeRainOpacity,
                    }}
                    onClick={handleImageFocus(higherEducationData.CodeRain)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-matrix-code-rain-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={cashmannyCodeRainHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cashmannyCodeRainHeaderPosition,
                      opacity: cashmannyCodeRainHeaderOpacity,
                    }}
                  >
                    {higherEducationData.CodeRain.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={cashmannyCodeRainParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cashmannyCodeRainParagraphPosition,
                      opacity: cashmannyCodeRainParagraphOpacity,
                    }}
                  >
                    {higherEducationData.CodeRain.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <div className="w-full h-auto selection:bg-[#39ff85] selection:text-black">
            <ParallaxImageSection
              image={{
                src: cmBlenderGeoNodes,
                alt: 'Blender Geometry Nodes used to make custom procedural Matrix Code Rain for this project',
                width: 1920,
                height: 1080,
              }}
              stickyMode="short"
              mobileAnchoring="left"
              largeAnchoring="center"
              captionHeader="Procedural Setup"
              caption="Matrix code rain generated with custom Geometry Nodes."
              captionPlacement="bottom-left"
            />
          </div>
          <div
            className="w-full h-auto selection:bg-[#39ff85] selection:text-black"
            style={greenGraphPaper}
          >
            <CenteredImageStack items={modelsData} />
          </div>
          <section
            ref={threeViewerSectionRef}
            className="w-full bg-black px-5 py-16 selection:bg-[#39ff85] selection:text-black md:px-10 md:py-24"
          >
            <div className="m-auto flex w-full max-w-7xl flex-col gap-8 hd:flex-row hd:items-center hd:gap-16">
              <div className="w-full hd:w-2/5">
                <h2 className="font-custom text-4xl font-semibold tracking-tight text-zinc-100 md:text-5xl">
                  {oysterCardModel.title}
                </h2>
                <p className="mt-5 font-custom text-lg leading-relaxed text-zinc-400 md:text-xl">
                  {oysterCardModel.description}
                </p>
              </div>
              <div className="w-full hd:w-3/5">
                {shouldLoadThreeViewer ? (
                  <Suspense
                    fallback={
                      <div className="flex min-h-[300px] w-full items-center justify-center rounded-2xl border border-[#39ff85]/40 bg-black/80 px-6 py-12 font-custom text-sm uppercase tracking-[0.2em] text-[#39ff85] md:text-base">
                        Loading 3D viewer...
                      </div>
                    }
                  >
                    <ThreeModelViewer
                      modelUrl={oysterCardModel.model}
                      title={oysterCardModel.title}
                    />
                  </Suspense>
                ) : (
                  <div className="flex min-h-[300px] w-full items-center justify-center rounded-2xl border border-[#39ff85]/40 bg-black/80 px-6 py-12 font-custom text-sm uppercase tracking-[0.2em] text-[#39ff85] md:text-base">
                    3D viewer loads on approach
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="client-project-streaming-preview w-full h-auto p-5 hd:py-20 hd:px-0 flex flex-col items-center justify-center bg-zinc-900 selection:bg-[#39ff85]">
            <iframe
              id="embedPlayer"
              src="https://embed.music.apple.com/gb/album/higher-education/1860190677?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
              height="450px"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
              style={embeddedAppleMusicStyle}
            ></iframe>
          </section>
          <section className="client-project-deliverables-container h-auto w-full bg-[#00c049] selection:bg-black selection:text-zinc-200 p-5">
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
        <ProjectNavigation
          navColour={navigationMap.HigherEducation.navColour}
          navPreviousTitle={navigationMap.HigherEducation.previousTitle}
          navPreviousSrc={navigationMap.HigherEducation.previousSrc}
          navNextTitle={navigationMap.HigherEducation.nextTitle}
          navNextSrc={navigationMap.HigherEducation.nextSrc}
        />
      </div>

      <ScrollTooltip />
    </div>
  );
};

export default HigherEducation;
