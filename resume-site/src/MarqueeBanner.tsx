import Marquee from "react-fast-marquee";
import funFacts from "./funFacts";

const MarqueeBanner = () => {
  const repeatCount = 20;

  const marqueeContent = Array.from({ length: repeatCount }, (_, index) => (
    <h4
      key={index}
      className="font-mono font-semibold text-zinc-300 text-xl lg:text-4xl mx-5"
    >
      {funFacts[index % funFacts.length]}
    </h4>
  ));

  return (
    <div className="bg-neutral-950 py-5">
      <Marquee className="overflow-hidden" pauseOnHover speed={150}>
        {marqueeContent}
      </Marquee>
    </div>
  );
};

export default MarqueeBanner;
