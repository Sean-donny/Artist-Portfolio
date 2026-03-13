/**
 * Computes a positional Gaussian distribution for z-index stacking.
 *
 * - Peak value (`key`) is placed at `position` (1-indexed)
 * - Left tail falls from key → 1
 * - Right tail falls from key → abs(key / 2)
 * - Each tail follows an independent half-Gaussian curve
 * - Edge positions (1 or size) produce a fully skewed curve
 *
 * @param key      - Peak value (placed at `position`)
 * @param size     - Total number of elements in the array
 * @param position - 1-indexed position of the peak
 * @param sigma    - Steepness of the bell curve tails (default: 0.5)
 */
function computePositionalGaussian(
  key: number,
  size: number,
  position: number, // now 0-indexed
  sigma: number = 0.5,
): number[] {
  if (size <= 1) throw new Error('Size must be > 1');
  if (key <= 0) throw new Error('Key must be positive');
  if (position < 0 || position > size - 1)
    throw new Error(`Position must be between 0 and ${size - 1}`);

  const peakIdx = position; // no longer needs -1 conversion
  const floorVal = 1;
  const ceilVal = Math.abs(key / 2);

  const halfGaussian = (x: number, peak: number, floor: number): number => {
    const decay = Math.exp(-(x * x) / (2 * sigma * sigma));
    return floor + (peak - floor) * decay;
  };

  return Array.from({ length: size }, (_, i) => {
    if (i === peakIdx) return key;

    if (i < peakIdx) {
      const steps = peakIdx;
      const x = (peakIdx - i) / (steps || 1);
      return halfGaussian(x, key, floorVal);
    } else {
      const steps = size - 1 - peakIdx;
      const x = (i - peakIdx) / (steps || 1);
      return halfGaussian(x, key, ceilVal);
    }
  });
}

/** Round to nearest integer — useful when feeding into CSS z-index */
function computeZIndexDistribution(
  key: number,
  size: number,
  position: number = Math.abs(key / 2),
  sigma: number = 0.5,
): number[] {
  return computePositionalGaussian(key, size, position, sigma).map(Math.round);
}

export default computeZIndexDistribution;
