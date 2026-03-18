'use client';

import { Suspense, useCallback, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import { Box3, Group, Vector3 } from 'three';
import { KTX2Loader } from 'three-stdlib';
import { GLTFLoader } from 'three-stdlib';
import CharacterModal from './CharacterModal';

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

export default function CharacterCard({
  character,
}: {
  character: CharacterData;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="grayscale hover:grayscale-0 flex flex-col  overflow-hidden w-full shrink-0 select-none cursor-pointer border-2 border-dashed border-[#E4E4EC] transition-colors  rounded-sm px-5 py-8 col-span-2"
        onClick={() => setOpen(true)}
      >
        <div className="h-[376px] w-full ">
          <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 5, 3]} intensity={1.2} />
            <Suspense fallback={null}>
              <CharacterModel modelPath={character.modelPath} />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>

        <div className="flex flex-col gap-2 pt-4">
          <h2 className=" font-bold text-[28px] leading-[1.13] tracking-[-0.01em] text-center align-middle uppercase">
            {character.role}
          </h2>
          <p className=" font-medium text-[18px] leading-[1.32] tracking-normal text-center align-middle">
            {character.name}
          </p>
        </div>
      </div>
      {open && (
        <CharacterModal character={character} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
