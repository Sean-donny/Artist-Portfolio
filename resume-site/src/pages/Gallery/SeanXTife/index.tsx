import imageData from './data';
import { ModalContent } from '../../../interfaces/ModalContent';

import ModularImageGallery from '../../../components/ModularImageGallery';

interface SeanXTifeProps {
  onOpen: (data: ModalContent) => () => void;
}

const SeanXTife = ({ onOpen }: SeanXTifeProps) => {
  const bgColor = 'bg-gradient-to-b from-black to-zima';
  const componentTitle = 'Sean x 7ife';

  return (
    <div>
      <ModularImageGallery
        onOpen={onOpen}
        bgColor={bgColor}
        componentTitle={componentTitle}
        imageData={imageData}
      />
    </div>
  );
};

export default SeanXTife;
