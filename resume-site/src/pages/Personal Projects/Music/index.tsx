import { useInView, motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import GalleryModal from '../../../components/GalleryModal';
import { ModalContent } from '../../../interfaces/ModalContent';

// Image imports
import cmBanner from '/optimised/carti_music_wide.jpg';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import musicData from './data';
import SEO from '../../../components/SEO/SEO';

const Music = () => {
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

  //////////////////////////

  const cmCover1Ref = useRef(null);
  const cmCover1InView = useInView(cmCover1Ref, {
    once: true,
  });
  const [cmCover1Opacity, setcmCover1Opacity] = useState(0);
  const [cmCover1Position, setcmCover1Position] = useState(20);

  useEffect(() => {
    if (cmCover1InView && scrollY > parallaxValue / 2.5 / 2.5) {
      setTimeout(() => {
        setcmCover1Opacity(1);
        setcmCover1Position(0);
      }, 50);
    } else {
      setcmCover1Opacity(0);
      setcmCover1Position(20);
    }
  }, [cmCover1InView, scrollY]);

  const cmCover1HeaderRef = useRef(null);
  const cmCover1HeaderInView = useInView(cmCover1HeaderRef, {
    once: true,
  });
  const [cmCover1HeaderOpacity, setcmCover1HeaderOpacity] = useState(0);
  const [cmCover1HeaderPosition, setcmCover1HeaderPosition] = useState(20);

  useEffect(() => {
    if (cmCover1HeaderInView && scrollY > parallaxValue / 2.5 / 2.5) {
      setTimeout(() => {
        setcmCover1HeaderOpacity(1);
        setcmCover1HeaderPosition(0);
      }, 50);
    } else {
      setcmCover1HeaderOpacity(0);
      setcmCover1HeaderPosition(20);
    }
  }, [cmCover1HeaderInView, scrollY]);

  const cmCover1ParagraphRef = useRef(null);
  const cmCover1ParagraphInView = useInView(cmCover1ParagraphRef, {
    once: true,
  });
  const [cmCover1ParagraphOpacity, setcmCover1ParagraphOpacity] = useState(0);
  const [cmCover1ParagraphPosition, setcmCover1ParagraphPosition] =
    useState(20);

  useEffect(() => {
    if (cmCover1ParagraphInView && scrollY > parallaxValue / 2.5 / 2.5) {
      setTimeout(() => {
        setcmCover1ParagraphOpacity(1);
        setcmCover1ParagraphPosition(0);
      }, 50);
    } else {
      setcmCover1ParagraphOpacity(0);
      setcmCover1ParagraphPosition(20);
    }
  }, [cmCover1ParagraphInView, scrollY]);

  const cmCover2Ref = useRef(null);
  const cmCover2InView = useInView(cmCover2Ref, {
    once: true,
  });
  const [cmCover2Opacity, setcmCover2Opacity] = useState(0);
  const [cmCover2Position, setcmCover2Position] = useState(20);

  useEffect(() => {
    if (cmCover2InView && scrollY > parallaxValue / 2.5 / 2.5) {
      setTimeout(() => {
        setcmCover2Opacity(1);
        setcmCover2Position(0);
      }, 50);
    } else {
      setcmCover2Opacity(0);
      setcmCover2Position(20);
    }
  }, [cmCover2InView, scrollY]);

  const cmCover2HeaderRef = useRef(null);
  const cmCover2HeaderInView = useInView(cmCover2HeaderRef, {
    once: true,
  });
  const [cmCover2HeaderOpacity, setcmCover2HeaderOpacity] = useState(0);
  const [cmCover2HeaderPosition, setcmCover2HeaderPosition] = useState(20);

  useEffect(() => {
    if (cmCover2HeaderInView && scrollY > parallaxValue / 2.5 / 2.5) {
      setTimeout(() => {
        setcmCover2HeaderOpacity(1);
        setcmCover2HeaderPosition(0);
      }, 50);
    } else {
      setcmCover2HeaderOpacity(0);
      setcmCover2HeaderPosition(20);
    }
  }, [cmCover2HeaderInView, scrollY]);

  const cmCover2ParagraphRef = useRef(null);
  const cmCover2ParagraphInView = useInView(cmCover2ParagraphRef, {
    once: true,
  });
  const [cmCover2ParagraphOpacity, setcmCover2ParagraphOpacity] = useState(0);
  const [cmCover2ParagraphPosition, setcmCover2ParagraphPosition] =
    useState(20);

  useEffect(() => {
    if (cmCover2ParagraphInView && scrollY > parallaxValue / 2.5 / 2.5) {
      setTimeout(() => {
        setcmCover2ParagraphOpacity(1);
        setcmCover2ParagraphPosition(0);
      }, 50);
    } else {
      setcmCover2ParagraphOpacity(0);
      setcmCover2ParagraphPosition(20);
    }
  }, [cmCover2ParagraphInView, scrollY]);

  const {
    ref: cmCover3Ref,
    opacity: cmCover3Opacity,
    position: cmCover3Position,
  } = useInViewAnimation();

  const {
    ref: cmCover3HeaderRef,
    opacity: cmCover3HeaderOpacity,
    position: cmCover3HeaderPosition,
  } = useInViewAnimation();

  const {
    ref: cmCover3ParagraphRef,
    opacity: cmCover3ParagraphOpacity,
    position: cmCover3ParagraphPosition,
  } = useInViewAnimation();

  const {
    ref: cmCover3TracklistRef,
    opacity: cmCover3TracklistOpacity,
    position: cmCover3TracklistPosition,
  } = useInViewAnimation();

  const {
    ref: cmCover3TracklistHeaderRef,
    opacity: cmCover3TracklistHeaderOpacity,
    position: cmCover3TracklistHeaderPosition,
  } = useInViewAnimation();

  const {
    ref: cmCover3TracklistParagraphRef,
    opacity: cmCover3TracklistParagraphOpacity,
    position: cmCover3TracklistParagraphPosition,
  } = useInViewAnimation();

  // Declarations for Project Navigate section
  const projectNavigateRef = useRef(null);
  const projectNavigateInView = useInView(projectNavigateRef);

  const projectNavigateScope = useMenuAnimation(projectNavigateInView);

  const previousProject = 'Subaru Boy';
  const nextProject = 'Mowalola';

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
    <div className="personal-project-container bg-black w-full h-auto">
      <SEO
        title="Music | Personal Projects"
        description="Explore a Playboi Carti album concept project by contemporary artist Sean Donny, showcasing his creative direction skills."
        type="article"
        url="https://seandonny.com/personal-projects/music"
        image={cmBanner}
      />
      {modalOpen && (
        <GalleryModal modalContent={modalContent} onClose={handleImageExit} />
      )}
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
              src={cmBanner}
              alt="An illustration playboi carti engulfed in black flames against a red backdrop"
              title="Playboi Carti: Music Album Concept"
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
          <div className="personal-project-concepts-1-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-rose-500 selection:text-zinc-200">
            <div className="personal-project-cover-1 h-full w-full hd:w-1/2">
              <article className="personal-project-cover-1-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="personal-project-cover-1-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={musicData.Cover1.src}
                    alt={musicData.Cover1.alt}
                    title={musicData.Cover1.title}
                    loading="eager"
                    className="mb-2"
                    ref={cmCover1Ref}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cmCover1Position,
                      opacity: cmCover1Opacity,
                    }}
                    onClick={handleImageFocus(musicData.Cover1)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="personal-project-cover-1-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={cmCover1HeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cmCover1HeaderPosition,
                      opacity: cmCover1HeaderOpacity,
                    }}
                  >
                    {musicData.Cover1.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={cmCover1ParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cmCover1ParagraphPosition,
                      opacity: cmCover1ParagraphOpacity,
                    }}
                  >
                    {musicData.Cover1.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="personal-project-cover-2 h-full w-full hd:w-1/2">
              <article className="personal-project-cover-2-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="personal-project-cover-2-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={musicData.Cover2.src}
                    alt={musicData.Cover2.alt}
                    title={musicData.Cover2.title}
                    loading="eager"
                    className="mb-2"
                    ref={cmCover2Ref}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cmCover2Position,
                      opacity: cmCover2Opacity,
                    }}
                    onClick={handleImageFocus(musicData.Cover2)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="personal-project-cover-2-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={cmCover2HeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cmCover2HeaderPosition,
                      opacity: cmCover2HeaderOpacity,
                    }}
                  >
                    {musicData.Cover2.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={cmCover2ParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cmCover2ParagraphPosition,
                      opacity: cmCover2ParagraphOpacity,
                    }}
                  >
                    {musicData.Cover2.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
          <div className="personal-project-concepts-2-container h-auto w-full flex flex-col hd:flex-row p-5 selection:bg-rose-500 selection:text-zinc-200">
            <div className="personal-project-cover-3 h-full w-full hd:w-1/2">
              <article className="personal-project-cover-3-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="personal-project-cover-3-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={musicData.Cover3.src}
                    alt={musicData.Cover3.alt}
                    title={musicData.Cover3.title}
                    loading="eager"
                    className="mb-2"
                    ref={cmCover3Ref}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cmCover3Position,
                      opacity: cmCover3Opacity,
                    }}
                    onClick={handleImageFocus(musicData.Cover3)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="personal-project-cover-3-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={cmCover3HeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cmCover3HeaderPosition,
                      opacity: cmCover3HeaderOpacity,
                    }}
                  >
                    {musicData.Cover3.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={cmCover3ParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cmCover3ParagraphPosition,
                      opacity: cmCover3ParagraphOpacity,
                    }}
                  >
                    {musicData.Cover3.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
            <div className="personal-project-tracklist h-full w-full hd:w-1/2">
              <article className="personal-project-tracklist-container flex flex-col items-center justify-center h-auto w-full p-5 hd:p-20 my-5 hd:my-0">
                <figure className="personal-project-tracklist-artwork h-3/5 w-full flex flex-col items-center justify-center">
                  <motion.img
                    src={musicData.Cover3Tracklist.src}
                    alt={musicData.Cover3Tracklist.alt}
                    title={musicData.Cover3Tracklist.title}
                    loading="eager"
                    className="mb-2"
                    ref={cmCover3TracklistRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cmCover3TracklistPosition,
                      opacity: cmCover3TracklistOpacity,
                    }}
                    onClick={handleImageFocus(musicData.Cover3Tracklist)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </figure>
                <div className="personal-project-tracklist-description h-2/5 w-full flex flex-col items-center justify-center">
                  <motion.h2
                    className="font-custom text-3xl text-left text-zinc-200 mt-5 w-full font-semibold xl:px-80"
                    ref={cmCover3TracklistHeaderRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cmCover3TracklistHeaderPosition,
                      opacity: cmCover3TracklistHeaderOpacity,
                    }}
                  >
                    {musicData.Cover3Tracklist.header}
                  </motion.h2>
                  <motion.p
                    className="font-custom text-xl text-zinc-400 mt-5 w-full font-medium xl:px-80"
                    ref={cmCover3TracklistParagraphRef}
                    initial={{ opacity: 0 }}
                    animate={{
                      translateY: cmCover3TracklistParagraphPosition,
                      opacity: cmCover3TracklistParagraphOpacity,
                    }}
                  >
                    {musicData.Cover3Tracklist.paragraph}
                  </motion.p>
                </div>
              </article>
            </div>
          </div>
        </main>
        <nav className="personal-project-navigate h-[468px] w-full bg-red-600 selection:bg-black selection:text-zinc-200 p-5">
          <ul
            className="personal-project-navigate-list flex flex-row justify-between items-center h-full overflow-hidden"
            ref={projectNavigateScope}
          >
            <li
              className="personal-project-navigate-previous h-full w-2/5 hd:w-1/4 flex flex-col items-start justify-center cursor-pointer"
              onClick={() => {
                handleNavigate('personal-projects/subaru-boy');
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
                handleNavigate('personal-projects/mowalola');
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

export default Music;
