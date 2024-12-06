"use client";

import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import fireStore from "../../../firebase/firestore";
import Image from "next/image";
import { Photo } from "../../types/Photo";



export default function Page() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const querySnapshot = await getDocs(collection(fireStore, "photos"));
        const fetchedPhotos: Photo[] = [];
        querySnapshot.forEach((doc) => {
          fetchedPhotos.push({ id: doc.id, ...doc.data() } as Photo);
        });
        setPhotos(fetchedPhotos);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <div className="px-4 md:w-full max-w-[1100px] mx-auto flex flex-col pt-7 pb-20">
      <span className="text-dark2 text-3xl mb-10">PHOTO GALLERY</span>

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
    </div>
  );
}
