import imageData from './data';
import { ModalContent } from '../../../interfaces/ModalContent';

import ModularImageGallery from '../../../components/ModularImageGallery';

interface IllustrationsProps {
  onOpen: (data: ModalContent) => () => void;
}

const Illustrations = ({ onOpen }: IllustrationsProps) => {
  const bgColor = 'bg-zima';
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
