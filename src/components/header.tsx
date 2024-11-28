"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  // 햄버거 메뉴의 토글 상태를 관리하는 상태 변수
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // 메뉴를 닫는 함수

  return (
    <div>
      <header className="sticky top-0 w-full h-16 bg-primary flex justify-between items-center px-3 md:px-5 min-w-[375px] max-w-full mx-auto gap-5">
        <div className="w-full max-w-[1100px] mx-auto flex justify-between items-center">
          {/* 로고 아이콘 */}
          <Link href={"/"} className="flex gap-2 items-center flex-shrink-0">
            <Image
              src="/images/logo/logo_icon.png"
              alt="Roll Out Coffee Logo Icon"
              width={40}
              height={40}
              className="object-contain h-full"
              priority
            />
            <Image
              src="/images/logo/logo_text.png"
              alt="Roll Out Coffee Logo Text"
              width={80}
              height={40}
              className="object-contain min-w-20 hidden sm:block"
              priority
            />
          </Link>

          {/* 메뉴바 - 데스크탑에서만 보이도록 설정 */}
          <nav className="hidden md:flex flex-grow justify-end whitespace-nowrap">
            <ul className="text-13 text-gray1 flex h-16 items-center m-0 p-0 space-x-1">
              <Link href={"/menu"} className="px-5 h-full flex items-center justify-center">
                <li>MENU</li>
              </Link>
              <Link href={"/store"} className="px-5 h-full flex items-center justify-center">
                <li>STORE</li>
              </Link>
              <Link href={"/about-rollout"} className="px-5 h-full flex items-center justify-center">
                <li>ROLL OUT COFFEE</li>
              </Link>
              <Link href={"/photo-gallery"} className="px-5 h-full flex items-center justify-center">
                <li>PHOTO GALLERY</li>
              </Link>
            </ul>
          </nav>

          {/* 햄버거 버튼 - 모바일과 태블릿에서만 보이도록 설정 */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            <Image
              src="/images/icon/hamburger_icon.png"
              alt="Menu Toggle"
              width={30}
              height={30}
              className="object-contain"
            />
          </button>
        </div>
      </header>

      {/* 햄버거 버튼을 누르면 나타나는 메뉴 (태블릿, 모바일)) */}
      <aside
        className={`md:hidden w-64 fixed right-0 inset-y-0 bg-brown1 transition-transform duration-300 z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 메뉴 닫기 버튼 */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={closeMenu}
        >
          <Image
            src="/images/icon/close_icon.png"
            alt="Close Menu"
            width={30}
            height={30}
            className="object-contain"
          />
        </button>
        <ul className="text-13 text-gray1 flex flex-col items-start text-left text-base">
          <li className="py-8 pl-4 w-full text-left border-gray3 bg-brown2"></li>
          <Link href={"/menu"} className="py-6 pl-4 w-full text-left border-b-2 border-gray3">
            <li>MENU</li>
          </Link>
          <Link href={"/store"} className="py-6 pl-4 w-full text-left border-b-2 border-gray3">
            <li>STORE</li>
          </Link>
          <Link href={"/about-rollout"} className="py-6 pl-4 w-full text-left border-b-2 border-gray3">
            <li>ROLL OUT COFFEE</li>
          </Link>
          <Link href={"/photo-gallery"} className="py-6 pl-4 w-full text-left border-b-2 border-gray3">
            <li>PHOTO GALLERY</li>
          </Link>
        </ul>
      </aside>
    </div>
  );
}
