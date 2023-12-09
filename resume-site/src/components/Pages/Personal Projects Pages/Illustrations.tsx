import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence, anticipate } from 'framer-motion';

import imageData, { ImageData } from '../../../IllustrationsData';

const Illustrations = () => {
  const componentTitleRef = useRef(null);

  const componentTitleInView = useInView(componentTitleRef, { once: true });

  const bgColor = 'zima';
  const componentTitle = 'Illustrations';

  interface ModalContent {
    src: string | undefined;
    alt: string | undefined;
    title: string | undefined;
    year: string | undefined;
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({
    src: undefined,
    alt: undefined,
    title: undefined,
    year: undefined,
  });

  const handleImageFocus = ({ data }: { data: ModalContent }) => {
    setModalContent({
      src: data.src,
      alt: data.alt,
      title: data.title,
      year: data.year,
    });
    setModalOpen(true);
  };

  const handleImageExit = () => {
    setModalOpen(false);
    setModalContent({
      src: undefined,
      alt: undefined,
      title: undefined,
      year: undefined,
    });
  };

  interface ImageGalleryProps {
    imageData: ImageData;
  }

  const GalleryModal = ({ modalContent }: { modalContent: ModalContent }) => (
    <div
      className="component-modal w-full h-full fixed inset-0 z-30 block bg-orangutan overflow-hidden p-5"
      onClick={() => handleImageExit()}
    >
      <div className="component-modal-container flex items-center justify-center w-full h-full bg-aquatic">
        <div className="component-modal-content bg-zima h-full w-full flex items-center justify-center">
          <motion.div className="component-modal-image-container h-full w-full hd:p-2 flex flex-col items-center justify-center mb-10 hd:mb-2">
            <motion.img
              src={modalContent.src}
              alt={modalContent.alt}
              title={modalContent.title}
              className="component-modal-image"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                zIndex: 10,
                margin: '0px',
                maxHeight: '85%',
                // minWidth: '100%',
                overflowClipMargin: 'content-box',
                overflow: 'clip',
              }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.8}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.5 }}
              initial={{ scale: 0.2 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2, ease: anticipate }}
              onClick={e => e.stopPropagation()}
            />
            <motion.div className="component-content-images-description-2 w-full">
              <p className="font-custom text-base text-center text-zinc-200 mt-5">
                {modalContent.title}
                <br />
                {modalContent.year}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );

  const ImageGallery = ({ imageData }: ImageGalleryProps) => (
    <div className="component-content-images w-full h-full flex flex-col items-center justify-center hd:flex-row">
      {Object.keys(imageData).map(key => {
        const data = imageData[key];

        return (
          <motion.div
            key={key}
            className="component-image-container h-full w-full hd:p-2 flex flex-col items-center justify-center mb-10 hd:mb-2"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.8}
            onClick={() => handleImageFocus({ data })}
          >
            <img
              src={data.src}
              alt={data.alt}
              title={data.title}
              className="component-image object-cover object-center h-5/6 w-auto z-20 pointer-events-none"
            />
            <motion.div className="component-content-images-description w-full h-1/6">
              <p className="font-custom text-base text-center text-zinc-200">
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
        className={`component-items w-full h-auto hd:h-screen bg-${bgColor} p-10 flex flex-col hd:items-center hd:justify-center`}
      >
        <div
          className="component-title w-full h-24 hd:h-1/4 flex items-center justify-center hd:justify-start"
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
          <AnimatePresence initial={false} mode="wait">
            {modalOpen && <GalleryModal modalContent={modalContent} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Illustrations;
