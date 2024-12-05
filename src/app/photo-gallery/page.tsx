"use client";

import Image from "next/image";
import { photo } from "../../mock/photo";

export default function Page() {
  return (
    <div className="px-4 md:w-full max-w-[1100px] mx-auto flex flex-col pt-7 pb-20">
      <span className="text-dark2 text-3xl mb-10">PHOTO GALLERY</span>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {/* 사진 */}
        {photo.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-2">
            <Image
              src={item.imgSrc}
              alt={item.alt}
              width={258}
              height={270}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
