import Image from "next/image";

export default function Page() {
  return (
    <div className="px-4 md:w-full max-w-[1100px] mx-auto flex flex-col pt-7 pb-20">
      <span className="text-dark2 text-4xl mb-10">ROLL OUT COFFEE</span>
      <Image
        src="/images/store/store_img.jpeg"
        alt="롤아웃 커피 외관"
        width={1100}
        height={300}
        className="object-contain mb-12"
      />
      <div className="flex flex-col gap-5 pb-7 mb-7 border-b-[1px] ">
        <span className="text-2xl text-secondary">Address</span>
        <span className="text-lg text-dark4">
          경북 경주시 현곡면 금장 3길 4 1층
        </span>
      </div>

      <div className="flex flex-col gap-5 pb-7 mb-7 border-b-[1px] ">
        <span className="text-2xl text-secondary">Opening Hours</span>
        <span className="text-lg text-dark4">
          11:00~21:00, 매주 월요일 휴무
        </span>
      </div>

      <div className="flex flex-col gap-5 pb-7 mb-7 border-b-[1px] ">
        <span className="text-2xl text-secondary">Telephone</span>
        <span className="text-lg text-dark4">0507-1392-5605</span>
      </div>

      <div className="flex flex-col gap-5 pb-7 mb-7 border-b-[1px] ">
        <span className="text-2xl text-secondary">Facilities</span>
        <span className="text-lg text-dark4">
          남/녀 화장실 구분, 반려동물 동반, 무선 인터넷, 단체 이용 가능, 주차
        </span>
      </div>

      <div className="flex flex-col gap-5 pb-7 mb-7 border-b-[1px] ">
        <span className="text-2xl text-secondary">Parking</span>
        <span className="text-lg text-dark4">강변 및 건물 1층 무료 주차</span>
      </div>

      <div className="flex flex-col gap-5 pb-7 mb-7 border-b-[1px] ">
        <span className="text-2xl text-secondary">Payment Methods</span>
        <span className="text-lg text-dark4">
          신용카드, 현금, 제로페이, 네이버페이{" "}
        </span>
      </div>

      <div className="flex flex-col gap-5 pb-7 mb-7 border-b-[1px] ">
        <span className="text-2xl text-secondary">Instagram</span>
        <span className="text-lg text-dark4">@rollout_coffee </span>
      </div>

      <div className="flex flex-col gap-5 pb-7 mb-7 border-b-[1px] ">
        <span className="text-2xl text-secondary">Directions</span>
        {/* <div>카카오맵</div> */}
      </div>
    </div>
  );
}
