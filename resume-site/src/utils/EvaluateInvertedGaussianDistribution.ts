// utils/EvaluateInvertedGaussianDistribution.ts
import { CurveType, applyCurve } from './CurveTypes';

/**
 * Evaluates an inverted distribution for X translations.
 * - Trough (zero translation) sits at `position`
 * - Left of trough: positive values (fold inward right)
 * - Right of trough: negative values (fold inward left)
 * - Curve type controls spacing shape between trough and edges
 *
 * @param key      - Edge value magnitude (max translation in px)
 * @param size     - Number of elements (must be > 1)
 * @param position - 0-indexed trough position (defaults to center)
 * @param sigma    - Steepness, only used by Gaussian curve (default: 0.4)
 * @param curve    - Shape of the spacing distribution (default: 'Gaussian')
 */
function evaluateInvertedGaussianDistribution(
  key: number,
  size: number,
  position?: number,
  sigma: number = 0.4,
  curve: CurveType = 'Gaussian',
): number[] {
  if (size <= 1) throw new Error('Size must be greater than 1');
  if (key <= 0) throw new Error('Key must be a positive number');

  const troughIdx = position !== undefined ? position : (size - 1) / 2;

  if (troughIdx < 0 || troughIdx > size - 1)
    throw new Error(`Position must be between 0 and ${size - 1}`);

  // Gaussian still uses its own formula — others use applyCurve
  const getGaussianMagnitude = (x: number): number =>
    key * (1 - Math.exp(-(x * x) / (2 * sigma * sigma)));

  return Array.from({ length: size }, (_, i) => {
    if (i === troughIdx) return 0;

    if (i < troughIdx) {
      const steps = troughIdx;
      const t = (troughIdx - i) / (steps || 1); // normalized [0, 1]
      const mag =
        curve === 'Gaussian'
          ? getGaussianMagnitude(t)
          : key * applyCurve(t, curve);
      return mag; // positive = translate right = fold inward
    } else {
      const steps = size - 1 - troughIdx;
      const t = (i - troughIdx) / (steps || 1);
      const mag =
        curve === 'Gaussian'
          ? getGaussianMagnitude(t)
          : key * applyCurve(t, curve);
      return -mag; // negative = translate left = fold inward
    }
  });
}

export default evaluateInvertedGaussianDistribution;
