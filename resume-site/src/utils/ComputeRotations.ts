// utils/ComputeRotations.ts
import { CurveType, applyCurve } from './CurveTypes';

/**
 * Computes card rotations for a fanned stack.
 * Fully decoupled from X — operates on index position directly.
 *
 * - Card at `peakIndex` has 0 rotation
 * - Cards left of peak rotate counter-clockwise (negative)   .\
 * - Cards right of peak rotate clockwise (positive)           /.
 * - Curve type controls how rotation accelerates outward
 *
 * @param size       - Total number of cards
 * @param peakIndex  - Index of the card with zero rotation
 * @param maxRotation - Max rotation in degrees at the furthest card (default: 15)
 * @param curve      - Shape of the rotation curve (default: 'Linear')
 * @param power      - Exponent for Power/Plateau curves (default: 2)
 */
function computeRotations(
  size: number,
  peakIndex: number,
  maxRotation: number = 15,
  curve: CurveType = 'Linear',
  power: number = 2,
): number[] {
  return Array.from({ length: size }, (_, i) => {
    const maxDistance = Math.max(peakIndex, size - 1 - peakIndex) || 1;
    const distance = Math.abs(i - peakIndex);
    const t = distance / maxDistance;
    const magnitude = maxRotation * applyCurve(t, curve, power);
    // Left of peak = negative (tilt left), right = positive (tilt right)
    return i < peakIndex ? -magnitude : i > peakIndex ? magnitude : 0;
  });
}

export default computeRotations;
