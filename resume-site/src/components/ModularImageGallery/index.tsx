import { useRef } from 'react';
import { useInView, motion, anticipate } from 'framer-motion';
import { ModalContent } from '../../interfaces/ModalContent';
import ImageData from '../../interfaces/ImageData';

interface ModularImageGalleryProps {
  onOpen: (data: ModalContent) => () => void;
  bgColor: string;
  componentTitle: string;
  imageData: ImageData;
}

const ModularImageGallery = ({
  onOpen,
  componentTitle,
  bgColor,
  imageData,
}: ModularImageGalleryProps) => {
  interface ImageGalleryProps {
    imageData: ImageData;
  }

  const componentTitleRef = useRef(null);

  const componentTitleInView = useInView(componentTitleRef, { once: true });

  const ImageGallery = ({ imageData }: ImageGalleryProps) => (
    <div className="component-content-images w-full h-full flex flex-col items-center justify-center hd:flex-row">
      {Object.keys(imageData).map(key => {
        const data = imageData[key];

        return (
          <motion.div
            key={key}
            className={`component-image-container h-full w-full hd:p-2 flex flex-col items-center justify-center mb-10 hd:mb-2 ${data.style}`}
            onClick={onOpen(data)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={data.src}
              alt={data.alt}
              title={data.title}
              loading="lazy"
              className="component-image pointer-events-none"
            />
            <motion.div
              className="component-content-images-description w-full h-1/6"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: anticipate }}
            >
              <p className="font-custom text-base text-center text-zinc-200 pt-5">
                {data.title}
                <br />
                {data.year}
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <div className="component-container w-full h-auto hd:h-screen">
      <div
        className={`component-items w-full h-auto hd:h-screen ${bgColor} p-10 flex flex-col hd:items-center hd:justify-center`}
      >
        <div
          className="component-title w-full h-24 hd:h-auto hd:mb-5 flex items-center justify-center hd:justify-start"
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
        <div className="component-content w-full h-auto flex flex-col p-2">
          <ImageGallery imageData={imageData} />
        </div>
      </div>
    </div>
  );
};

export default ModularImageGallery;
