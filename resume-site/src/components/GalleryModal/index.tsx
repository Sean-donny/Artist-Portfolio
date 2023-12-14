import { anticipate, motion } from 'framer-motion';
import { useEffect } from 'react';

import { ModalContent } from '../../interfaces/ModalContent';

interface GalleryModalProps {
  modalContent: ModalContent;
  onClose: () => void;
}

const GalleryModal = ({ modalContent, onClose }: GalleryModalProps) => {
  // Add an effect to handle the body class when the modal opens and closes
  useEffect(() => {
    // Add the 'modal-open' class to the body when the modal is open
    document.body.classList.add('modal-open');

    // Remove the 'modal-open' class from the body when the modal is closed
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);
  return (
    <div
      className="component-modal w-full h-full fixed inset-0 z-30 block bg-zima overflow-hidden p-5"
      onClick={() => onClose()}
    >
      <div className="component-modal-container flex items-center justify-center w-full h-full">
        <div className="component-modal-content h-full w-full flex items-center justify-center">
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
                overflowClipMargin: 'content-box',
                overflow: 'clip',
              }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.8}
              whileHover={{ scale: 1.006 }}
              whileTap={{ scale: 1.5 }}
              initial={{ scale: 0.2 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2, ease: anticipate }}
              onClick={e => e.stopPropagation()}
            />
            <motion.div
              className="component-content-images-description w-full"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: anticipate }}
            >
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
};

export default GalleryModal;
