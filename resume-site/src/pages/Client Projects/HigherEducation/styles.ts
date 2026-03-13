import type { CSSProperties } from 'react';

/**
 * Reusable green graph-paper background used across the Higher Education page.
 */
export const greenGraphPaper: CSSProperties = {
  backgroundColor: '#000',
  backgroundImage:
    'linear-gradient(rgba(57, 255, 133, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 133, 0.1) 1px, transparent 1px), linear-gradient(rgba(57, 255, 133, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 133, 0.35) 1px, transparent 1px)',
  backgroundSize: '20px 20px, 20px 20px, 100px 100px, 100px 100px',
  maskImage: 'linear-gradient(to bottom, transparent 0%, black 3%, black 100%)',
  WebkitMaskImage:
    'linear-gradient(to bottom, transparent 0%, black 3%, black 100%)',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
  maskSize: '100% 100%',
  WebkitMaskSize: '100% 100%',
};
