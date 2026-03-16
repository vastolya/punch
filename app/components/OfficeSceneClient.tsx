"use client";

import dynamic from "next/dynamic";

const OfficeScene = dynamic(() => import("./OfficeScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      Загрузка модели...
    </div>
  ),
});

export default function OfficeSceneClient() {
  return <OfficeScene />;
}
