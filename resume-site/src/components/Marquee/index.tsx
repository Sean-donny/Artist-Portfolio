import Marquee from 'react-fast-marquee';
import funFacts from '../../pages/Home/funFacts';

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
    <div className="bg-black py-5">
      <Marquee
        className="overflow-hidden"
        speed={150}
        delay={0.5}
        gradient
        gradientWidth={50}
        gradientColor="black"
      >
        {marqueeContent}
      </Marquee>
    </div>
  );
};

export default MarqueeBanner;
