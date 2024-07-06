import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, anticipate } from 'framer-motion';
import splitProjectDetailData from './data';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import GalleryModal from '../../../components/GalleryModal';
import { ModalContent } from '../../../interfaces/ModalContent';
import { useNavigate } from 'react-router-dom';

// Image imports
import mtHeroBanner from '/optimised/trill_tega_menace_talk_skull_graphic.jpg';
import hoodedTrill from '/optimised/trill_tega_menace_talk_hero.png';

import cld from '../../../utils/cloudinary';
import SEO from '../../../components/SEO/SEO';

const MenaceTalk = () => {
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
  const hoodedTrillRef = useRef(null);
  const hoodedTrillInView = useInView(hoodedTrillRef, { once: true });
  const [hoodedTrillOpacity, setHoodedTrillOpacity] = useState(0);
  const [hoodedTrillPosition, setHoodedTrillPosition] = useState(20);

  useEffect(() => {
    if (hoodedTrillInView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setHoodedTrillOpacity(1);
        setHoodedTrillPosition(0);
      }, 50);
    } else {
      setHoodedTrillOpacity(0);
      setHoodedTrillPosition(20);
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
    if (hoodedTrillHeaderInView && scrollY > parallaxValue / 2.5) {
      setHoodedTrillHeaderOpacity(1);
      setHoodedTrillHeaderPosition(0);
    } else {
      setHoodedTrillHeaderOpacity(0);
      setHoodedTrillHeaderPosition(20);
    }
  }, [hoodedTrillHeaderInView, scrollY]);

  const hoodedTrillP1Ref = useRef(null);
  const hoodedTrillP1InView = useInView(hoodedTrillP1Ref, {
    once: true,
  });
  const [hoodedTrillP1Opacity, setHoodedTrillP1Opacity] = useState(0);
  const [hoodedTrillP1Position, setHoodedTrillP1Position] = useState(20);

  useEffect(() => {
    if (hoodedTrillP1InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setHoodedTrillP1Opacity(1);
        setHoodedTrillP1Position(0);
      }, 50);
    } else {
      setHoodedTrillP1Opacity(0);
      setHoodedTrillP1Position(20);
    }
  }, [hoodedTrillP1InView, scrollY]);

  const hoodedTrillP2Ref = useRef(null);
  const hoodedTrillP2InView = useInView(hoodedTrillP2Ref, {
    once: true,
  });
  const [hoodedTrillP2Opacity, setHoodedTrillP2Opacity] = useState(0);
  const [hoodedTrillP2Position, setHoodedTrillP2Position] = useState(20);

  useEffect(() => {
    if (hoodedTrillP2InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setHoodedTrillP2Opacity(1);
        setHoodedTrillP2Position(0);
      }, 50);
    } else {
      setHoodedTrillP2Opacity(0);
      setHoodedTrillP2Position(20);
    }
  }, [hoodedTrillP2InView, scrollY]);

  const hoodedTrillP3Ref = useRef(null);
  const hoodedTrillP3InView = useInView(hoodedTrillP3Ref, {
    once: true,
  });
  const [hoodedTrillP3Opacity, setHoodedTrillP3Opacity] = useState(0);
  const [hoodedTrillP3Position, setHoodedTrillP3Position] = useState(20);

  useEffect(() => {
    if (hoodedTrillP3InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setHoodedTrillP3Opacity(1);
        setHoodedTrillP3Position(0);
      }, 50);
    } else {
      setHoodedTrillP3Opacity(0);
      setHoodedTrillP3Position(20);
    }
  }, [hoodedTrillP3InView, scrollY]);

  // Uses custom hook to generate ref, and states for opacity & position values
  const {
    ref: trillScrappedDraftRef,
    opacity: trillScrappedDraftOpacity,
    position: trillScrappedDraftPosition,
  } = useInViewAnimation();

  const {
    ref: trillScrappedDraftHeaderRef,
    opacity: trillScrappedDraftHeaderOpacity,
    position: trillScrappedDraftHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: trillAlbumDraft1Ref,
    opacity: trillAlbumDraft1Opacity,
    position: trillAlbumDraft1Position,
  } = useInViewAnimation();

  const {
    ref: trillAlbumDraft1DescriptionHeaderRef,
    opacity: trillAlbumDraft1DescriptionHeaderOpacity,
    position: trillAlbumDraft1DescriptionHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: trillAlbumDraft1DescriptionParagraphRef,
    opacity: trillAlbumDraft1DescriptionParagraphOpacity,
    position: trillAlbumDraft1DescriptionParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: trillSingleDraft1Ref,
    opacity: trillSingleDraft1Opacity,
    position: trillSingleDraft1Position,
  } = useInViewAnimation();

  const {
    ref: trillSingleDraft1DescriptionHeaderRef,
    opacity: trillSingleDraft1DescriptionHeaderOpacity,
    position: trillSingleDraft1DescriptionHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: trillSingleDraft1DescriptionParagraphRef,
    opacity: trillSingleDraft1DescriptionParagraphOpacity,
    position: trillSingleDraft1DescriptionParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: trillFinalAlbumCoverRef,
    opacity: trillFinalAlbumCoverOpacity,
    position: trillFinalAlbumCoverPosition,
  } = useInViewAnimation();

  const {
    ref: trillFinalAlbumCoverHeaderRef,
    opacity: trillFinalAlbumCoverHeaderOpacity,
    position: trillFinalAlbumCoverHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: trillFinalAlbumCoverParagraphRef,
    opacity: trillFinalAlbumCoverParagraphOpacity,
    position: trillFinalAlbumCoverParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: trillAlbumTracklistCoverRef,
    opacity: trillAlbumTracklistCoverOpacity,
    position: trillAlbumTracklistCoverPosition,
  } = useInViewAnimation();

  const {
    ref: trillAlbumTracklistCoverHeaderRef,
    opacity: trillAlbumTracklistCoverHeaderOpacity,
    position: trillAlbumTracklistCoverHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: trillAlbumTracklistCoverParagraphRef,
    opacity: trillAlbumTracklistCoverParagraphOpacity,
    position: trillAlbumTracklistCoverParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: trillAlbumPromoVideoRef,
    inView: trillAlbumPromoVideoInView,
    opacity: trillAlbumPromoVideoOpacity,
    position: trillAlbumPromoVideoPosition,
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
    'Album Cover',

    'Tracklist',

    'Promotional Video',

    'Branding Assets',

    'World-building Materials',
  ];

  // Declarations for Project Navigate section
  const projectNavigateRef = useRef(null);
  const projectNavigateInView = useInView(projectNavigateRef);

  const projectNavigateScope = useMenuAnimation(projectNavigateInView);

  const previousProject = 'Crown Bounce';
  const nextProject = 'Ye Anthem';

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
    window.scrollTo(0, 0);
  };

  // Controls greyscale effect applied to scrapped cover section
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
        title="Menace Talk | Client Projects"
        description="Explore a client project for Trill Tega by contemporary artist Sean Donny, showcasing his creative direction expertise."
        type="article"
        url="https://seandonny.com/client-projects/menace-talk"
        image={mtHeroBanner}
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
              src={mtHeroBanner}
              alt="Chrome skull floating in a dark void"
              title="Chrome skull floating in a dark void"
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
          <article className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-fuchsia-600 selection:text-zinc-200">
            <div className="client-project-design-goal-description-container h-auto w-full hd:w-3/5 hd:max-h-[1500px] xl:pl-20">
              <motion.h1
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
              </motion.h1>
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
                covers Comethazine got, video game inspired, and most
                importantly I want it purple"...
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
                "I want the earth to open up, and I fly out of the netherealm
                with bat wings rocking full{' '}
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
            <figure className="client-project-design-goal-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
              <motion.img
                className="client-project-design-goal-image"
                src={hoodedTrill}
                alt="Trill Tega squating wearing a hoodie"
                title="Trill Tega"
                loading="eager"
                ref={hoodedTrillRef}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: hoodedTrillPosition,
                  opacity: hoodedTrillOpacity,
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
                    title={splitProjectDetailData.Draft1.title}
                    loading="lazy"
                    className="mb-2"
                    ref={trillAlbumDraft1Ref}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: trillAlbumDraft1Position,
                      opacity: trillAlbumDraft1Opacity,
                    }}
                    onClick={handleImageFocus(splitProjectDetailData.Draft1)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-initial-concepts-album-cover-concept-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={trillAlbumDraft1DescriptionHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: trillAlbumDraft1DescriptionHeaderPosition,
                      opacity: trillAlbumDraft1DescriptionHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.Draft1.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={trillAlbumDraft1DescriptionParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: trillAlbumDraft1DescriptionParagraphPosition,
                      opacity: trillAlbumDraft1DescriptionParagraphOpacity,
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
                    ref={trillSingleDraft1Ref}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: trillSingleDraft1Position,
                      opacity: trillSingleDraft1Opacity,
                    }}
                    onClick={handleImageFocus(splitProjectDetailData.Draft2)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-initial-concepts-single-cover-concept-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={trillSingleDraft1DescriptionHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: trillSingleDraft1DescriptionHeaderPosition,
                      opacity: trillSingleDraft1DescriptionHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.Draft2.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={trillSingleDraft1DescriptionParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: trillSingleDraft1DescriptionParagraphPosition,
                      opacity: trillSingleDraft1DescriptionParagraphOpacity,
                    }}
                  >
                    {splitProjectDetailData.Draft2.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <section
            className={`client-project-scrapped-single-cover-container h-auto w-full p-5 ${
              isGrayscale ? 'bg-black' : 'bg-fuchsia-600 selection:bg-black'
            } transition-all`}
          >
            <div className="client-project-scrapped-single-cover-items flex flex-col hd:flex-row h-auto w-full items-center justify-center">
              <div
                className={`client-project-scrapped-single-cover-container w-full h-full flex flex-col items-center justify-center p-5 hd:p-20 ${
                  isGrayscale ? 'grayscale' : ''
                } transition-all`}
              >
                <div className="client-project-scrapped-single-cover-image-container w-auto h-4/5">
                  <motion.img
                    className="client-project-scrapped-single-cover-image w-[648px] h-auto mb-2"
                    src={splitProjectDetailData.ScrappedCover.src}
                    alt={splitProjectDetailData.ScrappedCover.alt}
                    title={splitProjectDetailData.ScrappedCover.title}
                    loading="lazy"
                    ref={trillScrappedDraftRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: trillScrappedDraftPosition,
                      opacity: trillScrappedDraftOpacity,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleMouseEnter}
                    onTouchEnd={handleMouseLeave}
                    onClick={handleImageFocus(
                      splitProjectDetailData.ScrappedCover,
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                  <div className="client-project-scrapped-single-cover-image-description w-full h-1/5">
                    <motion.h2
                      ref={trillScrappedDraftHeaderRef}
                      initial={{ opacity: 0 }}
                      animate={{
                        translateY: trillScrappedDraftHeaderPosition,
                        opacity: trillScrappedDraftHeaderOpacity,
                      }}
                      className="client-project-scrapped-single-cover-image-description-text font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold"
                    >
                      {splitProjectDetailData.ScrappedCover.header}
                    </motion.h2>
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
                    src={splitProjectDetailData.AlbumCover.src}
                    alt={splitProjectDetailData.AlbumCover.alt}
                    title={splitProjectDetailData.AlbumCover.title}
                    loading="lazy"
                    className="mb-2"
                    ref={trillFinalAlbumCoverRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: trillFinalAlbumCoverPosition,
                      opacity: trillFinalAlbumCoverOpacity,
                    }}
                    onClick={handleImageFocus(
                      splitProjectDetailData.AlbumCover,
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-album-cover-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={trillFinalAlbumCoverHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: trillFinalAlbumCoverHeaderPosition,
                      opacity: trillFinalAlbumCoverHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.AlbumCover.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={trillFinalAlbumCoverParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: trillFinalAlbumCoverParagraphPosition,
                      opacity: trillFinalAlbumCoverParagraphOpacity,
                    }}
                  >
                    {splitProjectDetailData.AlbumCover.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="client-project-final-tracklist h-full w-full hd:w-1/2">
              <article className="client-project-final-tracklist-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-final-tracklist-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={splitProjectDetailData.TracklistCover.src}
                    alt={splitProjectDetailData.TracklistCover.alt}
                    title={splitProjectDetailData.TracklistCover.title}
                    loading="lazy"
                    className="mb-2"
                    ref={trillAlbumTracklistCoverRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: trillAlbumTracklistCoverPosition,
                      opacity: trillAlbumTracklistCoverOpacity,
                    }}
                    onClick={handleImageFocus(
                      splitProjectDetailData.TracklistCover,
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-tracklist-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={trillAlbumTracklistCoverHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: trillAlbumTracklistCoverHeaderPosition,
                      opacity: trillAlbumTracklistCoverHeaderOpacity,
                    }}
                  >
                    {splitProjectDetailData.TracklistCover.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={trillAlbumTracklistCoverParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: trillAlbumTracklistCoverParagraphPosition,
                      opacity: trillAlbumTracklistCoverParagraphOpacity,
                    }}
                  >
                    {splitProjectDetailData.TracklistCover.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <section className="client-project-promo-video-container h-auto w-full py-5">
            {trillAlbumPromoVideoInView && (
              <motion.div
                className="client-project-promo-video h-auto w-full flex flex-col items-center justify-center"
                ref={trillAlbumPromoVideoRef}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: trillAlbumPromoVideoPosition,
                  opacity: trillAlbumPromoVideoOpacity,
                }}
              >
                <iframe
                  src={cld
                    .video('resume-site/trill_tega_menace_talk_promo_video')
                    .quality('auto')
                    .toURL()}
                  width="1920"
                  height="1080"
                  style={{
                    height: 'auto',
                    width: '100%',
                    aspectRatio: 1920 / 1080,
                  }}
                  allow="fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            )}
          </section>
          <section className="client-project-deliverables-container h-auto w-full bg-fuchsia-600 selection:bg-black selection:text-zinc-200 p-5">
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
        <nav className="client-project-navigate h-[468px] w-full bg-pink-500 selection:bg-black selection:text-zinc-200 p-5">
          <ul
            className="client-project-navigate-list flex flex-row justify-between items-center h-full overflow-hidden"
            ref={projectNavigateScope}
          >
            <li
              className="client-project-navigate-previous h-full w-2/5 hd:w-1/4 flex flex-col items-start justify-center cursor-pointer"
              onClick={() => {
                handleNavigate('client-projects/crown-bounce');
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
                handleNavigate('client-projects/ye-anthem');
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

export default MenaceTalk;
