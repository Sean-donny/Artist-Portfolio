import imageData from './data';
import { ModalContent } from '../../../interfaces/ModalContent';

import ModularImageGallery from '../../../components/ModularImageGallery';

interface IdluamXMarsProps {
  onOpen: (data: ModalContent) => () => void;
}

const IdluamXMars = ({ onOpen }: IdluamXMarsProps) => {
  const bgColor = 'bg-gradient-to-b from-zima to-fuchsia-500';
  const componentTitle = '3D Artworks';

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

export default IdluamXMars;
