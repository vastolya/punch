"use client";

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";

function OfficeModel() {
  const { scene } = useGLTF("/models/office.glb");
  return <primitive object={scene} />;
}

// Монтируется только когда Suspense разрешился — модель готова к показу
function ReadySignal() {
  useEffect(() => {
    window.dispatchEvent(new Event("office-scene-ready"));
  }, []);
  return null;
}

export default function OfficeScene() {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [15, 10, 5], fov: 50 }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <Suspense fallback={null}>
          <OfficeModel />
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
        />
      </Canvas>
    </div>
  );
}
