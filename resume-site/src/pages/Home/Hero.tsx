import { useState } from 'react';
import Slideshow from '../../components/Slideshow';
import Images from './HeroImages';
import Titles from './HeroTitles';
import { use3DTilt } from '../../Hooks/use3DTilt';

// Image imports
import SeanPortrait from '/optimised/sean_donny_hero_image.png';

const Hero = () => {
  const [bgColorIndex, setBgColorIndex] = useState(0);

  const bgColors = ['bg-zima', 'bg-aubergine', 'bg-black', 'bg-clover'];

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
            <div className="hero-carousel w-full h-1/2 pointer-events-none">
              <Slideshow images={Images} titles={Titles} />
            </div>
            <div className="hero-bio w-full h-auto md:h-full">
              <article className="hero-bio-text-container h-full w-auto flex items-end overflow-clip">
                <h1 className="hero-bio-text font-custom font-semibold italic tracking-tight text-aquatic p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1">
                  Sean Donny is a <br />
                  contemporary artist <br />
                  based in England, UK.
                </h1>
              </article>
            </div>
          </div>
        </div>
        <div className="hero-image-container flex-grow md:w-2/5 md:flex-none p-2">
          <figure
            className="hero-image-parent flex items-center justify-center h-full overflow-hidden"
            ref={ref}
            style={{
              ...style,
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            <img
              src={SeanPortrait}
              alt="Sean Donny"
              title="Sean Donny - Click to change my background colour ;)"
              loading="eager"
              className="hero-image object-cover object-center h-full w-auto my-auto cursor-pointer pt-5 md:pt-0"
              onClick={bgShuffle}
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Hero;
