import { anticipate, motion } from 'framer-motion';
import { useEffect } from 'react';
import { FocusTrap } from 'focus-trap-react';

import { ModalContent } from '../../interfaces/ModalContent';

interface GalleryModalProps {
  modalContent: ModalContent;
  onClose: () => void;
}

const GalleryModal = ({ modalContent, onClose }: GalleryModalProps) => {
  // Add an effect to handle the body class when the modal opens and closes
  useEffect(() => {
    document.body.classList.add('modal-open');

    // Handle Escape key to close modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="component-modal w-full h-full fixed inset-0 z-30 block bg-zima overflow-hidden p-5"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing artwork: ${modalContent.title}, ${modalContent.year}`}
      onClick={() => onClose()}
    >
      <FocusTrap
        active
        focusTrapOptions={{
          fallbackFocus: () => document.body,
          escapeDeactivates: false, // We already handle Escape manually
          allowOutsideClick: true,
        }}
      >
        <div className="component-modal-container flex items-center justify-center w-full h-full">
          <div className="component-modal-content h-full w-full flex items-center justify-center relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-0.5 z-50 text-white text-2xl rounded-full w-10 h-10 flex items-center justify-center pb-1 text-center focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close modal"
            >
              ×
            </button>
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
                whileFocus={{ scale: 1.1 }}
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
                onClick={e => e.stopPropagation()}
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
      </FocusTrap>
    </div>
  );
};

export default GalleryModal;
