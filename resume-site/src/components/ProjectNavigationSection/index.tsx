import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useMenuAnimation } from '../../Hooks/useMenuAnimation';
import { usePageTransition } from '../Transitions/TransitionLayout';

interface ProjectNavigationProps {
  navColour: string;
  navPreviousTitle: string;
  navPreviousSrc: string;
  navNextTitle: string;
  navNextSrc: string;
}

const ProjectNavigation = ({
  navColour,
  navPreviousTitle,
  navPreviousSrc,
  navNextTitle,
  navNextSrc,
}: ProjectNavigationProps) => {
  const projectNavigateRef = useRef(null);
  const projectNavigateInView = useInView(projectNavigateRef);

  const projectNavigateScope = useMenuAnimation(projectNavigateInView);

  const { navigateTo } = usePageTransition();

  const handleNavigate = (path: string) => {
    navigateTo(`/${path}`);
  };
  return (
    <nav
      className={`client-project-navigate h-[468px] w-full ${navColour} selection:bg-black selection:text-zinc-200 p-5`}
    >
      <ul
        className="client-project-navigate-list flex flex-row justify-between items-center h-full overflow-hidden"
        ref={projectNavigateScope}
      >
        <li
          className="client-project-navigate-previous h-full w-[48%] sm:w-2/5 hd:w-1/4 flex flex-col items-start justify-center cursor-pointer"
          onClick={() => {
            handleNavigate(navPreviousSrc);
          }}
        >
          <p className="client-project-navigate-previous-title font-custom text-2xl text-left text-black w-full font-normal">
            &larr;
          </p>
          <motion.p
            className="client-project-navigate-previous-title font-custom text-xl sm:text-2xl md:text-3xl text-left text-black w-full font-semibold hover:underline underline-offset-2"
            whileTap={{ scaleY: 0.9 }}
            ref={projectNavigateRef}
          >
            {navPreviousTitle}
          </motion.p>
        </li>
        <li
          className="client-project-navigate-next h-full w-[48%] sm:w-2/5 hd:w-1/4 flex flex-col items-end justify-center cursor-pointer"
          onClick={() => {
            handleNavigate(navNextSrc);
          }}
        >
          <p className="client-project-navigate-next-title font-custom text-2xl text-right text-black w-full font-normal">
            &rarr;
          </p>
          <motion.p
            className="client-project-navigate-next-title font-custom text-xl sm:text-2xl md:text-3xl text-right text-black w-full font-semibold hover:underline underline-offset-2"
            whileTap={{ scaleY: 0.9 }}
          >
            {navNextTitle}
          </motion.p>
        </li>
      </ul>
    </nav>
  );
};

export default ProjectNavigation;
