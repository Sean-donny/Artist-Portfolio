/// <reference types="vite/client" />

import type Lenis from 'lenis';
import type {
  Camera,
  EventDispatcher,
  Group,
  Loader,
  LoadingManager,
  Vector3,
} from 'three';

declare module 'three/examples/jsm/controls/OrbitControls.js' {
  export class OrbitControls extends EventDispatcher {
    constructor(object: Camera, domElement?: HTMLElement);
    object: Camera;
    domElement?: HTMLElement;
    enabled: boolean;
    target: Vector3;
    minDistance: number;
    maxDistance: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    enableDamping: boolean;
    enablePan: boolean;
    autoRotate: boolean;
    autoRotateSpeed: number;
    update(): void;
    dispose(): void;
  }
}

declare module 'three/examples/jsm/loaders/GLTFLoader.js' {
  export interface GLTF {
    scene: Group;
  }

  export class GLTFLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (error: unknown) => void,
    ): void;
  }
}

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
