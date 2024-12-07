import { fetchPhotos } from "../../utils/fetchPhotos";
import { Photo } from "./../../types/photo";
import PhotoGalleryClient from "./photo-gallery-client";

export default async function Page() {
  const photos: Photo[] = await fetchPhotos();

  return (
    <div className="px-4 md:w-full max-w-[1100px] mx-auto flex flex-col pt-7 pb-20">
      <span className="text-dark2 text-3xl mb-10">PHOTO GALLERY</span>
      <PhotoGalleryClient photos={photos} />
    </div>
  );
}
