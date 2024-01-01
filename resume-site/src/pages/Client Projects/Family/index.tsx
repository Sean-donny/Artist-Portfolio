import { anticipate, motion, useAnimation, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ModalContent } from '../../../interfaces/ModalContent';
import GalleryModal from '../../../components/GalleryModal';
import { useNavigate } from 'react-router-dom';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import familyData from './data';

// Image imports
import fmBanner from '/optimised/smada_family_banner.jpg';
import fmSketch from '/optimised/smada_family_sketch.jpg';

const Family = () => {
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
    ref: fmCoverSketchRef,
    opacity: fmCoverSketchOpacity,
    position: fmCoverSketchPosition,
  } = useInViewAnimation();

  const {
    ref: fmCoverSketchHeaderRef,
    opacity: fmCoverSketchHeaderOpacity,
    position: fmCoverSketchHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: fmCoverSketchParagraphRef,
    opacity: fmCoverSketchParagraphOpacity,
    position: fmCoverSketchParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: fmSingleCoverRef,
    opacity: fmSingleCoverOpacity,
    position: fmSingleCoverPosition,
  } = useInViewAnimation();

  const {
    ref: fmSingleCoverHeaderRef,
    opacity: fmSingleCoverHeaderOpacity,
    position: fmSingleCoverHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: fmSingleCoverParagraphRef,
    opacity: fmSingleCoverParagraphOpacity,
    position: fmSingleCoverParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: fmFamilySingleMetricsRef,
    opacity: fmFamilySingleMetricsOpacity,
    position: fmFamilySingleMetricsPosition,
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
  };

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
    'Single Cover',

    'Promotional Video',

    'Streaming Metrics Promotional Materials',

    'Branding Assets',

    'World-building Materials',
  ];

  // Declarations for Project Navigate section
  const projectNavigateRef = useRef(null);
  const projectNavigateInView = useInView(projectNavigateRef);

  const projectNavigateScope = useMenuAnimation(projectNavigateInView);

  const previousProject = 'NüNiverse';
  const nextProject = 'Popwave';

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
            src={fmBanner}
            alt="A tight close up of Smada performing"
            className="client-project-hero-image w-full h-full object-cover object-center"
            initial={{ scale: 1, opacity: 1 }}
            animate={controls}
          />
        </div>
        {/* height of safe space is set to the same as parallaxValue */}
        <div className={`client-project-hero-safe-space h-[400px] w-full`}>
          &nbsp;
        </div>
        <div className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-lime-300 selection:text-black">
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
              Smada hit me on Instagram: "We should do something"
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
              "I like what you did with that drawing of{' '}
              <mark className="bg-lime-300 text-black">
                <a
                  href="https://www.instagram.com/p/CMcwODenq3x/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  className="hover:underline"
                >
                  Santi and Odunsi
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
              "I want to do something for my new single, it's called Family"...
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
              "It's special to me because I'm giving a shout-out to everyone who
              has brought me to this point"
            </motion.p>
          </div>
          <div className="client-project-design-goal-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
            <motion.img
              className="client-project-design-goal-image w-auto h-full hd:h-auto object-cover object-center"
              src={fmSketch}
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
        <div className="client-project-final-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-lime-300 selection:text-black">
          <div className="client-project-single-sketch h-full w-full hd:w-1/2">
            <div className="client-project-single-sketch-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
              <div className="client-project-single-sketch-artwork h-3/5 w-full flex flex-col items-center justify-center">
                <motion.img
                  src={familyData.FamilyCoverSketch.src}
                  alt={familyData.FamilyCoverSketch.alt}
                  className="mb-2"
                  ref={fmCoverSketchRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: fmCoverSketchPosition,
                    opacity: fmCoverSketchOpacity,
                  }}
                  onClick={handleImageFocus(familyData.FamilyCoverSketch)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                />
              </div>
              <div className="client-project-single-sketch-description h-2/5 w-full flex flex-col items-center justify-center">
                <motion.h4
                  className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                  ref={fmCoverSketchHeaderRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: fmCoverSketchHeaderPosition,
                    opacity: fmCoverSketchHeaderOpacity,
                  }}
                >
                  {familyData.FamilyCoverSketch.header}
                </motion.h4>
                <motion.p
                  className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                  ref={fmCoverSketchParagraphRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: fmCoverSketchParagraphPosition,
                    opacity: fmCoverSketchParagraphOpacity,
                  }}
                >
                  {familyData.FamilyCoverSketch.paragraph}
                </motion.p>
              </div>
            </div>
          </div>
          <div className="client-project-final-single-cover h-full w-full hd:w-1/2">
            <div className="client-project-final-single-cover-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
              <div className="client-project-final-single-cover-artwork h-3/5 w-full flex flex-col items-center justify-center">
                <motion.img
                  src={familyData.FamilySingleCover.src}
                  alt={familyData.FamilySingleCover.alt}
                  className="mb-2"
                  ref={fmSingleCoverRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: fmSingleCoverPosition,
                    opacity: fmSingleCoverOpacity,
                  }}
                  onClick={handleImageFocus(familyData.FamilySingleCover)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                />
              </div>
              <div className="client-project-final-single-cover-description h-2/5 w-full flex flex-col items-center justify-center">
                <motion.h4
                  className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                  ref={fmSingleCoverHeaderRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: fmSingleCoverHeaderPosition,
                    opacity: fmSingleCoverHeaderOpacity,
                  }}
                >
                  {familyData.FamilySingleCover.header}
                </motion.h4>
                <motion.p
                  className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                  ref={fmSingleCoverParagraphRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: fmSingleCoverParagraphPosition,
                    opacity: fmSingleCoverParagraphOpacity,
                  }}
                >
                  {familyData.FamilySingleCover.paragraph}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="client-project-streaming-and-promotional-container w-full h-auto flex flex-col hd:flex-row items-center justify-center bg-zinc-900 hd:py-20 selection:bg-lime-300">
          <div className="client-project-streaming-preview w-full h-[330px] hd:w-1/2 p-5 hd:py-20 hd:px-0 flex flex-col items-center justify-center">
            <iframe
              id="embedPlayer"
              src="https://embed.music.apple.com/us/album/family/1579815445?i=1579815446&amp;app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
              height="175px"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
              style={embedStyle}
            ></iframe>
          </div>
          <div className="client-project-streaming-metrics-container h-auto w-full hd:w-1/2 p-5 flex flex-col items-center justify-center">
            <motion.img
              src={familyData.FamilySingleMetrics.src}
              alt={familyData.FamilySingleMetrics.alt}
              className="client-project-streaming-metrics-image mb-2 p-5"
              ref={fmFamilySingleMetricsRef}
              initial={{ opacity: 0 }}
              animate={{
                translateY: fmFamilySingleMetricsPosition,
                opacity: fmFamilySingleMetricsOpacity,
              }}
              onClick={handleImageFocus(familyData.FamilySingleMetrics)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
        </div>
        <div className="client-project-deliverables-container h-auto w-full bg-lime-400 selection:bg-black selection:text-zinc-200 p-5">
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
        <nav className="client-project-navigate h-[468px] w-full bg-sky-500 selection:bg-black selection:text-zinc-200 p-5">
          <ul
            className="client-project-navigate-list flex flex-row justify-between items-center h-full overflow-hidden"
            ref={projectNavigateScope}
          >
            <li
              className="client-project-navigate-previous h-full w-2/5 hd:w-1/4 flex flex-col items-start justify-center cursor-pointer"
              onClick={() => {
                handleNavigate('client-projects/nuniverse');
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
                handleNavigate('client-projects/popwave');
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

export default Family;
