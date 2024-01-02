import AshelyObsession from './AshleyObsession';
import SeanXTife from './SeanXTife';
import IdluamXMars from './IdluamXMars';
import Illustrations from './Illustrations';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import GalleryModal from '../../components/GalleryModal';
import { ModalContent } from '../../interfaces/ModalContent';

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({
    src: undefined,
    alt: undefined,
    title: undefined,
    year: undefined,
  });

  const handleImageFocus = (data: ModalContent) => {
    return () => {
      setModalContent({
        src: data.src,
        alt: data.alt,
        title: data.title,
        year: data.year,
      });
      setModalOpen(true);
    };
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

  return (
    <div className="gallery-container bg-black flex flex-col justify-start">
      <div className="gallery-items">
        <AnimatePresence initial={false} mode="wait">
          {modalOpen && (
            <GalleryModal
              modalContent={modalContent}
              onClose={handleImageExit}
            />
          )}
        </AnimatePresence>
        <AshelyObsession onOpen={handleImageFocus} />
        <SeanXTife onOpen={handleImageFocus} />
        <Illustrations onOpen={handleImageFocus} />
        <IdluamXMars onOpen={handleImageFocus} />
      </div>
    </div>
  );
};

export default Gallery;
