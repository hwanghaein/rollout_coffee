"use client"

import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import fireStore from '../../../firebase/firestore';

export default function Page() {
  const onClickCreate = async () => {
    try {
      const userDocRef = doc(fireStore, "photos", '8');
      await setDoc(userDocRef,  
        {
          id: "8",
          alt: "포토 갤러리 이미지8",
          date: "2024-12-06",
        },
    );
      console.log("데이터가 성공적으로 추가되었습니다.");
    } catch (error) {
      console.error("데이터 추가 실패:", error);
    }
  };

  return (
    <div>
      <button 
        onClick={onClickCreate} 
      >
        setDoc
      </button>
    </div>
  );
}