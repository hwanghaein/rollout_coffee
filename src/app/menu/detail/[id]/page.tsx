import MenuDetailClient from "./menu-detail-client";
import fetchMenuItems from "@/utils/fetchMenuItems";


type tParams = Promise<{ id: string }>;

export default async function Page(props: { params: tParams }) {
  const { id } = await props.params;

  const menuItems = await fetchMenuItems();
  const menuItem = menuItems.find((item) => item.id === id);

  if (!menuItem) {
    return <div>Menu item not found</div>;
  }

  return (
    <div className="px-4 md:w-full max-w-[1100px] mx-auto flex flex-col pt-7 pb-20">
      <MenuDetailClient menuItem={menuItem} />
    </div>
  );
}
