import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SlideshowProps {
  images: string[];
}

const Slideshow = ({ images }: SlideshowProps) => {
  const [width, setWidth] = useState(0);
  const slideshow = useRef();

  useEffect(() => {
    setWidth(slideshow.current.scrollWidth - slideshow.current.offsetWidth);
  }, []);
  return (
    <div className="w-96">
      <motion.div
        ref={slideshow}
        className="carousel cursor-grab overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex"
        >
          {images.map((image) => {
            return (
              <motion.div
                className="min-h-slide2 min-w-slide2 p-1"
                key={image}
                whileHover={{ scale: 1.2 }}
              >
                <motion.img
                  src={image}
                  alt=""
                  className="w-full h-full pointer-events-none"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slideshow;
