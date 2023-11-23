import SeanPortrait from "/optimised/sean_donny_portrait.jpg";
import Slideshow from "../components/Slideshow";
import Images from "../HeroImages";

const Hero = () => {
  return (
    // <div className="bg-orangutan w-full h-screen flex flex-row">
    //   <article className="basis-3/5 flex items-end">
    //     <h1 className="font-custom font-semibold italic tracking-tight text-aquatic pb-5 pl-5 text-massive1 leading-massive1">
    //       Sean Donny is a<br />
    //       multidisciplinary artist
    //       <br />
    //       based in London, England.
    //     </h1>
    //   </article>
    //   <figure className="basis-2/5 flex items-end">
    //     <img alt="Sean Donny" src={SeanPortrait} className="w-full pb-5 pr-5" />
    //   </figure>
    // </div>
    <div className="bg-orangutan w-full h-screen box-border">
      <div className="bg-zima w-full h-full p-5 flex flex-col md:flex-row">
        <div className="bg-slate-800 flex-grow md:w-3/5 md:flex-none">
          <div className="flex flex-col h-auto md:h-full p-2">
            <div className="bg-slate-500 w-full h-1/2">
              <Slideshow images={Images} />
            </div>
            <div className="bg-slate-300 w-full h-auto md:h-full">
              <article className="bg-zima h-full w-auto flex items-end overflow-clip">
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
        <div className="bg-slate-400 flex-grow md:w-2/5 md:flex-none p-2">
          <div className="flex items-center justify-center h-full">
            <img
              src={SeanPortrait}
              alt="Sean Donny"
              className="object-cover object-center h-auto w-full my-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
