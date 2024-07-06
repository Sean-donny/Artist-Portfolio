import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// image imports
import mowaSpinner from '/optimised/mowalola_360_logo.gif';
import mowaLogo from '/optimised/mowalola_logo.jpg';
import mowaRepost from '/optimised/mowalola_ig_repost.jpg';

import { useNavigate } from 'react-router-dom';
import { useMenuAnimation } from '../../../Hooks/useMenuAnimation';
import SEO from '../../../components/SEO/SEO';

const Mowalola = () => {
  const bannerSource = [mowaSpinner, mowaLogo];
  const [bannerIndex, setBannerIndex] = useState(0);

  const bannerShuffle = () => {
    setBannerIndex(prev => (prev + 1) % bannerSource.length);
  };

  const pageBoundsRef = useRef<HTMLDivElement | null>(null);
  const [pageBounds, setPageBounds] = useState({ x: 0, y: 0 });

  const mowaScreenshotRef = useRef<HTMLImageElement | null>(null);
  const [mowaScreenshotDimensions, setMowaScreenshotDimensions] = useState({
    x: 0,
    y: 0,
  });

  const [screenshotConstraints, setConstraints] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  useEffect(() => {
    const updatePageBounds = () => {
      if (pageBoundsRef.current) {
        const width = pageBoundsRef.current.clientWidth;
        const height = pageBoundsRef.current.clientHeight;
        setPageBounds(prev => ({ ...prev, x: width, y: height }));
      }
      if (mowaScreenshotRef.current) {
        const width = mowaScreenshotRef.current.clientWidth;
        const height = mowaScreenshotRef.current.clientHeight;
        setMowaScreenshotDimensions(prev => ({ ...prev, x: width, y: height }));
      }
      if (pageBoundsRef.current && mowaScreenshotRef.current) {
        setConstraints(prev => ({
          ...prev,
          top: -pageBounds.y + mowaScreenshotDimensions.y,
          bottom: 0,
          left: -(pageBounds.x / 2) + mowaScreenshotDimensions.x / 2,
          right: pageBounds.x / 2 - mowaScreenshotDimensions.x / 2,
        }));
      }
    };

    // Add resize event listener
    window.addEventListener('resize', updatePageBounds);

    // Initial update
    updatePageBounds();

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', updatePageBounds);
    };
  }, [
    mowaScreenshotDimensions.x,
    mowaScreenshotDimensions.y,
    pageBounds.x,
    pageBounds.y,
    pageBoundsRef,
  ]);

  const screenshotInView = useInView(mowaScreenshotRef);

  const [jumpValue, setJumpValue] = useState(5);

  useEffect(() => {
    const pokeEffect = () => {
      const leftOrRight = () => {
        const randomValue = Math.random();
        return randomValue >= 0.5 ? 1 : -1;
      };
      const widthClamp = () => {
        return Math.max(Math.random() * 14, 2.5);
      };

      // 760 to check if the width of the device is greater than mobile

      if (screenshotInView && pageBounds.x > 760) {
        const newJumpValue =
          (Math.floor(Math.random() * (pageBounds?.x / widthClamp())) + 1) *
          leftOrRight();
        setJumpValue(newJumpValue);
      } else {
        setJumpValue(0);
      }
    };

    const pokeInterval = setInterval(() => {
      pokeEffect();
    }, 3000);

    const element = mowaScreenshotRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.x < 0 || rect.x > pageBounds?.x) {
        setJumpValue(0);
      }
    }

    return () => clearInterval(pokeInterval);
  }, [pageBounds?.x, screenshotInView]);

  // Declarations for Project Navigate section
  const projectNavigateRef = useRef(null);
  const projectNavigateInView = useInView(projectNavigateRef);

  const projectNavigateScope = useMenuAnimation(projectNavigateInView);

  const previousProject = 'Music';
  const nextProject = 'Animation Project';

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="mowalola-container bg-black flex flex-col items-center justify-center overflow-hidden">
      <SEO
        title="Mowalola | Personal Projects"
        description="Explore a 3D logo project by contemporary artist Sean Donny, showcasing his 3D modelling and design skills."
        type="article"
        url="https://www.seandonny.com/personal-projects/mowalola"
        image={mowaLogo}
      />
      <main>
        <div
          className="mowaola-playground flex flex-col items-center justify-center overflow-hidden"
          ref={pageBoundsRef}
        >
          <figure className="mowalola-spinner-container w-auto max-w-[800px] h-auto min-h-screen flex items-center justify-center">
            <img
              src={bannerSource[bannerIndex]}
              alt="spinning 3d model of a Mowalola logo"
              title="Mowalola 3D Logo"
              loading="eager"
              className="mowalola-spinner-gif h-auto w-auto cursor-pointer"
              onClick={bannerShuffle}
            />
          </figure>
          <div className="mowalola-ig-repost-section flex flex-col items-center justify-center">
            <article className="mowalola-ig-repost-description w-auto h-auto hd:w-2/3 m-auto">
              <p className="mowalola-ig-repost-description-text text-zinc-400 font-custom font-normal tracking-tight p-10 lg:text-4xl text-2xl lg:leading-relaxed selection:bg-red-600 selection:text-zinc-200">
                Circa &#40;2021&#41;
                <br />
                After stumbling upon an insightful Blender tutorial by{' '}
                <a
                  href="https://youtu.be/HsnzMZve_NU?si=MDyKoTio1x5mJjbd"
                  target="_blank"
                  className="hover:underline text-lime-300"
                >
                  {' '}
                  IntranetGirl
                </a>
                , I felt inspired to create a logo for Mowalola. The entire
                project consumed a day of my time, and I thoroughly enjoyed the
                process. Excited about the outcome, I shared it on my Instagram
                story, tagging Mowa, and to my delight, she reposted it. This
                sparked a conversation about utilizing the logo and potentially
                collaborating on a project together. However, the collaboration
                never came to fruition.
              </p>
            </article>
            <figure className="mowalola-ig-repost-screenshot-container w-auto h-auto">
              <motion.img
                src={mowaRepost}
                alt="instagram repost of Mowalola 3D logo"
                title="Mowalola 3D logo Instagram Repost"
                loading="eager"
                ref={mowaScreenshotRef}
                className="mowalola-ig-repost-screenshot-image w-auto h-[300px] md:h-[660px] cursor-grab"
                drag
                dragConstraints={screenshotConstraints}
                animate={{ x: jumpValue }}
                transition={{
                  type: 'spring',
                  damping: 3,
                  stiffness: 50,
                  restDelta: 0.001,
                }}
              />
            </figure>
          </div>
        </div>
      </main>
      <nav className="personal-project-navigate h-[468px] w-full bg-red-600 selection:bg-black selection:text-zinc-200 p-5 mt-5">
        <ul
          className="personal-project-navigate-list flex flex-row justify-between items-center h-full overflow-hidden"
          ref={projectNavigateScope}
        >
          <li
            className="personal-project-navigate-previous h-full w-2/5 hd:w-1/4 flex flex-col items-start justify-center cursor-pointer"
            onClick={() => {
              handleNavigate('personal-projects/music');
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
              handleNavigate('personal-projects/animation-project');
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
  );
};

export default Mowalola;
