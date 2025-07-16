//image import
import { useNavigate } from 'react-router-dom';
import printSpread from '/optimised/sean_donny_prints_image.png';

const Prints = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className="bg-zima">
      <div className="w-full h-auto lg:h-full px-7 flex flex-col-reverse md:flex-row">
        <figure className="art-spread flex-grow md:w-2/5 md:flex-none flex justify-center">
          <img
            src={printSpread}
            alt="Sean Donny holding up art prints"
            loading="eager"
            width={948 / 2}
            height={1088 / 2}
            className="h-full w-auto object-cover overflow-x-visible"
          />
        </figure>
        <div className="chameleon-skin h-auto flex-grow md:w-3/5 md:flex-none">
          <div className="h-full w-full flex flex-col items-center justify-center ali">
            <div className="chameleon h-auto bg-[#25a118] border-2 p-3 lg:p-6 my-7 border-black">
              <div className="w-full h-auto bg-[#30fce3] border-2 p-3 lg:p-6 border-black">
                <div className="w-full h-auto bg-[#fa0cb3] border-2 p-3 lg:p-6 border-black">
                  <h2
                    className="font-loud uppercase text-slate-100 tracking-tight lg:text-massive2 text-7xl lg:text-8xl lg:leading-massive2"
                    style={{
                      textShadow:
                        '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                    }}
                  >
                    PRINTS
                  </h2>
                  <p
                    className="font-custom text-slate-100 font-semibold pt-4 pb-10 text-xl"
                    // style={{
                    //   textShadow:
                    //     '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                    // }}
                  >
                    Looking to add some new artwork in your space, or just
                    support me?
                    <br />
                    Well I have great news, you can do both!
                    <br />
                    <br />
                    Browse through my selection of art prints and grab something
                    for yourself, or someone special to you.
                  </p>
                  <button
                    className="prints-button p-3 border-black border-2 bg-fuchsia-200 text-xl text-black font-custom font-semibold hover:text-slate-700 hover:bg-fuchsia-100"
                    onClick={() => handleNavigate('/store')}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prints;
