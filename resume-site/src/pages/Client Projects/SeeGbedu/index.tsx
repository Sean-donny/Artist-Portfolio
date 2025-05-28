import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, anticipate } from 'framer-motion';
import splitProjectDetailData from './data';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import GalleryModal from '../../../components/GalleryModal';
import { ModalContent } from '../../../interfaces/ModalContent';
import { useNavigate } from 'react-router-dom';

// Image imports
import sgHeroBanner from '/optimised/len_banner.jpg';
import goldenboyLen from '/optimised/len_illustration.png';
import SEO from '../../../components/SEO/SEO';

const SeeGbedu = () => {
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
  const goldenboyLenRef = useRef(null);
  const goldenboyLenInView = useInView(goldenboyLenRef, { once: true });
  const [goldenboyLenOpacity, setgoldenboyLenOpacity] = useState(0);
  const [goldenboyLenPosition, setgoldenboyLenPosition] = useState(20);

  useEffect(() => {
    if (goldenboyLenInView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setgoldenboyLenOpacity(1);
        setgoldenboyLenPosition(0);
      }, 50);
    } else {
      setgoldenboyLenOpacity(0);
      setgoldenboyLenPosition(20);
    }
  }, [goldenboyLenInView, scrollY]);

  const goldenboyLenHeaderRef = useRef(null);
  const goldenboyLenHeaderInView = useInView(goldenboyLenHeaderRef, {
    once: true,
  });
  const [goldenboyLenHeaderOpacity, setgoldenboyLenHeaderOpacity] = useState(0);
  const [goldenboyLenHeaderPosition, setgoldenboyLenHeaderPosition] =
    useState(20);

  useEffect(() => {
    if (goldenboyLenHeaderInView && scrollY > parallaxValue / 2.5) {
      setgoldenboyLenHeaderOpacity(1);
      setgoldenboyLenHeaderPosition(0);
    } else {
      setgoldenboyLenHeaderOpacity(0);
      setgoldenboyLenHeaderPosition(20);
    }
  }, [goldenboyLenHeaderInView, scrollY]);

  const goldenboyLenP1Ref = useRef(null);
  const goldenboyLenP1InView = useInView(goldenboyLenP1Ref, {
    once: true,
  });
  const [goldenboyLenP1Opacity, setgoldenboyLenP1Opacity] = useState(0);
  const [goldenboyLenP1Position, setgoldenboyLenP1Position] = useState(20);

  useEffect(() => {
    if (goldenboyLenP1InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setgoldenboyLenP1Opacity(1);
        setgoldenboyLenP1Position(0);
      }, 50);
    } else {
      setgoldenboyLenP1Opacity(0);
      setgoldenboyLenP1Position(20);
    }
  }, [goldenboyLenP1InView, scrollY]);

  const goldenboyLenP2Ref = useRef(null);
  const goldenboyLenP2InView = useInView(goldenboyLenP2Ref, {
    once: true,
  });
  const [goldenboyLenP2Opacity, setgoldenboyLenP2Opacity] = useState(0);
  const [goldenboyLenP2Position, setgoldenboyLenP2Position] = useState(20);

  useEffect(() => {
    if (goldenboyLenP2InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setgoldenboyLenP2Opacity(1);
        setgoldenboyLenP2Position(0);
      }, 50);
    } else {
      setgoldenboyLenP2Opacity(0);
      setgoldenboyLenP2Position(20);
    }
  }, [goldenboyLenP2InView, scrollY]);

  const goldenboyLenP3Ref = useRef(null);
  const goldenboyLenP3InView = useInView(goldenboyLenP3Ref, {
    once: true,
  });
  const [goldenboyLenP3Opacity, setgoldenboyLenP3Opacity] = useState(0);
  const [goldenboyLenP3Position, setgoldenboyLenP3Position] = useState(20);

  useEffect(() => {
    if (goldenboyLenP3InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setgoldenboyLenP3Opacity(1);
        setgoldenboyLenP3Position(0);
      }, 50);
    } else {
      setgoldenboyLenP3Opacity(0);
      setgoldenboyLenP3Position(20);
    }
  }, [goldenboyLenP3InView, scrollY]);

  // Uses custom hook to generate ref, and states for opacity & position values
  const {
    ref: lenVisualiserRef,
    opacity: lenVisualiserOpacity,
    position: lenVisualiserPosition,
  } = useInViewAnimation();

  const {
    ref: lenVisualiserHeaderRef,
    opacity: lenVisualiserHeaderOpacity,
    position: lenVisualiserHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: lenInspoRef,
    opacity: lenInspoOpacity,
    position: lenInspoPosition,
  } = useInViewAnimation();

  const {
    ref: lenInspoDescriptionHeaderRef,
    opacity: lenInspoDescriptionHeaderOpacity,
    position: lenInspoDescriptionHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: lenInspoDescriptionParagraphRef,
    opacity: lenInspoDescriptionParagraphOpacity,
    position: lenInspoDescriptionParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: lenMBSAPosterRef,
    opacity: lenMBSAPosterOpacity,
    position: lenMBSAPosterPosition,
  } = useInViewAnimation();

  const {
    ref: lenMBSAPosterDescriptionHeaderRef,
    opacity: lenMBSAPosterDescriptionHeaderOpacity,
    position: lenMBSAPosterDescriptionHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: lenMBSAPosterDescriptionParagraphRef,
    opacity: lenMBSAPosterDescriptionParagraphOpacity,
    position: lenMBSAPosterDescriptionParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: lenCoverDraftRef,
    opacity: lenCoverDraftOpacity,
    position: lenCoverDraftPosition,
  } = useInViewAnimation();

  const {
    ref: lenCoverDraftHeaderRef,
    opacity: lenCoverDraftHeaderOpacity,
    position: lenCoverDraftHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: lenCoverDraftParagraphRef,
    opacity: lenCoverDraftParagraphOpacity,
    position: lenCoverDraftParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: lenCoverRef,
    opacity: lenCoverOpacity,
    position: lenCoverPosition,
  } = useInViewAnimation();

  const {
    ref: lenCoverHeaderRef,
    opacity: lenCoverHeaderOpacity,
    position: lenCoverHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: lenCoverParagraphRef,
    opacity: lenCoverParagraphOpacity,
    position: lenCoverParagraphPosition,
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
    'Single Cover',

    'Visualiser - Personal Exploration',
  ];

  // Declarations for Project Navigate section
  const projectNavigateRef = useRef(null);
  const projectNavigateInView = useInView(projectNavigateRef);

  const projectNavigateScope = useMenuAnimation(projectNavigateInView);

  const previousProject = "Mike's World";
  const nextProject = 'Crown Bounce';

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

  useEffect(() => {
    // Load TikTok embed script dynamically if not already loaded
    const scriptId = 'tiktok-embed';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="client-project-container bg-black w-full h-auto">
      <SEO
        title="See Gbedu | Client Projects"
        description="Explore a client project for Len by contemporary artist Sean Donny, showcasing his creative direction expertise."
        type="article"
        url="https://seandonny.com/client-projects/see-gbedu"
        image={sgHeroBanner}
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
              src={sgHeroBanner}
              alt="Len dancing to See Gbedu"
              title="See Gbedu Dance Scene"
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
          <article className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-[#c5a554] selection:text-black">
            <div className="client-project-design-goal-description-container h-auto w-full hd:w-3/5 hd:max-h-[1500px] xl:pl-20">
              <motion.h1
                ref={goldenboyLenHeaderRef}
                className="client-project-design-goal-description-header text-zinc-200 font-custom font-semibold italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mb-5"
                initial={{ opacity: 0 }}
                animate={{
                  translateY: goldenboyLenHeaderPosition,
                  opacity: goldenboyLenHeaderOpacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                Len hit me on Twitter: "yoo&nbsp;brodie"
              </motion.h1>
              <motion.p
                className="client-project-design-goal-description-paragraph-1 text-zinc-400 font-custom font-medium italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={goldenboyLenP1Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: goldenboyLenP1Position,
                  opacity: goldenboyLenP1Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                "i really fw that cover you made"...
              </motion.p>
              <motion.p
                className="client-project-design-goal-description-paragraph-2 text-zinc-400 font-custom font-normal italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={goldenboyLenP2Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: goldenboyLenP2Position,
                  opacity: goldenboyLenP2Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                "i was wondering if you can make it square + put{' '}
                <mark className="bg-[#c5a554] text-zinc-200">
                  <a
                    href="https://genius.com/Len-uk-see-gbedu-lyrics#:~:text=from%20the%20top%20like%20a%20drum%20kit%20(C%27mon)-,See%20gbedu%2C%20gbedu%2C%20gbedu%20(Hey%2C%20hey),-See%20gbedu%2C%20gbedu%2C%20gbedu%20(Uh%2Dhuh)%0A%0A%5BVerse"
                    target="_blank"
                    className="hover:underline"
                  >
                    SEE&nbsp;GBEDU
                  </a>
                </mark>{' '}
                at the bottom"...
              </motion.p>
              <motion.p
                className="client-project-design-goal-description-paragraph-3 text-zinc-400 font-custom font-extralight italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={goldenboyLenP3Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: goldenboyLenP3Position,
                  opacity: goldenboyLenP3Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                "i wanna use it for the next single"
              </motion.p>
            </div>
            <figure className="client-project-design-goal-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
              <motion.img
                className="client-project-design-goal-image"
                src={goldenboyLen}
                alt="Goldenboy Len"
                title="Goldenboy Len"
                loading="eager"
                ref={goldenboyLenRef}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: goldenboyLenPosition,
                  opacity: goldenboyLenOpacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              />
            </figure>
          </article>
          <div className="client-project-initial-concepts-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-[#c5a554] selection:text-black">
            <div className="client-project-initial-concepts-album-cover h-full w-full hd:w-1/2">
              <article className="client-project-initial-concepts-album-cover-concept-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-initial-concepts-album-cover-concept-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={splitProjectDetailData.Draft1.src}
                    alt={splitProjectDetailData.Draft1.alt}
                    title={splitProjectDetailData.Draft1.title}
                    loading="lazy"
                    className="mb-2"
                    ref={lenInspoRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: lenInspoPosition,
                      opacity: lenInspoOpacity,
                    }}
                    onClick={handleImageFocus(splitProjectDetailData.Draft1)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-initial-concepts-album-cover-concept-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={lenInspoDescriptionHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: lenInspoDescriptionHeaderPosition,
                      opacity: lenInspoDescriptionHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.Draft1.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={lenInspoDescriptionParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: lenInspoDescriptionParagraphPosition,
                      opacity: lenInspoDescriptionParagraphOpacity,
                    }}
                  >
                    {splitProjectDetailData.Draft1.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="client-project-initial-concepts-single-cover h-full w-full hd:w-1/2">
              <article className="client-project-initial-concepts-single-cover-concept-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-initial-concepts-single-cover-concept-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={splitProjectDetailData.Draft2.src}
                    alt={splitProjectDetailData.Draft2.alt}
                    title={splitProjectDetailData.Draft2.title}
                    loading="lazy"
                    className="mb-2"
                    ref={lenMBSAPosterRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: lenMBSAPosterPosition,
                      opacity: lenMBSAPosterOpacity,
                    }}
                    onClick={handleImageFocus(splitProjectDetailData.Draft2)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-initial-concepts-single-cover-concept-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={lenMBSAPosterDescriptionHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: lenMBSAPosterDescriptionHeaderPosition,
                      opacity: lenMBSAPosterDescriptionHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.Draft2.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={lenMBSAPosterDescriptionParagraphRef}
                    style={{ whiteSpace: 'pre-line' }}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: lenMBSAPosterDescriptionParagraphPosition,
                      opacity: lenMBSAPosterDescriptionParagraphOpacity,
                    }}
                  >
                    {splitProjectDetailData.Draft2.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <section
            className={`client-project-visualiser-single-cover-container h-auto w-full p-5 ${
              isGrayscale ? 'bg-black' : 'bg-[#c5a554] selection:bg-black'
            } transition-all`}
          >
            <div className="client-project-visualiser-single-cover-items flex flex-col hd:flex-row h-auto w-full items-center justify-center">
              <div
                className={`client-project-visualiser-single-cover-container w-full h-full flex flex-col items-center justify-center p-5 hd:p-20 ${
                  isGrayscale ? 'grayscale' : ''
                } transition-all`}
              >
                <div className="client-project-visualiser-single-cover-image-container w-auto h-4/5">
                  <motion.img
                    className="client-project-visualiser-single-cover-image w-[648px] h-auto mb-2"
                    src={splitProjectDetailData.VisualiserIllustration.src}
                    alt={splitProjectDetailData.VisualiserIllustration.alt}
                    title={splitProjectDetailData.VisualiserIllustration.title}
                    loading="lazy"
                    ref={lenVisualiserRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: lenVisualiserPosition,
                      opacity: lenVisualiserOpacity,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleMouseEnter}
                    onTouchEnd={handleMouseLeave}
                    onClick={handleImageFocus(
                      splitProjectDetailData.VisualiserIllustration,
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                  <div className="client-project-visualiser-single-cover-image-description w-full h-1/5">
                    <motion.h2
                      ref={lenVisualiserHeaderRef}
                      initial={{ opacity: 0 }}
                      animate={{
                        translateY: lenVisualiserHeaderPosition,
                        opacity: lenVisualiserHeaderOpacity,
                      }}
                      className="client-project-visualiser-single-cover-image-description-text font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold"
                    >
                      {splitProjectDetailData.VisualiserIllustration.header}
                    </motion.h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="client-project-final-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-[#c5a554] selection:text-black">
            <div className="client-project-final-album-cover h-full w-full hd:w-1/2">
              <article className="client-project-final-album-cover-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-final-album-cover-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={splitProjectDetailData.OriginalCover.src}
                    alt={splitProjectDetailData.OriginalCover.alt}
                    title={splitProjectDetailData.OriginalCover.title}
                    loading="lazy"
                    className="mb-2"
                    ref={lenCoverDraftRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: lenCoverDraftPosition,
                      opacity: lenCoverDraftOpacity,
                    }}
                    onClick={handleImageFocus(
                      splitProjectDetailData.OriginalCover,
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-album-cover-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={lenCoverDraftHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: lenCoverDraftHeaderPosition,
                      opacity: lenCoverDraftHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.OriginalCover.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={lenCoverDraftParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: lenCoverDraftParagraphPosition,
                      opacity: lenCoverDraftParagraphOpacity,
                    }}
                  >
                    {splitProjectDetailData.OriginalCover.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="client-project-final-tracklist h-full w-full hd:w-1/2">
              <article className="client-project-final-tracklist-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-final-tracklist-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={splitProjectDetailData.RemixCover.src}
                    alt={splitProjectDetailData.RemixCover.alt}
                    title={splitProjectDetailData.RemixCover.title}
                    loading="lazy"
                    className="mb-2"
                    ref={lenCoverRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: lenCoverPosition,
                      opacity: lenCoverOpacity,
                    }}
                    onClick={handleImageFocus(
                      splitProjectDetailData.RemixCover,
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-tracklist-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={lenCoverHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: lenCoverHeaderPosition,
                      opacity: lenCoverHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.RemixCover.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={lenCoverParagraphRef}
                    style={{ whiteSpace: 'pre-line' }}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: lenCoverParagraphPosition,
                      opacity: lenCoverParagraphOpacity,
                    }}
                  >
                    {splitProjectDetailData.RemixCover.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <section className="client-project-visualiser-video-container h-auto w-full py-5">
            <div className="client-project-visualiser-video h-auto w-full flex flex-col items-center justify-center p-5">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@sean.donny/video/7499014545466232070"
                data-video-id="7499014545466232070"
                style={{ maxWidth: '307px', minWidth: '307px' }}
              >
                <section>
                  <a
                    target="_blank"
                    title="@sean.donny"
                    href="https://www.tiktok.com/@sean.donny?refer=embed"
                    rel="noopener noreferrer"
                  >
                    @sean.donny
                  </a>{' '}
                  Had the opportunity to work on the cover art for Len’s latest
                  single “See Gbedu” 🇬🇧⚜️
                  <a
                    title="len"
                    target="_blank"
                    href="https://www.tiktok.com/tag/len?refer=embed"
                    rel="noopener noreferrer"
                  >
                    #len
                  </a>{' '}
                  <a
                    title="animation"
                    target="_blank"
                    href="https://www.tiktok.com/tag/animation?refer=embed"
                    rel="noopener noreferrer"
                  >
                    #animation
                  </a>{' '}
                  <a
                    title="artistsoftiktok"
                    target="_blank"
                    href="https://www.tiktok.com/tag/artistsoftiktok?refer=embed"
                    rel="noopener noreferrer"
                  >
                    #artistsoftiktok
                  </a>{' '}
                  <a
                    target="_blank"
                    title="♬ original sound - Sean"
                    href="https://www.tiktok.com/music/original-sound-7499014551761881862?refer=embed"
                    rel="noopener noreferrer"
                  >
                    ♬ original sound - Sean
                  </a>
                </section>
              </blockquote>
            </div>
          </section>
          <section className="client-project-deliverables-container h-auto w-full bg-[#c5a554] selection:bg-black selection:text-black p-5">
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
        <nav className="client-project-navigate h-[468px] w-full bg-red-600 selection:bg-black selection:text-black p-5">
          <ul
            className="client-project-navigate-list flex flex-row justify-between items-center h-full overflow-hidden"
            ref={projectNavigateScope}
          >
            <li
              className="client-project-navigate-previous h-full w-2/5 hd:w-1/4 flex flex-col items-start justify-center cursor-pointer"
              onClick={() => {
                handleNavigate('client-projects/mikes-world');
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
                handleNavigate('client-projects/crown-bounce');
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

export default SeeGbedu;
