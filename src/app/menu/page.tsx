"use client";

import { useState } from "react";
import Image from "next/image";
import { menuItems } from "../../mock/menu";
import { menuCategories } from "../../mock/menu-category";

// 필터 상태의 타입 정의
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
  // 필터 상태 관리
  const [filters, setFilters] = useState<Filters>(initialFilters);

  // 체크박스 상태 변경 함수
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

  return (
    <div className="px-4 md:w-full max-w-[1100px] mx-auto flex flex-col pt-7 pb-20">
      <span className="text-dark2 text-4xl mb-10">MENU</span>
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
            {/* 필터 */}
            {menuCategories.map(({ label, value }) => (
              <li key={value} className="flex items-start items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters[value as FilterKeys]} // 키가 유효하다고 명시
                  onChange={() => handleFilterChange(value as FilterKeys)}
                />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {/* 메뉴 */}
        {menuItems
          .filter((item) => {
            if (filters.all) {
              return true; 
            }

            return filters[item.category as FilterKeys]; // 키가 유효하다고 명시
          })
          .map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Image
                src={item.src}
                alt={item.alt}
                width={258}
                height={270}
                className="object-cover"
                priority
              />
              <span>{item.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
