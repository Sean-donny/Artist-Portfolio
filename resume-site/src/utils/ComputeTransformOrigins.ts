// utils/ComputeTransformOrigins.ts

export type TransformOrigin = 'bottom left' | 'bottom center' | 'bottom right';

/**
 * Derives CSS transform-origin per card based on X translation values.
 *
 * - Positive X (card pushed right, left-side card) → 'bottom right'
 *   (rotates inward toward centre from its right edge)
 * - Negative X (card pushed left, right-side card) → 'bottom left'
 *   (rotates inward toward centre from its left edge)
 * - Zero X (centre card)                           → 'bottom center'
 *
 * @param xTranslations - X translation array from evaluateInvertedGaussianDistribution
 */
function computeTransformOrigins(xTranslations: number[]): TransformOrigin[] {
  return xTranslations.map(x => {
    if (x > 0) return 'bottom right';
    if (x < 0) return 'bottom left';
    return 'bottom center';
  });
}

export default computeTransformOrigins;
