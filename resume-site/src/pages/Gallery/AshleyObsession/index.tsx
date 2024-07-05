import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import imageData from './data';

import { ModalContent } from '../../../interfaces/ModalContent';

interface Props {
  onOpen: (data: ModalContent) => () => void;
}

const AshelyObsession = ({ onOpen }: Props) => {
  //Refs used for tracking items on the page
  // const ashTitleRef = useRef(null);
  const ashContentRef = useRef(null);

  //Used to check if tracked items are in view
  // const ashTitleInView = useInView(ashTitleRef, { once: true });
  const ashContentInView = useInView(ashContentRef, { once: true });

  //Used to change the X positions of the left and right images
  const [ashley1Position, setAshley1Position] = useState(30);
  const [ashley2Position, setAshley2Position] = useState(-30);

  //Used to change the opacity of the left, middle and right images
  const [ashley1Opacity, setAshley1Opacity] = useState(0);
  const [ashley2Opacity, setAshley2Opacity] = useState(0);
  const [ashley3Opacity, setAshley3Opacity] = useState(0);

  //Used to set the opacity of the content div
  const [contentOpacity, setContentOpacity] = useState(0);

  //Used to trigger the position and opacity effects when the content div is in view
  useEffect(() => {
    if (ashContentInView) {
      setTimeout(() => {
        setAshley1Position(0);
        setAshley1Opacity(1);
        setContentOpacity(1);
      }, 1000); // 1000 milliseconds = 1 second
    }
  }, [ashContentInView, ashley1Position, contentOpacity]);

  //Used to trigger the position and opacity effects when the content div is in view
  useEffect(() => {
    if (ashContentInView) {
      setTimeout(() => {
        setAshley2Position(0);
        setAshley2Opacity(1);
      }, 1500); // 1500 milliseconds = 1.5 seconds
    }
  }, [ashContentInView, ashley2Position]);

  //Used to trigger the position and opacity effects of middle image when the content div is in view
  useEffect(() => {
    if (ashContentInView) {
      setTimeout(() => {
        setAshley3Opacity(1);
      }, 2000); // 2000 milliseconds = 2 seconds
    }
  }, [ashContentInView]);

  const bgColor = 'bg-black';
  // const componentTitle = 'The Ashley Obsession';

  return (
    <div className="ashley-obsession-container w-full h-auto hd:h-screen">
      <div
        className={`ashley-obsession-items w-full h-auto hd:h-screen bg-${bgColor} p-10 flex flex-col hd:items-center hd:justify-center`}
      >
        {/* <div
          className="ashley-obsession-title w-full h-24 hd:h-1/4 flex items-center justify-center"
          ref={ashTitleRef}
        >
          <motion.h2
            className="font-custom font-semibold tracking-tight text-zinc-200 text-sm lg:text-lg hd:text-massive1 lg:leading-massive1 text-center"
            animate={{ scale: ashTitleInView ? 2 : 0.5 }}
            transition={{ delay: 0.2, ease: 'anticipate' }}
          >
            {componentTitle}
          </motion.h2>
        </div> */}
        <motion.div
          className="ashley-obsession-content w-full h-auto flex flex-col p-2"
          ref={ashContentRef}
          style={{ opacity: contentOpacity }}
        >
          <div className="ashley-obsession-content-images w-full h-full flex flex-col items-center justify-center md:flex-row mt-10">
            <motion.div
              className={`ashley-obsession-image-container`}
              onClick={onOpen(imageData.illustration1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                translateX: ashley1Position,
                opacity: ashley1Opacity,
              }}
            >
              <img
                src={imageData.illustration1.src}
                alt={imageData.illustration1.alt}
                loading="eager"
                title={imageData.illustration1.title}
                className="ashley-obsession-image-1 pointer-events-none"
                style={{
                  height: 'auto',
                  width: '100%',
                  marginBottom: 20,
                  zIndex: 3,
                }}
              />
              <motion.div className="ashley-obsession-content-images-description-1 w-full">
                <p className="font-custom text-base text-center text-zinc-200">
                  {imageData.illustration1.title}
                  <br />
                  {imageData.illustration1.year}
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className={`ashley-obsession-image-container`}
              onClick={onOpen(imageData.illustration2)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              animate={{ opacity: ashley3Opacity }}
            >
              <img
                src={imageData.illustration2.src}
                alt={imageData.illustration2.alt}
                loading="eager"
                title={imageData.illustration2.title}
                className="ashley-obsession-image-2 pointer-events-none"
                style={{
                  height: 'auto',
                  width: '100%',
                  marginBottom: 20,
                  zIndex: 2,
                }}
              />
              <motion.div className="ashley-obsession-content-images-description-2 w-full">
                <p className="font-custom text-base text-center text-zinc-200">
                  {imageData.illustration2.title}
                  <br />
                  {imageData.illustration2.year}
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className={`ashley-obsession-image-container`}
              onClick={onOpen(imageData.illustration3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                translateX: ashley2Position,
                opacity: ashley2Opacity,
              }}
            >
              <img
                src={imageData.illustration3.src}
                alt={imageData.illustration3.alt}
                loading="eager"
                title={imageData.illustration3.title}
                className="ashley-obsession-image-3 pointer-events-none"
                style={{
                  height: 'auto',
                  width: '100%',
                  marginBottom: 20,
                  zIndex: 1,
                }}
              />
              <motion.div className="ashley-obsession-content-images-description-3 w-full">
                <p className="font-custom text-base text-center text-zinc-200">
                  {imageData.illustration3.title}
                  <br />
                  {imageData.illustration3.year}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AshelyObsession;
