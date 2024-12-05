"use client";

import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import fireStore from "../../../firebase/firestore";
import Image from "next/image";

export default function Page() {
  // 데이터 상태 변수
  const [imageData, setImageData] = useState<string | null>(null);

  useEffect(() => {
    // Firestore 데이터 가져오기 함수
    const fetchData = async () => {
      try {
        const userDocRef = doc(fireStore, "menuItems", "1");
        const data = await getDoc(userDocRef);

        if (data.exists()) {
          console.log(data.data());
          const docData = data.data();
          // 이미지 URL 저장
          if (docData.images && Array.isArray(docData.images)) {
            setImageData(docData.images[0]);
          } else {
            console.log("이미지 데이터가 존재하지 않습니다.");
          }
        } else {
          console.log("문서가 존재하지 않습니다.");
        }
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    };

    // 함수 호출
    fetchData();
  }, []); // 빈 배열을 전달해 컴포넌트 첫 렌더링 시 한 번만 실행

  return (
    <div>
      {/* 이미지 렌더링 */}
      {imageData ? (
        <Image
          src={imageData}
          alt="비행기"
          width={1100}
          height={300}
          className="object-contain mb-12"
        />
      ) : (
        <p>이미지를 불러오는 중입니다...</p>
      )}
    </div>
  );
}
