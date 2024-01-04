// import { useRef, useState, useEffect, useCallback } from 'react';
// import { motion } from 'framer-motion';

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

  return (
    <div className="carousel-container pointer-events-none">
      <div
        // key={containerKey}
        // id={slideshowId}
        // ref={slideshowRef}
        className="carousel-body overflow-hidden pointer-events-none"
      >
        <div
          className="inner-carousel flex pointer-events-none"
          // variants={carouselVariants}
          // initial="initial"
          // animate="animate"
        >
          {images.map((image, index) => (
            <div className="min-h-slide2 min-w-slide2 px-2" key={image}>
              <img
                src={image}
                alt={titles[index]}
                className="pointer-events-none"
              />
            </div>
          ))}
        </div>
        <div
          className="inner-carousel flex"
          // variants={carouselVariants}
          // initial="initial"
          // animate="animate"
        >
          {images.map((image, index) => (
            <div
              className="min-h-slide2 min-w-slide2 px-2 pointer-events-none"
              key={`cloned:${image}`}
            >
              <img
                src={image}
                alt={titles[index]}
                className="pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
