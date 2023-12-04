import AshelyObsession from './Gallery Sections/AshelyObsession';
import SeanXTife from './Gallery Sections/SeanXTife';
import IdluamXMars from './Gallery Sections/IdluamXMars';
import GuitarGurlxLoveStory from './Gallery Sections/GuitarGurlxLoveStory';
import RedHeads from './Gallery Sections/RedHeads';

const Gallery = () => {
  return (
    <div className="gallery-container bg-black flex flex-col justify-start">
      <div className="gallery-items">
        <AshelyObsession />
        <SeanXTife />
        <IdluamXMars />
        <GuitarGurlxLoveStory />
        <RedHeads />
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
