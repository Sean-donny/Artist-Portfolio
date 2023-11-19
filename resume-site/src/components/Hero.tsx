import SeanPortrait from "/optimised/sean_donny_portrait.jpg";

const Hero = () => {
  return (
    <div className="bg-orangutan w-full h-screen flex flex-row">
      <article className="basis-3/5 flex items-end">
        <h1 className="font-custom font-semibold italic tracking-tight text-aquatic pb-5 pl-5 text-massive1 leading-massive1">
          Sean Donny is a<br />
          multidisciplinary artist
          <br />
          based in London, England.
        </h1>
      </article>
      <figure className="basis-2/5 flex items-end">
        <img alt="Sean Donny" src={SeanPortrait} className="w-full pb-5 pr-5" />
      </figure>
    </div>
  );
};

export default Hero;
