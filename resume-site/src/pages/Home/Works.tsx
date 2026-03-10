import { useRef, useState } from 'react';

// Image imports
import RulesTheWorld from '/optimised/crtz_spread.webp';
import SubaruBoy from '/optimised/cruel_santino_subaru_boy_wide.webp';
import MenaceTalk from '/optimised/trill_tega_menace_talk_video_still_1.webp';
import SeanDonny from '/optimised/sean_donny_animated_photo.webp';

import { usePageTransition } from '../../components/Transitions/TransitionLayout';
import { useTextReveal } from '../../Hooks/useRevealText';
import { useReveal } from '../../Hooks/useRevealItem';

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

  const { navigateTo } = usePageTransition();

  const handleNavigate = (path: string) => {
    navigateTo(`/${path}`);
  };

  const headingRef = useTextReveal<HTMLHeadingElement>({
    type: 'chars',
    triggerStart: 'top 98%',
    delay: 0.2,
    duration: 0.5,
    stagger: 0.03,
  });

  const headingRef2 = useTextReveal<HTMLHeadingElement>({
    type: 'chars',
    triggerStart: 'top 98%',
    delay: 0.2,
    duration: 0.5,
    stagger: 0.03,
  });

  const headingRef3 = useTextReveal<HTMLHeadingElement>({
    type: 'chars',
    triggerStart: 'top 98%',
    delay: 0.2,
    duration: 0.5,
    stagger: 0.03,
  });

  const headingRef4 = useTextReveal<HTMLHeadingElement>({
    type: 'chars',
    triggerStart: 'top 98%',
    delay: 0.2,
    duration: 0.5,
    stagger: 0.03,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const worksRef1 = useReveal<HTMLDivElement>({
    variant: 'slideUp',
    delay: 0.2,
    triggerRef: containerRef,
  });

  const containerRef2 = useRef<HTMLDivElement>(null);

  const worksRef2 = useReveal<HTMLDivElement>({
    variant: 'slideUp',
    delay: 0.2,
    triggerRef: containerRef2,
  });

  const containerRef3 = useRef<HTMLDivElement>(null);

  const worksRef3 = useReveal<HTMLDivElement>({
    variant: 'slideUp',
    delay: 0.2,
    triggerRef: containerRef3,
  });

  const containerRef4 = useRef<HTMLDivElement>(null);

  const worksRef4 = useReveal<HTMLDivElement>({
    variant: 'slideUp',
    delay: 0.2,
    triggerRef: containerRef4,
  });

  return (
    <div className="bg-black box-border">
      <div
        className={`works w-full h-full p-7 flex flex-col overflow-clip relative ${bgColors[bgColorIndex]}`}
      >
        <div className="works-inner-1 p-2 flex justify-between flex-col md:flex-row md:mb-20">
          <div
            className={`works-gallery-container mb-4 flex-grow md:w-5/12 md:flex-none overflow-hidden ${
              isModalVisible && highlightedIndex !== 0
                ? 'opacity-20'
                : 'opacity-100'
            }`}
            onMouseEnter={() => blackOut(0)}
            onMouseLeave={eggPlant}
            onClick={() => {
              handleNavigate('gallery');
            }}
            ref={containerRef}
          >
            <figure
              className="works-gallery-image-container h-auto lg:h-works xl:h-auto overflow-hidden flex items-center justify-center"
              ref={worksRef1}
            >
              <img
                src={RulesTheWorld}
                alt="RulesTheWorld"
                className="works-gallery-image object-cover object-center h-full w-auto cursor-pointer gsap-reveal"
                title="RulesTheWorld"
                loading="lazy"
                width={1767}
                height={1240}
              />
            </figure>
            <div className="works-gallery-title py-1 xl:text-center">
              <h2
                className="font-custom text-base font-semibold tracking-tight text-aquatic"
                ref={headingRef}
              >
                Gallery
              </h2>
            </div>
          </div>
          <div
            className={`works-personal-projects-container mb-1 flex-grow md:w-6/12 md:flex-none overflow-hidden ${
              isModalVisible && highlightedIndex !== 1
                ? 'opacity-20'
                : 'opacity-100'
            }`}
            onMouseEnter={() => blackOut(1)}
            onMouseLeave={eggPlant}
            onClick={() => {
              handleNavigate('personal-projects');
            }}
            ref={containerRef2}
          >
            <figure
              className="works-personal-projects-image-container h-auto lg:h-works xl:h-auto overflow-hidden flex items-center justify-center"
              ref={worksRef2}
            >
              <img
                src={SubaruBoy}
                alt="Subaru Boy"
                className="works-personal-projects-image object-cover object-center h-full w-auto cursor-pointer gsap-reveal"
                title="Subaru Boy"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </figure>
            <div className="works-personal-projects-title py-1 xl:text-center">
              <h2
                className="font-custom text-base font-semibold tracking-tight text-aquatic"
                ref={headingRef2}
              >
                Personal Projects
              </h2>
            </div>
          </div>
        </div>
        <div className="works-inner-2 p-2 flex justify-between flex-col md:flex-row mb-10">
          <div
            className={`works-client-projects-container mb-4 flex-grow md:w-8/12 md:flex-none overflow-hidden ${
              isModalVisible && highlightedIndex !== 2
                ? 'opacity-20'
                : 'opacity-100'
            }`}
            onMouseEnter={() => blackOut(2)}
            onMouseLeave={eggPlant}
            onClick={() => {
              handleNavigate('client-projects');
            }}
            ref={containerRef3}
          >
            <figure
              className="works-client-projects-image-container h-auto lg:h-works xl:h-works2 overflow-hidden flex items-center justify-center"
              ref={worksRef3}
            >
              <img
                src={MenaceTalk}
                alt="Menace Talk"
                className="works-client-projects-image object-cover object-center w-full h-auto cursor-pointer gsap-reveal"
                title="Menace Talk"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </figure>
            <div className="works-client-projects-title py-1 xl:text-center">
              <h2
                className="font-custom text-base font-semibold tracking-tight text-aquatic"
                ref={headingRef3}
              >
                Client Projects
              </h2>
            </div>
          </div>
          <div
            className={`works-about-container mb-4 flex-grow md:w-3/12 md:flex-none overflow-hidden ${
              isModalVisible && highlightedIndex !== 3
                ? 'opacity-20'
                : 'opacity-100'
            }`}
            onMouseEnter={() => blackOut(3)}
            onMouseLeave={eggPlant}
            onClick={() => {
              handleNavigate('about');
            }}
            ref={containerRef4}
          >
            <figure
              className="works-about-image-container h-auto lg:h-works xl:h-works2 overflow-hidden flex items-center justify-center"
              ref={worksRef4}
            >
              <img
                src={SeanDonny}
                alt="Sean Donny animated photo"
                className="works-about-image object-cover object-center h-full w-auto cursor-pointer gsap-reveal"
                title="Sean Donny animated photo"
                loading="lazy"
                width={1767}
                height={1240}
              />
            </figure>
            <div className="works-about-title py-1 xl:text-center">
              <h2
                className="font-custom text-base font-semibold tracking-tight text-aquatic"
                ref={headingRef4}
              >
                About
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
