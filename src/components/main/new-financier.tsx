"use client";

import { useRouter } from "next/navigation"; 
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function NewFinancier() {
  const router = useRouter(); 
  const { ref, isVisible } = useIntersectionObserver(0.5); 

  const handleButtonClick = () => {
    router.push("/menu/detail/15");
  };

  return (
    <div ref={ref}>
      <section className="relative w-full h-auto">
        {/* 배경 이미지 */}
        <Image
          src="/images/main/new_financier_bg.png"
          alt="휘낭시에 배경"
          width={1920}
          height={600}
          className="object-cover"
          priority
        />
        {/* 컨텐츠 레이아웃 */}
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center md:px-10">
          {/* 텍스트 */}
          <div
            className={`flex flex-col items-center justify-center ${
              isVisible ? "animate-slide-in-left-delay" : "opacity-0"
            } mr-2`}
          >
            <Image
              src="/images/main/new_financier_text.png"
              alt="New Financier"
              width={342}
              height={31}
              className="object-cover min-w-[100px] max-w-[30%] md:max-w-[50%] lg:max-w-[342px]"
              priority
            />
            <button onClick={handleButtonClick} className="text-white md:px-4 md:py-2 md:text-sm px-2 py-1 sm:text-xs text-[8px] border-[1px] border-solid border-white rounded transition-all duration-300 hover:bg-white hover:text-black mt-6">
              자세히 보기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
