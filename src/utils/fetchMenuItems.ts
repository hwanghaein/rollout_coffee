import { getDocs, collection } from "firebase/firestore";
import fireStore from "../../firebase/firestore";
import { MenuItem } from "../types/menu-item";

// firebase에서 메뉴 항목 가져오는 함수
const fetchMenuItems = async (): Promise<MenuItem[]> => {
  try {
    const querySnapshot = await getDocs(collection(fireStore, "menuItems"));
    const items: MenuItem[] = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data() as MenuItem);
    });
    return items;
  } catch (error) {
    console.error("Error fetching menu items: ", error);
    return [];
  }
};

export default fetchMenuItems;
