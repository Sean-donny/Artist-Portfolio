import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// image imports
import mowaSpinner from '/optimised/mowalola_360_logo.gif';
import mowaLogo from '/optimised/mowalola_logo.jpg';
import mowaRepost from '/optimised/mowalola_ig_repost.jpg';

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

  return (
    <div
      className="mowalola-container bg-black flex flex-col items-center justify-center"
      ref={pageBoundsRef}
    >
      <div className="mowalola-spinner-container w-auto max-w-[800px] h-auto min-h-screen flex items-center justify-center">
        <img
          src={bannerSource[bannerIndex]}
          alt="spinning 3d model of a Mowalola logo"
          className="mowalola-spinner-gif h-auto w-auto cursor-pointer"
          onClick={bannerShuffle}
        />
      </div>
      <div className="mowalola-ig-repost-section flex flex-col items-center justify-center">
        <div className="mowalola-ig-repost-description w-auto h-auto hd:w-2/3 m-auto">
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
            , I felt inspired to create a logo for Mowalola. The entire project
            consumed a day of my time, and I thoroughly enjoyed the process.
            Excited about the outcome, I shared it on my Instagram story,
            tagging Mowa, and to my delight, she reposted it. This sparked a
            conversation about utilizing the logo and potentially collaborating
            on a project together. However, unfortunately, the collaboration
            never came to fruition.
          </p>
        </div>
        <div className="mowalola-ig-repost-screenshot-container w-auto h-auto">
          <motion.img
            src={mowaRepost}
            ref={mowaScreenshotRef}
            className="mowalola-ig-repost-screenshot-image w-auto h-[660px]"
            drag
            dragConstraints={screenshotConstraints}
          />
        </div>
      </div>
    </div>
  );
};

export default Mowalola;
