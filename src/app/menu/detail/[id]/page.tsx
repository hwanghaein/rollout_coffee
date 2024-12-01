import Image from "next/image";
import { menuItems } from "../../../../mock/menu";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const menuItem = menuItems.find((item) => item.id === id);

  if (!menuItem) {
    return <div>Menu item not found</div>;
  }

  return (
    <div className="px-4 md:w-full max-w-[1100px] mx-auto flex flex-col pt-7 pb-20">
      <span className="text-dark2 text-4xl mb-10">{menuItem.category.toUpperCase()}</span>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:order-1 order-2">
          <Image
            src={menuItem.src}
            alt={menuItem.alt}
            width={450}
            height={470}
            className="object-contain mb-12"
          />
        </div>
        <div className="flex flex-col order-1 md:order-2">
          <div className="flex flex-col border-b-2 border-solid border-dark3 mb-7">
            <span className="text-2xl text-dark2 mb-2">{menuItem.name}</span>
            <span className="text-m text-gray2 mb-7">{menuItem.engName}</span>
          </div>
          <div className="flex flex-col border-b-[1px] border-solid border-gray4 mb-7">
            <span className="text-lg text-dark3 font-bold mb-7">{menuItem.description}</span>
            <span className="text-m text-dark3 mb-7 container">{menuItem.tip}</span>
          </div>
          <div className="border-b-[1px] border-solid border-gray4">
            <span className="text-lg text-dark4 inline-block mb-7">
              {menuItem.temperature === "none" ? "Not applicable" : menuItem.temperature.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
