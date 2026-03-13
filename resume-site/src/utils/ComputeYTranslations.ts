// utils/ComputeYTranslations.ts
import { CurveType, applyCurve } from './CurveTypes';

/**
 * Computes Y translations for a podium-style card stack.
 * Fully decoupled from X — operates on index position directly.
 *
 * - Card at `peakIndex` sits at Y=0 (highest point)
 * - All others drop downward based on distance from peak
 * - Curve type controls the shape of the drop
 *
 * @param size       - Total number of cards
 * @param peakIndex  - Index of the card at Y=0 (the top of the podium)
 * @param maxDrop    - Max Y drop in px at the furthest card (default: 40)
 * @param curve      - Shape of the drop curve (default: 'Power')
 * @param power      - Exponent for Power/Plateau curves (default: 2)
 */
function computeYTranslations(
  size: number,
  peakIndex: number,
  maxDrop: number = 40,
  curve: CurveType = 'Power',
  power: number = 2,
): number[] {
  return Array.from({ length: size }, (_, i) => {
    const maxDistance = Math.max(peakIndex, size - 1 - peakIndex) || 1;
    const distance = Math.abs(i - peakIndex);
    const t = distance / maxDistance; // normalized [0, 1]
    return maxDrop * applyCurve(t, curve, power);
  });
}

export default computeYTranslations;
