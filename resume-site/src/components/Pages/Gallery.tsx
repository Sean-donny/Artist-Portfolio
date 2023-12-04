import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Wdylmh from '/optimised/ashley_okoli_portrait.jpg';
import Agiag from '/optimised/ashley_okoli_with_a_gun.jpg';
import Aitl from '/optimised/ashley_into_the_light.jpg';

const Gallery = () => {
  const ashTitleRef = useRef(null);
  const ashImage1Ref = useRef(null);
  const ashImage2Ref = useRef(null);

  const { scrollYProgress } = useScroll();
  const sprungScroll = useSpring(scrollYProgress);

  const ashTitleInView = useInView(ashTitleRef, { once: true });
  const ashImage1InView = useInView(ashImage1Ref, { once: true });
  const ashImage2InView = useInView(ashImage2Ref, { once: true });

  const [ashley1Visibility, setAshley1Visibility] = useState(600);
  const [ashley2Visibility, setAshley2Visibility] = useState(-600);

  const [ashley1Opacity, setAshley1Opacity] = useState(0);
  const [ashley2Opacity, setAshley2Opacity] = useState(0);

  useEffect(() => {
    console.log('Ash Title is in view: ', ashTitleInView);
  }, [ashTitleInView]);

  useEffect(() => {
    if (ashImage1InView) {
      setTimeout(() => {
        setAshley1Visibility(0);
        setAshley1Opacity(1);
        console.log('Ash Image 1 is in view: ', ashImage1InView);
        console.log('setAshley1Visibility value: ', ashley1Visibility);
        console.log(scrollYProgress);
      }, 1500); // 1500 milliseconds = 1.5 seconds
    }
  }, [ashImage1InView, ashley1Visibility]);

  useEffect(() => {
    if (ashImage2InView) {
      setTimeout(() => {
        setAshley2Visibility(0);
        setAshley2Opacity(1);
        console.log('Ash Image 2 is in view: ', ashImage2InView);
        console.log('setAshley2Visibility value: ', ashley2Visibility);
      }, 1500); // 1500 milliseconds = 1.5 seconds
    }
  }, [ashImage2InView, ashley2Visibility]);

  return (
    <div className="gallery-container bg-zima flex flex-col align-middle justify-center">
      <div className="gallery-items">
        <div className="ashley-obsession-container w-full h-screen">
          <div className="ashley-obsession-items w-full h-screen bg-black p-10 flex flex-col items-center justify-center">
            <div
              className="ashley-obsession-title  w-full h-1/4 flex items-center justify-center"
              ref={ashTitleRef}
            >
              <motion.h2
                className="font-custom font-semibold tracking-tight text-zinc-200 text-sm md:text-lg hd:text-massive1 lg:leading-massive1 text-center"
                animate={{ scale: ashTitleInView ? 2 : 0.5 }}
                transition={{ delay: 0.2, ease: 'anticipate' }}
              >
                The Ashley Obsession
              </motion.h2>
            </div>
            <div className="ashley-obsession-content bg-green-300 w-full h-3/4 flex flex-col p-2">
              <div className="ashley-obsession-content-images bg-green-500 w-full h-full flex flex-row items-center justify-center">
                <motion.div
                  className="ashley-obsession-image-container-1 h-full w-1/3 bg-purple-700 p-2 flex flex-col items-center justify-center"
                  ref={ashImage1Ref}
                  animate={{
                    translateX: ashley1Visibility,
                    opacity: ashley1Opacity,
                  }}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.8}
                >
                  <img
                    src={Wdylmh}
                    alt="A Portrait of Ashley Okoli"
                    title="Why Did You Leave Me Here?"
                    className="ashley-obsession-image-1 object-cover object-center h-5/6 w-auto my-auto z-30"
                  />
                  <motion.div
                    className="ashley-obsession-content-images-description-1 bg-green-700 w-1/3 h-1/6"
                    style={{ opacity: sprungScroll }}
                  >
                    <p className="font-custom text-base text-center text-zinc-200">
                      Why Did You Leave Me Here?
                      <br />
                      &#40;2023&#41;
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="ashley-obsession-image-container-2 h-full w-1/3 bg-purple-800 p-2 flex flex-col items-center justify-center"
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.8}
                >
                  <img
                    src={Agiag}
                    alt="A Portrait of Ashley Okoli"
                    title="A Girl Is A Gun"
                    className="ashley-obsession-image-2 object-cover object-center h-5/6 w-auto my-auto z-20"
                  />
                  <motion.div
                    className="ashley-obsession-content-images-description-2 bg-green-800 w-1/3 h-1/6"
                    style={{ opacity: sprungScroll }}
                  >
                    <p className="font-custom text-base text-center text-zinc-200">
                      A Girl Is A Gun
                      <br />
                      &#40;2021&#41;
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="ashley-obsession-image-container-3 h-full w-1/3 bg-purple-900 p-2 flex flex-col items-center justify-center"
                  ref={ashImage2Ref}
                  animate={{
                    translateX: ashley2Visibility,
                    opacity: ashley2Opacity,
                  }}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.8}
                >
                  <img
                    src={Aitl}
                    alt="A Portrait of Ashley Okoli"
                    title="Into The Light"
                    className="ashley-obsession-image-3 object-cover object-center h-5/6 w-auto my-auto z-10 pointer-events-none"
                  />
                  <motion.div
                    className="ashley-obsession-content-images-description-3 bg-green-900 w-1/3 h-1/6"
                    style={{ opacity: sprungScroll }}
                  >
                    <p className="font-custom text-base text-center text-zinc-200">
                      Into The light
                      <br />
                      &#40;2022&#41;
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div>Sean x 7ife</div>
        <div>Guitar Gurl</div>
        <div>Runway Gurl</div>
        <div>Read Heads</div>
        <div>A Love Story</div>
        <div>IDLUAM</div>
        <div>RULESTHEWORLD</div>
        <div>Enter Mars</div>
        <div>Amala + Ewedu</div>
      </div>
    </div>
  );
};

export default Gallery;
