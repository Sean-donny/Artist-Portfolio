import { anticipate, motion, useAnimation, useInView } from 'framer-motion';
import txmmyilyData from './data';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import GalleryModal from '../../../components/GalleryModal';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import { ModalContent } from '../../../interfaces/ModalContent';

// Image imports
import tmBanner from '/optimised/txmmyily_banner.jpg';
import tmDraft from '/optimised/txmmyily_draft_illustration.png';
import tmReference1 from '/optimised/txmmyily_cover_reference.jpg';
import tmReference2 from '/optimised/txmmyily_outfit_reference.jpg';
import tmReference3 from '/optimised/txmmyily_visual_reference.jpg';
import SEO from '../../../components/SEO/SEO';

const Txmmyily = () => {
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
    ref: txmmyilyCoverDraftRef,
    opacity: txmmyilyCoverDraftOpacity,
    position: txmmyilyCoverDraftPosition,
  } = useInViewAnimation();

  const {
    ref: txmmyilyCoverDraftHeaderRef,
    opacity: txmmyilyCoverDraftHeaderOpacity,
    position: txmmyilyCoverDraftHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: txmmyilyCoverDraftParagraphRef,
    opacity: txmmyilyCoverDraftParagraphOpacity,
    position: txmmyilyCoverDraftParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: txmmyilyFinalCoverRef,
    opacity: txmmyilyFinalCoverOpacity,
    position: txmmyilyFinalCoverPosition,
  } = useInViewAnimation();

  const {
    ref: txmmyilyFinalCoverHeaderRef,
    opacity: txmmyilyFinalCoverHeaderOpacity,
    position: txmmyilyFinalCoverHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: txmmyilyFinalCoverParagraphRef,
    opacity: txmmyilyFinalCoverParagraphOpacity,
    position: txmmyilyFinalCoverParagraphPosition,
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

  const projectDeliverables = ['Single Cover', 'Credits'];

  // Declarations for Project Navigate section
  const projectNavigateRef = useRef(null);
  const projectNavigateInView = useInView(projectNavigateRef);

  const projectNavigateScope = useMenuAnimation(projectNavigateInView);

  const previousProject = "Mike's World";
  const nextProject = 'PsychoYP';

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
        title="Jaiye | Client Projects"
        description="Explore a client project for TXMMYILY by contemporary artist Sean Donny, showcasing his creative direction expertise."
        type="article"
        url="https://seandonny.com/client-projects/jaiye"
        image={tmBanner}
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
              src={tmBanner}
              alt="A party scene with TXMMYILY"
              title="Jaiye"
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
          <article className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-[#02e2c5] selection:text-black">
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
                TXMMYILY hit me on Twitter: "Yo bro!!! Let's work"
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
                "I love your work man"...
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
                "I've got this new single called{' '}
                <mark className="bg-[#02e2c5] text-black">
                  <a
                    href="https://music.apple.com/gb/album/jaiye-single/1836378594"
                    target="_blank"
                    className="hover:underline"
                  >
                    Jaiye
                  </a>
                </mark>
                , i'm tryna get you to do the cover for it"...
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
                "I want to be in a party scene, a fun vibe—that's what the song
                is about. There's people around me just having a great time,
                that sort of thing"
              </motion.p>
            </div>
            <figure className="client-project-client-illustration-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
              <motion.img
                className="client-project-client-illustration-image"
                src={tmDraft}
                alt="A rough character illustration of TXMMYILY"
                title="TXMMYILY"
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
          <article className="client-project-references-container bg-[#02e2c5] selection:bg-black selection:text-zinc-200 w-full h-auto flex flex-col items-center justify-center p-5 pt-10">
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
                  src={tmReference1}
                  alt="An illustrated cover art for Rema's Holiday + Reason You single where he stands at the centre of a party scene with a fish eye lens, from a birds eye view"
                  title="Holiday + Reason You single cover by Audrey(@_puppuppup__)"
                  loading="lazy"
                  className="client-project-reference-image-1"
                  style={{ zIndex: 1, border: 'solid black 1px' }}
                />
              </motion.figure>
              <motion.figure className="client-project-reference-image-container-2 h-auto w-1/3 flex flex-col items-center justify-center">
                <img
                  src={tmReference2}
                  alt="A photo of TXMMYILY with a red hoodie, a white graphic tee, brown plaid 3/4 shorts, white socks, and sandal style slides"
                  title="TXMMYILY"
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
                  src={tmReference3}
                  alt="A full houseparty scene illuminated by a camera flash, capturing an energetic scene of people having a good time"
                  title="Party scene posted on Twitter/X by @VsapxD"
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
              <p className="client-project-reference-description-text w-full hd:w-4/5 m-auto font-custom text-lg md:text-xl hd:text-3xl text-left md:text-justify text-black font-normal leading-snug md:leading-relaxed">
                For the original reference, TXMMYILY cited{' '}
                <a
                  href="https://www.instagram.com/p/Cou3NsePkQzUxX21sLKNdu_3X0xoe7_HdbV9kA0/?hl=en"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Audrey's artwork
                </a>{' '}
                for Rema's Holiday + Reason You single release, highlighting his
                appreciation for the colourful, vibrant scene it captured.
                <br />
                <br />
                For styling, he provided a reference photo of himself in a red
                hoodie and white graphic tee, emphasising his Chrome Hearts
                glasses as a signature element of his look.
                <br />
                <br />
                While working on drafts, I came across a photo on Twitter that
                showed a lively, energetic party scene I really liked. The
                single source of lighting, coming from the camera's point of
                view, illuminated the space like a frozen moment in time — you
                could almost feel how packed the room was.
                <br />
                <br />
                The sharp shadows emphasised how close everyone was, while the
                occlusion strengthened that POV effect, as if you were fixed in
                one spot within the party. That photo also reminded me of{' '}
                <a
                  href="https://www.erniebarnes.com/"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Ernie&nbsp;Barnes'
                </a>{' '}
                incredible painting{' "'}
                <a
                  href="https://www.christies.com/en/lot/lot-6368793"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  The&nbsp;Sugar&nbsp;Shack
                </a>
                {'"'}, with its fluid motion and the sense that every figure in
                the scene had their own story, contributing to the richness of
                the whole composition. I first discovered Barnes' work after
                watching the film{' '}
                <a
                  href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LCsvz81LSTI1YPRiL87My0stKgYAYBEH_Q&q=sinners&oq=sinners&gs_lcrp=EgZjaHJvbWUqCggBEC4YsQMYgAQyBwgAEAAYjwIyCggBEC4YsQMYgAQyCggCEAAYsQMYgAQyBggDEAAYAzIKCAQQABixAxiABDIKCAUQABixAxiABDIGCAYQABgDMgcIBxAAGIAEMgoICBAAGLEDGIAEMgcICRAAGIAE0gEIMzExMWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Sinners
                </a>
                , and learning how it influenced the juke joint scene.
              </p>
            </div>
          </article>
          <div className="client-project-final-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-[#02e2c5] selection:text-black">
            <div className="client-project-final-sketch h-full w-full hd:w-1/2">
              <article className="client-project-final-sketch-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-final-sketch-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={txmmyilyData.CoverDraft.src}
                    alt={txmmyilyData.CoverDraft.alt}
                    title={txmmyilyData.CoverDraft.title}
                    loading="lazy"
                    className="mb-2"
                    ref={txmmyilyCoverDraftRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: txmmyilyCoverDraftPosition,
                      opacity: txmmyilyCoverDraftOpacity,
                    }}
                    onClick={handleImageFocus(txmmyilyData.CoverDraft)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-sketch-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={txmmyilyCoverDraftHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: txmmyilyCoverDraftHeaderPosition,
                      opacity: txmmyilyCoverDraftHeaderOpacity,
                    }}
                  >
                    {txmmyilyData.CoverDraft.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={txmmyilyCoverDraftParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: txmmyilyCoverDraftParagraphPosition,
                      opacity: txmmyilyCoverDraftParagraphOpacity,
                    }}
                  >
                    {txmmyilyData.CoverDraft.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="client-project-final-single-cover h-full w-full hd:w-1/2">
              <article className="client-project-final-single-cover-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-final-single-cover-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={txmmyilyData.FinalCover.src}
                    alt={txmmyilyData.FinalCover.alt}
                    title={txmmyilyData.FinalCover.title}
                    loading="lazy"
                    className="mb-2"
                    ref={txmmyilyFinalCoverRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: txmmyilyFinalCoverPosition,
                      opacity: txmmyilyFinalCoverOpacity,
                    }}
                    onClick={handleImageFocus(txmmyilyData.FinalCover)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-single-cover-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={txmmyilyFinalCoverHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: txmmyilyFinalCoverHeaderPosition,
                      opacity: txmmyilyFinalCoverHeaderOpacity,
                    }}
                  >
                    {txmmyilyData.FinalCover.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={txmmyilyFinalCoverParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: txmmyilyFinalCoverParagraphPosition,
                      opacity: txmmyilyFinalCoverParagraphOpacity,
                    }}
                  >
                    {txmmyilyData.FinalCover.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <section className="client-project-streaming-preview w-full h-auto p-5 hd:py-20 hd:px-0 flex flex-col items-center justify-center bg-zinc-900 selection:bg-[#02e2c5]">
            <iframe
              id="embedPlayer"
              src="https://embed.music.apple.com/us/album/jaiye-single/1836378594?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
              height="450px"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
              style={embedStyle}
            ></iframe>
          </section>
          <section className="client-project-deliverables-container h-auto w-full bg-[#02e2c5] selection:bg-black selection:text-zinc-200 p-5">
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
        <nav className="client-project-navigate h-[468px] w-full bg-red-600 selection:bg-black selection:text-zinc-200 p-5">
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
                handleNavigate('client-projects/psychoyp');
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

export default Txmmyily;
