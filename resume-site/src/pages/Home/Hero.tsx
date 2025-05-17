import { useState } from 'react';
import Slideshow from '../../components/Slideshow';
import Images from './HeroImages';
import Titles from './HeroTitles';
import { use3DTilt } from '../../Hooks/use3DTilt';

// Image imports
import SeanPortrait from '/optimised/sean_donny_hero_image.png';
import { motion } from 'framer-motion';

const Hero = () => {
  const [bgColorIndex, setBgColorIndex] = useState(0);

  const bgColors = [
    'bg-zima',
    'bg-aubergine',
    'bg-black',
    'bg-clover',
    'bg-[#555223]',
    `bg-gradient-to-b from-[rgba(1,2,3,1)] to-[rgba(1,222,34,0.4)] [background-position:30%]`,
  ];

  const bgShuffle = () => {
    setBgColorIndex(prevIndex => (prevIndex + 1) % bgColors.length);
  };

  const { ref, style } = use3DTilt(10);
  return (
    <div className="box-border">
      <div
        className={`hero-container ${bgColors[bgColorIndex]} w-full h-auto lg:h-full p-7 flex overflow-clip`}
      >
        <div className="hero-carousel-and-bio-container flex-grow md:w-3/5 md:flex-none">
          <div className="hero-carousel-and-bio flex flex-col h-auto md:h-full p-2">
            <motion.div
              className="hero-carousel w-full h-1/2 overflow-x-clip"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                type: 'spring',
                bounce: 0.3,
                duration: 0.6,
                delay: 0.5,
              }}
            >
              <Slideshow images={Images} titles={Titles} />
            </motion.div>
            <div className="hero-bio w-full h-auto md:h-full">
              <article className="hero-bio-text-container h-full w-auto flex items-end overflow-clip">
                <motion.h1
                  className="hero-bio-text font-loud uppercase tracking-tight text-aquatic py-2 lg:pb-5 lg:pl-5 lg:text-massive2 text-4xl lg:leading-massive2"
                  initial={{ translateY: '300px' }}
                  animate={{ translateY: '0px' }}
                  transition={{
                    type: 'spring',
                    bounce: 0.3,
                    duration: 0.6,
                    delay: 0.5,
                  }}
                >
                  Sean Donny is a <br />
                  contemporary artist <br />
                  based in England, UK.
                </motion.h1>
              </article>
            </div>
          </div>
        </div>
        <div className="hero-image-container flex-grow md:w-2/5 md:flex-none p-2">
          <figure
            className="hero-image-parent flex items-start justify-center h-full overflow-hidden"
            ref={ref}
            style={{
              ...style,
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            <motion.img
              src={SeanPortrait}
              alt="Sean Donny"
              title="Sean Donny - Click to change my background colour ;)"
              loading="eager"
              className="hero-image object-center h-auto w-full cursor-pointer md:pt-0"
              onClick={bgShuffle}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                bounce: 0.3,
                duration: 0.6,
                delay: 0.5,
              }}
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Hero;
