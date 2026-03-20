import { anticipate, motion, useAnimation, useInView } from 'framer-motion';
import partyScattaData from './data';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import GalleryModal from '../../../components/GalleryModal';
import { useState, useEffect, useRef } from 'react';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import { ModalContent } from '../../../interfaces/ModalContent';

// Image imports
import rbBanner from '/optimised/rowdy_b_banner.webp';
import rbDraft from '/optimised/rowdy_b_illustration.webp';
import rbReference1 from '/optimised/rowdy_b_cover_references_1.webp';
import rbReference2 from '/optimised/rowdy_b_cover_references_3.webp';
import rbReference3 from '/optimised/rowdy_b_cover_references_2.webp';

import SEO from '../../../components/SEO/SEO';
import ScrollTooltip from '../../../components/ScrollTooltip';
import embeddedAppleMusicStyle from '../../../utils/embeddedAppleMusicStyle';
import ProjectNavigation from '../../../components/ProjectNavigationSection';
import navigationMap from '../navigationMap';

interface CoordsData {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface ImageMapDimensions {
  coords1: CoordsData;
  coords2: CoordsData;
  coords3: CoordsData;
  coords4: CoordsData;
}

const buildQuadrantCoords = (
  width: number,
  height: number,
): ImageMapDimensions => {
  const halfWidth = Math.max(0, Math.floor(width / 2));
  const halfHeight = Math.max(0, Math.floor(height / 2));

  return {
    coords1: {
      x1: 0,
      y1: 0,
      x2: Math.max(0, halfWidth - 2),
      y2: Math.max(0, halfHeight - 2),
    },
    coords2: {
      x1: halfWidth + 2,
      y1: 0,
      x2: Math.max(0, Math.floor(width)),
      y2: Math.max(0, halfHeight - 2),
    },
    coords3: {
      x1: 0,
      y1: halfHeight + 2,
      x2: Math.max(0, halfWidth - 2),
      y2: Math.max(0, Math.floor(height)),
    },
    coords4: {
      x1: halfWidth + 2,
      y1: halfHeight + 2,
      x2: Math.max(0, Math.floor(width)),
      y2: Math.max(0, Math.floor(height)),
    },
  };
};

const PartyScatta = () => {
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
    ref: rowdyBCoverDraftRef,
    opacity: rowdyBCoverDraftOpacity,
    position: rowdyBCoverDraftPosition,
  } = useInViewAnimation();

  const {
    ref: rowdyBCoverDraftHeaderRef,
    opacity: rowdyBCoverDraftHeaderOpacity,
    position: rowdyBCoverDraftHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: rowdyBCoverDraftParagraphRef,
    opacity: rowdyBCoverDraftParagraphOpacity,
    position: rowdyBCoverDraftParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: rowdyBLineartRef,
    opacity: rowdyBLineartOpacity,
    position: rowdyBLineartPosition,
  } = useInViewAnimation();

  const {
    ref: rowdyBLineartHeaderRef,
    opacity: rowdyBLineartHeaderOpacity,
    position: rowdyBLineartHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: rowdyBLineartParagraphRef,
    opacity: rowdyBLineartParagraphOpacity,
    position: rowdyBLineartParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: rowdyBFinalCoverRef,
    opacity: rowdyBFinalCoverOpacity,
    position: rowdyBFinalCoverPosition,
  } = useInViewAnimation();

  const {
    ref: rowdyBFinalCoverHeaderRef,
    opacity: rowdyBFinalCoverHeaderOpacity,
    position: rowdyBFinalCoverHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: rowdyBFinalCoverParagraphRef,
    opacity: rowdyBFinalCoverParagraphOpacity,
    position: rowdyBFinalCoverParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: rowdyBCreditsRef,
    opacity: rowdyBCreditsOpacity,
    position: rowdyBCreditsPosition,
  } = useInViewAnimation();

  const {
    ref: rowdyBCreditsHeaderRef,
    opacity: rowdyBCreditsHeaderOpacity,
    position: rowdyBCreditsHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: rowdyBCreditsParagraphRef,
    opacity: rowdyBCreditsParagraphOpacity,
    position: rowdyBCreditsParagraphPosition,
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

  const projectDeliverables = ['Single Cover', 'Credits', 'Music Video'];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reference1Ref = useRef<HTMLImageElement>(null);
  const reference3Ref = useRef<HTMLImageElement>(null);

  const [reference1ImageMapDimensions, setReference1ImageMapDimensions] =
    useState<ImageMapDimensions>(buildQuadrantCoords(0, 0));
  const [reference3ImageMapDimensions, setReference3ImageMapDimensions] =
    useState<ImageMapDimensions>(buildQuadrantCoords(0, 0));

  useEffect(() => {
    const handleResize = () => {
      const reference1 = reference1Ref.current;
      const reference3 = reference3Ref.current;
      if (reference1) {
        const { width, height } = reference1.getBoundingClientRect();
        setReference1ImageMapDimensions(buildQuadrantCoords(width, height));
      }
      if (reference3) {
        const { width, height } = reference3.getBoundingClientRect();
        setReference3ImageMapDimensions(buildQuadrantCoords(width, height));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    const reference1 = reference1Ref.current;
    const reference3 = reference3Ref.current;

    reference1?.addEventListener('load', handleResize);
    reference3?.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
      reference1?.removeEventListener('load', handleResize);
      reference3?.removeEventListener('load', handleResize);
    };
  }, []);

  const coordsToString = (coords: CoordsData) => {
    return `${coords.x1},${coords.y1},${coords.x2},${coords.y2}`;
  };

  return (
    <div className="client-project-container bg-black w-full h-auto">
      <SEO
        title="PARTYSCATTA | Client Projects"
        description="Explore a client project for Rowdy B by contemporary artist Sean Donny, showcasing his creative direction expertise."
        type="article"
        url="https://seandonny.com/client-projects/partyscatta"
        image={rbBanner}
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
              src={rbBanner}
              alt="A mirrored shot of Rowdy B showing off his tattoos"
              title="Rowdy B"
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
          <article className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-[#f63900] selection:text-slate-50">
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
                Rowdy hit me on Instagram: "We going up on Tuesday"
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
                "I've got this new single called{' '}
                <mark className="bg-[#f63900] text-slate-50">
                  <a
                    href="https://music.apple.com/gb/album/partyscatta-single/1876811276"
                    target="_blank"
                    className="hover:underline"
                  >
                    PARTYSCATTA
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
                "Let's shoot the vid at Dawn's crib"...
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
                "For the cover, I was thinking of like a party scene, people
                dancing and catching a vibe, that kinda thing"
              </motion.p>
            </div>
            <figure className="client-project-client-illustration-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
              <motion.img
                className="client-project-client-illustration-image"
                src={rbDraft}
                alt="An illustration of Rowdy B wearing white clothes and some red boots"
                title="Rowdy B"
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
          <article className="client-project-references-container bg-[#f63900] selection:bg-black selection:text-zinc-200 w-full h-auto flex flex-col items-center justify-center p-5 pt-10">
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
                  src={rbReference1}
                  alt="A reference board for the project including a woman in a Meji Meji Blue Dress, the single cover for Vibe by Blacboyy, Kimberly Gayle in a bolapsd dress, and Ona in Blvckfire white tank top"
                  title=""
                  loading="lazy"
                  className="client-project-reference-image-1"
                  style={{ zIndex: 1, border: 'solid black 1px' }}
                  useMap="#image-map-1"
                  ref={reference1Ref}
                />
                <map name="image-map-1">
                  <area
                    alt="Meji Meji Blue Dress"
                    title="Meji Meji Blue Dress"
                    coords={coordsToString(
                      reference1ImageMapDimensions.coords1,
                    )}
                    shape="rect"
                  ></area>
                  <area
                    alt="Vibe by Blacboyy"
                    title="Vibe by Blacboyy"
                    coords={coordsToString(
                      reference1ImageMapDimensions.coords2,
                    )}
                    shape="rect"
                  ></area>
                  <area
                    alt="Kimberly Gayle in bolapsd dress"
                    title="Kimberly Gayle in bolapsd dress"
                    coords={coordsToString(
                      reference1ImageMapDimensions.coords3,
                    )}
                    shape="rect"
                  ></area>
                  <area
                    alt="Ona in Blvckfire"
                    title="Ona in Blvckfire"
                    coords={coordsToString(
                      reference1ImageMapDimensions.coords4,
                    )}
                    shape="rect"
                  ></area>
                </map>
              </motion.figure>
              <motion.figure className="client-project-reference-image-container-2 h-auto w-1/3 flex flex-col items-center justify-center">
                <img
                  src={rbReference2}
                  alt="A photo of Rowdy B wearing a white Blvckfire t-shirt in front of a black SUV"
                  title="Rowdy B"
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
                  src={rbReference3}
                  alt="A reference board for the project including NO11, Gayle Heel Covers, Swirl hairstyle inspo, and a CYK Baddie"
                  title=""
                  loading="lazy"
                  className="client-project-reference-image-3"
                  style={{ zIndex: 2, border: 'solid black 1px' }}
                  useMap="#image-map-3"
                  ref={reference3Ref}
                />
                <map name="image-map-3">
                  <area
                    alt="NO11"
                    title="NO11"
                    coords={coordsToString(
                      reference3ImageMapDimensions.coords1,
                    )}
                    shape="rect"
                  ></area>
                  <area
                    alt="Gayle Heel Covers"
                    title="Gayle Heel Covers"
                    coords={coordsToString(
                      reference3ImageMapDimensions.coords2,
                    )}
                    shape="rect"
                  ></area>
                  <area
                    alt="Swirl hairstyle inspo"
                    title="Swirl hairstyle inspo"
                    coords={coordsToString(
                      reference3ImageMapDimensions.coords3,
                    )}
                    shape="rect"
                  ></area>
                  <area
                    alt="CYK Baddie"
                    title="CYK Baddie"
                    coords={coordsToString(
                      reference3ImageMapDimensions.coords4,
                    )}
                    shape="rect"
                  ></area>
                </map>
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
                References are an artist's best friend, here you can see some
                that contributed to the cover. The first is this cool dress by{' '}
                <a
                  href="https://www.instagram.com/mejimeji.co/"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Meji Meji
                </a>
                , with signature "MM" hardwear accentuating her form. To the
                right of her is the cover of the single{' "'}
                <a
                  href="https://music.apple.com/gb/album/vibe-single/1842562651"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Vibe by Blacboyy
                </a>
                {'", '}
                which I was listening to a lot when I worked on the cover. Not
                only were the two tracks on it inspiring me, but the cover had
                an "vibe" I tried channeling for the main girl in Rowdy's cover.
                <br />
                <br />
                Just under them are Kimberly in{' '}
                <a
                  href="https://www.instagram.com/bolapsd______/"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  bolapsd
                </a>
                {', '}and Ona in{' '}
                <a
                  href="https://www.instagram.com/blvckfire/"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Blvckfire
                </a>
                . These looks can be seen on the women in the cover. At the
                centre of this board we have Rowdy himself, wearing a Blvckfire
                tee and beanie. The photo is actually a still from the music
                video, and it inspired his look in the cover.
                <br />
                <br />
                The board on the right has NO11 wearing an{' '}
                <a
                  href="https://www.instagram.com/activeworldwide/"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Active Worldwide
                </a>{' '}
                skully, I snuck bro in the cover cuz I was also listening to his
                song at the time. Beside him are some{' '}
                <a
                  href="https://www.instagram.com/gayleofficial_/"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Gayle Heel Covers
                </a>{' '}
                by Kimberly Gayble. <br />
                <br />
                We also have a hairstyle reference, specifically swirl braids, I
                saw them on Pinterest and really liked it. Last but not least we
                have a Zoe channeling her inner{' '}
                <a
                  href="https://music.apple.com/gb/album/cyk-baddie/1861441323?i=1861441326"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  CYK Baddie
                </a>{' '}
                energy.
              </p>
            </div>
          </article>
          <div className="client-project-sketches-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-[#f63900] selection:text-slate-50">
            <div className="client-project-sketches-rough-sketch h-full w-full hd:w-1/2">
              <article className="client-project-sketches-rough-sketch-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-sketches-rough-sketch-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={partyScattaData.CoverDraft1.src}
                    alt={partyScattaData.CoverDraft1.alt}
                    title={partyScattaData.CoverDraft1.title}
                    loading="lazy"
                    className="mb-2"
                    ref={rowdyBCoverDraftRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: rowdyBCoverDraftPosition,
                      opacity: rowdyBCoverDraftOpacity,
                    }}
                    onClick={handleImageFocus(partyScattaData.CoverDraft1)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-sketches-rough-sketch-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={rowdyBCoverDraftHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: rowdyBCoverDraftHeaderPosition,
                      opacity: rowdyBCoverDraftHeaderOpacity,
                    }}
                  >
                    {partyScattaData.CoverDraft1.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={rowdyBCoverDraftParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: rowdyBCoverDraftParagraphPosition,
                      opacity: rowdyBCoverDraftParagraphOpacity,
                    }}
                  >
                    {partyScattaData.CoverDraft1.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="client-project-sketches-lineart h-full w-full hd:w-1/2">
              <article className="client-project-sketches-lineart-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-sketches-lineart-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={partyScattaData.Lineart.src}
                    alt={partyScattaData.Lineart.alt}
                    title={partyScattaData.Lineart.title}
                    loading="lazy"
                    className="mb-2"
                    ref={rowdyBLineartRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: rowdyBLineartPosition,
                      opacity: rowdyBLineartOpacity,
                    }}
                    onClick={handleImageFocus(partyScattaData.Lineart)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-sketches-lineart-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={rowdyBLineartHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: rowdyBLineartHeaderPosition,
                      opacity: rowdyBLineartHeaderOpacity,
                    }}
                  >
                    {partyScattaData.Lineart.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={rowdyBLineartParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: rowdyBLineartParagraphPosition,
                      opacity: rowdyBLineartParagraphOpacity,
                    }}
                  >
                    {partyScattaData.Lineart.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <div className="client-project-final-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-[#f63900] selection:text-slate-50">
            <div className="client-project-final-single-cover h-full w-full hd:w-1/2">
              <article className="client-project-final-single-cover-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-final-single-cover-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={partyScattaData.FinalCover.src}
                    alt={partyScattaData.FinalCover.alt}
                    title={partyScattaData.FinalCover.title}
                    loading="lazy"
                    className="mb-2"
                    ref={rowdyBFinalCoverRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: rowdyBFinalCoverPosition,
                      opacity: rowdyBFinalCoverOpacity,
                    }}
                    onClick={handleImageFocus(partyScattaData.FinalCover)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-single-cover-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={rowdyBFinalCoverHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: rowdyBFinalCoverHeaderPosition,
                      opacity: rowdyBFinalCoverHeaderOpacity,
                    }}
                  >
                    {partyScattaData.FinalCover.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={rowdyBFinalCoverParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: rowdyBFinalCoverParagraphPosition,
                      opacity: rowdyBFinalCoverParagraphOpacity,
                    }}
                  >
                    {partyScattaData.FinalCover.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="client-project-final-credits h-full w-full hd:w-1/2">
              <article className="client-project-final-credits-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-final-credits-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={partyScattaData.Credits.src}
                    alt={partyScattaData.Credits.alt}
                    title={partyScattaData.Credits.title}
                    loading="lazy"
                    className="mb-2"
                    ref={rowdyBCreditsRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: rowdyBCreditsPosition,
                      opacity: rowdyBCreditsOpacity,
                    }}
                    onClick={handleImageFocus(partyScattaData.Credits)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-credits-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={rowdyBCreditsHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: rowdyBCreditsHeaderPosition,
                      opacity: rowdyBCreditsHeaderOpacity,
                    }}
                  >
                    {partyScattaData.Credits.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={rowdyBCreditsParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: rowdyBCreditsParagraphPosition,
                      opacity: rowdyBCreditsParagraphOpacity,
                    }}
                  >
                    {partyScattaData.Credits.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <section className="client-project-visualiser-video-container h-auto w-full py-5 selection:bg-[#f63900] selection:text-slate-50">
            <div className="client-project-visualiser-video h-auto w-full flex flex-col items-center justify-center p-5">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/ps4YNVcANi8?rel=0"
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </section>
          <section className="client-project-streaming-preview w-full h-auto p-5 hd:py-20 hd:px-0 flex flex-col items-center justify-center bg-zinc-900 selection:bg-[#f63900]">
            <iframe
              id="embedPlayer"
              src="https://embed.music.apple.com/gb/album/partyscatta-single/1876811276?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
              height="450px"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
              style={embeddedAppleMusicStyle}
            ></iframe>
          </section>
          <section className="client-project-deliverables-container h-auto w-full bg-[#f63900] selection:bg-black selection:text-zinc-200 p-5">
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
          navColour={navigationMap.PartyScatta.navColour}
          navPreviousTitle={navigationMap.PartyScatta.previousTitle}
          navPreviousSrc={navigationMap.PartyScatta.previousSrc}
          navNextTitle={navigationMap.PartyScatta.nextTitle}
          navNextSrc={navigationMap.PartyScatta.nextSrc}
        />
      </div>

      <ScrollTooltip />
    </div>
  );
};

export default PartyScatta;
