import { useEffect, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import { slides } from "@/mock/new-slide";

export default function NewSlide() {
  const [isClient, setIsClient] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); 
  }, []);


  const handleButtonClick = (link: string) => {
    router.push(link);
  };


  return (
    <div className="w-full pb-10">
      <section className="w-full overflow-hidden">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "white",
              "--swiper-pagination-color": "black",
            } as React.CSSProperties
          }
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
          speed={600}
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
                <button
                  onClick={() => handleButtonClick(slide.link)} 
                  className="text-black md:px-3 md:py-1 md:text-sm px-2 py-1 sm:text-xs text-[8px] bg-gray5 border-[1px] border-solid border-black rounded transition-all duration-300 hover:bg-black hover:text-white"
                >
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
