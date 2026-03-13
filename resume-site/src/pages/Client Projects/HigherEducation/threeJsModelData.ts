/**
 * Shared metadata for a locally hosted 3D asset.
 */
export interface ThreeJsModelData {
  /** Public URL resolved by Vite for the model asset. */
  model: string;
  /** Human-readable title for the viewer section. */
  title: string;
  /** Short description used alongside the embedded viewer. */
  description: string;
}

/**
 * Interactive GLB used in the Higher Education case study.
 */
export const oysterCardModel: ThreeJsModelData = {
  model: '/optimised/cashmanny_oyster_card.glb',
  title: 'Interactive Oyster Card Model',
  description:
    'A real-time view of the Oyster card asset used in the project. Drag to orbit and inspect the card from different angles.',
};
