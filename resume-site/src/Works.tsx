import RULESTHEWORLD from "/optimised/crtz_spread.jpg";
import SubaruBoy from "/optimised/cruel_santino_subaru_boy_wide.jpg";
import MenaceTalk from "/optimised/trill_tega_menace_talk_video_still_1.jpg";
import SeanDonny from "/optimised/sean_donny_animated_photo.jpg";

const Works = () => {
  return (
    <div className="bg-orangutan box-border">
      <div className="works w-full bg-aubergine h-full p-7 flex flex-col overflow-clip">
        <div className="works-inner-1 bg-gradient-to-r from-purple-500 to-pink-500 p-2 flex justify-between flex-col md:flex-row md:mb-20">
          <div
            className="works-gallery-container bg-yellow-300 flex-grow md:w-5/12 md:flex-none" /*onClick={goto:gallery}*/
          >
            <div className="works-gallery-image-container h-auto lg:h-works xl:h-auto overflow-hidden flex items-center justify-center">
              <img
                src={RULESTHEWORLD}
                alt="RULESTHEWORLD"
                className="works-gallery-image object-cover object-center h-full w-auto cursor-pointer"
              />
            </div>
            <div className="works-gallery-title py-1 xl:text-center">
              <h6 className="font-custom text-base font-semibold tracking-tight text-black">
                Gallery
              </h6>
            </div>
          </div>
          <div
            className="bg-zima flex-grow md:w-6/12 md:flex-none" /*onClick={goto:gallery}*/
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
        <div className="works-inner-2 bg-gradient-to-r from-cyan-500 to-blue-500 p-2 flex justify-between flex-col md:flex-row mb-20">
          <div
            className="bg-zinc-300 flex-grow md:w-8/12 md:flex-none" /*onClick={goto:gallery}*/
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
            className="bg-fuchsia-400 flex-grow md:w-3/12 md:flex-none" /*onClick={goto:gallery}*/
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
