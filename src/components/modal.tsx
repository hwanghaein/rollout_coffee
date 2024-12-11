"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { FiX } from "react-icons/fi";

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
      className={`border-none bg-white backdrop:bg-black/70 outline-none transition-all duration-300 w-[930px] md:px-7 px-4 pt-6 md:pt-0 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`} 

      ref={dialogRef}
      onClick={(e) => {
        if ((e.target as HTMLElement).nodeName === "DIALOG") {
          handleClose();
        }
      }}
    >
      <button 
        onClick={handleClose} 
        className="absolute top-4 right-4 text-xl font-bold"
      >
        <FiX className="md:text-3xl  text-[25px] text-dark4" />
      </button>
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}
