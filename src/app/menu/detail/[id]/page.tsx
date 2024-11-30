import Image from "next/image";

// 8px 2
// 12px 3
// 28px 7
// 32px 8

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="px-4 md:w-full max-w-[1100px] mx-auto flex flex-col pt-7 pb-20">
      {/* 데이터로 변경 */}
      <span className="text-dark2 text-4xl mb-10">SIGNATURE</span>
      <div className="flex flex-col md:flex-row gap-10">
        {/* 사진 컨테이너 */}
        <div className="md:order-1 order-2">
          <Image
            src="/images/menu/menu_blanc.png" // 데이터로 변경
            alt="메뉴 사진" // 데이터로 변경
            width={450}
            height={470}
            className="object-contain mb-12"
          />
        </div>

        {/* 메뉴 설명 컨테이너 */}
        <div className="flex flex-col order-1 md:order-2">
          <div className="flex flex-col border-b-2 border-solid border-dark3 mb-7">
            {/* 데이터로 변경*/}
            <span className="text-2xl text-dark2 mb-2">블랑</span>
            <span className="text-m text-gray2 mb-7">Blanc</span>
          </div>
          <div className="flex flex-col border-b-[1px] border-solid border-gray4 mb-7">
            {/* 데이터로 변경*/}
            <span className="text-lg text-dark3 font-bold mb-7">
              오렌지청과 오렌지 착즙이 함께 들어간 달콤한 크림 라떼
            </span>
            <span className="text-m text-dark3 mb-7 container">
              Tip: 위의 크림은 먼저 떠서 가볍게 맛보신 뒤, 잘 저어 드시는 것을
              추천합니다. 바닥에 남아 있는 달콤한 청도 꼭 즐겨보세요.
            </span>
          </div>

          {/* 데이터로 변경*/}
          <div className="border-b-[1px] border-solid border-gray4">
            <span className="text-lg text-dark4 inline-block mb-7">
              HOT / ICE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
