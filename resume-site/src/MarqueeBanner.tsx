import Marquee from "react-fast-marquee";

const MarqueeBanner = () => {
  const repeatCount = 10;

  const marqueeContent = Array.from({ length: repeatCount }, (_, index) => (
    <h4
      key={index}
      className="font-mono font-semibold text-zinc-300 text-xl lg:text-4xl mx-5"
    >
      @sean.donny
    </h4>
  ));

  return (
    <div className="bg-neutral-950 py-5">
      <Marquee className="overflow-hidden" pauseOnHover>
        {marqueeContent}
      </Marquee>
    </div>
  );
};

export default MarqueeBanner;
