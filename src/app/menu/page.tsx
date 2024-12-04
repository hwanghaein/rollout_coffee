"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import { menuItems } from "../../mock/menu";
import { menuCategories } from "../../mock/menu-category";

type FilterKeys = "all" | "signature" | "coffee" | "drip" | "drink" | "sweetTea" | "tea" | "dessert";
type Filters = Record<FilterKeys, boolean>;

const initialFilters: Filters = {
  all: true,
  signature: false,
  coffee: false,
  drip: false,
  drink: false,
  sweetTea: false,
  tea: false,
  dessert: false,
};

export default function Page() {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const router = useRouter(); 
  const handleFilterChange = (category: FilterKeys) => {
    setFilters((prevState) => {
      if (category === "all") {
        return initialFilters;
      } else {
        return {
          ...prevState,
          all: false,
          [category]: !prevState[category],
        };
      }
    });
  };

  const handleMenuClick = (id: string) => {
    router.push(`/menu/detail/${id}`); 
  };

  return (
    <div className="px-4 md:w-full max-w-[1100px] mx-auto flex flex-col pt-7 pb-20">
      <span className="text-dark2 text-3xl mb-10">MENU</span>
      <div className="p-5 flex flex-col border-[1px] border-solid border-gray4 rounded-md mb-10">
        <div className="flex pb-4 border-b-[1px] border-gray-4 justify-between items-center">
          <div className="text-lg text-dark2">메뉴 검색</div>
          <div className="border-[1px] border-solid border-gray-4 rounded-md relative overflow-hidden">
            <input
              type="text"
              placeholder="검색"
              className="w-full pl-3 pr-10 py-2 text-sm rounded-md border-none focus:outline-none"
            />
            <button className="absolute top-0 right-0 m-1">
              <Image
                src="/images/icon/search.png"
                alt="검색"
                width={25}
                height={25}
                className="object-contain"
                priority
              />
            </button>
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 text-sm text-dark1 mt-5">
            {menuCategories.map(({ label, value }) => (
              <li key={value} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters[value as FilterKeys]} 
                  onChange={() => handleFilterChange(value as FilterKeys)}
                />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {menuItems
          .filter((item) => {
            if (filters.all) {
              return true;
            }
            return filters[item.category as FilterKeys];
          })
          .map((item) => (
            <div
              key={item.id} 
              className="flex flex-col items-center gap-1 cursor-pointer"
              onClick={() => handleMenuClick(item.id)} 
              
            >
              
              <div className="overflow-hidden">
              <Image
                 src={item.images?.[0] || '/images/default-image.png'}
                alt={item.alt}
                width={258}
                height={270}
                className="object-cover transform transition-transform duration-500 hover:scale-110 !important"
                priority
              />
              </div>
              <span className="text-sm text-dark4">{item.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
