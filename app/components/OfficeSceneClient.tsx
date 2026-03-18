"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const OfficeScene = dynamic(() => import("./OfficeScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      Загрузка модели...
    </div>
  ),
});

export default function OfficeSceneClient() {
  const [scale, setScale] = useState(0.09);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      // Масштабируем от 0.05 (на маленьких экранах) до 0.09 (на больших)
      const minScale = 0.05;
      const maxScale = 0.09;
      const minWidth = 768;
      const maxWidth = 1920;

      if (width <= minWidth) {
        setScale(minScale);
      } else if (width >= maxWidth) {
        setScale(maxScale);
      } else {
        const ratio = (width - minWidth) / (maxWidth - minWidth);
        setScale(minScale + (maxScale - minScale) * ratio);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return <OfficeScene scale={scale} />;
}
