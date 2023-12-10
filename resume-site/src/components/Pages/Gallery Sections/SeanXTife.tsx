import imageData from '../../../SeanXTifeData';
import { ModalContent } from '../../../ModalContent';

import ModularImageGallery from '../../ModularImageGallery';

interface SeanXTifeProps {
  onOpen: (data: ModalContent) => () => void;
}

const SeanXTife = ({ onOpen }: SeanXTifeProps) => {
  const bgColor = 'gradient-to-b from-black to-zima';
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
