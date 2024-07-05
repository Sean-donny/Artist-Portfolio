import { useInView, motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import { ModalContent } from '../../../interfaces/ModalContent';
import animationProjectData from './data';
import useInViewAnimation from '../../../Hooks/useInViewAnimation';
import GalleryModal from '../../../components/GalleryModal';
import SEO from '../../../components/SEO/SEO';

// image imports
import sdCharacterSheet from '/optimised/sean_donny_animated_character_turnaround_sheet.jpg';
import sdExpressionSheet from '/optimised/sean_donny_animated_character_expression_sheet.jpg';

const AnimationProject = () => {
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

  // Uses custom hook to generate ref, and states for opacity & position values

  const {
    ref: sdTurnAroundRef,
    opacity: sdTurnAroundOpacity,
    position: sdTurnAroundPosition,
  } = useInViewAnimation();

  const {
    ref: sdCharacterRef,
    opacity: sdCharacterOpacity,
    position: sdCharacterPosition,
  } = useInViewAnimation();

  const {
    ref: sdExpressionSheetRef,
    opacity: sdExpressionSheetOpacity,
    position: sdExpressionSheetPosition,
  } = useInViewAnimation();

  // Declarations for Project Navigate section
  const projectNavigateRef = useRef(null);
  const projectNavigateInView = useInView(projectNavigateRef);

  const projectNavigateScope = useMenuAnimation(projectNavigateInView);

  const previousProject = 'Mowalola';
  const nextProject = 'Subaru Boy';

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="personal-project-container bg-black flex flex-col items-center justify-center overflow-hidden min-h-screen">
      <SEO
        title="Animation Project | Personal Projects | Sean Donny"
        description="Explore a charatcer design and animation project by contemporary artist Sean Donny, showcasing his animation development skills."
        type="article"
        url="https://seandonny.com/personal-projects/animation-project"
        image={sdExpressionSheet}
      />
      {modalOpen && (
        <GalleryModal modalContent={modalContent} onClose={handleImageExit} />
      )}
      <div className="personal-project-sections w-full h-auto flex flex-col items-center justify-center relative">
        <main>
          <figure className="personal-project-character-sheet-image-container w-full h-auto flex flex-col items-center justify-center py-10 hd:p-10">
            <img
              src={sdCharacterSheet}
              alt="A character design sheet of my 19 year old self"
              className="animation-project-character-sheet-image w-full h-auto"
            />
          </figure>
          <article className="personal-project-description-and-illustration-container w-full h-auto flex flex-col hd:flex-row items-start justify-center hd:py-20 selection:bg-pink-600">
            <div className="personal-project-description-container h-auto w-full hd:w-1/2 p-5 flex flex-col items-center justify-center">
              <p className="personal-project-description-text text-zinc-400 font-custom font-normal tracking-tight p-5 lg:text-4xl text-2xl lg:leading-relaxed selection:bg-pink-600 selection:text-zinc-200">
                After coming across an incredibly insightful animation tutorial
                by{' '}
                <a
                  href="https://youtu.be/yvUkaBhwAFY?si=jhiQtAewNTU5BF76"
                  target="_blank"
                  className="hover:underline text-pink-600"
                >
                  {' '}
                  BAM&nbsp;Animation
                </a>
                , I decided to push my creative boundaries by crafting an
                animated character inspired by my then 19-year-old self.
                <br />
                Prior to delving into Computer Science, my original passion was
                pursuing 2D animation at university. Influenced by cherished
                childhood shows like Regular Show and Adventure Time, along with
                contemporary classics like Rick and Morty. I envisioned a future
                where I developed my own television show based on life in
                high&nbsp;school.
                <br />
                The project concluded with the creation of a character featuring
                two distinct outfits, an expression sheet, and a character
                turnaround animation.
              </p>
            </div>
            <div className="personal-project-illustrations-2-container h-auto w-full hd:w-1/2 p-5 flex flex-col items-center justify-center">
              <figure className="flex flex-col items-center justify-center w-full h-5/6">
                <motion.img
                  src={animationProjectData.TurnAround.src}
                  alt={animationProjectData.TurnAround.alt}
                  className="personal-project-illustrations-2-image mb-2 p-5"
                  ref={sdTurnAroundRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: sdTurnAroundPosition,
                    opacity: sdTurnAroundOpacity,
                  }}
                  onClick={handleImageFocus(animationProjectData.TurnAround)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                />
              </figure>
              <motion.div className="illustration-images-description-2 w-full h-1/6">
                <p className="font-custom text-base text-center text-zinc-200">
                  {animationProjectData.TurnAround.title}
                  <br />
                  {animationProjectData.TurnAround.year}
                </p>
              </motion.div>
            </div>
          </article>
          <div className="personal-project-illustrations-set-2-container w-full h-auto flex flex-col hd:flex-row items-center justify-center hd:py-20 selection:bg-orange-600">
            <div className="personal-project-illustrations-3-container h-auto w-full hd:w-1/2 p-5 flex flex-col items-center justify-center">
              <figure className="flex flex-col items-center justify-center w-full h-5/6">
                <motion.img
                  src={animationProjectData.Character.src}
                  alt={animationProjectData.Character.alt}
                  className="personal-project-illustrations-3-image mb-2 p-5"
                  ref={sdCharacterRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: sdCharacterPosition,
                    opacity: sdCharacterOpacity,
                  }}
                  onClick={handleImageFocus(animationProjectData.Character)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                />
              </figure>
              <motion.div className="illustration-images-description-1 w-full h-1/6">
                <p className="font-custom text-base text-center text-zinc-200">
                  {animationProjectData.Character.title}
                  <br />
                  {animationProjectData.Character.year}
                </p>
              </motion.div>
            </div>
            <div className="personal-project-illustrations-4-container h-auto w-full hd:w-1/2 p-5 flex flex-col items-center justify-center">
              <figure className="flex flex-col items-center justify-center w-full h-5/6">
                <motion.img
                  src={animationProjectData.ExpressionSheet.src}
                  alt={animationProjectData.ExpressionSheet.alt}
                  className="personal-project-illustrations-4-image mb-2 p-5"
                  ref={sdExpressionSheetRef}
                  initial={{ opacity: 0 }}
                  animate={{
                    translateY: sdExpressionSheetPosition,
                    opacity: sdExpressionSheetOpacity,
                  }}
                  onClick={handleImageFocus(
                    animationProjectData.ExpressionSheet,
                  )}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                />
              </figure>
              <motion.div className="illustration-images-description-2 w-full h-1/6">
                <p className="font-custom text-base text-center text-zinc-200">
                  {animationProjectData.ExpressionSheet.title}
                  <br />
                  {animationProjectData.ExpressionSheet.year}
                </p>
              </motion.div>
            </div>
          </div>
        </main>
        <nav className="personal-project-navigate h-[468px] w-full bg-pink-600 selection:bg-black selection:text-zinc-200 p-5">
          <ul
            className="personal-project-navigate-list flex flex-row justify-between items-center h-full overflow-hidden"
            ref={projectNavigateScope}
          >
            <li
              className="personal-project-navigate-previous h-full w-2/5 hd:w-1/4 flex flex-col items-start justify-center cursor-pointer"
              onClick={() => {
                handleNavigate('personal-projects/mowalola');
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
                handleNavigate('personal-projects/subaru-boy');
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

export default AnimationProject;
