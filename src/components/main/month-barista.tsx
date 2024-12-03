"use client";

import Image from "next/image";

export default function MonthBarista() {
  return (
    <div>
      <section className="relative w-full h-auto">
        {/* 배경 이미지 */}
        <Image
          src="/images/main/month_barista_bg.png"
          alt="이 달의 바리스타 추천 배경"
          layout="responsive"
          width={1920}
          height={1080}
          className="object-cover"
          priority
        />
        {/* 컨텐츠 레이아웃 */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center md:justify-center md:px-10">
          {/* 왼쪽 이미지: 레이디 그레이 */}
          <div className="z-10 animate-slide-in-left-delay">
            <Image
              src="/images/main/month_barista_img.png"
              alt="레이디 그레이"
              width={300}
              height={422}
              className="object-cover lg:mt-32 md:mt-20 lg:ml-32 md:ml-24 ml-20 lg:max-w-[75%] md:max-w-[50%] max-w-[50%]"
              priority
            />
          </div>
          {/* 오른쪽 텍스트 */}
          <div className="flex flex-col lg:ml-10 animate-slide-in-right-delay md:mr-0 mr-5">
            <Image
              src="/images/main/month_barista_text1.png"
              alt="이 달의 바리스타 추천 음료"
              width={342}
              height={31}
              className="object-cover mb-4 min-w-[150px] max-w-[30%] md:max-w-[70%] lg:max-w-[342px]" // 반응형 적용
              priority
            />
            <Image
              src="/images/main/month_barista_text2.png"
              alt="블루베리와 블랙커런트의 맛과 향을 느낄 수 있는 달콤한 라떼를 즐겨보세요!"
              width={460}
              height={51}
              className="object-cover   min-w-[150px]  max-w-[30%]  md:max-w-[70%] lg:max-w-[460px]" // 반응형 적용
              priority
            />
                 <button className="text-black md:w-24  mt-2 whitespace-nowrap  w-14 py-1 md:py-2  md:mt-7  md:text-sm sm:text-xs text-[8px]  bg-transparent border-[1px] border-solid border-black rounded transition-all duration-300 hover:bg-black hover:text-white">
                  자세히 보기
                </button>
          </div>
        </div>
      </section>
    </div>
  );
}
