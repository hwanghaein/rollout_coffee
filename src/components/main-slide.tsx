import { useEffect, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function MainSlide() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const slides = [
    { src: "/images/main/main_slide1.png", alt: "슬라이드1" },
    { src: "/images/main/main_slide2.png", alt: "슬라이드2" },
    { src: "/images/main/main_slide3.png", alt: "슬라이드3" },
    { src: "/images/main/main_slide4.png", alt: "슬라이드4" },
    { src: "/images/main/main_slide5.png", alt: "슬라이드5" },
    { src: "/images/main/main_slide6.png", alt: "슬라이드6" },
  ];

  return (
    <div className="w-full">
      <section className="w-full overflow-hidden">
        <Swiper
          style={{
            "--swiper-navigation-color": "white",
            "--swiper-pagination-color": "black",
          } as React.CSSProperties} 
          loop={true}
          keyboard={true}
          slidesPerView={3}
          simulateTouch={false}
          grabCursor={false}
          centeredSlides={false}
          observer={true}
          navigation={true}
          pagination={{ clickable: true }}
          spaceBetween={4}
          modules={[Navigation, Pagination]}
          className="bg-gray5"
          breakpoints={{
            320: {
              slidesPerView: 2,
              
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="flex">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={800}
                  height={517}
                />
              </div>
              <div className="flex justify-center pb-16">
                <button className="text-black md:px-3 md:py-1 md:text-sm  px-2 py-1 sm:text-xs text-[8px] bg-gray5 border-[1px] border-solid border-black rounded transition-all duration-300 hover:bg-black hover:text-white">
                  자세히 보기
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
