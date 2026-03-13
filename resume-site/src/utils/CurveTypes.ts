// utils/CurveTypes.ts

export type CurveType =
  | 'Gaussian'
  | 'Power'
  | 'Plateau'
  | 'Bezier'
  | 'Logarithmic'
  | 'Linear';

/**
 * Applies a named curve to a normalized value t ∈ [0, 1]
 * All curves return 0 at t=0 (centre) and 1 at t=1 (edge)
 *
 * Gaussian    — steep near centre, flattens at edges  (classic bell falloff)
 * Power       — gradual near centre, accelerates outward (podium shape)
 * Plateau     — very flat near centre, sharp cliff at edges
 * Bezier      — smooth cubic ease, natural and balanced
 * Logarithmic — fast initial drop, very flat toward edges
 * Linear      — constant even steps, no curve at all
 */
export function applyCurve(
  t: number,
  curve: CurveType,
  power: number = 2,
): number {
  switch (curve) {
    case 'Gaussian':
      // Steep near centre — 1 - e^(-t²/2σ²) normalized to [0,1]
      return 1 - Math.exp(-(t * t) / (2 * 0.3 * 0.3));

    case 'Power':
      // Lazy near centre, accelerates outward
      return Math.pow(t, power);

    case 'Plateau':
      // Very flat centre, sharp edges — smoothstep inverted
      return t < 0.5
        ? (2 * Math.pow(t * 2, power)) / 2
        : 1 - Math.pow((1 - t) * 2, power) / 2;

    case 'Bezier':
      // Cubic ease-in-out: smooth and balanced
      return t * t * (3 - 2 * t);

    case 'Logarithmic':
      // Fast initial drop, flattens toward edges
      return Math.log(1 + t * (Math.E - 1));

    case 'Linear':
      return t;
  }
}
