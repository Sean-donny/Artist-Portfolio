import { anticipate, motion, useAnimation, useInView } from 'framer-motion';
import doloreData from './data';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import GalleryModal from '../../../components/GalleryModal';
import { useState, useEffect, useRef } from 'react';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import { ModalContent } from '../../../interfaces/ModalContent';

// Image imports
import jdBanner from '/optimised/dolore_banner.webp';
import jdIllustration from '/optimised/dolore_illustration.webp';
import jdReference1 from '/optimised/dolore_reference_1.webp';
import jdReference2 from '/optimised/dolore_reference_2.webp';
import jdReference3 from '/optimised/dolore_reference_3.webp';

import SEO from '../../../components/SEO/SEO';
import ScrollTooltip from '../../../components/ScrollTooltip';
import navigationMap from '../navigationMap';
import ProjectNavigation from '../../../components/ProjectNavigationSection';

const Dolore = () => {
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
    ref: doloreDraft1Ref,
    opacity: doloreDraft1Opacity,
    position: doloreDraft1Position,
  } = useInViewAnimation();

  const {
    ref: doloreDraft1HeaderRef,
    opacity: doloreDraft1HeaderOpacity,
    position: doloreDraft1HeaderPosition,
  } = useInViewAnimation();

  const {
    ref: doloreDraft1ParagraphRef,
    opacity: doloreDraft1ParagraphOpacity,
    position: doloreDraft1ParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: doloreDraft2Ref,
    opacity: doloreDraft2Opacity,
    position: doloreDraft2Position,
  } = useInViewAnimation();

  const {
    ref: doloreDraft2HeaderRef,
    opacity: doloreDraft2HeaderOpacity,
    position: doloreDraft2HeaderPosition,
  } = useInViewAnimation();

  const {
    ref: doloreDraft2ParagraphRef,
    opacity: doloreDraft2ParagraphOpacity,
    position: doloreDraft2ParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: doloreFinal1Ref,
    opacity: doloreFinal1Opacity,
    position: doloreFinal1Position,
  } = useInViewAnimation();

  const {
    ref: doloreFinal1HeaderRef,
    opacity: doloreFinal1HeaderOpacity,
    position: doloreFinal1HeaderPosition,
  } = useInViewAnimation();

  const {
    ref: doloreFinal1ParagraphRef,
    opacity: doloreFinal1ParagraphOpacity,
    position: doloreFinal1ParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: doloreFinal2Ref,
    opacity: doloreFinal2Opacity,
    position: doloreFinal2Position,
  } = useInViewAnimation();

  const {
    ref: doloreFinal2HeaderRef,
    opacity: doloreFinal2HeaderOpacity,
    position: doloreFinal2HeaderPosition,
  } = useInViewAnimation();

  const {
    ref: doloreFinal2ParagraphRef,
    opacity: doloreFinal2ParagraphOpacity,
    position: doloreFinal2ParagraphPosition,
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

  const projectDeliverables = ['Streetsouk Poster', 'SS Mascot Poster'];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="client-project-container bg-black w-full h-auto">
      <SEO
        title="Dolore | Client Projects"
        description="Explore a client project for Jude Dolore by contemporary artist Sean Donny, showcasing his creative direction expertise."
        type="article"
        url="https://seandonny.com/client-projects/dolore"
        image={jdBanner}
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
              src={jdBanner}
              alt="A black and white close up of Jude Dolore and a woman wearing Dolore against a black backdrop, with Streetsouk written boldly in green above them"
              title="Dolore"
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
            className={`client-project-hero-safe-space h-[${parallaxValue}px] w-full`}
          >
            &nbsp;
          </div>
          <article className="client-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-[#4dfe00] selection:text-black">
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
                Jude hit me on Instagram: "I&nbsp;hope you're good ski!"
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
                "I'm trying to make a poster for my pop up"...
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
                "I'm dropping these pieces exclusively at{' '}
                <mark className="bg-[#4dfe00] text-black">
                  <a
                    href="https://www.streetsouk.com/store/brands/dolore"
                    target="_blank"
                    className="hover:underline"
                  >
                    Street&nbsp;Souk
                  </a>
                </mark>{' '}
                on the 21st"...
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
                "I want a guy and girl posted up side by side wearing the garms,
                with the pop up details around them"
              </motion.p>
            </div>
            <figure className="client-project-client-illustration-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
              <motion.img
                className="client-project-client-illustration-image"
                src={jdIllustration}
                alt="An illustration of Jude Dolore in a green-white-green sports set"
                title="Jude Dolore"
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
          <article className="client-project-references-container bg-[#34ad00] selection:bg-black selection:text-zinc-200 w-full h-auto flex flex-col items-center justify-center p-5 pt-10">
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
                  src={jdReference1}
                  alt="A photo of a female model in a Dolore navy top, Dolore camo crop shorts, and shin height camo boots, against a white brick background"
                  title="Dolore Model"
                  loading="lazy"
                  className="client-project-reference-image-1"
                  style={{ zIndex: 1, border: 'solid black 1px' }}
                />
              </motion.figure>
              <motion.figure className="client-project-reference-image-container-2 h-auto w-1/3 flex flex-col items-center justify-center">
                <img
                  src={jdReference2}
                  alt="A poster for Street Souk"
                  title="Street Souk Illustrated Poster"
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
                  src={jdReference3}
                  alt="A photo of Jude Dolore wearing a blue sports set, holding a football, leaning against a football field"
                  title="Jude Dolore"
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
              <p className="client-project-reference-description-text w-full hd:w-4/5 m-auto font-custom text-lg md:text-xl hd:text-3xl text-left md:text-justify text-black font-normal leading-snug">
                Jude sent over the amazing poster developed by some of my
                colleagues, notably{' '}
                <a
                  href="https://www.instagram.com/franklyn.okoye"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Franklyn Okoye
                </a>
                {', '}
                <a
                  href="https://www.instagram.com/simissj"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Sinmi
                </a>
                {', '}
                <a
                  href="https://www.instagram.com/sotiboyarts"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Soti Boy
                </a>
                {', '}
                <a
                  href="https://www.instagram.com/_t051n"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Tosin
                </a>
                {', '}
                <a
                  href="https://www.instagram.com/p/DSsg0YfjHfv/?img_index=1"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  and other talented artists and directors.
                </a>
                <br />
                <br />
                This served as excellent reference! I made note of the green
                colour theme, the use of Lagos landmarks in the backdrop, and
                how they balanced heavy imagery with the legibility of key
                information.
                <br />
                <br />
                For the two characters, he sent over some examples from
                Instagram of some of the shoots he's done before for Dolore.
                This again served as perfect references, I just had to feature
                the new green white green set on them in a cool way.
                <br />
                <br />
                In terms of art style, he liked the illustration I did of{' '}
                <a
                  href="https://www.instagram.com/p/DRJ0rRNiDG0/"
                  target="_blank"
                  className="hover:underline font-semibold"
                >
                  Rema
                </a>{' '}
                in bolapsd. In that one, I was experimenting with a gritty
                textured shading style, with vivid colours, shadows, and bold
                shapes.
                <br />
                <br />I upgraded the level of polish for this poster, because
                that was an overnight drawing, this one required controlled
                lights, and bold reflections.
              </p>
            </div>
          </article>
          <div className="client-project-draft-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-[#4dfe00] selection:text-black">
            <div className="client-project-draft-sketch h-full w-full hd:w-1/2">
              <article className="client-project-draft-sketch-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-draft-sketch-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={doloreData.Draft1.src}
                    alt={doloreData.Draft1.alt}
                    title={doloreData.Draft1.title}
                    loading="lazy"
                    className="mb-2"
                    ref={doloreDraft1Ref}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: doloreDraft1Position,
                      opacity: doloreDraft1Opacity,
                    }}
                    onClick={handleImageFocus(doloreData.Draft1)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-draft-sketch-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={doloreDraft1HeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: doloreDraft1HeaderPosition,
                      opacity: doloreDraft1HeaderOpacity,
                    }}
                  >
                    {doloreData.Draft1.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={doloreDraft1ParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: doloreDraft1ParagraphPosition,
                      opacity: doloreDraft1ParagraphOpacity,
                    }}
                  >
                    {doloreData.Draft1.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="client-project-draft-wip h-full w-full hd:w-1/2">
              <article className="client-project-draft-wip-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-draft-wip-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={doloreData.Draft2.src}
                    alt={doloreData.Draft2.alt}
                    title={doloreData.Draft2.title}
                    loading="lazy"
                    className="mb-2"
                    ref={doloreDraft2Ref}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: doloreDraft2Position,
                      opacity: doloreDraft2Opacity,
                    }}
                    onClick={handleImageFocus(doloreData.Draft2)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-draft-wip-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={doloreDraft2HeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: doloreDraft2HeaderPosition,
                      opacity: doloreDraft2HeaderOpacity,
                    }}
                  >
                    {doloreData.Draft2.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={doloreDraft2ParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: doloreDraft2ParagraphPosition,
                      opacity: doloreDraft2ParagraphOpacity,
                    }}
                  >
                    {doloreData.Draft2.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <div className="client-project-final-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-[#4dfe00] selection:text-black">
            <div className="client-project-final h-full w-full hd:w-1/2">
              <article className="client-project-final-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-final-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={doloreData.Final1.src}
                    alt={doloreData.Final1.alt}
                    title={doloreData.Final1.title}
                    loading="lazy"
                    className="mb-2"
                    ref={doloreFinal1Ref}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: doloreFinal1Position,
                      opacity: doloreFinal1Opacity,
                    }}
                    onClick={handleImageFocus(doloreData.Final1)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={doloreFinal1HeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: doloreFinal1HeaderPosition,
                      opacity: doloreFinal1HeaderOpacity,
                    }}
                  >
                    {doloreData.Final1.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={doloreFinal1ParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: doloreFinal1ParagraphPosition,
                      opacity: doloreFinal1ParagraphOpacity,
                    }}
                  >
                    {doloreData.Final1.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="client-project-final-bonus h-full w-full hd:w-1/2">
              <article className="client-project-final-bonus-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="client-project-final-bonus-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={doloreData.Final2.src}
                    alt={doloreData.Final2.alt}
                    title={doloreData.Final2.title}
                    loading="lazy"
                    className="mb-2"
                    ref={doloreFinal2Ref}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: doloreFinal2Position,
                      opacity: doloreFinal2Opacity,
                    }}
                    onClick={handleImageFocus(doloreData.Final2)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="client-project-final-bonus-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={doloreFinal2HeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: doloreFinal2HeaderPosition,
                      opacity: doloreFinal2HeaderOpacity,
                    }}
                  >
                    {doloreData.Final2.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={doloreFinal2ParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: doloreFinal2ParagraphPosition,
                      opacity: doloreFinal2ParagraphOpacity,
                    }}
                  >
                    {doloreData.Final2.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <section className="client-project-deliverables-container h-auto w-full bg-[#34ad00] selection:bg-black selection:text-zinc-200 p-5">
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
          navColour={navigationMap.Dolore.navColour}
          navPreviousTitle={navigationMap.Dolore.previousTitle}
          navPreviousSrc={navigationMap.Dolore.previousSrc}
          navNextTitle={navigationMap.Dolore.nextTitle}
          navNextSrc={navigationMap.Dolore.nextSrc}
        />
      </div>

      <ScrollTooltip />
    </div>
  );
};

export default Dolore;
