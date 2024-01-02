import { useEffect, useRef, useState } from 'react';
import { ModalContent } from '../../../interfaces/ModalContent';
import GalleryModal from '../../../components/GalleryModal';
import { anticipate, motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';

// Image imports
const mkWrldBanner = '/optimised/mikeswrld_banner.gif';
const mkLogo = '/optimised/mikeswrld_title.png';
const mkReference1 = '/optimised/mha_reference.jpg';
const mkReference2 = '/optimised/mikeswrld_planet_reference.jpg';
const mkReference3 = '/optimised/mikeswrld_reference.jpg';

import mkWrldData from './data';
// import cld from '../../../utils/cloudinary';

const MikesWrld = () => {
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

  //////////////////

  // Declarations required for page section effects
  const mikeSketchRef = useRef(null);
  const mikeSketchInView = useInView(mikeSketchRef, { once: true });
  const [mikeSketchOpacity, setmikeSketchOpacity] = useState(0);
  const [mikeSketchPosition, setmikeSketchPosition] = useState(20);

  useEffect(() => {
    if (mikeSketchInView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setmikeSketchOpacity(1);
        setmikeSketchPosition(0);
      }, 50);
    } else {
      setmikeSketchOpacity(0);
      setmikeSketchPosition(20);
    }
  }, [mikeSketchInView, scrollY]);

  const mikeSketchHeaderRef = useRef(null);
  const mikeSketchHeaderInView = useInView(mikeSketchHeaderRef, {
    once: true,
  });
  const [mikeSketchHeaderOpacity, setmikeSketchHeaderOpacity] = useState(0);
  const [mikeSketchHeaderPosition, setmikeSketchHeaderPosition] = useState(20);

  useEffect(() => {
    if (mikeSketchHeaderInView && scrollY > parallaxValue / 2.5) {
      setmikeSketchHeaderOpacity(1);
      setmikeSketchHeaderPosition(0);
    } else {
      setmikeSketchHeaderOpacity(0);
      setmikeSketchHeaderPosition(20);
    }
  }, [mikeSketchHeaderInView, scrollY]);

  const mikeSketchP1Ref = useRef(null);
  const mikeSketchP1InView = useInView(mikeSketchP1Ref, {
    once: true,
  });
  const [mikeSketchP1Opacity, setmikeSketchP1Opacity] = useState(0);
  const [mikeSketchP1Position, setmikeSketchP1Position] = useState(20);

  useEffect(() => {
    if (mikeSketchP1InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setmikeSketchP1Opacity(1);
        setmikeSketchP1Position(0);
      }, 50);
    } else {
      setmikeSketchP1Opacity(0);
      setmikeSketchP1Position(20);
    }
  }, [mikeSketchP1InView, scrollY]);

  const mikeSketchP2Ref = useRef(null);
  const mikeSketchP2InView = useInView(mikeSketchP2Ref, {
    once: true,
  });
  const [mikeSketchP2Opacity, setmikeSketchP2Opacity] = useState(0);
  const [mikeSketchP2Position, setmikeSketchP2Position] = useState(20);

  useEffect(() => {
    if (mikeSketchP2InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setmikeSketchP2Opacity(1);
        setmikeSketchP2Position(0);
      }, 50);
    } else {
      setmikeSketchP2Opacity(0);
      setmikeSketchP2Position(20);
    }
  }, [mikeSketchP2InView, scrollY]);

  const mikeSketchP3Ref = useRef(null);
  const mikeSketchP3InView = useInView(mikeSketchP3Ref, {
    once: true,
  });
  const [mikeSketchP3Opacity, setmikeSketchP3Opacity] = useState(0);
  const [mikeSketchP3Position, setmikeSketchP3Position] = useState(20);

  useEffect(() => {
    if (mikeSketchP3InView && scrollY > parallaxValue / 2.5) {
      setTimeout(() => {
        setmikeSketchP3Opacity(1);
        setmikeSketchP3Position(0);
      }, 50);
    } else {
      setmikeSketchP3Opacity(0);
      setmikeSketchP3Position(20);
    }
  }, [mikeSketchP3InView, scrollY]);

  // Uses custom hook to generate ref, and states for opacity & position values

  const {
    ref: mikeFinalAlbumCoverRef,
    opacity: mikeFinalAlbumCoverOpacity,
    position: mikeFinalAlbumCoverPosition,
  } = useInViewAnimation();

  const {
    ref: mikeFinalAlbumCoverHeaderRef,
    opacity: mikeFinalAlbumCoverHeaderOpacity,
    position: mikeFinalAlbumCoverHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: mikeFinalAlbumCoverParagraphRef,
    opacity: mikeFinalAlbumCoverParagraphOpacity,
    position: mikeFinalAlbumCoverParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: mikeAlbumTracklistCoverRef,
    opacity: mikeAlbumTracklistCoverOpacity,
    position: mikeAlbumTracklistCoverPosition,
  } = useInViewAnimation();

  const {
    ref: mikeAlbumTracklistCoverHeaderRef,
    opacity: mikeAlbumTracklistCoverHeaderOpacity,
    position: mikeAlbumTracklistCoverHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: mikeAlbumTracklistCoverParagraphRef,
    opacity: mikeAlbumTracklistCoverParagraphOpacity,
    position: mikeAlbumTracklistCoverParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: mikeAlbumPromoVideoRef,
    inView: mikeAlbumPromoVideoInView,
    opacity: mikeAlbumPromoVideoOpacity,
    position: mikeAlbumPromoVideoPosition,
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

  const previousProject = 'Popwave';
  const nextProject = 'Menace Talk';

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
    window.scrollTo(0, 0);
  };

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

  // Translate values for reference images

  const [translateReference, setTranslateReference] = useState(windowWidth / 7);

  /////////////////////

  const [heroHeight, setHeroHeight] = useState(242.1);
  const [heroWidth, setHeroWidth] = useState(430.4);

  // Specify the type of element for the ref
  const myElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      // Check if the ref is not null before accessing current
      if (myElementRef.current) {
        const clientWidth = myElementRef.current.clientWidth;
        const clientHeight = myElementRef.current.clientHeight;
        setHeroWidth(clientWidth);
        setHeroHeight(clientHeight);
      }
    };

    // Attach event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Call handleResize once initially to set the initial dimensions
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myElementRef]);

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
          ref={myElementRef}
        >
          <motion.img
            src={mkWrldBanner}
            alt="Mike holding the earth"
            className="client-project-hero-image w-full h-full object-cover object-center"
            initial={{ scale: 1, opacity: 1 }}
            animate={controls}
          />
        </div>
        <div
          className="client-project-logo w-full h-auto fixed top-0 pointer-events-none"
          style={{
            zIndex: 2,
          }}
        >
          <img
            src={mkLogo}
            alt="Mike's World logo embellished with roses"
            style={{
              height: heroHeight / 3,
              transform: `translate(0px, ${
                -heroTranslate * (heroHeight / heroWidth + 0.15)
              }px)`,
              marginLeft: heroWidth / 1.575,
              marginTop: heroHeight / 2.9,
            }}
          />
        </div>
        <div className={`client-project-hero-safe-space h-[400px] w-full`}>
          &nbsp;
        </div>
        <div className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-red-600 selection:text-zinc-200">
          <div className="client-project-design-goal-description-container h-auto w-full hd:w-3/5 hd:max-h-[1500px] xl:pl-20">
            <motion.h2
              ref={mikeSketchHeaderRef}
              className="client-project-design-goal-description-header text-zinc-200 font-custom font-semibold italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mb-5"
              initial={{ opacity: 0 }}
              animate={{
                translateY: mikeSketchHeaderPosition,
                opacity: mikeSketchHeaderOpacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            >
              Mike hit me on Instagram and said "MHA"
            </motion.h2>
            <motion.p
              className="client-project-design-goal-description-paragraph-1 text-zinc-400 font-custom font-medium italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
              ref={mikeSketchP1Ref}
              initial={{ opacity: 0 }}
              animate={{
                translateY: mikeSketchP1Position,
                opacity: mikeSketchP1Opacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            >
              "I want the cover to be animated in the{' '}
              <mark className="bg-red-600 text-zinc-200">
                <a
                  href="https://myheroacademia.fandom.com/wiki/My_Hero_Academia_(Manga)?file=Volume_29.png"
                  target="_blank"
                  className="hover:underline"
                >
                  My&nbsp;Hero&nbsp;Academia
                </a>
              </mark>{' '}
              art style"...
            </motion.p>
            <motion.p
              className="client-project-design-goal-description-paragraph-2 text-zinc-400 font-custom font-normal italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
              ref={mikeSketchP2Ref}
              initial={{ opacity: 0 }}
              animate={{
                translateY: mikeSketchP2Position,
                opacity: mikeSketchP2Opacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            >
              "Imagine me suspended in space, cradling the Earth in the palms of
              my hands"...
            </motion.p>
            <motion.p
              className="client-project-design-goal-description-paragraph-3 text-zinc-400 font-custom font-extralight italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
              ref={mikeSketchP3Ref}
              initial={{ opacity: 0 }}
              animate={{
                translateY: mikeSketchP3Position,
                opacity: mikeSketchP3Opacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            >
              "Both my hair and hoodie in red, with the album title adorned in
              the corner, embellished with{' '}
              <mark className="bg-red-600 text-zinc-200">
                <a
                  href="https://g.co/kgs/kxatFW"
                  target="_blank"
                  className="hover:underline"
                >
                  Red&nbsp;Roses
                </a>
              </mark>
              "
            </motion.p>
          </div>
          <div className="client-project-design-goal-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
            <motion.img
              className="client-project-design-goal-image"
              src={mkWrldData.SketchedCover.src}
              ref={mikeSketchRef}
              initial={{ opacity: 0 }}
              animate={{
                translateY: mikeSketchPosition,
                opacity: mikeSketchOpacity,
              }}
              transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
            />
          </div>
        </div>
        <div className="client-project-references-container bg-red-600 selection:bg-black selection:text-zinc-200 w-full h-auto flex flex-col items-center justify-center p-5 pt-10">
          <h4
            className="client-project-reference-board-title font-custom text-5xl text-center text-black w-full font-semibold mb-5"
            ref={referenceBoardItemsRef}
          >
            Reference Board
          </h4>
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
            <motion.div
              className="client-project-reference-image-container-1 h-auto w-1/3 flex flex-col items-center justify-center"
              animate={{
                translateX: translateReference,
              }}
              transition={{ duration: 1, ease: anticipate }}
            >
              <img
                src={mkReference1}
                alt="MHA reference image"
                className="client-project-reference-image-1"
                style={{ zIndex: 1, border: 'solid black 1px' }}
              />
            </motion.div>
            <motion.div className="client-project-reference-image-container-2 h-auto w-1/3 flex flex-col items-center justify-center">
              <img
                src={mkReference2}
                alt="Holding Earth reference image"
                className="client-project-referencei-image-2"
                style={{ zIndex: 3, border: 'solid black 1px' }}
              />
            </motion.div>
            <motion.div
              className="client-project-reference-image-container-3 h-auto w-1/3 flex flex-col items-center justify-center"
              animate={{
                translateX: -translateReference,
              }}
              transition={{ duration: 1, ease: anticipate }}
            >
              <img
                src={mkReference3}
                alt="Mike reference image"
                className="client-project-reference-image-3"
                style={{ zIndex: 2, border: 'solid black 1px' }}
              />
            </motion.div>
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
            <p className="client-project-reference-description-text w-full hd:w-3/5 m-auto font-custom text-lg md:text-xl hd:text-3xl text-left md:text-center text-black font-normal">
              Mike provided detailed references for the cover, aiming to capture
              his love for anime. He pointed to a picture of{' '}
              <a
                href="https://myheroacademia.fandom.com/wiki/Shoto_Todoroki"
                target="_blank"
                className="hover:underline font-semibold"
              >
                Shoto Todoroki
              </a>
              , specifying, "Emulate the art style and shading." Additionally,
              he expressed, "I want to hold the Earth in my hands, just like{' '}
              <a
                href="https://hunterxhunter.fandom.com/wiki/Meruem"
                target="_blank"
                className="hover:underline font-semibold"
              >
                Meruem
              </a>
              ." To provide further guidance, he added, "My character should
              sport a red hoodie, akin to the one in this photo, and feature my
              signature red braids."
              <br />
              Providing clear references is crucial for the visual development
              process. My job is to take in the client's cues and deliver a
              cohesive result.
            </p>
          </div>
        </div>
        <div className="client-project-final-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-red-600 selection:text-zinc-200">
          <div className="client-project-final-album-cover h-full w-full hd:w-1/2">
            <div className="client-project-final-album-cover-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
              <div className="client-project-final-album-cover-artwork h-3/5 w-full flex flex-col items-center justify-center">
                <motion.img
                  src={mkWrldData.AlbumCover.src}
                  alt={mkWrldData.AlbumCover.alt}
                  className="mb-2"
                  ref={mikeFinalAlbumCoverRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: mikeFinalAlbumCoverPosition,
                    opacity: mikeFinalAlbumCoverOpacity,
                  }}
                  onClick={handleImageFocus(mkWrldData.AlbumCover)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                />
              </div>
              <div className="client-project-final-album-cover-description h-2/5 w-full flex flex-col items-center justify-center">
                <motion.h4
                  className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                  ref={mikeFinalAlbumCoverHeaderRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: mikeFinalAlbumCoverHeaderPosition,
                    opacity: mikeFinalAlbumCoverHeaderOpacity,
                  }}
                >
                  {mkWrldData.AlbumCover.header}
                </motion.h4>
                <motion.p
                  className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                  ref={mikeFinalAlbumCoverParagraphRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: mikeFinalAlbumCoverParagraphPosition,
                    opacity: mikeFinalAlbumCoverParagraphOpacity,
                  }}
                >
                  {mkWrldData.AlbumCover.paragraph}
                </motion.p>
              </div>
            </div>
          </div>
          <div className="client-project-final-tracklist h-full w-full hd:w-1/2">
            <div className="client-project-final-tracklist-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
              <div className="client-project-final-tracklist-artwork h-3/5 w-full flex flex-col items-center justify-center">
                <motion.img
                  src={mkWrldData.TracklistCover.src}
                  alt={mkWrldData.TracklistCover.alt}
                  className="mb-2"
                  ref={mikeAlbumTracklistCoverRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: mikeAlbumTracklistCoverPosition,
                    opacity: mikeAlbumTracklistCoverOpacity,
                  }}
                  onClick={handleImageFocus(mkWrldData.TracklistCover)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                />
              </div>
              <div className="client-project-final-tracklist-description h-2/5 w-full flex flex-col items-center justify-center">
                <motion.h4
                  className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                  ref={mikeAlbumTracklistCoverHeaderRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: mikeAlbumTracklistCoverHeaderPosition,
                    opacity: mikeAlbumTracklistCoverHeaderOpacity,
                  }}
                >
                  {mkWrldData.TracklistCover.header}
                </motion.h4>
                <motion.p
                  className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                  ref={mikeAlbumTracklistCoverParagraphRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: mikeAlbumTracklistCoverParagraphPosition,
                    opacity: mikeAlbumTracklistCoverParagraphOpacity,
                  }}
                >
                  {mkWrldData.TracklistCover.paragraph}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="client-project-streaming-and-promotional-container w-full h-auto flex flex-col hd:flex-row items-center justify-center bg-zinc-900 hd:py-20 selection:bg-red-600">
          <div className="client-project-streaming-preview w-full h-auto hd:w-1/2 p-5 hd:py-20 hd:px-0 flex flex-col items-center justify-center">
            <iframe
              id="embedPlayer"
              src="https://embed.music.apple.com/us/album/mikes-world/1615035503?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
              height="450px"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
              style={embedStyle}
            ></iframe>
          </div>
          <div className="client-project-promo-video-container h-auto w-full hd:w-1/2 hd:py-5">
            {mikeAlbumPromoVideoInView && (
              <motion.div
                className="client-project-promo-video h-auto w-full flex flex-col items-center justify-center"
                ref={mikeAlbumPromoVideoRef}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: mikeAlbumPromoVideoPosition,
                  opacity: mikeAlbumPromoVideoOpacity,
                }}
              >
                {/* <iframe
                  src={cld
                    .video('resume-site/mikeswrld_album_out_now_video')
                    .quality('auto')
                    .toURL()}
                  width="660"
                  height="660"
                  className="hd:p-20"
                  style={{
                    height: 'auto',
                    width: '100%',
                    aspectRatio: 660 / 660,
                  }}
                  allow="fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe> */}
              </motion.div>
            )}
          </div>
        </div>
        <div className="client-project-deliverables-container h-auto w-full bg-red-600 selection:bg-black selection:text-zinc-200 p-5">
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
        <nav className="client-project-navigate h-[468px] w-full bg-purple-600 selection:bg-black selection:text-zinc-200 p-5">
          <ul
            className="client-project-navigate-list flex flex-row justify-between items-center h-full overflow-hidden"
            ref={projectNavigateScope}
          >
            <li
              className="client-project-navigate-previous h-full w-2/5 hd:w-1/4 flex flex-col items-start justify-center cursor-pointer"
              onClick={() => {
                handleNavigate('client-projects/popwave');
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

export default MikesWrld;
