"use client";

import dynamic from "next/dynamic";

const CharacterGallery = dynamic(() => import("./CharacterGallery"), {
  ssr: false,
});

export default function CharacterGalleryClient() {
  return <CharacterGallery />;
}
