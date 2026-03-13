import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from 'react';

/** A single image entry rendered by ParallaxImageStack. */
type ParallaxImageItem = {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
};

/** Shared spring tuning values for pointer smoothing. */
type SpringTuning = {
  damping: number;
  stiffness: number;
  mass: number;
};

/**
 * Props for ParallaxImageStack.
 *
 * Hover tips in usage sites:
 * - Decrease minResponseFactor for stronger parallax depth spread.
 * - Increase responseFalloffStep for more separation between layers.
 * - Raise followSpring.damping and lower followSpring.stiffness for smoother motion.
 */
type ParallaxImageStackProps = {
  /** Ordered stack data. Later items render above earlier items. */
  items: ParallaxImageItem[];
  /** Extra utility classes for outer container. */
  className?: string;
  /** Minimum rendered size in pixels for each image item. @default 300 */
  minItemSize?: number;
  /** Viewport divisor used to compute responsive item size. @default 4 */
  itemSizeDivisor?: number;
  /** Scale multiplier while hovered. @default 1.2 */
  hoverScale?: number;
  /** Scale multiplier while pressed/dragged. @default 0.98 */
  tapScale?: number;
  /** Minimum response factor for deepest layer. @default 0.25 */
  minResponseFactor?: number;
  /** Response drop per depth level. @default 0.14 */
  responseFalloffStep?: number;
  /** Pointer smoothing spring used before response factor transforms. */
  followSpring?: SpringTuning;
  /** Drag/follow horizontal bounds divisor. Lower means wider movement. @default 2.8 */
  horizontalBoundsDivisor?: number;
  /** Drag/follow vertical bounds divisor. Lower means wider movement. @default 3.8 */
  verticalBoundsDivisor?: number;
};

type Bounds = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

type TrailingImageProps = {
  item: ParallaxImageItem;
  index: number;
  totalItems: number;
  baseX: MotionValue<number>;
  baseY: MotionValue<number>;
  hoverScale: number;
  tapScale: number;
  bounds: Bounds;
  centeredItemTop: number;
  centeredItemLeft: number;
  itemSize: number;
  minResponseFactor: number;
  responseFalloffStep: number;
};

const TrailingImage = ({
  item,
  index,
  totalItems,
  baseX,
  baseY,
  hoverScale,
  tapScale,
  bounds,
  centeredItemTop,
  centeredItemLeft,
  itemSize,
  minResponseFactor,
  responseFalloffStep,
}: TrailingImageProps) => {
  const distanceFromLeader = totalItems - 1 - index;
  const responseFactor = Math.max(
    minResponseFactor,
    1 - distanceFromLeader * responseFalloffStep,
  );
  const itemX = useTransform(baseX, value => value * responseFactor);
  const itemY = useTransform(baseY, value => value * responseFactor);

  return (
    <figure>
      <motion.img
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: tapScale }}
        drag
        dragConstraints={bounds}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 260,
          mass: 0.75,
          restDelta: 0.01,
        }}
        style={{
          x: itemX,
          y: itemY,
          position: 'absolute',
          top: `${centeredItemTop}px`,
          left: `${centeredItemLeft}px`,
          zIndex: index,
          width: itemSize,
          height: itemSize,
        }}
      />
    </figure>
  );
};

const ParallaxImageStack = ({
  items,
  className = '',
  minItemSize = 300,
  itemSizeDivisor = 4,
  hoverScale = 1.2,
  tapScale = 0.98,
  minResponseFactor = 0.25,
  responseFalloffStep = 0.14,
  followSpring = { damping: 28, stiffness: 210, mass: 0.8 },
  horizontalBoundsDivisor = 2.8,
  verticalBoundsDivisor = 3.8,
}: ParallaxImageStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportSize, setViewportSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [itemSize, setItemSize] = useState(() =>
    Math.max(window.innerWidth / itemSizeDivisor, minItemSize),
  );

  useEffect(() => {
    const handleResize = () => {
      const nextViewportWidth = window.innerWidth;
      const nextViewportHeight = window.innerHeight;

      setViewportSize({
        width: nextViewportWidth,
        height: nextViewportHeight,
      });
      setContainerSize({
        width: containerRef.current?.clientWidth ?? 0,
        height: containerRef.current?.clientHeight ?? 0,
      });
      setItemSize(Math.max(nextViewportWidth / itemSizeDivisor, minItemSize));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [minItemSize, itemSizeDivisor]);

  const centeredContainerWidth = containerSize.width || viewportSize.width;
  const centeredContainerHeight = containerSize.height || viewportSize.height;
  const centeredItemTop = centeredContainerHeight / 2 - itemSize / 2;
  const centeredItemLeft = centeredContainerWidth / 2 - itemSize / 2;
  const pageBounds = {
    left: -(containerSize.width / horizontalBoundsDivisor),
    right: containerSize.width / horizontalBoundsDivisor,
    top: -(containerSize.height / verticalBoundsDivisor),
    bottom: containerSize.height / verticalBoundsDivisor,
  };
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    damping: followSpring.damping,
    stiffness: followSpring.stiffness,
    mass: followSpring.mass,
  });
  const smoothMouseY = useSpring(mouseY, {
    damping: followSpring.damping,
    stiffness: followSpring.stiffness,
    mass: followSpring.mass,
  });

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  const handlePointerMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    const pointerXFromCenter = event.clientX - rect.left - rect.width / 2;
    const pointerYFromCenter = event.clientY - rect.top - rect.height / 2;

    mouseX.set(clamp(pointerXFromCenter, pageBounds.left, pageBounds.right));
    mouseY.set(clamp(pointerYFromCenter, pageBounds.top, pageBounds.bottom));
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="w-full h-auto">
      <div
        className={`flex relative w-full h-screen overflow-clip ${className}`.trim()}
        ref={containerRef}
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
      >
        {items.map((item, index) => (
          <TrailingImage
            key={`${item.title}-${index}`}
            item={item}
            index={index}
            totalItems={items.length}
            baseX={smoothMouseX}
            baseY={smoothMouseY}
            hoverScale={hoverScale}
            tapScale={tapScale}
            bounds={pageBounds}
            centeredItemTop={centeredItemTop}
            centeredItemLeft={centeredItemLeft}
            itemSize={itemSize}
            minResponseFactor={minResponseFactor}
            responseFalloffStep={responseFalloffStep}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallaxImageStack;
