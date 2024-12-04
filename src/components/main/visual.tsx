import Image from "next/image";

export default function Visual() {
  return (
    <div>
      <section className="relative w-full h-auto">
        <Image
          src="/images/main/visual_bg.png"
          alt="비주얼 영역 배경"
          layout="responsive"
          width={1920}
          height={686}
          className="object-cover"
          priority
        />
        {/* 컨텐츠 레이아웃 */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center md:justify-center md:px-10">
          {/* 왼쪽 */}
          <div>
            <Image
              src="/images/main/visual_logo.png"
              alt="ROLL OUT COFFEE ALL DAY, ALL SWEET"
              width={338}
              height={150}
              className="object-cover min-w-[120px] max-w-[80%] md:max-w-[80%] lg:max-w-[95%] ml-4 md:ml-5 lg:mr-20 lg:mb-28 md:mb-20 mb-8"
            />
          </div>
          {/* 오른쪽 */}
          <Image
              src="/images/main/visual_latte_text.png"
              alt="HOT LATTE"
              width={83}
              height={85}
              className="object-cover min-w-[20px] max-w-[20%] md:max-w-[20%] lg:max-w-[70px] mt-20 mr-[-20px] md:mt-36 md:mr-[-30px] lg:mr-[-90px] lg:mt-36"
            />
            <Image
              src="/images/main/visual_latte_img.png"
              alt="라떼"
              width={315}
              height={315}
              className="object-cover min-w-[100px] max-w-[50%]  md:max-w-[70%] lg:max-w-[90%] lg:ml-16 lg:mb-20 md:mb-8"
            />


          <div>
            <Image
              src="/images/main/visual_blanc_text.png"
              alt="NEW BLANC"
              width={83}
              height={85}
              className="object-cover min-w-[20px] max-w-[20%] md:max-w-[20%] lg:max-w-[70px] mt-5 md:mt-0 lg:mb-[-30px] md:mb-[-40px]"
            />
            <Image
              src="/images/main/visual_blanc_img.png"
              alt="블랑"
              width={360}
              height={360}
              className="object-cover min-w-[100px] max-w-[100%]  md:max-w-[100%] lg:max-w-[330px]  ml-[-25px] md:ml-[-50px] md:mt-16  lg:ml-[-88px] lg:mt-10"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
