'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
} from '@react-three/drei';
import { DoubleSide, Mesh, Material, MeshStandardMaterial } from 'three';

function OfficeModel({ scale }: { scale: number }) {
  const { scene } = useGLTF('/models/office.glb');

  return <primitive object={scene} scale={scale} />;
}

// Монтируется только когда Suspense разрешился — модель готова к показу
function ReadySignal() {
  useEffect(() => {
    window.dispatchEvent(new Event('office-scene-ready'));
  }, []);
  return null;
}

export default function OfficeScene({ scale = 2 }: { scale?: number }) {
  const [cameraPosition, setCameraPosition] = useState<
    [number, number, number]
  >([1.5, 1.5, 1.5]);
  const [fov, setFov] = useState(50);

  useEffect(() => {
    const updateCamera = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        // Мобильные устройства
        setCameraPosition([1, 1, 1]);
        setFov(60);
      } else if (width <= 1024) {
        // Планшеты
        setCameraPosition([1.5, 1.5, 1.5]);
        setFov(55);
        0.5;
      } else {
        // Десктоп
        setCameraPosition([1.5, 1.5, 1.5]);
        setFov(50);
      }
    };

    updateCamera();
    window.addEventListener('resize', updateCamera);
    return () => window.removeEventListener('resize', updateCamera);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: cameraPosition, fov: fov }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <Suspense fallback={null}>
          <OfficeModel scale={scale} />
          <Environment preset="city" />
          <ContactShadows
            position={[0, -0.01, 0]}
            opacity={0.4}
            scale={20}
            blur={1.5}
          />
          <ReadySignal />
        </Suspense>
        <OrbitControls
          enablePan={true}
          enableZoom={false}
          enableRotate={true}
          minDistance={1}
          maxDistance={50}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
