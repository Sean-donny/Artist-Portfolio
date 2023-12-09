import AshelyObsession from './Gallery Sections/AshelyObsession';
import SeanXTife from './Gallery Sections/SeanXTife';
import IdluamXMars from './Gallery Sections/IdluamXMars';
import Illustrations from './Personal Projects Pages/Illustrations';

const Gallery = () => {
  return (
    <div className="gallery-container bg-black flex flex-col justify-start">
      <div className="gallery-items">
        <AshelyObsession />
        <SeanXTife />
        <Illustrations />
        <IdluamXMars />
      </div>
    </div>
  );
};

export default Gallery;
