import { anticipate, motion, useAnimation, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ModalContent } from '../../../interfaces/ModalContent';
import GalleryModal from '../../../components/GalleryModal';
import { useNavigate } from 'react-router-dom';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import popwaveData from './data';

// Image imports
import pwBanner from '/optimised/popwave_comic_panel_banner.jpg';
import pwCharacter from '/optimised/popwave_character.png';
import pwStar1 from '/optimised/popwave_star_logo_1.png';
import pwStar2 from '/optimised/popwave_star_logo_2.png';
import pwStar3 from '/optimised/popwave_star_logo_3.png';
import pwTshirtLive from '/optimised/popwave_star_logo_shirt_design_on_model.jpg';
import pwTshirtMockup from '/optimised/popwave_star_logo_shirt_design.jpg';

const Popwave = () => {
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
    ref: pwDraftSelectionRef,
    opacity: pwDraftSelectionOpacity,
    position: pwDraftSelectionPosition,
  } = useInViewAnimation();

  const {
    ref: pwDraftSelectionDescriptionRef,
    opacity: pwDraftSelectionDescriptionOpacity,
    position: pwDraftSelectionDescriptionPosition,
  } = useInViewAnimation();

  const {
    ref: pwSketchedComicPanelRef,
    opacity: pwSketchedComicPanelOpacity,
    position: pwSketchedComicPanelPosition,
  } = useInViewAnimation();

  const {
    ref: pwSketchedComicPanelHeaderRef,
    opacity: pwSketchedComicPanelHeaderOpacity,
    position: pwSketchedComicPanelHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: pwSketchedComicPanelParagraphRef,
    opacity: pwSketchedComicPanelParagraphOpacity,
    position: pwSketchedComicPanelParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: pwComicPanelRef,
    opacity: pwComicPanelOpacity,
    position: pwComicPanelPosition,
  } = useInViewAnimation();

  const {
    ref: pwComicPanelHeaderRef,
    opacity: pwComicPanelHeaderOpacity,
    position: pwComicPanelHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: pwComicPanelParagraphRef,
    opacity: pwComicPanelParagraphOpacity,
    position: pwComicPanelParagraphPosition,
  } = useInViewAnimation();

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
    'Logos',

    'T-shirt Mockups',

    'Manufacturing Technical Assets',

    'Comic Panel',

    'Sticker Assets',
  ];

  // Declarations for Project Navigate section
  const projectNavigateRef = useRef(null);
  const projectNavigateInView = useInView(projectNavigateRef);

  const projectNavigateScope = useMenuAnimation(projectNavigateInView);

  const previousProject = 'Family';
  const nextProject = "Mike's World";

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
      {modalOpen && (
        <GalleryModal modalContent={modalContent} onClose={handleImageExit} />
      )}
      <div className="client-project-sections w-full h-auto flex flex-col items-center justify-center">
        <div
          className="client-project-hero w-full h-auto overflow-hidden sticky top-0 pointer-events-none"
          style={{
            transform: `translate(0px, ${-heroTranslate}px)`,
            zIndex: 1,
          }}
        >
          <motion.img
            src={pwBanner}
            alt="An illustration man pointing a gun at another man"
            className="client-project-hero-image w-full h-full object-cover object-center"
            initial={{ scale: 1, opacity: 1 }}
            animate={controls}
          />
        </div>
        {/* height of safe space is set to the same as parallaxValue */}
        <div className={`client-project-hero-safe-space h-[400px] w-full`}>
          &nbsp;
        </div>
        <div className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-orange-600 selection:text-zinc-200">
          <div className="client-project-design-goal-description-container h-auto w-full hd:w-3/5 hd:max-h-[1500px] xl:pl-20">
            <motion.h2
              ref={heroHeaderRef}
              className="client-project-design-goal-description-header text-zinc-200 font-custom font-semibold italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mb-5"
              initial={{ opacity: 0 }}
              animate={{
                translateY: heroHeaderPosition,
                opacity: heroHeaderOpacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            >
              Patrick Star hit me on Instagram: "Let's&nbsp;work"
            </motion.h2>
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
              "I want a Popwave logo with a star design, kinda like them{' '}
              <mark className="bg-orange-600 text-zinc-200">
                <a
                  href="https://graphicdome.com/blog/y2k-2000s-graphic-design-trend/"
                  target="_blank"
                  className="hover:underline"
                >
                  Y2K
                </a>
              </mark>{' '}
              ones"...
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
              "I'd like a comic strip illustration showcasing our new{' '}
              <mark className="bg-orange-600 text-zinc-200">
                <a
                  href="https://www.instagram.com/p/CiQE-8Fj4Tp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  className="hover:underline"
                >
                  T-shirt
                </a>
              </mark>{' '}
              to complement the marketing when it drops"...
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
              "We also want to use the illustration as a sticker"
            </motion.p>
          </div>
          <div className="client-project-design-goal-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
            <motion.img
              className="client-project-design-goal-image"
              src={pwCharacter}
              ref={heroRef}
              initial={{ opacity: 0 }}
              animate={{
                translateY: heroPosition,
                opacity: heroOpacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            />
          </div>
        </div>
        <div className="client-project-draft-selection-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-orange-600 selection:text-zinc-200">
          <div className="client-project-draft-selection-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
            <motion.img
              className="client-project-draft-selection-image w-auto h-full hd:h-auto object-cover object-center"
              src={popwaveData.SketchShortlistCover.src}
              ref={pwDraftSelectionRef}
              initial={{ opacity: 0 }}
              animate={{
                translateY: pwDraftSelectionPosition,
                opacity: pwDraftSelectionOpacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            />
          </div>
          <div className="client-project-draft-selection-description-container h-auto w-full hd:w-3/5 hd:max-h-[1500px] xl:pr-20">
            <div
              className="client-project-draft-selection-description-paragraph"
              ref={pwDraftSelectionDescriptionRef}
            >
              {popwaveData.SketchShortlistCover.paragraph.map(
                (paragraph, index) => {
                  return (
                    <motion.p
                      className="client-project-draft-selection-description-paragraph-text text-zinc-400 font-custom font-normal tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-4xl text-2xl lg:leading-relaxed mt-5"
                      initial={{ opacity: 0 }}
                      animate={{
                        translateY: pwDraftSelectionDescriptionPosition,
                        opacity: pwDraftSelectionDescriptionOpacity,
                      }}
                      transition={{
                        delay: 0.3,
                        ease: 'anticipate',
                        duration: 1,
                      }}
                      key={index}
                    >
                      {paragraph}
                    </motion.p>
                  );
                },
              )}
            </div>
          </div>
        </div>
        <div className="client-project-final-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-orange-600 selection:text-zinc-200">
          <div className="client-project-refined-sketch h-full w-full hd:w-1/2">
            <div className="client-project-refined-sketch-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
              <div className="client-project-refined-sketch-artwork h-3/5 w-full flex flex-col items-center justify-center">
                <motion.img
                  src={popwaveData.SketchedComicPanel.src}
                  alt={popwaveData.SketchedComicPanel.alt}
                  className="mb-2"
                  ref={pwSketchedComicPanelRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: pwSketchedComicPanelPosition,
                    opacity: pwSketchedComicPanelOpacity,
                  }}
                  onClick={handleImageFocus(popwaveData.SketchedComicPanel)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                />
              </div>
              <div className="client-project-refined-sketch-description h-2/5 w-full flex flex-col items-center justify-center">
                <motion.h4
                  className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                  ref={pwSketchedComicPanelHeaderRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: pwSketchedComicPanelHeaderPosition,
                    opacity: pwSketchedComicPanelHeaderOpacity,
                  }}
                >
                  {popwaveData.SketchedComicPanel.header}
                </motion.h4>
                <motion.p
                  className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                  ref={pwSketchedComicPanelParagraphRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: pwSketchedComicPanelParagraphPosition,
                    opacity: pwSketchedComicPanelParagraphOpacity,
                  }}
                >
                  {popwaveData.SketchedComicPanel.paragraph}
                </motion.p>
              </div>
            </div>
          </div>
          <div className="client-project-final-illustration h-full w-full hd:w-1/2">
            <div className="client-project-final-illustration-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
              <div className="client-project-final-illustration-artwork h-3/5 w-full flex flex-col items-center justify-center">
                <motion.img
                  src={popwaveData.ComicPanel.src}
                  alt={popwaveData.ComicPanel.alt}
                  className="mb-2"
                  ref={pwComicPanelRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: pwComicPanelPosition,
                    opacity: pwComicPanelOpacity,
                  }}
                  onClick={handleImageFocus(popwaveData.ComicPanel)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                />
              </div>
              <div className="client-project-final-illustration-description h-2/5 w-full flex flex-col items-center justify-center">
                <motion.h4
                  className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                  ref={pwComicPanelHeaderRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: pwComicPanelHeaderPosition,
                    opacity: pwComicPanelHeaderOpacity,
                  }}
                >
                  {popwaveData.ComicPanel.header}
                </motion.h4>
                <motion.p
                  className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                  ref={pwComicPanelParagraphRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: pwComicPanelParagraphPosition,
                    opacity: pwComicPanelParagraphOpacity,
                  }}
                >
                  {popwaveData.ComicPanel.paragraph}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="client-project-tshirt-container w-full h-auto flex flex-col hd:flex-row items-center justify-center p-5 selection:bg-orange-600">
          <div className="client-project-tshirt-live-container w-full h-auto hd:w-1/2 flex flex-col items-center justify-center p-5">
            <img
              className="client-project-tshirt-live"
              src={pwTshirtLive}
              alt="Popwave Star logo T-shirt on a model"
            />
          </div>
          <div className="client-project-tshirt-mockup-container w-full h-auto hd:w-1/2 flex flex-col items-center justify-center p-5">
            <img
              className="client-project-tshirt-mockup"
              src={pwTshirtMockup}
              alt="Popwave Star logo T-shirt mockup"
            />
          </div>
        </div>
        <div className="client-project-logos-container w-full h-auto bg-zinc-900 flex flex-col hd:flex-row items-center justify-center p-5 selection:bg-orange-600">
          <div className="client-project-logo-1-container">
            <img
              className="client-project-logo-1"
              src={pwStar1}
              alt="Popwave Star logo: Black"
            />
          </div>
          <div className="client-project-logo-2-container">
            <img
              className="client-project-logo-2"
              src={pwStar2}
              alt="Popwave Star logo: Black and Yellow"
            />
          </div>
          <div className="client-project-logo-3-container">
            <img
              className="client-project-logo-3"
              src={pwStar3}
              alt="Popwave Star logo: White"
            />
          </div>
        </div>
        <div className="client-project-deliverables-container h-auto w-full bg-orange-600 selection:bg-black selection:text-zinc-200 p-5">
          <div className="client-project-deliverables flex flex-col items-start justify-center">
            <div className="client-project-deliverables-container w-full hd:w-3/5 m-auto h-auto flex flex-col items-center justify-center my-10 p-5 overflow-hidden">
              <motion.h4
                className="client-project-deliverables-header font-custom text-4xl sm:text-5xl text-left text-black w-full font-semibold"
                ref={projectDeliverablesHeaderRef}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: projectDeliverablesHeaderPosition,
                  opacity: projectDeliverablesHeaderOpacity,
                }}
              >
                Project Deliverables
              </motion.h4>
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
        </div>
        <nav className="client-project-navigate h-[468px] w-full bg-green-600 selection:bg-black selection:text-zinc-200 p-5">
          <ul
            className="client-project-navigate-list flex flex-row justify-between items-center h-full overflow-hidden"
            ref={projectNavigateScope}
          >
            <li
              className="client-project-navigate-previous h-full w-2/5 hd:w-1/4 flex flex-col items-start justify-center cursor-pointer"
              onClick={() => {
                handleNavigate('client-projects/family');
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
                handleNavigate('client-projects/mikes-world');
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

export default Popwave;
