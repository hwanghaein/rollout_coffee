import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header>
      <Link href={"/"}>로고 아이콘</Link>
        <div>
        <Link href={"/menu"}>MENU</Link>
        <Link href={"/store"}>STORE</Link>
        <Link href={"/about-rollout"}>ROLL OUT COFFEE</Link>
        <Link href={"/photo-gallery"}>PHOTO GALLERY</Link>
        </div>
        <button>햄버거</button>
      </header>
      <aside />
      <button>닫기</button>
    </div>
  );
}
