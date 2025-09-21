import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, anticipate } from 'framer-motion';
import splitProjectDetailData from './data';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import GalleryModal from '../../../components/GalleryModal';
import { ModalContent } from '../../../interfaces/ModalContent';
import { useNavigate } from 'react-router-dom';

// Image imports
import ypHeroBanner from '/optimised/psychoyp_banner.jpg';
import bigYP from '/optimised/psychoyp_purple_susano.png';
import SEO from '../../../components/SEO/SEO';

const PsychoYP = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({
    src: undefined,
    alt: undefined,
    title: undefined,
    year: undefined,
  });

  const [tooltipVisible, setTooltipVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const hasntScrolled = window.scrollY < 30;
      if (!hasntScrolled) {
        setTooltipVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  // Controls used to animate motion properties
  const controls = useAnimation();

  // Control Hero Y axis position
  const [heroTranslate, setHeroTranslate] = useState(0);

  // Sets the depth for the hero parallax effect
  const parallaxValue = 400;

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

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
  const psychoypRef = useRef(null);
  const psychoypInView = useInView(psychoypRef, { once: true });
  const [psychoypOpacity, setPsychoypOpacity] = useState(0);
  const [psychoypPosition, setPsychoypPosition] = useState(20);

  useEffect(() => {
    if (psychoypInView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setPsychoypOpacity(1);
        setPsychoypPosition(0);
      }, 50);
    } else {
      setPsychoypOpacity(0);
      setPsychoypPosition(20);
    }
  }, [psychoypInView, scrollY]);

  const psychoypHeaderRef = useRef(null);
  const psychoypHeaderInView = useInView(psychoypHeaderRef, {
    once: true,
  });
  const [psychoypHeaderOpacity, setPsychoypHeaderOpacity] = useState(0);
  const [psychoypHeaderPosition, setPsychoypHeaderPosition] = useState(20);

  useEffect(() => {
    if (psychoypHeaderInView && scrollY > parallaxValue / 2.5) {
      setPsychoypHeaderOpacity(1);
      setPsychoypHeaderPosition(0);
    } else {
      setPsychoypHeaderOpacity(0);
      setPsychoypHeaderPosition(20);
    }
  }, [psychoypHeaderInView, scrollY]);

  const psychoypP1Ref = useRef(null);
  const psychoypP1InView = useInView(psychoypP1Ref, {
    once: true,
  });
  const [psychoypP1Opacity, setPsychoypP1Opacity] = useState(0);
  const [psychoypP1Position, setPsychoypP1Position] = useState(20);

  useEffect(() => {
    if (psychoypP1InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setPsychoypP1Opacity(1);
        setPsychoypP1Position(0);
      }, 50);
    } else {
      setPsychoypP1Opacity(0);
      setPsychoypP1Position(20);
    }
  }, [psychoypP1InView, scrollY]);

  const psychoypP2Ref = useRef(null);
  const psychoypP2InView = useInView(psychoypP2Ref, {
    once: true,
  });
  const [psychoypP2Opacity, setPsychoypP2Opacity] = useState(0);
  const [psychoypP2Position, setPsychoypP2Position] = useState(20);

  useEffect(() => {
    if (psychoypP2InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setPsychoypP2Opacity(1);
        setPsychoypP2Position(0);
      }, 50);
    } else {
      setPsychoypP2Opacity(0);
      setPsychoypP2Position(20);
    }
  }, [psychoypP2InView, scrollY]);

  const psychoypP3Ref = useRef(null);
  const psychoypP3InView = useInView(psychoypP3Ref, {
    once: true,
  });
  const [psychoypP3Opacity, setPsychoypP3Opacity] = useState(0);
  const [psychoypP3Position, setPsychoypP3Position] = useState(20);

  useEffect(() => {
    if (psychoypP3InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setPsychoypP3Opacity(1);
        setPsychoypP3Position(0);
      }, 50);
    } else {
      setPsychoypP3Opacity(0);
      setPsychoypP3Position(20);
    }
  }, [psychoypP3InView, scrollY]);

  // Uses custom hook to generate ref, and states for opacity & position values
  const {
    ref: psychoypIllustrationRef,
    opacity: psychoypIllustrationOpacity,
    position: psychoypIllustrationPosition,
  } = useInViewAnimation();

  const {
    ref: psychoypIllustrationHeaderRef,
    opacity: psychoypIllustrationHeaderOpacity,
    position: psychoypIllustrationHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: psychoypFanArtRef,
    opacity: psychoypFanArtOpacity,
    position: psychoypFanArtPosition,
  } = useInViewAnimation();

  const {
    ref: psychoypFanArtDescriptionHeaderRef,
    opacity: psychoypFanArtDescriptionHeaderOpacity,
    position: psychoypFanArtDescriptionHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: psychoypFanArtDescriptionParagraphRef,
    opacity: psychoypFanArtDescriptionParagraphOpacity,
    position: psychoypFanArtDescriptionParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: psychoypHunnidBricksRef,
    opacity: psychoypHunnidBricksOpacity,
    position: psychoypHunnidBricksPosition,
  } = useInViewAnimation();

  const {
    ref: psychoypHunnidBricksDescriptionHeaderRef,
    opacity: psychoypHunnidBricksDescriptionHeaderOpacity,
    position: psychoypHunnidBricksDescriptionHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: psychoypHunnidBricksDescriptionParagraphRef,
    opacity: psychoypHunnidBricksDescriptionParagraphOpacity,
    position: psychoypHunnidBricksDescriptionParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: psychoypRapRiddimRef,
    opacity: psychoypRapRiddimOpacity,
    position: psychoypRapRiddimPosition,
  } = useInViewAnimation();

  const {
    ref: psychoypRapRiddimHeaderRef,
    opacity: psychoypRapRiddimHeaderOpacity,
    position: psychoypRapRiddimHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: psychoypRapRiddimParagraphRef,
    opacity: psychoypRapRiddimParagraphOpacity,
    position: psychoypRapRiddimParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: psychoypNationalAnthemRef,
    opacity: psychoypNationalAnthemOpacity,
    position: psychoypNationalAnthemPosition,
  } = useInViewAnimation();

  const {
    ref: psychoypNationalAnthemHeaderRef,
    opacity: psychoypNationalAnthemHeaderOpacity,
    position: psychoypNationalAnthemHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: psychoypNationalAnthemParagraphRef,
    opacity: psychoypNationalAnthemParagraphOpacity,
    position: psychoypNationalAnthemParagraphPosition,
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
    'RAP RIDDIM Cover',

    'National Anthem Cover',

    '100 Bricks Cover (Scrapped)',

    'Fan Art - Personal Projects',
  ];

  // Declarations for Project Navigate section
  const projectNavigateRef = useRef(null);
  const projectNavigateInView = useInView(projectNavigateRef);

  const projectNavigateScope = useMenuAnimation(projectNavigateInView);

  const previousProject = 'Jaiye';
  const nextProject = 'See Gbedu';

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
    window.scrollTo(0, 0);
  };

  // Controls greyscale effect applied to visualiser cover section
  const [isGrayscale, setIsGrayscale] = useState(false);

  const handleMouseEnter = () => {
    setIsGrayscale(true);
  };

  const handleMouseLeave = () => {
    setIsGrayscale(false);
  };

  return (
    <div className="client-project-container bg-black w-full h-auto">
      <SEO
        title="PsychoYP | Client Projects"
        description="Explore a client project for PsychoYP by contemporary artist Sean Donny, showcasing his creative direction expertise."
        type="article"
        url="https://seandonny.com/client-projects/psychoyp"
        image={ypHeroBanner}
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
              src={ypHeroBanner}
              alt="PsychoYP doing a money spread"
              title="PsychoYP money spread"
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
          <article className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-fuchsia-500 selection:text-black">
            <div className="client-project-design-goal-description-container h-auto w-full hd:w-3/5 hd:max-h-[1500px] xl:pl-20">
              <motion.h1
                ref={psychoypHeaderRef}
                className="client-project-design-goal-description-header text-zinc-200 font-custom font-semibold italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mb-5"
                initial={{ opacity: 0 }}
                animate={{
                  translateY: psychoypHeaderPosition,
                  opacity: psychoypHeaderOpacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                I was chanting{' '}
                <mark className="bg-fuchsia-500 text-black">
                  <a
                    href="https://music.apple.com/gb/album/ypszn-explicit/1567228585"
                    target="_blank"
                    className="hover:underline"
                  >
                    YPSZN
                  </a>
                </mark>{' '}
                in the crowd at his show in Abuja, he noticed the{' '}
                <mark
                  className="bg-fuchsia-500 text-black hover:underline cursor-pointer"
                  onClick={handleImageFocus(splitProjectDetailData.FanArt)}
                >
                  painting
                </mark>{' '}
                I did of him...
              </motion.h1>
              <motion.p
                className="client-project-design-goal-description-paragraph-1 text-zinc-400 font-custom font-medium italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={psychoypP1Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: psychoypP1Position,
                  opacity: psychoypP1Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                "This is sick yo!{' '}
                <mark
                  className="bg-fuchsia-500 text-black hover:underline cursor-pointer"
                  onClick={handleImageFocus(splitProjectDetailData.FanPhoto)}
                >
                  Pull up backstage
                </mark>
                "...
              </motion.p>
              <motion.p
                className="client-project-design-goal-description-paragraph-2 text-zinc-400 font-custom font-normal italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={psychoypP2Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: psychoypP2Position,
                  opacity: psychoypP2Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                "We gotta tap in someday"...
              </motion.p>
              <motion.p
                className="client-project-design-goal-description-paragraph-3 text-zinc-400 font-custom font-extralight italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={psychoypP3Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: psychoypP3Position,
                  opacity: psychoypP3Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                2 years later, he had something for us to work on
              </motion.p>
            </div>
            <figure className="client-project-client-illustration-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
              <motion.img
                className="client-project-client-illustration"
                src={bigYP}
                alt="PsychoYP with purple flames and susano"
                title="PsychoYP purple susano"
                loading="eager"
                ref={psychoypRef}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: psychoypPosition,
                  opacity: psychoypOpacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              />
            </figure>
          </article>
          <div className="client-project-initial-concepts-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-fuchsia-500 selection:text-black">
            <div className="client-project-initial-concepts-album-cover h-full w-full hd:w-1/2">
              <article className="client-project-initial-concepts-album-cover-concept-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-initial-concepts-album-cover-concept-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={splitProjectDetailData.FanArt.src}
                    alt={splitProjectDetailData.FanArt.alt}
                    title={splitProjectDetailData.FanArt.title}
                    loading="lazy"
                    className="mb-2"
                    ref={psychoypFanArtRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: psychoypFanArtPosition,
                      opacity: psychoypFanArtOpacity,
                    }}
                    onClick={handleImageFocus(splitProjectDetailData.FanArt)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-initial-concepts-album-cover-concept-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={psychoypFanArtDescriptionHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: psychoypFanArtDescriptionHeaderPosition,
                      opacity: psychoypFanArtDescriptionHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.FanArt.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={psychoypFanArtDescriptionParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: psychoypFanArtDescriptionParagraphPosition,
                      opacity: psychoypFanArtDescriptionParagraphOpacity,
                    }}
                  >
                    {splitProjectDetailData.FanArt.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="client-project-initial-concepts-single-cover h-full w-full hd:w-1/2">
              <article className="client-project-initial-concepts-single-cover-concept-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-initial-concepts-single-cover-concept-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={splitProjectDetailData.ScrappedCover.src}
                    alt={splitProjectDetailData.ScrappedCover.alt}
                    title={splitProjectDetailData.ScrappedCover.title}
                    loading="lazy"
                    className="mb-2"
                    ref={psychoypHunnidBricksRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: psychoypHunnidBricksPosition,
                      opacity: psychoypHunnidBricksOpacity,
                    }}
                    onClick={handleImageFocus(
                      splitProjectDetailData.ScrappedCover,
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-initial-concepts-single-cover-concept-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={psychoypHunnidBricksDescriptionHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: psychoypHunnidBricksDescriptionHeaderPosition,
                      opacity: psychoypHunnidBricksDescriptionHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.ScrappedCover.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={psychoypHunnidBricksDescriptionParagraphRef}
                    style={{ whiteSpace: 'pre-line' }}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY:
                        psychoypHunnidBricksDescriptionParagraphPosition,
                      opacity: psychoypHunnidBricksDescriptionParagraphOpacity,
                    }}
                  >
                    {splitProjectDetailData.ScrappedCover.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <section
            className={`client-project-illustrated-art-container h-auto w-full p-5 ${
              isGrayscale ? 'bg-black' : 'bg-fuchsia-700 selection:bg-black'
            } transition-all`}
          >
            <div className="client-project-illustrated-art-items flex flex-col hd:flex-row h-auto w-full items-center justify-center">
              <div
                className={`client-project-illustrated-art-container w-full h-full flex flex-col items-center justify-center p-5 hd:p-20 ${
                  isGrayscale ? 'grayscale' : ''
                } transition-all`}
              >
                <div className="client-project-illustrated-art-image-container w-auto h-4/5">
                  <motion.img
                    className="client-project-illustrated-art-image w-[648px] h-auto mb-2"
                    src={splitProjectDetailData.PyschoYPIllustration.src}
                    alt={splitProjectDetailData.PyschoYPIllustration.alt}
                    title={splitProjectDetailData.PyschoYPIllustration.title}
                    loading="lazy"
                    ref={psychoypIllustrationRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: psychoypIllustrationPosition,
                      opacity: psychoypIllustrationOpacity,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleMouseEnter}
                    onTouchEnd={handleMouseLeave}
                    onClick={handleImageFocus(
                      splitProjectDetailData.PyschoYPIllustration,
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                  <div className="client-project-illustrated-art-image-description w-full h-1/5">
                    <motion.h2
                      ref={psychoypIllustrationHeaderRef}
                      initial={{ opacity: 0 }}
                      animate={{
                        translateY: psychoypIllustrationHeaderPosition,
                        opacity: psychoypIllustrationHeaderOpacity,
                      }}
                      className="client-project-illustrated-art-image-description-text font-custom text-3xl text-center text-zinc-200 mt-5 w-full font-semibold"
                    >
                      {splitProjectDetailData.PyschoYPIllustration.header}
                    </motion.h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="client-project-final-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-fuchsia-500 selection:text-black">
            <div className="client-project-rap-riddim-cover h-full w-full hd:w-1/2">
              <article className="client-project-rap-riddim-cover-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-rap-riddim-cover-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={splitProjectDetailData.OriginalCover.src}
                    alt={splitProjectDetailData.OriginalCover.alt}
                    title={splitProjectDetailData.OriginalCover.title}
                    loading="lazy"
                    className="mb-2"
                    ref={psychoypRapRiddimRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: psychoypRapRiddimPosition,
                      opacity: psychoypRapRiddimOpacity,
                    }}
                    onClick={handleImageFocus(
                      splitProjectDetailData.OriginalCover,
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-rap-riddim-cover-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={psychoypRapRiddimHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: psychoypRapRiddimHeaderPosition,
                      opacity: psychoypRapRiddimHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.OriginalCover.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={psychoypRapRiddimParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: psychoypRapRiddimParagraphPosition,
                      opacity: psychoypRapRiddimParagraphOpacity,
                    }}
                  >
                    {splitProjectDetailData.OriginalCover.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="client-project-national-anthem-cover h-full w-full hd:w-1/2">
              <article className="client-project-national-anthem-cover-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-national-anthem-cover-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={splitProjectDetailData.RemixCover.src}
                    alt={splitProjectDetailData.RemixCover.alt}
                    title={splitProjectDetailData.RemixCover.title}
                    loading="lazy"
                    className="mb-2"
                    ref={psychoypNationalAnthemRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: psychoypNationalAnthemPosition,
                      opacity: psychoypNationalAnthemOpacity,
                    }}
                    onClick={handleImageFocus(
                      splitProjectDetailData.RemixCover,
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-national-anthem-cover-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={psychoypNationalAnthemHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: psychoypNationalAnthemHeaderPosition,
                      opacity: psychoypNationalAnthemHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.RemixCover.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={psychoypNationalAnthemParagraphRef}
                    style={{ whiteSpace: 'pre-line' }}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: psychoypNationalAnthemParagraphPosition,
                      opacity: psychoypNationalAnthemParagraphOpacity,
                    }}
                  >
                    {splitProjectDetailData.RemixCover.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <section className="client-project-deliverables-container h-auto w-full bg-fuchsia-500 selection:bg-black selection:text-zinc-200 p-5">
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
        <nav className="client-project-navigate h-[468px] w-full bg-[#c5a554] selection:bg-black selection:text-zinc-200 p-5">
          <ul
            className="client-project-navigate-list flex flex-row justify-between items-center h-full overflow-hidden"
            ref={projectNavigateScope}
          >
            <li
              className="client-project-navigate-previous h-full w-2/5 hd:w-1/4 flex flex-col items-start justify-center cursor-pointer"
              onClick={() => {
                handleNavigate('client-projects/jaiye');
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
                handleNavigate('client-projects/see-gbedu');
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

      {tooltipVisible && (
        <div
          className="fixed bottom-[5%] left-1/2 transform -translate-x-1/2 z-50 text-slate-300 text-sm lg:text-lg flex flex-col items-center pointer-events-none w-60 tooltip-suggestion font-custom font-semibold"
          id="store-navigation-tooltip"
          style={{ display: tooltipVisible ? 'flex' : 'none' }}
        >
          <span
            style={{
              color: 'white',
              textShadow: '0px 2px 5px rgba(0,0,0,0.9)',
              mixBlendMode: 'difference',
            }}
          >
            Scroll to read
          </span>
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M12 19l-4-4m4 4l4-4" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default PsychoYP;
