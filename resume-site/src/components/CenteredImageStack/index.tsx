import { motion, useSpring } from 'framer-motion';
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react';

/** A single image entry rendered in the stack. */
type CenteredImageItem = {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
};

/**
 * Spring parameters used for smooth follower motion.
 * Larger damping lowers oscillation, larger stiffness increases snap speed,
 * larger mass increases perceived inertia.
 */
type SpringTuning = {
  damping: number;
  stiffness: number;
  mass: number;
};

/**
 * Per-depth offsets applied to the follower spring.
 * Deeper items are offset more to create a stronger trailing chain.
 */
type DepthSpringStep = {
  damping: number;
  stiffness: number;
  mass: number;
};

/** Preset names for tail spacing and trailing personality. */
type FollowDelayPreset = 'monkeytail' | 'sandsnake' | 'millipede';

type Point2D = {
  x: number;
  y: number;
};

type TrailSamplePoint = Point2D & {
  t: number;
};

type FollowTuningProfile = {
  followSpring: SpringTuning;
  depthBaseSpring: SpringTuning;
  depthSpringStep: DepthSpringStep;
  minDepthStiffness: number;
  perDepthDelayMs: number;
};

const FOLLOW_TUNING_PRESETS: Record<FollowDelayPreset, FollowTuningProfile> = {
  monkeytail: {
    followSpring: { damping: 30, stiffness: 185, mass: 0.9 },
    depthBaseSpring: { damping: 22, stiffness: 230, mass: 0.9 },
    depthSpringStep: { damping: 6, stiffness: 72, mass: 0.24 },
    minDepthStiffness: 70,
    perDepthDelayMs: 42,
  },
  sandsnake: {
    followSpring: { damping: 31, stiffness: 182, mass: 0.92 },
    depthBaseSpring: { damping: 22, stiffness: 228, mass: 0.92 },
    depthSpringStep: { damping: 6, stiffness: 72, mass: 0.24 },
    minDepthStiffness: 70,
    perDepthDelayMs: 96,
  },
  millipede: {
    followSpring: { damping: 32, stiffness: 178, mass: 0.96 },
    depthBaseSpring: { damping: 23, stiffness: 224, mass: 0.94 },
    depthSpringStep: { damping: 6, stiffness: 72, mass: 0.24 },
    minDepthStiffness: 70,
    perDepthDelayMs: 132,
  },
};

/**
 * Props for CenteredImageStack.
 *
 * Hover tips in usage sites:
 * - Increase followSpring.damping and lower followSpring.stiffness to reduce jitter.
 * - Increase perDepthDelayMs to create more visible spacing between depth layers.
 * - monkeytail keeps the train tight, sandsnake opens it up, millipede exaggerates separation.
 * - Increase perDepthDelayMs for larger visual spacing between depth layers.
 */
type CenteredImageStackProps = {
  /** Ordered stack data. Later items are visually on top. */
  items: CenteredImageItem[];
  /** Extra utility classes for layout overrides. */
  className?: string;
  /** Minimum rendered size in pixels for each image item. @default 300 */
  minItemSize?: number;
  /** Viewport divisor used to compute responsive item size. @default 4 */
  itemSizeDivisor?: number;
  /** Scale multiplier while hovered. @default 1.2 */
  hoverScale?: number;
  /** Scale multiplier while pressed/dragged. @default 0.98 */
  tapScale?: number;
  /**
   * Named delay profile for quick tuning.
   * @default 'turtletime'
   */
  followDelayPreset?: FollowDelayPreset;
  /** Additional explicit delay (in ms) per depth layer. Overrides preset when provided. */
  perDepthDelayMs?: number;
  /** Base spring for pointer smoothing before per-item depth lag. */
  followSpring?: SpringTuning;
  /** Base spring for topmost item follower. */
  depthBaseSpring?: SpringTuning;
  /** Per-depth spring offsets for trailing items. */
  depthSpringStep?: DepthSpringStep;
  /** Floor stiffness for deepest items. @default 90 */
  minDepthStiffness?: number;
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
  item: CenteredImageItem;
  index: number;
  totalItems: number;
  targetX: number;
  targetY: number;
  hoverScale: number;
  tapScale: number;
  bounds: Bounds;
  centeredItemTop: number;
  centeredItemLeft: number;
  itemSize: number;
  followSpring: SpringTuning;
  depthBaseSpring: SpringTuning;
  depthSpringStep: DepthSpringStep;
  minDepthStiffness: number;
  isCoarsePointer: boolean;
  isLifted: boolean;
  onItemPointerDown: (
    index: number,
    event: ReactPointerEvent<HTMLImageElement>,
  ) => void;
};

const TrailingImage = ({
  item,
  index,
  totalItems,
  targetX,
  targetY,
  hoverScale,
  tapScale,
  bounds,
  centeredItemTop,
  centeredItemLeft,
  itemSize,
  followSpring,
  depthBaseSpring,
  depthSpringStep,
  minDepthStiffness,
  isCoarsePointer,
  isLifted,
  onItemPointerDown,
}: TrailingImageProps) => {
  const depthFromTop = totalItems - 1 - index;
  const depthRatio = totalItems > 1 ? depthFromTop / (totalItems - 1) : 0;
  const resolvedBaseDamping =
    depthBaseSpring.damping + followSpring.damping * 0.35;
  const resolvedBaseStiffness =
    depthBaseSpring.stiffness + followSpring.stiffness * 0.2;
  const resolvedBaseMass = depthBaseSpring.mass + followSpring.mass * 0.2;
  const previousTargetRef = useRef<Point2D>({ x: 0, y: 0 });
  const previousTargetTimeRef = useRef(performance.now());

  const itemX = useSpring(0, {
    damping: resolvedBaseDamping + depthFromTop * depthSpringStep.damping,
    stiffness: Math.max(
      minDepthStiffness,
      resolvedBaseStiffness - depthFromTop * depthSpringStep.stiffness,
    ),
    mass: resolvedBaseMass + depthFromTop * depthSpringStep.mass,
  });
  const itemY = useSpring(0, {
    damping: resolvedBaseDamping + depthFromTop * depthSpringStep.damping,
    stiffness: Math.max(
      minDepthStiffness,
      resolvedBaseStiffness - depthFromTop * depthSpringStep.stiffness,
    ),
    mass: resolvedBaseMass + depthFromTop * depthSpringStep.mass,
  });
  const itemRotate = useSpring(0, {
    damping: 26,
    stiffness: 180,
    mass: 0.8,
  });
  const itemRotateX = useSpring(0, {
    damping: 24,
    stiffness: 170,
    mass: 0.7,
  });

  useEffect(() => {
    const now = performance.now();
    const deltaTime = Math.max(now - previousTargetTimeRef.current, 16);
    const deltaX = targetX - previousTargetRef.current.x;
    const deltaY = targetY - previousTargetRef.current.y;
    const velocityX = deltaX / deltaTime;
    const velocityY = deltaY / deltaTime;
    const rotationIntensity = Math.max(0.35, 1 - depthRatio * 0.5);

    itemX.set(targetX);
    itemY.set(targetY);
    itemRotate.set(
      Math.min(10, Math.max(-10, velocityX * 7)) * rotationIntensity,
    );
    itemRotateX.set(
      Math.min(7, Math.max(-7, -velocityY * 4.5)) * rotationIntensity,
    );

    previousTargetRef.current = { x: targetX, y: targetY };
    previousTargetTimeRef.current = now;
  }, [depthRatio, itemRotate, itemRotateX, itemX, itemY, targetX, targetY]);

  return (
    <figure>
      <motion.img
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        whileHover={isCoarsePointer ? undefined : { scale: hoverScale }}
        whileTap={{ scale: tapScale }}
        onPointerDown={event => onItemPointerDown(index, event)}
        drag={isCoarsePointer}
        dragConstraints={bounds}
        dragElastic={isCoarsePointer ? 0.18 : 0.08}
        dragMomentum={false}
        transition={{
          type: 'spring',
          damping: 22,
          stiffness: 280,
          mass: 0.8,
          restDelta: 0.01,
        }}
        style={{
          x: itemX,
          y: itemY,
          rotate: itemRotate,
          rotateX: itemRotateX,
          position: 'absolute',
          top: `${centeredItemTop}px`,
          left: `${centeredItemLeft}px`,
          zIndex: isLifted ? totalItems + 2 : index,
          width: itemSize,
          height: itemSize,
          transformPerspective: 1200,
        }}
      />
    </figure>
  );
};

const CenteredImageStack = ({
  items,
  className = '',
  minItemSize = 300,
  itemSizeDivisor = 4,
  hoverScale = 1.2,
  tapScale = 0.98,
  followDelayPreset = 'monkeytail',
  perDepthDelayMs,
  followSpring,
  depthBaseSpring,
  depthSpringStep,
  minDepthStiffness,
  horizontalBoundsDivisor = 2.8,
  verticalBoundsDivisor = 3.8,
}: CenteredImageStackProps) => {
  const preset = FOLLOW_TUNING_PRESETS[followDelayPreset];
  const resolvedFollowSpring = followSpring ?? preset.followSpring;
  const resolvedDepthBaseSpring = depthBaseSpring ?? preset.depthBaseSpring;
  const resolvedDepthSpringStep = depthSpringStep ?? preset.depthSpringStep;
  const resolvedMinDepthStiffness =
    minDepthStiffness ?? preset.minDepthStiffness;
  const resolvedPerDepthDelayMs = perDepthDelayMs ?? preset.perDepthDelayMs;

  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportSize, setViewportSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [itemSize, setItemSize] = useState(() =>
    Math.max(window.innerWidth / itemSizeDivisor, minItemSize),
  );
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const [liftedItemIndex, setLiftedItemIndex] = useState<number | null>(null);
  const [delayedTargets, setDelayedTargets] = useState<Point2D[]>(() =>
    items.map(() => ({ x: 0, y: 0 })),
  );
  const pointerHistoryRef = useRef<TrailSamplePoint[]>([
    { t: performance.now(), x: 0, y: 0 },
  ]);
  const latestPointerRef = useRef<Point2D>({ x: 0, y: 0 });
  const isPointerInsideRef = useRef(false);

  useEffect(() => {
    setDelayedTargets(items.map(() => ({ x: 0, y: 0 })));
    pointerHistoryRef.current = [{ t: performance.now(), x: 0, y: 0 }];
    latestPointerRef.current = { x: 0, y: 0 };
    isPointerInsideRef.current = false;
  }, [items]);

  useEffect(() => {
    const coarsePointerQuery = window.matchMedia('(pointer: coarse)');

    const handlePointerTypeChange = () => {
      setIsCoarsePointer(coarsePointerQuery.matches);
    };

    handlePointerTypeChange();

    if (typeof coarsePointerQuery.addEventListener === 'function') {
      coarsePointerQuery.addEventListener('change', handlePointerTypeChange);
      return () =>
        coarsePointerQuery.removeEventListener(
          'change',
          handlePointerTypeChange,
        );
    }

    coarsePointerQuery.addListener(handlePointerTypeChange);
    return () => coarsePointerQuery.removeListener(handlePointerTypeChange);
  }, []);

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
    left: -(centeredContainerWidth / horizontalBoundsDivisor),
    right: centeredContainerWidth / horizontalBoundsDivisor,
    top: -(centeredContainerHeight / verticalBoundsDivisor),
    bottom: centeredContainerHeight / verticalBoundsDivisor,
  };

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  const sampleTrailPoint = (
    history: TrailSamplePoint[],
    targetTime: number,
  ): Point2D => {
    if (history.length === 0) {
      return { x: 0, y: 0 };
    }

    if (targetTime <= history[0].t) {
      return { x: history[0].x, y: history[0].y };
    }

    const last = history[history.length - 1];
    if (targetTime >= last.t) {
      return { x: last.x, y: last.y };
    }

    for (let i = history.length - 1; i > 0; i--) {
      const newer = history[i];
      const older = history[i - 1];
      if (older.t <= targetTime && targetTime <= newer.t) {
        const range = newer.t - older.t || 1;
        const lerp = (targetTime - older.t) / range;
        return {
          x: older.x + (newer.x - older.x) * lerp,
          y: older.y + (newer.y - older.y) * lerp,
        };
      }
    }

    return { x: last.x, y: last.y };
  };

  useEffect(() => {
    let frameId = 0;

    const animateTrail = () => {
      const now = performance.now();

      if (isPointerInsideRef.current) {
        pointerHistoryRef.current.push({
          t: now,
          x: latestPointerRef.current.x,
          y: latestPointerRef.current.y,
        });
      }

      const maxDelayWindow =
        Math.max(1, items.length - 1) * resolvedPerDepthDelayMs + 400;
      const cutoff = now - maxDelayWindow;
      const filteredHistory = pointerHistoryRef.current.filter(
        sample => sample.t >= cutoff,
      );
      if (filteredHistory.length === 0) {
        const lastSample = pointerHistoryRef.current[
          pointerHistoryRef.current.length - 1
        ] ?? {
          t: now,
          x: 0,
          y: 0,
        };
        pointerHistoryRef.current = [lastSample];
      } else {
        pointerHistoryRef.current = filteredHistory;
      }

      const nextTargets = items.map((_, index) => {
        const depthFromTop = items.length - 1 - index;
        const delayedTime = now - depthFromTop * resolvedPerDepthDelayMs;
        return sampleTrailPoint(pointerHistoryRef.current, delayedTime);
      });

      setDelayedTargets(nextTargets);
      frameId = window.requestAnimationFrame(animateTrail);
    };

    frameId = window.requestAnimationFrame(animateTrail);
    return () => window.cancelAnimationFrame(frameId);
  }, [items, resolvedPerDepthDelayMs]);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    const pointerXFromCenter = event.clientX - rect.left - rect.width / 2;
    const pointerYFromCenter = event.clientY - rect.top - rect.height / 2;

    isPointerInsideRef.current = true;
    latestPointerRef.current = {
      x: clamp(pointerXFromCenter, pageBounds.left, pageBounds.right),
      y: clamp(pointerYFromCenter, pageBounds.top, pageBounds.bottom),
    };
  };

  const handleItemPointerDown = (
    index: number,
    event: ReactPointerEvent<HTMLImageElement>,
  ) => {
    if (!isCoarsePointer) {
      return;
    }

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    isPointerInsideRef.current = true;
    setLiftedItemIndex(index);
    latestPointerRef.current = {
      x: clamp(
        event.clientX - rect.left - rect.width / 2,
        pageBounds.left,
        pageBounds.right,
      ),
      y: clamp(
        event.clientY - rect.top - rect.height / 2,
        pageBounds.top,
        pageBounds.bottom,
      ),
    };
  };

  const handlePointerLeave = () => {
    isPointerInsideRef.current = false;
    setLiftedItemIndex(null);
    latestPointerRef.current = { x: 0, y: 0 };
    pointerHistoryRef.current.push({ t: performance.now(), x: 0, y: 0 });
  };

  const handlePointerUp = () => {
    if (!isCoarsePointer) {
      return;
    }

    handlePointerLeave();
  };

  return (
    <div className="w-full h-auto">
      <div
        className={`flex relative w-full h-screen overflow-clip ${className}`.trim()}
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerLeave}
      >
        {items.map((item, index) => (
          <TrailingImage
            key={`${item.title}-${index}`}
            item={item}
            index={index}
            totalItems={items.length}
            targetX={delayedTargets[index]?.x ?? 0}
            targetY={delayedTargets[index]?.y ?? 0}
            hoverScale={hoverScale}
            tapScale={tapScale}
            bounds={pageBounds}
            centeredItemTop={centeredItemTop}
            centeredItemLeft={centeredItemLeft}
            itemSize={itemSize}
            followSpring={resolvedFollowSpring}
            depthBaseSpring={resolvedDepthBaseSpring}
            depthSpringStep={resolvedDepthSpringStep}
            minDepthStiffness={resolvedMinDepthStiffness}
            isCoarsePointer={isCoarsePointer}
            isLifted={liftedItemIndex === index}
            onItemPointerDown={handleItemPointerDown}
          />
        ))}
      </div>
    </div>
  );
};

export default CenteredImageStack;
