"use client"

import Image from "next/image";

export default function MainVisual() {
  return (
    <div>
      <section className=" w-full ">
        <Image
          src="/images/main/visual.png"
          alt="비주얼 영역 배경"
          layout="responsive" 
          width={1920}    
          height={1080}      
          className="object-cover"
          priority
        />
      </section>
    </div>
  );
}
