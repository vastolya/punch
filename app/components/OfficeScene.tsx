"use client";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { DoubleSide, Mesh, Material, MeshStandardMaterial } from "three";

function OfficeModel({ scale }: { scale: number }) {
  const { scene } = useGLTF("/models/office.glb");



  return <primitive object={scene} scale={scale} />;
}

// Монтируется только когда Suspense разрешился — модель готова к показу
function ReadySignal() {
  useEffect(() => {
    window.dispatchEvent(new Event("office-scene-ready"));
  }, []);
  return null;
}

export default function OfficeScene({ scale = 0.09 }: { scale?: number }) {
  return (
    <div className="w-full h-full">
      <Canvas
       camera={{ position: [15, 10, 15], fov: 50 }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <Suspense fallback={null}>
          <OfficeModel scale={scale} />
          <Environment preset="city" />
          <ContactShadows position={[0, -0.01, 0]} opacity={0.4} scale={20} blur={1.5} />
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
