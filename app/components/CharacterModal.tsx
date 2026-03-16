"use client";

import { Suspense, useCallback, useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Box3, Group, Vector3 } from "three";
import { KTX2Loader } from "three-stdlib";
import { GLTFLoader } from "three-stdlib";
import { CharacterData } from "./CharacterCard";

function CharacterModelLarge({ modelPath }: { modelPath: string }) {
  const { gl } = useThree();
  const extendLoader = useCallback(
    (loader: GLTFLoader) => {
      const ktx2 = new KTX2Loader().setTranscoderPath("/basis/").detectSupport(gl);
      loader.setKTX2Loader(ktx2);
    },
    [gl]
  );
  const { scene: rawScene } = useGLTF(modelPath, undefined, undefined, extendLoader);
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
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-6xl mx-4 h-[90vh] bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-zinc-400 hover:text-white transition-colors text-2xl leading-none"
        >
          ✕
        </button>

        {/* 3D model */}
        <div className="w-1/2 h-full shrink-0">
          <Canvas camera={{ position: [0, 3, 2], fov: 45 }}>
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
        <div className="flex flex-col justify-center gap-4 p-8">
          <div>
            <h2 className="text-white text-3xl font-bold tracking-tight">{character.name}</h2>
            <p className="text-zinc-400 mt-1">{character.role}</p>
          </div>

          {character.bio && (
            <p className="text-zinc-300 text-sm leading-relaxed">{character.bio}</p>
          )}

          <div>
            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Навыки</p>
            <div className="flex flex-wrap gap-2">
              {character.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-600"
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
