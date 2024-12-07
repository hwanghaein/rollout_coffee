import { getDocs, collection } from "firebase/firestore";
import fireStore from "../../../../../firebase/firestore";
import { MenuItem } from "../../../../types/menu-item";
import MenuDetailClient from "./menu-detail-client";

async function fetchMenuItems(): Promise<MenuItem[]> {
  const querySnapshot = await getDocs(collection(fireStore, "menuItems"));
  const items: MenuItem[] = [];
  querySnapshot.forEach((doc) => {
    items.push(doc.data() as MenuItem);
  });
  return items;
}

export default async function Page({ params }: { params: { id: string } }) {
  const menuItems = await fetchMenuItems();
  const menuItem = menuItems.find((item) => item.id === params.id);

  if (!menuItem) {
    return <div>Menu item not found</div>;
  }

  return (
    <div className="px-4 md:w-full max-w-[1100px] mx-auto flex flex-col pt-7 pb-20">
      <MenuDetailClient menuItem={menuItem} />
    </div>
  );
}
