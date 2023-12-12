import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RulesTheWorld from '/optimised/crtz_spread.jpg';
import SubaruBoy from '/optimised/cruel_santino_subaru_boy_wide.jpg';
import MenaceTalk from '/optimised/trill_tega_menace_talk_video_still_1.jpg';
import SeanDonny from '/optimised/sean_donny_animated_photo.jpg';

const Works = () => {
  const [bgColorIndex, setBgColorIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const bgColors = ['bg-aubergine', 'bg-black'];

  const eggPlant = () => {
    setIsModalVisible(false);
    setBgColorIndex(0);
    setHighlightedIndex(null);
  };

  const blackOut = (index: number) => {
    setIsModalVisible(true);
    setBgColorIndex(1);
    setHighlightedIndex(index);
  };

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo(0, 0);
    navigate(`/${path}`);
  };

  return (
    <div className="bg-black box-border">
      <div
        className={`works w-full h-full p-7 flex flex-col overflow-clip relative ${bgColors[bgColorIndex]}`}
      >
        <div className="works-inner-1 p-2 flex justify-between flex-col md:flex-row md:mb-20">
          <div
            className={`works-gallery-container mb-4 flex-grow md:w-5/12 md:flex-none ${
              isModalVisible && highlightedIndex !== 0
                ? 'opacity-20'
                : 'opacity-100'
            }`}
            onMouseEnter={() => blackOut(0)}
            onMouseLeave={eggPlant}
            onClick={() => {
              handleNavigate('gallery');
              //TODO: Approve functionality with FDOG
            }}
          >
            <div className="works-gallery-image-container h-auto lg:h-works xl:h-auto overflow-hidden flex items-center justify-center">
              <img
                src={RulesTheWorld}
                alt="RulesTheWorld"
                className="works-gallery-image object-cover object-center h-full w-auto cursor-pointer"
              />
            </div>
            <div className="works-gallery-title py-1 xl:text-center">
              <h6 className="font-custom text-base font-semibold tracking-tight text-aquatic">
                Gallery
              </h6>
            </div>
          </div>
          <div
            className={`works-personal-projects-container mb-1 flex-grow md:w-6/12 md:flex-none ${
              isModalVisible && highlightedIndex !== 1
                ? 'opacity-20'
                : 'opacity-100'
            }`}
            onMouseEnter={() => blackOut(1)}
            onMouseLeave={eggPlant}
            onClick={() => {
              handleNavigate('personal-projects');
            }}
          >
            <div className="works-personal-projects-image-container h-auto lg:h-works xl:h-auto overflow-hidden flex items-center justify-center">
              <img
                src={SubaruBoy}
                alt="Subaru Boy"
                className="works-personal-projects-image object-cover object-center h-full w-auto cursor-pointer"
              />
            </div>
            <div className="works-personal-projects-title py-1 xl:text-center">
              <h6 className="font-custom text-base font-semibold tracking-tight text-aquatic">
                Personal Projects
              </h6>
            </div>
          </div>
        </div>
        <div className="works-inner-2 p-2 flex justify-between flex-col md:flex-row mb-10">
          <div
            className={`works-client-projects-container mb-4 flex-grow md:w-8/12 md:flex-none ${
              isModalVisible && highlightedIndex !== 2
                ? 'opacity-20'
                : 'opacity-100'
            }`}
            onMouseEnter={() => blackOut(2)}
            onMouseLeave={eggPlant}
            onClick={() => {
              handleNavigate('client-projects');
            }}
          >
            <div className="works-client-projects-image-container h-auto lg:h-works xl:h-works2 overflow-hidden flex items-center justify-center">
              <img
                src={MenaceTalk}
                alt="Menace Talk"
                className="works-client-projects-image object-cover object-center w-full h-auto cursor-pointer"
              />
            </div>
            <div className="works-client-projects-title py-1 xl:text-center">
              <h6 className="font-custom text-base font-semibold tracking-tight text-aquatic">
                Client Projects
              </h6>
            </div>
          </div>
          <div
            className={`works-about-container mb-4 flex-grow md:w-3/12 md:flex-none ${
              isModalVisible && highlightedIndex !== 3
                ? 'opacity-20'
                : 'opacity-100'
            }`}
            onMouseEnter={() => blackOut(3)}
            onMouseLeave={eggPlant}
            onClick={() => {
              handleNavigate('about');
            }}
          >
            <div className="works-about-image-container h-auto lg:h-works xl:h-works2 overflow-hidden flex items-center justify-center">
              <img
                src={SeanDonny}
                alt="Sean Donny animated photo"
                className="works-about-image object-cover object-center h-full w-auto cursor-pointer"
              />
            </div>
            <div className="works-about-title py-1 xl:text-center">
              <h6 className="font-custom text-base font-semibold tracking-tight text-aquatic">
                About
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
