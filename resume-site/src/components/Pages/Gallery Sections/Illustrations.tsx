import imageData from '../../../IllustrationsData';
import { ModalContent } from '../../../ModalContent';

import ModularImageGallery from '../../ModularImageGallery';

interface IllustrationsProps {
  onOpen: (data: ModalContent) => () => void;
}

const Illustrations = ({ onOpen }: IllustrationsProps) => {
  const bgColor = 'zima';
  const componentTitle = 'Illustrations';

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

export default Illustrations;
