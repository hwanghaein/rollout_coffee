"use client";

import Image from "next/image";
import { Photo } from "../../types/photo";
import { useRouter } from "next/navigation";

interface PhotoGalleryClientProps {
  photos: Photo[];
}





export default function PhotoGalleryClient({
  photos,
}: PhotoGalleryClientProps) {
  const router = useRouter();
  const handlePhotoClick = (id: string) => {
    router.push(`/photo-gallery/detail/${id}`);
  };
  return (
    <>
      <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 ">
        {photos.map((item) => (
          <div  key={item.id} className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => handlePhotoClick(item.id)}>
            <div className="overflow-hidden">
            <Image
              src={item.image}
              alt={item.alt}
              width={450}
              height={470}
             className="object-cover transform transition-transform duration-500 hover:scale-110 !important"
            />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
