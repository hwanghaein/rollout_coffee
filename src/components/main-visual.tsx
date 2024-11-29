import Image from "next/image";

export default function MainVisual() {
  return (
    <div>
      <section className="visual relative w-full h-[50vh] sm:h-[40vh] md:h-[30vh] lg:h-[20vh]">
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
