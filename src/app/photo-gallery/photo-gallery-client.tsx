"use client";

import Image from "next/image";
import { Photo } from "../../types/photo";

interface PhotoGalleryClientProps {
  photos: Photo[];
}

export default function PhotoGalleryClient({
  photos,
}: PhotoGalleryClientProps) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {photos.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-2">
            <Image
              src={item.image}
              alt={item.alt}
              width={258}
              height={270}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}
