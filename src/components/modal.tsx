"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

export default function Modal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  // 모달이 처음 렌더링 될 때마다 보여주도록 처리
  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
      dialogRef.current.scrollTo({
        top: 0,
      });
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    router.push("/photo-gallery"); 
  };

  return createPortal(
    <dialog
      className={`border-none bg-white rounded-xl backdrop:bg-black/70 outline-none transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`} 
      style={{ width: "930px", height: "660px", overflow: "hidden" }}
      onClick={(e) => {
        if ((e.target as HTMLElement).nodeName === "DIALOG") {
          handleClose();
        }
      }}
      ref={dialogRef}
    >
      <button 
        onClick={handleClose} 
        className="absolute top-4 right-4 text-xl font-bold"
      >
        <FaTimes className="text-4xl text-gray1" />
      </button>
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}
