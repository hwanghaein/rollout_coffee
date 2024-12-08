"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Photo } from "../../../../types/photo";

interface PhotoGalleryClientProps {
  photos: Photo[];
}

export default function PhotoDetailOthersClient({
  photos,
}: PhotoGalleryClientProps) {
  const [randomPhotos, setRandomPhotos] = useState<Photo[]>([]);
  const router = useRouter();

  const handlePhotoClick = (id: string) => {
    router.push(`/photo-gallery/detail/${id}`);
  };

  useEffect(() => {
    const shuffleArray = (array: any[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
      }
      return shuffled;
    };

    setRandomPhotos(shuffleArray(photos).slice(0, 4));
  }, [photos]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 gap-2">
        {randomPhotos.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handlePhotoClick(item.id)}
          >
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                width={150} 
                height={150}
                className="object-cover transform transition-transform duration-500 hover:scale-110"
                placeholder="blur" 
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY2hlbWFzL3YyIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiPjxwYXRoIGQ9Ik0gMCAwIFogTCAwIDE1MCAwIDE1MCAxNTAiIHN0eWxlPSJmaWxsOm5vbmU7IiBzdHJva2U9IiMyYjNjYmEiIHN0cm9rZS13aWR0aD0iMSIgLz48L3N2Zz4=" // 회색톤 대체 이미지
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
