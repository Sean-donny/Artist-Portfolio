import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import GalleryModal from '../../../components/GalleryModal';
import { ModalContent } from '../../../interfaces/ModalContent';

// image imports
import sbBanner from '/optimised/cruel_santino_subaru_boy_wide.jpg';
import sb3DModel from '/optimised/cruel_santino_subaru_boy_3d_model.jpg';
import subaruData from './data';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import SEO from '../../../components/SEO/SEO';

const SubaruBoy = () => {
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
    ref: sbIllustration1Ref,
    opacity: sbIllustration1Opacity,
    position: sbIllustration1Position,
  } = useInViewAnimation();

  const {
    ref: sbIllustration2Ref,
    opacity: sbIllustration2Opacity,
    position: sbIllustration2Position,
  } = useInViewAnimation();

  const {
    ref: sbIllustration3Ref,
    opacity: sbIllustration3Opacity,
    position: sbIllustration3Position,
  } = useInViewAnimation();

  const {
    ref: sbIllustration4Ref,
    opacity: sbIllustration4Opacity,
    position: sbIllustration4Position,
  } = useInViewAnimation();

  // Declarations for Project Navigate section
  const projectNavigateRef = useRef(null);
  const projectNavigateInView = useInView(projectNavigateRef);

  const projectNavigateScope = useMenuAnimation(projectNavigateInView);

  const previousProject = 'Animation Project';
  const nextProject = 'Music';

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="personal-project-container bg-black w-full h-auto">
      {modalOpen && (
        <GalleryModal modalContent={modalContent} onClose={handleImageExit} />
      )}
      <SEO
        title="Subaru Boy | Personal Projects"
        description="Explore a collection of Cruel Santino inspired works by contemporary artist Sean Donny, showcasing his character design skills."
        type="article"
        url="https://www.seandonny.com/personal-projects/subaru-boy"
        image={sbBanner}
      />
      <div className="personal-project-sections w-full h-auto flex flex-col items-center justify-center relative">
        <main>
          <figure
            className="personal-project-hero w-full h-auto overflow-hidden sticky top-0 pointer-events-none"
            style={{
              transform: `translate3d(0px, ${-heroTranslate}px, 0px)`,
              WebkitTransform: `translate3d(0px, ${-heroTranslate}px, 0px)`,
              zIndex: 1,
            }}
          >
            <motion.img
              src={sbBanner}
              alt="A tight close up of Smada performing"
              title="A tight close up of Smada performing"
              loading="eager"
              className="personal-project-hero-image w-full h-full object-cover object-center"
              initial={{ scale: 1, opacity: 1 }}
              animate={controls}
            />
          </figure>
          {/* height of safe space is set to the same as parallaxValue */}
          <div className={`personal-project-hero-safe-space h-[400px] w-full`}>
            &nbsp;
          </div>
          <article className="personal-project-design-goal-container h-auto w-full flex flex-col hd:flex-row p-5 hd:py-20 hd:px-5 selection:bg-orange-600 selection:text-zinc-200">
            <div className="personal-project-design-goal-description-container h-auto w-full hd:w-3/5 hd:max-h-[1500px] xl:pl-20">
              <motion.h1
                ref={heroHeaderRef}
                className="personal-project-design-goal-description-header text-zinc-200 font-custom font-semibold italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mb-5"
                initial={{ opacity: 0 }}
                animate={{
                  translateY: heroHeaderPosition,
                  opacity: heroHeaderOpacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                I swear it's not an obsession, I just really like his music
              </motion.h1>
              <motion.p
                className="personal-project-design-goal-description-paragraph-1 text-zinc-400 font-custom font-medium italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={heroP1Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: heroP1Position,
                  opacity: heroP1Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                I've drawn Santi around 5 to 6 times; it'll be tough to beat the
                allegations...
              </motion.p>
              <motion.p
                className="personal-project-design-goal-description-paragraph-2 text-zinc-400 font-custom font-normal italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={heroP2Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: heroP2Position,
                  opacity: heroP2Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                But he understands the importance of branding, and he has so
                much personality, so it's very easy to translate his moments
                into illustrations...
              </motion.p>
              <motion.p
                className="personal-project-design-goal-description-paragraph-3 text-zinc-400 font-custom font-extralight italic tracking-tight p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1 mt-5"
                ref={heroP3Ref}
                initial={{ opacity: 0 }}
                animate={{
                  translateY: heroP3Position,
                  opacity: heroP3Opacity,
                }}
                transition={{ delay: 0.3, ease: 'anticipate', duration: 1 }}
              >
                I'm always making projects based on my personal interests, being
                a Subaru Boy just happens to be one of them.
              </motion.p>
            </div>
            <figure className="personal-project-design-goal-image-container h-auto w-full p-5 hd:w-2/5 hd:max-h-[1500px] flex flex-col items-center justify-center overflow-visible">
              <motion.img
                className="personal-project-design-goal-image"
                src={sb3DModel}
                alt="Cruel Santino 3D model"
                title="Cruel Santino 3D model"
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
          <div className="personal-project-illustrations-set-1-container w-full h-auto flex flex-col hd:flex-row items-center justify-center hd:py-20 selection:bg-orange-600">
            <div className="personal-project-illustrations-1-container h-auto w-full hd:w-1/2 p-5 flex flex-col items-center justify-center">
              <figure className="flex flex-col items-center justify-center w-full h-5/6">
                <motion.img
                  src={subaruData.Illustration1.src}
                  alt={subaruData.Illustration1.alt}
                  title={subaruData.Illustration1.title}
                  loading="lazy"
                  className="personal-project-illustrations-1-image mb-2 p-5"
                  ref={sbIllustration1Ref}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: sbIllustration1Position,
                    opacity: sbIllustration1Opacity,
                  }}
                  onClick={handleImageFocus(subaruData.Illustration1)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                />
              </figure>
              <motion.div className="illustration-images-description-1 w-full h-1/6">
                <p className="font-custom text-base text-center text-zinc-200">
                  {subaruData.Illustration1.title}
                  <br />
                  {subaruData.Illustration1.year}
                </p>
              </motion.div>
            </div>
            <div className="personal-project-illustrations-2-container h-auto w-full hd:w-1/2 p-5 flex flex-col items-center justify-center">
              <figure className="flex flex-col items-center justify-center w-full h-5/6">
                <motion.img
                  src={subaruData.Illustration2.src}
                  alt={subaruData.Illustration2.alt}
                  title={subaruData.Illustration2.title}
                  loading="lazy"
                  className="personal-project-illustrations-2-image mb-2 p-5"
                  ref={sbIllustration2Ref}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: sbIllustration2Position,
                    opacity: sbIllustration2Opacity,
                  }}
                  onClick={handleImageFocus(subaruData.Illustration2)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                />
              </figure>
              <motion.div className="illustration-images-description-2 w-full h-1/6">
                <p className="font-custom text-base text-center text-zinc-200">
                  {subaruData.Illustration2.title}
                  <br />
                  {subaruData.Illustration2.year}
                </p>
              </motion.div>
            </div>
          </div>
          <div className="personal-project-illustrations-set-2-container w-full h-auto flex flex-col hd:flex-row items-center justify-center hd:py-20 selection:bg-orange-600">
            <div className="personal-project-illustrations-3-container h-auto w-full hd:w-1/2 p-5 flex flex-col items-center justify-center">
              <figure className="flex flex-col items-center justify-center w-full h-5/6">
                <motion.img
                  src={subaruData.Illustration3.src}
                  alt={subaruData.Illustration3.alt}
                  title={subaruData.Illustration3.title}
                  loading="lazy"
                  className="personal-project-subaru-boy-illustrations-3-image mb-2 p-5 h-auto w-[700px]"
                  ref={sbIllustration3Ref}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: sbIllustration3Position,
                    opacity: sbIllustration3Opacity,
                  }}
                  onClick={handleImageFocus(subaruData.Illustration3)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                />
              </figure>
              <motion.div className="subaru-boy-illustration-images-description-3 w-full h-1/6">
                <p className="font-custom text-base text-center text-zinc-200">
                  {subaruData.Illustration3.title}
                  <br />
                  {subaruData.Illustration3.year}
                </p>
              </motion.div>
            </div>
            <div className="personal-project-subaru-boy-illustrations-4-container h-auto w-full hd:w-1/2 p-5 flex flex-col items-center justify-center">
              <figure className="flex flex-col items-center justify-center w-full h-5/6">
                <motion.img
                  src={subaruData.Illustration4.src}
                  alt={subaruData.Illustration4.alt}
                  title={subaruData.Illustration4.title}
                  loading="lazy"
                  className="personal-project-subaru-boy-illustrations-4-image mb-2 p-5"
                  ref={sbIllustration4Ref}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: sbIllustration4Position,
                    opacity: sbIllustration4Opacity,
                  }}
                  onClick={handleImageFocus(subaruData.Illustration4)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                />
              </figure>
              <motion.div className="subaru-boy-illustration-images-description-4 w-full h-1/6">
                <p className="font-custom text-base text-center text-zinc-200">
                  {subaruData.Illustration4.title}
                  <br />
                  {subaruData.Illustration4.year}
                </p>
              </motion.div>
            </div>
          </div>
        </main>
        <nav className="personal-project-navigate h-[468px] w-full bg-orange-600 selection:bg-black selection:text-zinc-200 p-5">
          <ul
            className="personal-project-navigate-list flex flex-row justify-between items-center h-full overflow-hidden"
            ref={projectNavigateScope}
          >
            <li
              className="personal-project-navigate-previous h-full w-2/5 hd:w-1/4 flex flex-col items-start justify-center cursor-pointer"
              onClick={() => {
                handleNavigate('personal-projects/animation-project');
              }}
            >
              <p className="personal-project-navigate-previous-title font-custom text-2xl text-left text-black w-full font-normal">
                &larr;
              </p>
              <motion.p
                className="personal-project-navigate-previous-title font-custom text-2xl md:text-3xl text-left text-black w-full font-semibold hover:underline underline-offset-2"
                whileTap={{ scaleY: 0.9 }}
                ref={projectNavigateRef}
              >
                {previousProject}
              </motion.p>
            </li>
            <li
              className="personal-project-navigate-next h-full w-2/5 hd:w-1/4 flex flex-col items-end justify-center cursor-pointer"
              onClick={() => {
                handleNavigate('personal-projects/music');
              }}
            >
              <p className="personal-project-navigate-next-title font-custom text-2xl text-right text-black w-full font-normal">
                &rarr;
              </p>
              <motion.p
                className="personal-project-navigate-next-title font-custom text-2xl md:text-3xl text-right text-black w-full font-semibold hover:underline underline-offset-2"
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

export default SubaruBoy;
