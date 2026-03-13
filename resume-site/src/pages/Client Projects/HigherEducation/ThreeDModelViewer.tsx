import { useEffect, useRef, useState } from 'react';
import {
  ACESFilmicToneMapping,
  AmbientLight,
  Box3,
  Color,
  DirectionalLight,
  Group,
  HemisphereLight,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from 'three';
import type { Material, Object3D } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Props for the local Three.js model viewer.
 */
interface ThreeDModelViewerProps {
  /** URL of the 3D asset to load. */
  modelUrl: string;
  /** Accessible label rendered above the canvas and used for fallback copy. */
  title: string;
  /** Additional Tailwind classes for the outer wrapper. */
  className?: string;
}

/**
 * Positions the camera so the whole object fits in frame.
 */
const frameModel = (
  camera: PerspectiveCamera,
  controls: OrbitControls,
  object: Object3D,
) => {
  const bounds = new Box3().setFromObject(object);
  const size = bounds.getSize(new Vector3());
  const center = bounds.getCenter(new Vector3());
  const maxDimension = Math.max(size.x, size.y, size.z);
  const fitHeightDistance =
    maxDimension / (2 * Math.tan(MathUtils.degToRad(camera.fov / 2)));
  const fitWidthDistance = fitHeightDistance / camera.aspect;
  const distance = 1.2 * Math.max(fitHeightDistance, fitWidthDistance);

  camera.position.set(
    center.x + distance * 0.8,
    center.y + distance * 0.45,
    center.z + distance,
  );
  camera.near = Math.max(distance / 100, 0.1);
  camera.far = distance * 100;
  camera.updateProjectionMatrix();
  camera.lookAt(center);

  controls.target.copy(center);
  controls.minDistance = distance * 0.55;
  controls.maxDistance = distance * 2.5;
  controls.update();
};

/**
 * Releases Three.js geometries and materials when the component unmounts.
 */
const disposeObject = (object: Object3D) => {
  object.traverse(child => {
    const mesh = child as Mesh;

    if (!mesh.isMesh) {
      return;
    }

    mesh.geometry.dispose();

    const materials = Array.isArray(mesh.material)
      ? mesh.material
      : [mesh.material];

    materials.forEach(material => {
      const currentMaterial = material as Material & {
        map?: { dispose: () => void };
        normalMap?: { dispose: () => void };
        roughnessMap?: { dispose: () => void };
        metalnessMap?: { dispose: () => void };
        aoMap?: { dispose: () => void };
        emissiveMap?: { dispose: () => void };
      };

      currentMaterial.map?.dispose();
      currentMaterial.normalMap?.dispose();
      currentMaterial.roughnessMap?.dispose();
      currentMaterial.metalnessMap?.dispose();
      currentMaterial.aoMap?.dispose();
      currentMaterial.emissiveMap?.dispose();
      currentMaterial.dispose();
    });
  });
};

/**
 * Mounts a Three.js scene inside a React component and exposes a lightweight,
 * reusable viewer for single GLB assets.
 */
const ThreeDModelViewer = ({
  modelUrl,
  title,
  className = '',
}: ThreeDModelViewerProps) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');

    const updateTouchState = () => {
      setIsTouchDevice(mediaQuery.matches || navigator.maxTouchPoints > 0);
    };

    updateTouchState();
    mediaQuery.addEventListener('change', updateTouchState);

    return () => {
      mediaQuery.removeEventListener('change', updateTouchState);
    };
  }, []);

  useEffect(() => {
    const mountNode = mountRef.current;

    if (!mountNode) {
      return undefined;
    }

    let animationFrameId = 0;
    let mounted = true;
    let loadedModel: Group | null = null;

    const scene = new Scene();
    scene.background = new Color('#020202');

    const camera = new PerspectiveCamera(
      35,
      mountNode.clientWidth / mountNode.clientHeight,
      0.1,
      1000,
    );

    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.cursor = 'grab';
    mountNode.appendChild(renderer.domElement);

    const ambientLight = new AmbientLight('#ffffff', 1.8);
    const hemisphereLight = new HemisphereLight('#9fffc7', '#020202', 1.1);
    const keyLight = new DirectionalLight('#ffffff', 2.6);
    keyLight.position.set(5, 8, 6);
    const rimLight = new DirectionalLight('#39ff85', 1.3);
    rimLight.position.set(-6, 3, -4);

    scene.add(ambientLight, hemisphereLight, keyLight, rimLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.4;
    // Allow a complete vertical orbit so the underside/backside stays inspectable.
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;

    // Consume wheel events while hovering the viewer so page scroll does not hijack zoom.
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setHasInteracted(true);
    };

    const handlePointerDown = (event: PointerEvent) => {
      setHasInteracted(true);

      if (event.pointerType !== 'mouse') {
        return;
      }

      setIsDragging(true);
      renderer.domElement.style.cursor = 'grabbing';
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        return;
      }

      setIsDragging(false);
      renderer.domElement.style.cursor = 'grab';
    };

    renderer.domElement.addEventListener('wheel', handleWheel, {
      passive: false,
    });
    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      gltf => {
        if (!mounted) {
          disposeObject(gltf.scene);
          return;
        }

        const modelScene = gltf.scene;
        loadedModel = modelScene;

        modelScene.traverse(child => {
          const mesh = child as Mesh;

          if (!mesh.isMesh) {
            return;
          }

          mesh.castShadow = false;
          mesh.receiveShadow = false;

          if (mesh.material && !Array.isArray(mesh.material)) {
            const material = mesh.material as MeshStandardMaterial;
            material.envMapIntensity = 1.1;
          }
        });

        scene.add(modelScene);
        frameModel(camera, controls, modelScene);
        setIsLoading(false);
      },
      undefined,
      () => {
        if (!mounted) {
          return;
        }

        setIsLoading(false);
        setError('The 3D model could not be loaded.');
      },
    );

    const renderScene = () => {
      controls.update();
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(renderScene);
    };

    renderScene();

    const resizeObserver = new ResizeObserver(() => {
      if (!mountNode.clientWidth || !mountNode.clientHeight) {
        return;
      }

      camera.aspect = mountNode.clientWidth / mountNode.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);

      if (loadedModel) {
        frameModel(camera, controls, loadedModel);
      }
    });

    resizeObserver.observe(mountNode);

    return () => {
      mounted = false;
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationFrameId);
      controls.dispose();
      renderer.domElement.removeEventListener('wheel', handleWheel);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);

      if (loadedModel) {
        scene.remove(loadedModel);
        disposeObject(loadedModel);
      }

      renderer.dispose();
      mountNode.removeChild(renderer.domElement);
    };
  }, [modelUrl]);

  return (
    <div className="w-full h-auto">
      <div
        className={`relative w-full overflow-hidden border border-[#39ff85] rounded-2xl aspect-[4/5] min-h-[300px] max-h-[80vh] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] ${className}`}
      >
        <div
          ref={mountRef}
          className={`h-full w-full touch-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          aria-label={title}
          role="img"
        />
        {isLoading && !error && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/55 font-custom text-sm uppercase tracking-[0.3em] text-[#39ff85]">
            Loading 3D model...
          </div>
        )}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 px-6 text-center font-custom text-sm text-zinc-200">
            {error}
          </div>
        )}
        {!hasInteracted && !error && !isLoading && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-xl border border-white/10 bg-black/70 px-4 py-3 text-center font-custom text-[11px] uppercase tracking-[0.2em] text-zinc-300 sm:bottom-4 sm:left-4 sm:w-auto sm:translate-x-0 sm:rounded-full sm:px-4 sm:py-2 sm:text-xs">
            {isTouchDevice
              ? 'One finger to orbit • Pinch to zoom'
              : 'Drag to orbit • Scroll to zoom'}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreeDModelViewer;
