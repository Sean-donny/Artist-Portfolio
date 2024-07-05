import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, anticipate } from 'framer-motion';
import splitProjectDetailData from './data';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import GalleryModal from '../../../components/GalleryModal';
import { ModalContent } from '../../../interfaces/ModalContent';
import { useNavigate } from 'react-router-dom';

// Image imports
import cbHeroBanner from '/optimised/odunsi_the_engine_crown_bounce_banner.jpg';
import odunsiMecha from '/optimised/odunsi_mecha_illustration.png';
import SEO from '../../../components/SEO/SEO';

const CrownBounce = () => {
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
  const odunsiMechaRef = useRef(null);
  const odunsiMechaInView = useInView(odunsiMechaRef, { once: true });
  const [odunsiMechaOpacity, setodunsiMechaOpacity] = useState(0);
  const [odunsiMechaPosition, setodunsiMechaPosition] = useState(20);

  useEffect(() => {
    if (odunsiMechaInView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setodunsiMechaOpacity(1);
        setodunsiMechaPosition(0);
      }, 50);
    } else {
      setodunsiMechaOpacity(0);
      setodunsiMechaPosition(20);
    }
  }, [odunsiMechaInView, scrollY]);

  const odunsiMechaHeaderRef = useRef(null);
  const odunsiMechaHeaderInView = useInView(odunsiMechaHeaderRef, {
    once: true,
  });
  const [odunsiMechaHeaderOpacity, setodunsiMechaHeaderOpacity] = useState(0);
  const [odunsiMechaHeaderPosition, setodunsiMechaHeaderPosition] =
    useState(20);

  useEffect(() => {
    if (odunsiMechaHeaderInView && scrollY > parallaxValue / 2.5) {
      setodunsiMechaHeaderOpacity(1);
      setodunsiMechaHeaderPosition(0);
    } else {
      setodunsiMechaHeaderOpacity(0);
      setodunsiMechaHeaderPosition(20);
    }
  }, [odunsiMechaHeaderInView, scrollY]);

  const odunsiMechaP1Ref = useRef(null);
  const odunsiMechaP1InView = useInView(odunsiMechaP1Ref, {
    once: true,
  });
  const [odunsiMechaP1Opacity, setodunsiMechaP1Opacity] = useState(0);
  const [odunsiMechaP1Position, setodunsiMechaP1Position] = useState(20);

  useEffect(() => {
    if (odunsiMechaP1InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setodunsiMechaP1Opacity(1);
        setodunsiMechaP1Position(0);
      }, 50);
    } else {
      setodunsiMechaP1Opacity(0);
      setodunsiMechaP1Position(20);
    }
  }, [odunsiMechaP1InView, scrollY]);

  const odunsiMechaP2Ref = useRef(null);
  const odunsiMechaP2InView = useInView(odunsiMechaP2Ref, {
    once: true,
  });
  const [odunsiMechaP2Opacity, setodunsiMechaP2Opacity] = useState(0);
  const [odunsiMechaP2Position, setodunsiMechaP2Position] = useState(20);

  useEffect(() => {
    if (odunsiMechaP2InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setodunsiMechaP2Opacity(1);
        setodunsiMechaP2Position(0);
      }, 50);
    } else {
      setodunsiMechaP2Opacity(0);
      setodunsiMechaP2Position(20);
    }
  }, [odunsiMechaP2InView, scrollY]);

  const odunsiMechaP3Ref = useRef(null);
  const odunsiMechaP3InView = useInView(odunsiMechaP3Ref, {
    once: true,
  });
  const [odunsiMechaP3Opacity, setodunsiMechaP3Opacity] = useState(0);
  const [odunsiMechaP3Position, setodunsiMechaP3Position] = useState(20);

  useEffect(() => {
    if (odunsiMechaP3InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setodunsiMechaP3Opacity(1);
        setodunsiMechaP3Position(0);
      }, 50);
    } else {
      setodunsiMechaP3Opacity(0);
      setodunsiMechaP3Position(20);
    }
  }, [odunsiMechaP3InView, scrollY]);

  // Uses custom hook to generate ref, and states for opacity & position values
  const {
    ref: odunsiVisualiserDraftRef,
    opacity: odunsiVisualiserDraftOpacity,
    position: odunsiVisualiserDraftPosition,
  } = useInViewAnimation();

  const {
    ref: odunsiVisualiserDraftHeaderRef,
    opacity: odunsiVisualiserDraftHeaderOpacity,
    position: odunsiVisualiserDraftHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: odunsiAlbumDraft1Ref,
    opacity: odunsiAlbumDraft1Opacity,
    position: odunsiAlbumDraft1Position,
  } = useInViewAnimation();

  const {
    ref: odunsiAlbumDraft1DescriptionHeaderRef,
    opacity: odunsiAlbumDraft1DescriptionHeaderOpacity,
    position: odunsiAlbumDraft1DescriptionHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: odunsiAlbumDraft1DescriptionParagraphRef,
    opacity: odunsiAlbumDraft1DescriptionParagraphOpacity,
    position: odunsiAlbumDraft1DescriptionParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: odunsiSingleDraft1Ref,
    opacity: odunsiSingleDraft1Opacity,
    position: odunsiSingleDraft1Position,
  } = useInViewAnimation();

  const {
    ref: odunsiSingleDraft1DescriptionHeaderRef,
    opacity: odunsiSingleDraft1DescriptionHeaderOpacity,
    position: odunsiSingleDraft1DescriptionHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: odunsiSingleDraft1DescriptionParagraphRef,
    opacity: odunsiSingleDraft1DescriptionParagraphOpacity,
    position: odunsiSingleDraft1DescriptionParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: odunsiFinalOriginalCoverRef,
    opacity: odunsiFinalOriginalCoverOpacity,
    position: odunsiFinalOriginalCoverPosition,
  } = useInViewAnimation();

  const {
    ref: odunsiFinalOriginalCoverHeaderRef,
    opacity: odunsiFinalOriginalCoverHeaderOpacity,
    position: odunsiFinalOriginalCoverHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: odunsiFinalOriginalCoverParagraphRef,
    opacity: odunsiFinalOriginalCoverParagraphOpacity,
    position: odunsiFinalOriginalCoverParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: odunsiAlbumRemixCoverRef,
    opacity: odunsiAlbumRemixCoverOpacity,
    position: odunsiAlbumRemixCoverPosition,
  } = useInViewAnimation();

  const {
    ref: odunsiAlbumRemixCoverHeaderRef,
    opacity: odunsiAlbumRemixCoverHeaderOpacity,
    position: odunsiAlbumRemixCoverHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: odunsiAlbumRemixCoverParagraphRef,
    opacity: odunsiAlbumRemixCoverParagraphOpacity,
    position: odunsiAlbumRemixCoverParagraphPosition,
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

    'Remix Cover',

    'YouTube Visualiser',

    'Spotify Canvas Video',

    'TikTok Promotional Video',
  ];

  // Declarations for Project Navigate section
  const projectNavigateRef = useRef(null);
  const projectNavigateInView = useInView(projectNavigateRef);

  const projectNavigateScope = useMenuAnimation(projectNavigateInView);

  const previousProject = "Mike's World";
  const nextProject = 'Menace Talk';

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
        title="Crown Bounce | Client Projects"
        description="Explore a client project for Odunsi (The Engine) by contemporary artist Sean Donny, showcasing his creative direction expertise."
        type="article"
        url="https://seandonny.com/client-projects/crown-bounce"
        image={cbHeroBanner}
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
              src={cbHeroBanner}
              alt="Chrome skull floating in a dark void"
              className="client-project-hero-image w-full h-full object-cover object-center"
              initial={{ scale: 1, opacity: 1 }}
              animate={controls}
            />
          </figure>
          {/* height of safe space is set to the same as parallaxValue */}
          <div className={`client-project-hero-safe-space h-[400px] w-full`}>
            &nbsp;
          </div>
          <article className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-fuchsia-600 selection:text-zinc-200">
            <div className="client-project-design-goal-description-container h-auto w-full hd:w-3/5 hd:max-h-[1500px] xl:pl-20">
              <motion.h2
                ref={odunsiMechaHeaderRef}
                className="client-project-design-goal-description-header text-zinc-200 font-custom font-semibold italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mb-5"
                initial={{ opacity: 0 }}
                animate={{
                  translateY: odunsiMechaHeaderPosition,
                  opacity: odunsiMechaHeaderOpacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                Odunsi hit me on IG "Let's do one together"
              </motion.h2>
              <motion.p
                className="client-project-design-goal-description-paragraph-1 text-zinc-400 font-custom font-medium italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={odunsiMechaP1Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: odunsiMechaP1Position,
                  opacity: odunsiMechaP1Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                "I want something sexy, with a lot of motion"...
              </motion.p>
              <motion.p
                className="client-project-design-goal-description-paragraph-2 text-zinc-400 font-custom font-normal italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={odunsiMechaP2Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: odunsiMechaP2Position,
                  opacity: odunsiMechaP2Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                "So I've got this record with Minz & Elias called Crown Bounce.
                I need you to take some inspo from the{' '}
                <mark className="bg-fuchsia-600 text-zinc-200">
                  <a
                    href="https://youtu.be/wigZvnfIue4?si=VqH23VPgwPapxgXY"
                    target="_blank"
                    className="hover:underline"
                  >
                    music&nbsp;video
                  </a>
                </mark>{' '}
                and work some magic"...
              </motion.p>
              <motion.p
                className="client-project-design-goal-description-paragraph-3 text-zinc-400 font-custom font-extralight italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={odunsiMechaP3Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: odunsiMechaP3Position,
                  opacity: odunsiMechaP3Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                "I want the attention centred on the girls"
              </motion.p>
            </div>
            <figure className="client-project-design-goal-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
              <motion.img
                className="client-project-design-goal-image"
                src={odunsiMecha}
                ref={odunsiMechaRef}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: odunsiMechaPosition,
                  opacity: odunsiMechaOpacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              />
            </figure>
          </article>
          <div className="client-project-initial-concepts-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-fuchsia-600 selection:text-zinc-200">
            <div className="client-project-initial-concepts-album-cover h-full w-full hd:w-1/2">
              <article className="client-project-initial-concepts-album-cover-concept-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-initial-concepts-album-cover-concept-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={splitProjectDetailData.Draft1.src}
                    alt={splitProjectDetailData.Draft1.alt}
                    className="mb-2"
                    ref={odunsiAlbumDraft1Ref}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: odunsiAlbumDraft1Position,
                      opacity: odunsiAlbumDraft1Opacity,
                    }}
                    onClick={handleImageFocus(splitProjectDetailData.Draft1)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-initial-concepts-album-cover-concept-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h4
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={odunsiAlbumDraft1DescriptionHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: odunsiAlbumDraft1DescriptionHeaderPosition,
                      opacity: odunsiAlbumDraft1DescriptionHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.Draft1.header}
                  </motion.h4>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={odunsiAlbumDraft1DescriptionParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: odunsiAlbumDraft1DescriptionParagraphPosition,
                      opacity: odunsiAlbumDraft1DescriptionParagraphOpacity,
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
                    className="mb-2"
                    ref={odunsiSingleDraft1Ref}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: odunsiSingleDraft1Position,
                      opacity: odunsiSingleDraft1Opacity,
                    }}
                    onClick={handleImageFocus(splitProjectDetailData.Draft2)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-initial-concepts-single-cover-concept-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h4
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={odunsiSingleDraft1DescriptionHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: odunsiSingleDraft1DescriptionHeaderPosition,
                      opacity: odunsiSingleDraft1DescriptionHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.Draft2.header}
                  </motion.h4>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={odunsiSingleDraft1DescriptionParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY:
                        odunsiSingleDraft1DescriptionParagraphPosition,
                      opacity: odunsiSingleDraft1DescriptionParagraphOpacity,
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
              isGrayscale ? 'bg-black' : 'bg-fuchsia-600 selection:bg-black'
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
                    ref={odunsiVisualiserDraftRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: odunsiVisualiserDraftPosition,
                      opacity: odunsiVisualiserDraftOpacity,
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
                    <motion.h4
                      ref={odunsiVisualiserDraftHeaderRef}
                      initial={{ opacity: 0 }}
                      animate={{
                        translateY: odunsiVisualiserDraftHeaderPosition,
                        opacity: odunsiVisualiserDraftHeaderOpacity,
                      }}
                      className="client-project-visualiser-single-cover-image-description-text font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold"
                    >
                      {splitProjectDetailData.VisualiserIllustration.header}
                    </motion.h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="client-project-final-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-fuchsia-600 selection:text-zinc-200">
            <div className="client-project-final-album-cover h-full w-full hd:w-1/2">
              <article className="client-project-final-album-cover-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-final-album-cover-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={splitProjectDetailData.OriginalCover.src}
                    alt={splitProjectDetailData.OriginalCover.alt}
                    className="mb-2"
                    ref={odunsiFinalOriginalCoverRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: odunsiFinalOriginalCoverPosition,
                      opacity: odunsiFinalOriginalCoverOpacity,
                    }}
                    onClick={handleImageFocus(
                      splitProjectDetailData.OriginalCover,
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-album-cover-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h4
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={odunsiFinalOriginalCoverHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: odunsiFinalOriginalCoverHeaderPosition,
                      opacity: odunsiFinalOriginalCoverHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.OriginalCover.header}
                  </motion.h4>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={odunsiFinalOriginalCoverParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: odunsiFinalOriginalCoverParagraphPosition,
                      opacity: odunsiFinalOriginalCoverParagraphOpacity,
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
                    className="mb-2"
                    ref={odunsiAlbumRemixCoverRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: odunsiAlbumRemixCoverPosition,
                      opacity: odunsiAlbumRemixCoverOpacity,
                    }}
                    onClick={handleImageFocus(
                      splitProjectDetailData.RemixCover,
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-tracklist-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h4
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={odunsiAlbumRemixCoverHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: odunsiAlbumRemixCoverHeaderPosition,
                      opacity: odunsiAlbumRemixCoverHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.RemixCover.header}
                  </motion.h4>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={odunsiAlbumRemixCoverParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: odunsiAlbumRemixCoverParagraphPosition,
                      opacity: odunsiAlbumRemixCoverParagraphOpacity,
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
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/ff-XcLz22Bs?si=fMpl3eFiKmldRP2s"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </section>
          <section className="client-project-deliverables-container h-auto w-full bg-fuchsia-600 selection:bg-black selection:text-zinc-200 p-5">
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
          </section>
        </main>
        <nav className="client-project-navigate h-[468px] w-full bg-pink-500 selection:bg-black selection:text-zinc-200 p-5">
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
                handleNavigate('client-projects/menace-talk');
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

export default CrownBounce;
