/// <reference types="vite/client" />

import type Lenis from 'lenis';

declare global {
  interface Window {
    __pageReady?: boolean;
    __lenis?: Lenis;
  }

  interface WindowEventMap {
    lenisScroll: CustomEvent<{ scrollY: number }>;
  }
}

export {};
