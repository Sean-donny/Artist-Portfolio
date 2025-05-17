// import { useRef, useState, useEffect, useCallback } from 'react';
// import { motion } from 'framer-motion';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface SlideshowProps {
  images: string[];
  titles: string[];
}

const Slideshow = ({ images, titles }: SlideshowProps) => {
  // const [translateWidth, setTranslateWidth] = useState(0);
  // const [containerKey, setContainerKey] = useState(0);

  // const slideshowId = 'slideshow-container';
  // const slideshowRef = useRef<HTMLDivElement>(null);

  // const handleTranslateWidth = useCallback(() => {
  //   if (slideshowRef.current) {
  //     const innerCarouselWidth =
  //       slideshowRef.current.querySelector('.inner-carousel')?.scrollWidth || 0;

  //     setTranslateWidth(innerCarouselWidth);
  //   }
  // }, []);

  // useEffect(() => {
  //   handleTranslateWidth();
  // }, [handleTranslateWidth]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setContainerKey(prev => prev + 1);
  //     handleTranslateWidth();
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [handleTranslateWidth]);

  // const carouselVariants = {
  //   initial: {
  //     x: 0,
  //   },
  //   animate: {
  //     x: -translateWidth,
  //     transition: {
  //       duration: 12.8,
  //       ease: 'linear',
  //       repeat: Infinity,
  //     },
  //   },
  // };

  const repeatCount = 2;

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0);
    navigate(`/${path}`);
  };

  return (
    <div className="carousel-container">
      <div
        // key={containerKey}
        // id={slideshowId}
        // ref={slideshowRef}
        className="carousel-body"
      >
        <div
          className="inner-carousel flex"
          // variants={carouselVariants}
          // initial="initial"
          // animate="animate"
        >
          {images.map((image, index) => (
            <figure className="min-h-slide2 min-w-slide2 px-2" key={image}>
              <motion.img
                src={image}
                alt={titles[index]}
                className="carousel-image"
                title={titles[index]}
                loading="eager"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  handleNavigate('gallery');
                }}
              />
            </figure>
          ))}
          {[...Array(repeatCount)].map((_, repeatIndex) =>
            images.map((image, index) => (
              <figure
                className="min-h-slide2 min-w-slide2 px-2"
                key={`${image}-${repeatIndex}-${index}`}
                onClick={() => {
                  handleNavigate('gallery');
                }}
              >
                <motion.img
                  src={image}
                  alt={titles[index]}
                  className="carousel-image"
                  title={titles[index]}
                  loading="eager"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    handleNavigate('gallery');
                  }}
                />
              </figure>
            )),
          )}
        </div>
        {/* <div
          className="inner-carousel flex"
          // variants={carouselVariants}
          // initial="initial"
          // animate="animate"
        >
          
        </div> */}
      </div>
    </div>
  );
};

export default Slideshow;
