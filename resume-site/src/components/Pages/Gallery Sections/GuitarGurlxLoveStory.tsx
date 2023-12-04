import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import GuitarGurl from '/optimised/guitar_girl_x.jpg';
import ALoveStory from '/optimised/two_alt_girls.jpg';

const GuitarGurlxLoveStory = () => {
  const componentTitleRef = useRef(null);

  const componentTitleInView = useInView(componentTitleRef, { once: true });

  const bgColor = 'gradient-to-b from-fuchsia-500 to-red-500';
  const componentTitle = 'Edgy';
  const componentImageAlt1 = 'A portrait of a girl holding a guitar';
  const componentImageTitle1 = 'Guitar Gurl';
  const componentImageDescription1 = {
    line1: 'Guitar Gurl',
    line2: '(2022)',
  };
  const componentImageAlt2 = 'A portrait of two people in love';
  const componentImageTitle2 = 'A Love Story';
  const componentImageDescription2 = {
    line1: 'A Love Story',
    line2: '(2021)',
  };

  return (
    <div className="component-container w-full h-auto hd:h-screen">
      <div
        className={`component-items w-full h-auto hd:h-screen bg-${bgColor} p-10 flex flex-col hd:items-center hd:justify-center`}
      >
        <div
          className="component-title w-full h-24 hd:h-1/4 flex items-center justify-center hd:justify-start"
          ref={componentTitleRef}
        >
          <motion.h2
            className="font-custom font-semibold tracking-tight text-zinc-200 text-3xl lg:leading-massive1 lg:text-massive1 text-left"
            style={{
              transform: componentTitleInView ? 'none' : 'translateX(-200px)',
              opacity: componentTitleInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            {componentTitle}
          </motion.h2>
        </div>
        <div className="component-content w-full h-auto flex flex-col p-2 hd:h-3/4">
          <div className="component-content-images w-full h-full flex flex-col items-center justify-center hd:flex-row">
            <motion.div
              className="component-image-container-1 h-full w-full hd:p-2 flex flex-col items-center justify-center hd:w-1/2 mb-10 hd:mb-2"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.8}
            >
              <img
                src={GuitarGurl}
                alt={componentImageAlt1}
                title={componentImageTitle1}
                className="component-image-1 object-cover object-center h-5/6 w-auto z-20 pointer-events-none"
              />
              <motion.div className="component-content-images-description-1 w-full h-1/6">
                <p className="font-custom text-base text-center text-zinc-200">
                  {componentImageDescription1.line1}
                  <br />
                  {componentImageDescription1.line2}
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="component-image-container-2 h-full w-full hd:p-2 flex flex-col items-center justify-center hd:w-1/2 mb-10 hd:mb-2"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.8}
            >
              <img
                src={ALoveStory}
                alt={componentImageAlt2}
                title={componentImageTitle2}
                className="component-image-2 object-cover object-center h-5/6 w-auto z-10 pointer-events-none"
              />
              <motion.div className="component-content-images-description-2 w-full h-1/6">
                <p className="font-custom text-base text-center text-zinc-200">
                  {componentImageDescription2.line1}
                  <br />
                  {componentImageDescription2.line2}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuitarGurlxLoveStory;
