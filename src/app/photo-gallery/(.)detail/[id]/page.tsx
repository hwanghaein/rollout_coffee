import Modal from "@/components/modal";
import PhotoDetailPage from "./../../detail/[id]/page";

export default function Page(props: any) {
  return (
    <Modal>
      <PhotoDetailPage {...props} />
    </Modal>
  );
}
