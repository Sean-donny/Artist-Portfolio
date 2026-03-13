import { useState, useEffect, useMemo, useCallback } from 'react';
import computeZIndexDistribution from '../../utils/ComputeDistributedPosition';
import evaluateInvertedGaussianDistribution from '../../utils/EvaluateInvertedGaussianDistribution';
import computeYTranslations from '../../utils/ComputeYTranslations';
import computeRotations from '../../utils/ComputeRotations';
import computeTransformOrigins from '../../utils/ComputeTransformOrigins';
import { CurveType } from '../../utils/CurveTypes';
import { motion } from 'framer-motion';

// ---- constants ----
const STACK_AREA: number = 0.8;
// const SPACING_DIVISOR: number = 7;
const SPACING_SIGMA: number = 0.21;
const MAX_DROP: number = 40;
const DROP_POWER: number = 2;
const MAX_ROTATION: number = 15;
const X_CURVE: CurveType = 'Linear';
const DROP_CURVE: CurveType = 'Power';
const ROTATION_CURVE: CurveType = 'Linear';
const HOVER_NUDGE = 0.5; // fraction of MAX_DROP — tweak between 0 and 1

// ---- types ----
interface StackItem {
  src: string;
  alt: string;
  title?: string;
  width: number;
  height: number;
}

interface CardStackProps {
  items: StackItem[];
  xCurve?: CurveType;
  dropCurve?: CurveType;
  rotationCurve?: CurveType;
  maxDrop?: number;
  maxRotation?: number;
}

// ---- component ----
export default function CardStack({
  items,
  xCurve = X_CURVE,
  dropCurve = DROP_CURVE,
  rotationCurve = ROTATION_CURVE,
  maxDrop = MAX_DROP,
  maxRotation = MAX_ROTATION,
}: CardStackProps) {
  const stackSize = items.length;
  const spacingDivisor = items.length + 2;
  const defaultPos = Math.floor(stackSize / 2);

  // ---- memoized helpers ----
  const getDefaultZOrder = useMemo(() => {
    const zKey = stackSize * 2;
    return computeZIndexDistribution(zKey, stackSize, defaultPos);
  }, [stackSize, defaultPos]);

  const getDefaultTranslations = useCallback(
    (width: number) => {
      return evaluateInvertedGaussianDistribution(
        (STACK_AREA * width) / spacingDivisor,
        stackSize,
        defaultPos,
        SPACING_SIGMA,
        xCurve,
      );
    },
    [spacingDivisor, stackSize, defaultPos, xCurve],
  );

  // ---- state ----
  const [xTranslations, setXTranslations] = useState<number[]>(() =>
    getDefaultTranslations(window.innerWidth),
  );
  const [zOrder, setZOrder] = useState<number[]>(() => getDefaultZOrder);
  const [peakIndex, setPeakIndex] = useState(Math.floor(stackSize / 2));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // ---- derived — decoupled from X, driven by peakIndex ----
  const yTranslations = computeYTranslations(
    stackSize,
    peakIndex,
    maxDrop,
    dropCurve,
    DROP_POWER,
  );
  const rotations = computeRotations(
    stackSize,
    peakIndex,
    maxRotation,
    rotationCurve,
  );
  const transformOrigins = computeTransformOrigins(xTranslations);

  // ---- resize listener ----
  useEffect(() => {
    const handleResize = () => {
      setXTranslations(prev => {
        const next = getDefaultTranslations(window.innerWidth);
        return prev.every((v, i) => Math.round(v) === Math.round(next[i]))
          ? prev
          : next;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getDefaultTranslations]);

  // ---- reset when items or curve changes ----
  useEffect(() => {
    setZOrder(getDefaultZOrder);
    setXTranslations(getDefaultTranslations(window.innerWidth));
    setPeakIndex(defaultPos);
  }, [getDefaultZOrder, getDefaultTranslations, defaultPos]);

  // ---- interaction handlers ----
  const handleStackInteraction = (index: number) => {
    const zKey = stackSize * 2;
    setZOrder(computeZIndexDistribution(zKey, stackSize, index));
    setXTranslations(
      evaluateInvertedGaussianDistribution(
        (STACK_AREA * window.innerWidth) / spacingDivisor,
        stackSize,
        index,
        SPACING_SIGMA,
        xCurve,
      ),
    );
    setPeakIndex(index);
    setActiveIndex(index);
  };

  const handleStackReset = () => {
    const defaultPos = Math.floor(stackSize / 2);
    setZOrder(getDefaultZOrder);
    setXTranslations(getDefaultTranslations(window.innerWidth));
    setPeakIndex(defaultPos);
    setActiveIndex(null); // clears nudge on leave
  };

  // ---- image hover adjustment for better visibility ----
  const adjustFactor = 50;

  function determineAdjustment(ind: number) {
    const centreIndex = Math.floor(stackSize / 2);
    const distanceFromCentre = ind - centreIndex; // negative below, positive above

    return adjustFactor * distanceFromCentre;
  }

  // ---- render ----
  return (
    <div
      className="pt-40 pb-0 lg:pb-20"
      style={{
        transform: `translateY(${-maxDrop}px)`,
      }}
    >
      <div
        className={`flex flex-col lg:flex-row h-auto w-[${STACK_AREA * 100}%] m-auto`}
        onMouseLeave={handleStackReset}
      >
        {items.map((item, i) => {
          const nudge = activeIndex === i ? -(maxDrop * HOVER_NUDGE) : 0;
          return (
            <motion.figure
              key={i}
              style={{
                zIndex: zOrder[i],
                // transform: `translateX(${xTranslations[i]}px) translateY(${yTranslations[i] + nudge}px) rotate(${rotations[i]}deg)`,
                transformOrigin: transformOrigins[i],
                // transition: 'transform 0.3s ease',
              }}
              onMouseEnter={() => handleStackInteraction(i)}
              onTouchStart={() => handleStackInteraction(i)}
              whileHover={{ scale: 1.2, x: -determineAdjustment(i) }}
              whileTap={{ scale: 1.2, x: -determineAdjustment(i) }}
              animate={{
                x: xTranslations[i],
                y: yTranslations[i] + nudge,
                rotate: rotations[i],
              }}
              transition={{
                type: 'spring',
                damping: 5,
                stiffness: 50,
                mass: 1,
                restDelta: 0.01,
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                title={item.title}
                width={item.width}
                height={item.height}
                className="w-auto h-auto drop-shadow-lg"
              />
            </motion.figure>
          );
        })}
      </div>
    </div>
  );
}
