'use client';

import {
  Suspense,
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Box3, Group, Vector3 } from 'three';
import { KTX2Loader } from 'three-stdlib';
import { GLTFLoader } from 'three-stdlib';
import { CharacterData } from './CharacterCard';

function CharacterModelLarge({ modelPath }: { modelPath: string }) {
  const { gl } = useThree();
  const extendLoader = useCallback(
    (loader: GLTFLoader) => {
      const ktx2 = new KTX2Loader()
        .setTranscoderPath('/basis/')
        .detectSupport(gl);
      loader.setKTX2Loader(ktx2);
    },
    [gl]
  );
  const { scene: rawScene } = useGLTF(
    modelPath,
    undefined,
    undefined,
    extendLoader
  );
  const scene = useMemo(() => rawScene.clone(true), [rawScene]);
  const ref = useRef<Group>(null);

  const offsetY = useMemo(() => {
    const clone = scene.clone(true);
    clone.rotation.set(0, 0, 0);
    const box = new Box3().setFromObject(clone);
    const center = new Vector3();
    box.getCenter(center);
    return -center.y;
  }, [scene]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3;
    }
  });

  return <primitive ref={ref} object={scene} position={[0, offsetY, 0]} />;
}

type Props = {
  character: CharacterData;
  onClose: () => void;
};

export default function CharacterModal({ character, onClose }: Props) {
  const [cameraFov, setCameraFov] = useState(45);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    const updateCamera = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setCameraFov(50);
      } else if (width <= 1024) {
        setCameraFov(52);
      } else {
        setCameraFov(45);
      }
    };

    updateCamera();
    window.addEventListener('resize', updateCamera);
    return () => window.removeEventListener('resize', updateCamera);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 md:p-4"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-[clamp(400px,36.042vw,692px)] p-3 md:p-[clamp(1.25rem,2.083vw,2.5rem)] h-fit max-h-[85vh] overflow-y-auto bg-[#E4E4EC] border border-zinc-700 rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-[clamp(0.625rem,1.042vw,1.25rem)] md:right-[clamp(0.625rem,1.042vw,1.25rem)] z-10 text-zinc-400 hover:text-white transition-colors text-[1.75rem] md:text-[clamp(1.125rem,1.25vw,1.5rem)] leading-none w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        {/* 3D model */}
        <div className="w-full h-[200px] md:h-[clamp(275px,22.917vw,440px)] shrink-0 mx-auto pb-2 md:pb-[clamp(0.625rem,1.042vw,1.25rem)]">
          <Canvas camera={{ position: [0, 3, 2], fov: cameraFov }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 5, 3]} intensity={1.2} />
            <Suspense fallback={null}>
              <CharacterModelLarge modelPath={character.modelPath} />
              <Environment preset="city" />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.8}
            />
          </Canvas>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-3 md:gap-[clamp(1.25rem,2.083vw,2.5rem)]">
          <div>
            <p className="pb-1 md:pb-[clamp(0.25rem,0.417vw,0.5rem)] font-compacta font-normal text-[1.25rem] md:text-[clamp(1.75rem,2.5vw,3rem)] leading-[1.08] tracking-normal align-middle uppercase">
              {character.role}
            </p>
            <h2 className="font-bold text-[1rem] md:text-[clamp(1.125rem,1.458vw,1.75rem)] leading-[1.13] tracking-[-0.01em] align-middle uppercase">
              {character.name}
            </h2>
          </div>

          {character.bio && (
            <p className="font-medium text-[0.8rem] md:text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal align-middle">
              {character.bio}
            </p>
          )}

          <div>
            <div className="flex flex-wrap gap-1.5 md:gap-[clamp(0.375rem,0.625vw,0.75rem)]">
              {character.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-medium text-[0.7rem] md:text-[clamp(0.875rem,0.938vw,1.125rem)] leading-[1.32] tracking-normal align-middle px-2 py-0.5 md:p-[clamp(0.25rem,0.417vw,0.5rem)] bg-white rounded-[500px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
