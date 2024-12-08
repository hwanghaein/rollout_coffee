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
      setIsVisible(true); 
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false); 
    setTimeout(() => router.back(), 300); 
  };

  return createPortal(
    <dialog
      className={` border-none bg-white  backdrop:bg-black/70 outline-none transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`} 
      style={{ width: "930px", height: "660px" }} 
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
