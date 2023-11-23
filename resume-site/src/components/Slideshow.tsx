import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface SlideshowProps {
  images: string[];
}

const Slideshow = ({ images }: SlideshowProps) => {
  const [leftConstraint, setLeftConstraint] = useState(0);
  const [containerKey, setContainerKey] = useState(0);

  const slideshowId = "slideshow-container";
  const slideshowRef = useRef<HTMLDivElement>(null);

  const handleLeftConstraint = useCallback(() => {
    if (slideshowRef.current) {
      const innerCarouselWidth =
        slideshowRef.current.querySelector(".inner-carousel")?.scrollWidth || 0;

      setLeftConstraint(innerCarouselWidth - slideshowRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    handleLeftConstraint();
  }, [handleLeftConstraint]);

  useEffect(() => {
    const handleResize = () => {
      setContainerKey((prev) => prev + 1);
      handleLeftConstraint();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleLeftConstraint]);

  return (
    <div className="w-auto bg-orangutan h-full">
      <motion.div
        key={containerKey}
        id={slideshowId}
        ref={slideshowRef}
        className="carousel cursor-grab overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -leftConstraint }}
          className="inner-carousel flex h-full w-auto"
        >
          {images.map((image) => (
            <motion.div
              className="min-h-slide2 min-w-slide2 p-1 h-full w-auto"
              key={image}
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={image}
                alt=""
                className="w-auto h-full pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slideshow;
