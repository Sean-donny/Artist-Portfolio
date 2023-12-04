import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Wdylmh from '/optimised/ashley_okoli_portrait.jpg';
import Agiag from '/optimised/ashley_okoli_with_a_gun.jpg';
import Aitl from '/optimised/ashley_into_the_light.jpg';

const AshelyObsession = () => {
  //Refs used for tracking items on the page
  const ashTitleRef = useRef(null);
  const ashImage1Ref = useRef(null);
  const ashImage2Ref = useRef(null);

  //Used to check if tracked items are in view
  const ashTitleInView = useInView(ashTitleRef, { once: true });
  const ashImage1InView = useInView(ashImage1Ref, { once: true });
  const ashImage2InView = useInView(ashImage2Ref, { once: true });

  //Used to change the X positions of the left and right images
  const [ashley1Position, setAshley1Position] = useState(600);
  const [ashley2Position, setAshley2Position] = useState(-600);

  //Used to change the opacity of the left and right images
  const [ashley1Opacity, setAshley1Opacity] = useState(0);
  const [ashley2Opacity, setAshley2Opacity] = useState(0);

  //Used to trigger the position and opacity effects when left image is in view
  useEffect(() => {
    if (ashImage1InView) {
      setTimeout(() => {
        setAshley1Position(0);
        setAshley1Opacity(1);
      }, 1500); // 1500 milliseconds = 1.5 seconds
    }
  }, [ashImage1InView, ashley1Position]);

  //Used to trigger the position and opacity effects when right image is in view
  useEffect(() => {
    if (ashImage2InView) {
      setTimeout(() => {
        setAshley2Position(0);
        setAshley2Opacity(1);
      }, 1500); // 1500 milliseconds = 1.5 seconds
    }
  }, [ashImage2InView, ashley2Position]);

  return (
    <div className="ashley-obsession-container w-full h-auto hd:h-screen">
      <div className="ashley-obsession-items w-full h-auto hd:h-screen bg-black p-10 flex flex-col hd:items-center hd:justify-center">
        <div
          className="ashley-obsession-title bg-yellow-300 w-full h-24 hd:h-1/4 flex items-center justify-center"
          ref={ashTitleRef}
        >
          <motion.h2
            className="font-custom font-semibold tracking-tight text-zinc-200 text-sm lg:text-lg hd:text-massive1 lg:leading-massive1 text-center"
            animate={{ scale: ashTitleInView ? 2 : 0.5 }}
            transition={{ delay: 0.2, ease: 'anticipate' }}
          >
            The Ashley Obsession
          </motion.h2>
        </div>
        <div className="ashley-obsession-content bg-green-300 w-full h-auto flex flex-col p-2 hd:h-3/4">
          <div className="ashley-obsession-content-images bg-green-500 w-full h-full flex flex-col items-center justify-center hd:flex-row">
            <motion.div
              className="ashley-obsession-image-container-1 h-full w-full bg-purple-700 p-2 flex flex-col items-center justify-center hd:w-1/3"
              ref={ashImage1Ref}
              animate={{
                translateX: ashley1Position,
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
              <motion.div className="ashley-obsession-content-images-description-1 bg-green-700 w-1/3 h-1/6">
                <p className="font-custom text-base text-center text-zinc-200">
                  Why Did You Leave Me Here?
                  <br />
                  &#40;2023&#41;
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="ashley-obsession-image-container-2 h-full w-full bg-purple-700 p-2 flex flex-col items-center justify-center hd:w-1/3"
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
              <motion.div className="ashley-obsession-content-images-description-2 bg-green-800 w-1/3 h-1/6">
                <p className="font-custom text-base text-center text-zinc-200">
                  A Girl Is A Gun
                  <br />
                  &#40;2021&#41;
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="ashley-obsession-image-container-3 h-full w-full bg-purple-700 p-2 flex flex-col items-center justify-center hd:w-1/3"
              ref={ashImage2Ref}
              animate={{
                translateX: ashley2Position,
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
              <motion.div className="ashley-obsession-content-images-description-3 bg-green-900 w-1/3 h-1/6">
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
  );
};

export default AshelyObsession;
