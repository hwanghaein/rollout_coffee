export default function Footer() {
  return (
    <footer className="w-full bg-dark5 text-gray4 px-6 text-center py-10 bottom-0 ">
      <div className="min-w-[375px] max-w-[1100px] mx-auto flex justify-center items-center gap-6 text-xs flex flex-col">
        <div className="flex gap-6">
        <p>사업자 등록 번호: 102-05-08545</p>
        <p>롤아웃 커피: 박영도</p>
        <p>TEL: 0507-1392-5605</p>
        </div>
        <div>
        <p>&copy; 2024 Roll Out Coffee. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
