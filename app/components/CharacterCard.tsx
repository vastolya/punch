"use client";

import { Suspense, useCallback, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { Box3, Group, Vector3 } from "three";
import { KTX2Loader } from "three-stdlib";
import { GLTFLoader } from "three-stdlib";
import CharacterModal from "./CharacterModal";

export type CharacterData = {
  modelPath: string;
  name: string;
  role: string;
  skills: string[];
  bio?: string;
};

function CharacterModel({ modelPath }: { modelPath: string }) {
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

  // Считаем смещение по rawScene — без лишнего clone(true)
  const offsetY = useMemo(() => {
    const box = new Box3().setFromObject(rawScene);
    const center = new Vector3();
    box.getCenter(center);
    return -center.y;
  }, [rawScene]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3;
    }
  });

  return <primitive ref={ref} object={scene} position={[0, offsetY, 0]} />;
}

export default function CharacterCard({ character }: { character: CharacterData }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden w-72 shrink-0 select-none cursor-pointer hover:border-zinc-500 transition-colors"
        onClick={() => setOpen(true)}
      >
        <div className="h-72 w-full">
          <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 5, 3]} intensity={1.2} />
            <Suspense fallback={null}>
              <CharacterModel modelPath={character.modelPath} />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>

        <div className="p-4 flex flex-col gap-1">
          <h2 className="text-white text-3xl tracking-widest">{character.name}</h2>
          <p className="text-zinc-400 text-sm">{character.role}</p>
        </div>
      </div>
      {open && <CharacterModal character={character} onClose={() => setOpen(false)} />}
    </>
  );
}
