interface MenuItem {
  src: string;     // 이미지 경로
  alt: string;     // 이미지 alt 텍스트
  name: string;    // 메뉴 이름
  category: string; // 카테고리
}

export const menuItems: MenuItem[] = [
  { src: "/images/menu/menu_blanc.png", alt: "블랑", name: "블랑", category: "signature" },
  { src: "/images/menu/menu_peanut.png", alt: "피넛커버", name: "피넛커버", category: "signature" },
  { src: "/images/menu/menu_lady.png", alt: "레이디 그레이", name: "레이디 그레이", category: "signature" },
  { src: "/images/menu/menu_americano.png", alt: "아메리카노", name: "아메리카노", category: "coffee" },
  { src: "/images/menu/menu_latte.png", alt: "라떼", name: "라떼", category: "coffee" },
  { src: "/images/menu/menu_vanilla.png", alt: "바닐라 라떼", name: "바닐라 라떼", category: "coffee" },
  { src: "/images/menu/menu_hand.png", alt: "핸드드립", name: "핸드드립", category: "drip" },
  { src: "/images/menu/menu_fruit_latte.png", alt: "과일 라떼 2종", name: "과일 라떼 2종", category: "drink" },
  { src: "/images/menu/menu_ade.png", alt: "에이드 3종", name: "에이드 3종", category: "drink" },
  { src: "/images/menu/menu_juice.png", alt: "과일 주스 2종", name: "과일 주스 2종", category: "drink" },
  { src: "/images/menu/menu_milktea.png", alt: "스윗 밀크티", name: "스윗 밀크티", category: "sweetTea" },
  { src: "/images/menu/menu_tangerine_tea.png", alt: "청귤차", name: "청귤차", category: "sweetTea" },
  { src: "/images/menu/menu_fruity_earlgrey.png", alt: "프루티 얼그레이", name: "프루티 얼그레이", category: "sweetTea" },
  { src: "/images/menu/menu_tea.png", alt: "티 4종", name: "티 4종", category: "tea" },
  { src: "/images/menu/menu_financier.png", alt: "휘낭시에 8종", name: "휘낭시에 8종", category: "dessert" },
  { src: "/images/menu/menu_plain_cake.png", alt: "플레인 레어 치즈 케이크", name: "플레인 레어 치즈 케이크", category: "dessert" },
  { src: "/images/menu/menu_choco_cake.png", alt: "초코 레어 치즈 케이크", name: "초코 레어 치즈 케이크", category: "dessert" },
];
