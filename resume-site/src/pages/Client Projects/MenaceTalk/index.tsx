import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import mtHeroBanner from '/optimised/trill_tega_menace_talk_video_still_1.jpg';

const MenaceTalk = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const [heroTranslate, setHeroTranslate] = useState(0);

  const parallaxValue = 400;

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (scrollY < parallaxValue) {
      controls.start({ scale: 1 + scrollY * 0.001 });
      setHeroTranslate(0);
    } else {
      setHeroTranslate(scrollY - parallaxValue);
    }
  }, [scrollY, controls]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="client-project-container bg-black w-full h-auto p-5">
      <div className="client-project-sections w-full h-auto flex flex-col items-center justify-center">
        <div
          className="client-project-hero bg-fuchsia-700 w-full h-[1080] overflow-hidden sticky top-5"
          style={{
            transform: `translate(0px, ${-heroTranslate}px)`,
            zIndex: 1,
          }}
        >
          <motion.img
            src={mtHeroBanner}
            alt="Chrome skull emerges from purple hole in the desert on a dark moonlit night"
            className="client-project-hero-image w-full h-full object-cover object-center"
            initial={{ scale: 1 }}
            animate={controls}
          />
        </div>
        <div className={`h-[${parallaxValue}px] w-full bg-yellow-400`}>
          safe space
        </div>
        <div className="h-[1080px] w-full bg-slate-600">design goal</div>
        <div className="h-[1080px] w-full bg-slate-700">
          initial concepts & inspiration
        </div>
        <div className="h-[1080px] w-full bg-slate-800">process</div>
        <div className="h-[1080px] w-full bg-slate-900">final deliverables</div>
        <div className="h-[1080px] w-full bg-slate-950">external links</div>
        <div className="h-[1080px] w-full bg-black">other projects</div>
        <div className="h-[1080px] w-full bg-pink-500">fake</div>
      </div>
    </div>
  );
};

export default MenaceTalk;
