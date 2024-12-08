import PhotoDetailClient from "./photo-detail-client";
import { fetchPhotos } from "@/utils/fetchPhotos";
import PhotoDetailOthersClient from "./photo-detail-others-client";

type tParams = Promise<{ id: string }>;

export default async function Page(props: { params: tParams }) {
  const { id } = await props.params;

  const photos = await fetchPhotos();
  const photo = photos.find((item) => item.id === id);
  
  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div className="md:w-full max-w-[1100px] mx-auto flex gap-10 justify-center pt-12">
      <div > 
        <PhotoDetailClient photo={photo} />
      </div>

      <div className="flex flex-col justify-between"> 
        <div className="text-left text-xl text-dark2 pb-2 border-b-2 border-dark3">Other Photos</div>
        <PhotoDetailOthersClient photos={photos} />
      </div>
    </div>
  );
}
