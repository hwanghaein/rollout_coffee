"use client";

import Image from "next/image";
import { Photo } from "../../../../types/photo";

export default function PhotoDetailClient({
  photo,
}: {
  photo: Photo;
}) {
  return (
    <div className="flex flex-col items-center"> 
      {/* 폴라로이드 */}
      <div className="bg-white border  border-gray-300 w-[300px] pb-8 pt-4 px-2 text-center shadow-md">
        {/* 사진 */}
        <Image
          src={photo.image}
          alt={photo.alt}
          width={300}
          height={300}
          className="object-cover"
        />

        {/* 날짜 (캡션) */}
        <div className="mt-4 text-dark2 text-m font-medium">
          {photo.date}
        </div>
      </div>
    </div>
  );
}
