// 메뉴 상세 페이지 
// 강의에서 책 상세페이지(book[id])와 동일

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  
  const {id} = await params;

  return <div>메뉴 상세 페이지 : {id} </div>;
}
