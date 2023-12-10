import AshelyObsession from './Gallery Sections/AshelyObsession';
import SeanXTife from './Gallery Sections/SeanXTife';
import IdluamXMars from './Gallery Sections/IdluamXMars';
import Illustrations from './Gallery Sections/Illustrations';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import GalleryModal from '../GalleryModal';
import { ModalContent } from '../../ModalContent';

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
        <AshelyObsession />
        <SeanXTife onOpen={handleImageFocus} />
        <Illustrations onOpen={handleImageFocus} />
        <IdluamXMars onOpen={handleImageFocus} />
        <AnimatePresence initial={false} mode="wait">
          {modalOpen && (
            <GalleryModal
              modalContent={modalContent}
              onClose={handleImageExit}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
