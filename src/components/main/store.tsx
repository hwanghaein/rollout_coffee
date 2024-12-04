"use client";

import Image from "next/image";
import { useIntersectionObserver } from "./../../hooks/useIntersectionObserver"; 
import { useEffect, useState } from "react";
import styles from "./store.module.css";

export default function Store() {
  const { ref, isVisible } = useIntersectionObserver(); // 훅 사용하여 isVisible 상태 관리
  const [hasHovered, setHasHovered] = useState(false); // hover 상태를 추적하는 상태
  const [rotate, setRotate] = useState(false); // 회전 상태를 추적하는 상태

  // 첫 번째 효과가 끝난 후 원래 상태로 돌아가도록 설정
  useEffect(() => {
    if (isVisible) {
      setRotate(true); // isVisible이 true가 되면 회전 시작
      const timeout = setTimeout(() => {
        setRotate(false); // 회전이 끝난 후 원래 상태로 돌아가도록 설정
      }, 700); // 회전 효과가 끝나는 시간 (0.7초)
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <div>
      <section className="relative w-full h-auto" ref={ref}>
        {/* 배경 이미지 */}
        <Image
          src="/images/main/main_store_bg.png"
          alt="휘낭시에 배경"
          width={1920}
          height={600}
          className="object-cover"
          priority
        />
        {/* 컨텐츠 레이아웃 */}
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
          {/* 텍스트 */}
          <div className={`${styles.container} relative`}>
            <div
              className={`${styles.card} ${rotate || hasHovered ? styles.cardHover : ""}`} // 첫 번째 효과 후 hover 상태로 돌아감
              onMouseEnter={() => setHasHovered(true)} // hover 시 회전
              onMouseLeave={() => setHasHovered(false)} // hover 끝나면 회전 멈춤
            >
              {/* 앞면 이미지 */}
              <div className={`${styles.front} ${styles.face}`}>
                <Image
                  src="/images/main/main_store_logo_icon.png"
                  alt="롤아웃 로고"
                  width={200}
                  height={200}
                  className="cursor-pointer object-cover min-w-[50px] max-w-[20%] md:max-w-[50%] lg:max-w-[200px]"
                  priority
                />
              </div>
              {/* 뒷면 이미지 */}
              <div className={`${styles.back} ${styles.face}`}>
                <Image
                  src="/images/main/main_store_black_logo.png"
                  alt="롤아웃 흐린 로고"
                  width={300}
                  height={300}
                  className="cursor-pointer object-cover min-w-[90px] max-w-[20%] md:max-w-[50%] lg:max-w-[300px]"
                  priority
                />
                <button className="absolute z-10 mt-12 md:mt-20 lg:mt-40 text-white md:px-2 md:py-1 lg:px-4 lg:py-2 md:text-sm px-[5px] py-[2px] sm:text-xs text-[8px] border-[1px] border-solid border-white rounded transition-all duration-300 hover:bg-white hover:text-black">
                  매장 정보
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
