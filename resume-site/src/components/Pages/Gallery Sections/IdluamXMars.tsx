import imageData from '../../../IdluamXMarsData';
import { ModalContent } from '../../../ModalContent';

import ModularImageGallery from '../../ModularImageGallery';

interface Props {
  onOpen: (data: ModalContent) => () => void;
}

const IdluamXMars = ({ onOpen }: Props) => {
  const bgColor = 'gradient-to-b from-zima to-fuchsia-500';
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
