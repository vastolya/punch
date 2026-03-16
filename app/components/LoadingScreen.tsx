"use client";

import { useEffect, useState } from "react";
import { useGLTF, useProgress } from "@react-three/drei";
import { KTX2Loader } from "three-stdlib";

// Shared KTX2Loader for preloading.
// detectSupport() requires a WebGL renderer which doesn't exist at module-eval
// time, so we set workerConfig directly with all GPU-compressed formats off.
// This forces transcoding to RGBA (uncompressed fallback) — models load
// correctly; detectSupport inside Canvas components will upgrade future loads.
const ktx2Loader = new KTX2Loader().setTranscoderPath("/basis/");
(ktx2Loader as unknown as { workerConfig: object }).workerConfig = {
  astcSupported: false,
  etc1Supported: false,
  etc2Supported: false,
  dxtSupported: false,
  bptcSupported: false,
  pvrtcSupported: false,
};
const withKTX2 = (loader: import("three-stdlib").GLTFLoader) => {
  loader.setKTX2Loader(ktx2Loader);
};

// Запускаем загрузку всех моделей страницы сразу
useGLTF.preload("/models/office.glb", undefined, undefined, withKTX2);
useGLTF.preload("/models/people/man_01.glb", undefined, undefined, withKTX2);
useGLTF.preload("/models/people/man_02.glb", undefined, undefined, withKTX2);

export default function LoadingScreen() {
  const { active, progress, total } = useProgress();
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [officeReady, setOfficeReady] = useState(false);

  // Слушаем сигнал из OfficeScene — модель смонтирована и готова
  useEffect(() => {
    const handler = () => setOfficeReady(true);
    window.addEventListener("office-scene-ready", handler);
    return () => window.removeEventListener("office-scene-ready", handler);
  }, []);

  // Скрываем только когда файлы скачаны И сцена реально отрендерена
  useEffect(() => {
    if (total > 0 && !active && officeReady) {
      setFadeOut(true);
      const timer = setTimeout(() => setVisible(false), 700);
      return () => clearTimeout(timer);
    }
  }, [active, total, officeReady]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <span className="text-zinc-400 text-9xl font-compacta">{Math.round(progress)}%</span>
    </div>
  );
}
