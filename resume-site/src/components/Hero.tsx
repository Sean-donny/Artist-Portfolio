import { useState } from "react";
import SeanPortrait from "/optimised/sean_donny_portrait.jpg";
import Slideshow from "../components/Slideshow";
import Images from "../HeroImages";

const Hero = () => {
  const [bgColorIndex, setBgColorIndex] = useState(0);

  const bgColors = ["bg-zima", "bg-orangutan", "bg-aubergine", "bg-black"];

  const bgShuffle = () => {
    setBgColorIndex((prevIndex) => (prevIndex + 1) % bgColors.length);
  };
  return (
    <div className="bg-orangutan box-border">
      <div
        className={`${bgColors[bgColorIndex]} w-full h-auto lg:h-full p-5 flex flex-col md:flex-row overflow-clip`}
      >
        <div className=" flex-grow md:w-3/5 md:flex-none">
          <div className="flex flex-col h-auto md:h-full p-2">
            <div className=" w-full h-1/2">
              <Slideshow images={Images} />
            </div>
            <div className=" w-full h-auto md:h-full">
              <article className=" h-full w-auto flex items-end overflow-clip">
                <h1 className="font-custom font-semibold italic tracking-tight text-aquatic p-2 lg:pb-5 lg:pl-5 lg:text-massive1 text-2xl lg:leading-massive1">
                  Sean Donny is a<br />
                  multidisciplinary artist
                  <br />
                  based in London, England.
                </h1>
              </article>
            </div>
          </div>
        </div>
        <div className=" flex-grow md:w-2/5 md:flex-none p-2">
          <div className="flex items-center justify-center h-full overflow-hidden">
            <img
              src={SeanPortrait}
              alt="Sean Donny"
              className="object-cover object-center h-full w-auto my-auto cursor-pointer"
              onClick={bgShuffle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
