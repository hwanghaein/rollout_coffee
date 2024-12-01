interface MenuItem {
  id: string;
  src: string;     // 이미지 경로
  alt: string;     // 이미지 alt 텍스트
  name: string;    // 메뉴 이름
  category: string; // 카테고리
  engName: string;  // 메뉴 영어 이름
  description: string; // 메뉴 설명
  tip: string;      // 메뉴 팁
  temperature: "hot" | "ice" | "both"| "none" ; // 온도 (핫/아이스/둘다/없음)
}

export const menuItems: MenuItem[] = [
  { 
    id: "1", 
    src: "/images/menu/menu_blanc.png", 
    alt: "블랑", 
    name: "블랑", 
    category: "signature", 
    engName: "Blanc", 
    description: "오렌지청과 오렌지 착즙이 함께 들어간 달콤한 크림 라떼", 
    tip: "위의 크림은 먼저 떠서 가볍게 맛보신 뒤, 잘 저어 드시는 것을 추천해요. 바닥에 남아 있는 달콤한 청도 꼭 즐겨보세요.", 
    temperature: "both" 
  },
  { 
    id: "2", 
    src: "/images/menu/menu_peanut.png", 
    alt: "피넛 커버", 
    name: "피넛 커버", 
    category: "signature", 
    engName: "Peanut Cover", 
    description: "고소한 땅콩크림이 이불처럼 덮힌 숏 라떼", 
    tip: "휘낭시에와 함께 먹으면 더욱 맛있어요.", 
    temperature: "ice" 
  },
  { 
    id: "3", 
    src: "/images/menu/menu_lady.png", 
    alt: "레이디 그레이", 
    name: "레이디 그레이", 
    category: "signature", 
    engName: "Lady Grey", 
    description: "블루베리와 블렉커런트의 맛과 향을 느낄 수 있는 달콤한 라떼", 
    tip: "블루베리와 블랙커런트의 풍미를 더욱 즐기고 싶다면 천천히 음미하며 드셔보세요.", 
    temperature: "both" 
  },
  { 
    id: "4", 
    src: "/images/menu/menu_americano.png", 
    alt: "아메리카노", 
    name: "아메리카노", 
    category: "coffee", 
    engName: "Americano", 
    description: "Flaver. 자스민 + 블랙베리", 
    tip: "다양한 디저트들과 함께 즐겨보세요.", 
    temperature: "both" 
  },
  { 
    id: "5", 
    src: "/images/menu/menu_latte.png", 
    alt: "라떼", 
    name: "라떼", 
    category: "coffee", 
    engName: "Latte", 
    description: "Flavor. 구운 아몬드 + 밀크초콜릿", 
    tip: "", // 뭐하지 
    temperature: "both" 
  },
  { 
    id: "6", 
    src: "/images/menu/menu_vanilla.png", 
    alt: "바닐라 라떼", 
    name: "바닐라 라떼", 
    category: "coffee", 
    engName: "Vanilla Latte", 
    description: "천연 바닐라빈과 유기농 설탕으로 직접 만든 시럽을 사용합니다", 
    tip: "바닐라 시럽이 음료 전체에 잘 섞이도록 저어서 드시는 걸 추천해요. 한 모금 한 모금 바닐라빈의 깊고 고급스러운 풍미를 만끽해보세요. ", 
    temperature: "both" 
  },
  { 
    id: "7", 
    src: "/images/menu/menu_hand.png", 
    alt: "핸드드립", 
    name: "핸드드립", 
    category: "drip", 
    engName: "Hand Drip", 
    description: "", 
    tip: "디저트와 함께 즐겨보세요.", 
    temperature: "both" 
  },
  { 
    id: "8", 
    src: "/images/menu/menu_fruit_latte.png", 
    alt: "과일 라떼 2종", 
    name: "과일 라떼 2종", 
    category: "drink", 
    engName: "Fruit Latte", 
    description: "딸기 / 망고 2종류", 
    tip: "잘 저어 먹으면 과일의 달콤한 맛이 우유와 더 조화롭게 어우러져요.", 
    temperature: "ice" 
  },
  { 
    id: "9", 
    src: "/images/menu/menu_ade.png", 
    alt: "에이드 3종", 
    name: "에이드 3종", 
    category: "drink", 
    engName: "Ade", 
    description: "망고 / 청귤 / 한라패션후르츠 3종류", 
    tip: "충분히 섞어서 드시면 상큼한 맛이 얼음과 함께 잘 어우러져 더욱 시원하게 즐기실 수 있어요.", 
    temperature: "ice" 
  },
  { 
    id: "10", 
    src: "/images/menu/menu_juice.png", 
    alt: "과일 주스 2종", 
    name: "과일 주스 2종", 
    category: "drink", 
    engName: "Fruit Juice", 
    description: "100% 과일", 
    tip: "100% 과일의 자연스러운 풍미를 느껴보세요.", 
    temperature: "ice" 
  },
  { 
    id: "11", 
    src: "/images/menu/menu_milktea.png", 
    alt: "스윗 밀크티", 
    name: "스윗 밀크티", 
    category: "sweetTea", 
    engName: "Sweet Milk Tea", 
    description: "3가지 홍차와 유기농 설탕을 섞어 만든 달콤한 밀크티", 
    tip: "따뜻하게 즐기면 홍차의 깊은 풍미가 느껴지고, 차가운 버전은 더욱 상쾌하고 달콤한 맛이 강조됩니다. 기호에 맞는 온도로 즐겨보세요.", 
    temperature: "both" // 알아봐야함
  },
  { 
    id: "12", 
    src: "/images/menu/menu_tangerine_tea.png", 
    alt: "청귤차", 
    name: "청귤차", 
    category: "sweetTea", 
    engName: "Tangerine Tea", 
    description: "상큼하고 향긋한 청귤차", 
    tip: "청귤 특유의 상큼한 향과 맛을 천천히 음미하며 여유로운 시간을 즐겨보세요", 
    temperature: "hot" 
  },
  { 
    id: "13", 
    src: "/images/menu/menu_fruity_earlgrey.png", 
    alt: "프루티 얼그레이", 
    name: "프루티 얼그레이", 
    category: "sweetTea", 
    engName: "Fruity Earl Grey", 
    description: "달콤한 과일청을 넣어 만든 얼그레이 아이스티", 
    tip: "과일청과 얼그레이를 골고루 섞어 드시면 풍부한 맛을 느낄 수 있어요.", 
    temperature: "ice"  // 알아봐야함
  },
  { 
    id: "14", 
    src: "/images/menu/menu_tea.png", 
    alt: "티 4종", 
    name: "티 4종", 
    category: "tea", 
    engName: "Tea", 
    description: "루이보스 / 카모마일 / 호박팥차 / 블랙커런트", 
    tip: "따뜻한 차를 천천히 음미하며 하루의 피로를 풀어보세요. 각 차의 특유의 풍미를 즐겨보는 것도 추천합니다.", 
    temperature: "hot" // 알아봐야함
  },
  { 
    id: "15", 
    src: "/images/menu/menu_financier.png", 
    alt: "휘낭시에 8종", 
    name: "휘낭시에 8종", 
    category: "dessert", 
    engName: "Financier", 
    description: "츄로스 / 모카번 / 솔티드 아몬드 / 솔티드 카라멜 / 호두 크로칸 / 스위트 카카오 / 소보로 / 인절미", 
    tip: "커피와 함께 즐기면 더욱 잘 어울려요.", 
    temperature: "none" 
  },
  { 
    id: "16", 
    src: "/images/menu/menu_plain_cake.png", 
    alt: "플레인 레어 치즈 케이크", 
    name: "플레인 레어 치즈 케이크", 
    category: "dessert", 
    engName: "Plain Rare Cheese Cake", 
    description: "끼리크림 치즈와 고메 버터를 사용해서 만든 부드러운 치즈 케이크", 
    tip: "부드러운 식감과 풍부한 치즈의 맛을 천천히 음미해 보세요. 커피나 티와 함께하면 더 잘 어울립니다.", 
    temperature: "none" 
  },
  { 
    id: "17", 
    src: "/images/menu/menu_choco_cake.png", 
    alt: "초코 레어 치즈 케이크", 
    name: "초코 레어 치즈 케이크", 
    category: "dessert", 
    engName: "Chocolate Rare Cheese Cake", 
    description: "끼리크림 치즈와 고메 버터를 사용해서 만든 부드러운 초코 치즈 케이크", 
    tip: "부드러운 식감과 풍부한 치즈의 맛을 천천히 음미해 보세요. 커피나 티와 함께하면 더 잘 어울립니다.", 
    temperature: "none" 
  },
];
