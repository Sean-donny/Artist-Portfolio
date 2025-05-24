import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface SlideshowProps {
  images: string[];
  titles: string[];
}

const Slideshow = ({ images, titles }: SlideshowProps) => {
  const repeatCount = 2;

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0);
    navigate(`/${path}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNavigate('store');
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-body"
        tabIndex={0}
        role="region"
        aria-label="Featured artworks carousel pointing towards print store"
        onKeyDown={handleKeyDown}
      >
        <div className="inner-carousel flex">
          {images.map((image, index) => (
            <figure className="min-h-slide2 min-w-slide2 px-2" key={image}>
              <motion.img
                src={image}
                alt={titles[index]}
                tabIndex={-1}
                aria-hidden={true}
                className="carousel-image"
                title={titles[index]}
                loading="eager"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  handleNavigate('store');
                }}
              />
            </figure>
          ))}
          {[...Array(repeatCount)].map((_, repeatIndex) =>
            images.map((image, index) => (
              <figure
                className="min-h-slide2 min-w-slide2 px-2"
                key={`${image}-${repeatIndex}-${index}`}
              >
                <motion.img
                  src={image}
                  alt={titles[index]}
                  tabIndex={-1}
                  aria-hidden={true}
                  className="carousel-image"
                  title={titles[index]}
                  loading="eager"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    handleNavigate('store');
                  }}
                />
              </figure>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
