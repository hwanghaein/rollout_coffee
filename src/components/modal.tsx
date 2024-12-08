"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
      dialogRef.current.scrollTo({
        top: 0,
      });
      setIsVisible(true); // 모달 열리면서 애니메이션 시작
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false); // 애니메이션 종료 후 모달 닫기
    setTimeout(() => router.back(), 300); // 300ms 후에 모달 닫기
  };

  return createPortal(
    <dialog
      className={` rounded-lg border-none bg-white  backdrop:bg-black/70 outline-none transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`} // 열리거나 닫힐 때 애니메이션 효과
      style={{ width: "800px", height: "490px" }} // 모달 크기 설정
      onClose={handleClose}
      onClick={(e) => {
        if ((e.target as HTMLElement).nodeName === "DIALOG") {
          handleClose();
        }
      }}
      ref={dialogRef}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}
