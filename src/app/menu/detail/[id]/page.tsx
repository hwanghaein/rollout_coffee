"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper as SwiperType } from "swiper";
import { getDocs, collection } from "firebase/firestore";
import fireStore from "../../../../../firebase/firestore";
import { MenuItem } from "../../../../types/MenuItem";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = useState<string | null>(null);
  const [menuItem, setMenuItem] = useState<MenuItem | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    async function fetchParams() {
      const unwrappedParams = await params;
      setId(unwrappedParams.id);
    }
    fetchParams();
  }, [params]);

  useEffect(() => {
    if (!id) return;

    async function fetchMenuItem() {
      try {
        const querySnapshot = await getDocs(collection(fireStore, "menuItems"));
        const items: MenuItem[] = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data() as MenuItem);
        });
        const foundItem = items.find((item) => item.id === id);
        setMenuItem(foundItem || null);
      } catch (error) {
        console.error("Error fetching menu item:", error);
      }
    }

    fetchMenuItem();
  }, [id]);

  if (!menuItem) {
    return <div>Menu item not found</div>;
  }

  return (
    <div className="px-4 md:w-full max-w-[1100px] mx-auto flex flex-col pt-7 pb-20">
      <span className="text-dark2 text-3xl mb-10">
        {menuItem.category.toUpperCase()}
      </span>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:order-1 order-2">
          <div className="relative max-w-[450px] overflow-hidden bg-dark2">
            {menuItem.images.length > 1 ? (
              // 이미지가 2개 이상일 때 Swiper 사용
              <Swiper
                style={
                  {
                    "--swiper-navigation-color": "#D9D9D9",
                    "--swiper-pagination-color": "#fff",
                  } as React.CSSProperties
                }
                loop={true}
                spaceBetween={10}
                navigation={true}
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Pagination, Thumbs]}
                className="mySwiper2"
              >
                {menuItem.images.map((imageSrc, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={imageSrc}
                      alt={menuItem.alt || "Menu Item Image"}
                      width={450}
                      height={470}
                      className="object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              // 이미지가 1개일 때 그냥 이미지로 표시
              <Image
                src={menuItem.images[0]}
                alt={menuItem.alt || "Menu Item Image"}
                width={450}
                height={470}
                className="object-cover"
              />
            )}

            {/* 썸네일 스와이퍼 */}
            {menuItem.images.length > 1 && (
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mySwiper mt-2"
              >
                {menuItem.images.map((imageSrc, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={imageSrc}
                      alt={menuItem.alt || "Menu Item Thumbnail"}
                      width={150}
                      height={60}
                      className="object-cover cursor-pointer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
        <div className="flex flex-col w-full order-1 md:order-2">
          <div className="flex flex-col border-b-2 border-solid border-dark3 mb-7">
            <span className="text-2xl text-dark2 mb-2">{menuItem.name}</span>
            <span className="text-m text-gray2 mb-7">{menuItem.engName}</span>
          </div>
          <div className="flex flex-col border-b-[1px] border-solid border-gray4 mb-7">
            <div className="flex items-center mb-7">
              <span className="text-lg text-dark3 font-bold">
                • {menuItem.description}
              </span>
            </div>
            {menuItem.tip === "none" ? (
              <div className="h-14"></div>
            ) : (
              <div className="flex items-start">
                <span className="text-secondary font-bold text-lg mr-2 ">
                  Tip.
                </span>
                <span className="text-lg text-dark3 mb-7 inline-block">
                  {menuItem.tip}
                </span>
              </div>
            )}
          </div>

          {menuItem.temperature === "none" ? null : (
            <div className="border-b-[1px] border-solid border-gray4">
              <span className="text-lg text-dark4 inline-block mb-7">
                {menuItem.temperature === "both"
                  ? "ICE / HOT"
                  : menuItem.temperature === "ice"
                  ? "ONLY ICE"
                  : "ONLY HOT"}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
