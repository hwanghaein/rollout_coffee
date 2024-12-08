"use client";

import { Photo } from "@/types/photo";
import Image from "next/image";

export default function PhotoDetailClient({
  photo,
}: {
  photo: Photo;
}) {
  return (
    <div className="flex flex-col items-center"> 
      {/* 폴라로이드 */}
      <div className="bg-white border  border-gray-300 w-[500px] pb-10 pt-6 px-5 text-center shadow-md">
        <Image
          src={photo.image}
          alt={photo.alt}
          width={458}
          height={478}
          className="object-cover"
        />
        <div className="pt-6 text-dark2 text-lg">
          {photo.date}
        </div>
      </div>
    </div>
  );
}
