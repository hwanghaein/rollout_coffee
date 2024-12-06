
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";

export default function PhotoSlide() {
  const router = useRouter(); 

  const slides = [
    { src: "/images/main/photo_slide1.png", alt: "슬라이드1" },
    { src: "/images/main/photo_slide2.png", alt: "슬라이드2" },
    { src: "/images/main/photo_slide3.png", alt: "슬라이드3" },
    { src: "/images/main/photo_slide4.png", alt: "슬라이드4" },
    { src: "/images/main/photo_slide5.png", alt: "슬라이드5" },
    { src: "/images/main/photo_slide6.png", alt: "슬라이드6" },
  ];

  const handleClick = () => {
    router.push("/photo-gallery");
  };

  return (
    <div className="w-full">
      <section className="w-full overflow-hidden">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "white",
              "--swiper-pagination-color": "white",
            } as React.CSSProperties
          }
          loop={true}
          keyboard={true}
          slidesPerView={4}
          simulateTouch={false}
          grabCursor={false}
          centeredSlides={false}
          observer={true}
          navigation={true}
          pagination={{ clickable: true }}
          spaceBetween={4}
          modules={[Navigation, Pagination, Autoplay]}
          className="bg-dark2"
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
          }}
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
                  width={600}
                  height={600}
                  onClick={handleClick}
                  className="cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
