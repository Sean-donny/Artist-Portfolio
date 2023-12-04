import AshelyObsession from './Gallery Sections/AshelyObsession';
import SeanXTife from './Gallery Sections/SeanXTife';

const Gallery = () => {
  return (
    <div className="gallery-container bg-black flex flex-col justify-start">
      <div className="gallery-items">
        <AshelyObsession />
        <SeanXTife />
        <div>Guitar Gurl</div>
        <div>Runway Gurl</div>
        <div>Read Heads</div>
        <div>A Love Story</div>
        <div>IDLUAM</div>
        <div>RULESTHEWORLD</div>
        <div>Enter Mars</div>
        <div>Amala + Ewedu</div>
      </div>
    </div>
  );
};

export default Gallery;
