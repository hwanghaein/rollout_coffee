"use client";

import Image from "next/image";

export default function Page() {
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
            <li className="flex items-start items-center gap-2">
              <input type="checkbox" />
              <span>필터 1</span>
            </li>
            <li className="flex items-start items-center gap-2">
              <input type="checkbox" />
              <span>필터 2</span>
            </li>
            <li className="flex items-start items-center gap-2">
              <input type="checkbox" />
              <span>필터 3</span>
            </li>
            {/* 필터 목록 추가 */}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {/* 메뉴 */}
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/sample-image.png"
            alt="샘플 이미지"
            width={258}
            height={270}
            className="object-cover"
            priority
          />
          <span>메뉴 이름</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/sample-image.png"
            alt="샘플 이미지"
            width={258}
            height={270}
            className="object-cover"
            priority
          />
          <span>메뉴 이름</span>
        </div>
        {/* 메뉴 목록 추가 */}
      </div>
    </div>
  );
}
