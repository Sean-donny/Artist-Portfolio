import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import Doom from '/optimised/mf_doom_7ife_x_sean_donny.jpg';
import Astroboy from '/optimised/sean_donny_x_7ife_astro_boy.jpg';

const SeanXTife = () => {
  const tifeTitleRef = useRef(null);

  const tifeTitleInView = useInView(tifeTitleRef, { once: true });
  return (
    <div className="sean-x-7ife-container w-full h-auto hd:h-screen">
      <div className="sean-x-7ife-items w-full h-auto hd:h-screen bg-gradient-to-b from-black to-zima p-10 flex flex-col hd:items-center hd:justify-center">
        <div
          className="sean-x-7ife-title w-full h-24 hd:h-1/4 flex items-center justify-center hd:justify-start"
          ref={tifeTitleRef}
        >
          <motion.h2
            className="font-custom font-semibold tracking-tight text-zinc-200 text-3xl lg:leading-massive1 lg:text-massive1 text-left"
            style={{
              transform: tifeTitleInView ? 'none' : 'translateX(-200px)',
              opacity: tifeTitleInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            Sean x 7ife
          </motion.h2>
        </div>
        <div className="sean-x-7ife-content w-full h-auto flex flex-col p-2 hd:h-3/4">
          <div className="sean-x-7ife-content-images w-full h-full flex flex-col items-center justify-center hd:flex-row">
            <motion.div
              className="sean-x-7ife-image-container-1 h-full w-full hd:p-2 flex flex-col items-center justify-center hd:w-3/5 mb-10 hd:mb-2"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.8}
            >
              <img
                src={Doom}
                alt="A Painting of MF DOOM"
                title="DOOM"
                className="sean-x-7ife-image-1 object-cover object-center h-5/6 w-auto z-20 pointer-events-none"
              />
              <motion.div className="sean-x-7ife-content-images-description-1 w-full h-1/6">
                <p className="font-custom text-base text-center text-zinc-200">
                  DOOM
                  <br />
                  &#40;2022&#41;
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="sean-x-7ife-image-container-2 h-full w-full hd:p-2 flex flex-col items-center justify-center hd:w-2/5 mb-10 hd:mb-2"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.8}
            >
              <img
                src={Astroboy}
                alt="A Painting of Astroboy"
                title="Astroboy"
                className="sean-x-7ife-image-2 object-cover object-center h-5/6 w-auto z-10 pointer-events-none"
              />
              <motion.div className="sean-x-7ife-content-images-description-2 w-full h-1/6">
                <p className="font-custom text-base text-center text-zinc-200">
                  Astroboy
                  <br />
                  &#40;2022&#41;
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeanXTife;
