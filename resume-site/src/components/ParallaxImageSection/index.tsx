import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

/** Caption anchor in the sticky viewport. */
type CaptionPlacement = 'top-left' | 'bottom-left';
/** Horizontal object-position presets for image framing. */
type ImageAnchoring = 'left' | 'center' | 'right';

/**
 * Source data for the section hero image.
 * width/height are optional but recommended for better CLS behavior.
 */
interface ParallaxImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Props for ParallaxImageSection.
 *
 * Hover tips in usage sites:
 * - Use mobileAnchoring and largeAnchoring to keep important subject framing across breakpoints.
 * - Use captionPlacement with short caption text to avoid overlap on smaller screens.
 * - For decorative-only imagery, keep captions empty and rely on alt for accessibility.
 */
interface ParallaxImageSectionProps {
  /** Required image source metadata for the parallax visual. */
  image: ParallaxImageData;
  /** Optional accent label above caption. */
  captionHeader?: string;
  /** Optional main caption text. */
  caption?: string;
  /** Caption anchor point. @default 'bottom-left' */
  captionPlacement?: CaptionPlacement;
  /** Fallback anchoring applied to all breakpoints unless overridden. */
  anchoring?: ImageAnchoring;
  /** Mobile-first anchoring override. */
  mobileAnchoring?: ImageAnchoring;
  /** Large-screen anchoring override (lg breakpoint and above). */
  largeAnchoring?: ImageAnchoring;
  /** Controls sticky behavior intensity. @default 'full' */
  stickyMode?: 'off' | 'short' | 'full';
}

/**
 * Sticky parallax section with scroll-reactive image translation/scale and optional caption.
 * Motion respects reduced-motion preferences by reducing travel distances.
 */
const ParallaxImageSection = ({
  image,
  captionHeader,
  caption,
  captionPlacement = 'bottom-left',
  anchoring,
  mobileAnchoring,
  largeAnchoring,
  stickyMode = 'full',
}: ParallaxImageSectionProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      prefersReducedMotion ? [0, 0] : [-70, 90],
    ),
    {
      stiffness: 130,
      damping: 35,
      mass: 0.35,
    },
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    prefersReducedMotion ? [1, 1, 1] : [1.035, 1.02, 1.01],
  );

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.5, 0.2, 0.65],
  );

  const captionY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [24, -22],
  );

  const captionOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );

  const captionPositionClass =
    captionPlacement === 'top-left'
      ? 'top-4 md:top-14'
      : 'bottom-4 md:bottom-14';

  const objectPositionClassMap: Record<ImageAnchoring, string> = {
    left: 'object-left',
    center: 'object-center',
    right: 'object-right',
  };

  const resolvedMobileAnchoring = mobileAnchoring ?? anchoring ?? 'left';
  const resolvedLargeAnchoring = largeAnchoring ?? anchoring ?? 'center';

  const imageAnchoringClass =
    resolvedMobileAnchoring === resolvedLargeAnchoring
      ? objectPositionClassMap[resolvedMobileAnchoring]
      : `${objectPositionClassMap[resolvedMobileAnchoring]} lg:${objectPositionClassMap[resolvedLargeAnchoring]}`;

  const sectionHeightClassByMode: Record<'off' | 'short' | 'full', string> = {
    off: 'h-[50vh] md:h-[80vh]',
    short: 'h-[50vh] md:h-[110vh]',
    full: 'h-[50vh] md:h-[150vh]',
  };

  const viewportHeightClass = 'h-[50vh] md:h-screen';

  const viewportClassName =
    stickyMode === 'off'
      ? `relative w-full ${viewportHeightClass}`
      : `sticky top-0 w-full ${viewportHeightClass}`;

  return (
    <div className="w-full h-auto">
      <section
        ref={sectionRef}
        className={`client-project-geo-nodes-parallax relative w-full overflow-clip bg-black ${sectionHeightClassByMode[stickyMode]}`}
      >
        <div className={viewportClassName}>
          <motion.img
            src={image.src}
            alt={image.alt}
            width={image.width ?? 1920}
            height={image.height ?? 1080}
            className={`absolute inset-0 h-full w-full object-cover ${imageAnchoringClass}`}
            style={{ y: imageY, scale: imageScale }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85"
            style={{ opacity: overlayOpacity }}
          />
          {(captionHeader || caption) && (
            <motion.div
              className={`absolute left-0 w-full max-w-4xl px-4 md:px-8 ${captionPositionClass}`}
              style={{ y: captionY, opacity: captionOpacity }}
            >
              {captionHeader && (
                <p className="font-custom text-left text-sm font-semibold tracking-wide text-[#39ff85] md:text-base">
                  {captionHeader}
                </p>
              )}
              {caption && (
                <h3 className="font-custom text-left text-2xl font-semibold leading-tight text-zinc-100 md:text-4xl">
                  {caption}
                </h3>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ParallaxImageSection;
