"use client";

import Image from "next/image";
import { useIntersectionObserver } from "./../../hooks/useIntersectionObserver";
import { useRouter } from "next/navigation"; 

export default function DippingFinancier() {
  const router = useRouter(); 
  const { ref: sectionRef, isVisible } = useIntersectionObserver(0.5); 

  const handleButtonClick = () => {
    router.push("/menu/detail/2");
  };


  return (
    <div ref={sectionRef}>
      <section className="relative w-full h-auto">
        {/* 배경 이미지 */}
        <Image
          src="/images/main/dipping_bg.png"
          alt="검은색 배경"
          width={1920}
          height={400}
          className="object-cover"
          priority
        />
        {/* 컨텐츠 레이아웃 */}
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-end md:px-10">
          {/* 텍스트 */}
          <div
            className={`flex flex-col items-end justify-center ${
              isVisible ? "animate-slide-in-right-delay" : "opacity-0"
            } mr-2`}
          >
            <Image
              src="/images/main/dipping_text1.png"
              alt="피넛커버에 휘낭시에를 찍어먹어보세요!"
              width={342}
              height={31}
              className="object-cover min-w-[100px] max-w-[30%] md:max-w-[50%] lg:max-w-[342px]"
              priority
            />
            <Image
              src="/images/main/dipping_text2.png"
              alt="고소함과 버터리한 달콤함의 완벽한 조화, 그리고 부드럽게 퍼지는 피넛버터의 깊은 맛이 한 입마다 따뜻한 행복이 전해지길 바라요."
              width={460}
              height={51}
              className="object-cover min-w-[150px] max-w-[30%] md:max-w-[50%] lg:max-w-[460px] hidden sm:block mt-5"
              priority
            />
            <button   onClick={handleButtonClick} className="text-white mt-[10px] md:mt-6 md:px-4 md:py-2 md:text-sm px-2 py-1 sm:text-xs text-[8px] border-[1px] border-solid border-white rounded transition-all duration-300 hover:bg-white hover:text-black">
              자세히 보기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
