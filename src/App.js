import './App.css';
import { useState } from 'react';

import Filter from "./components/filterSection/FilterSection.jsx";
import RcmdBtn from "./components/recommendButton/RecommendButton.jsx";
import MenuCard from "./components/recommendCard/MenuCard";
import DisLike from "./components/dislikedMenuSection/DislikedMenuSection.jsx";

export default function App() {
  // ------------- [카테고리 및 상황 선택 컴포 관련 코드: 김영웅] -------------
  const foodCategoryList = [
    { id: 0, food: "한식" },
    { id: 1, food: "중식" },
    { id: 2, food: "일식" },
    { id: 3, food: "양식" },
  ];
  const situationList = [
    { id: 0, food: "혼밥" },
    { id: 1, food: "회식" },
    { id: 2, food: "데이트" },
    { id: 3, food: "야식" },
  ];
  const [category, setCategory] = useState("");
  const [situation, setSituation] = useState("");

  // ------------- [추천 버튼 컴포 관련 코드: 박재현] ------------- 

  // ------------- [ : 이승규] -------------
  
  // 추천 버튼 으로 싫어하는 음식리스트, 카테고리, 상황 정보 넘기는 로직
  const [tempList, setTempList] = useState("");
  const handleTempList = () => {
    const foodRequest = {
      category,
      situation,
      disFood: disFood.map(item => item.food),
    };
    setTempList(foodRequest);
    return foodRequest;
  };

  const menuObjs = [
    {id: 0, category: "한식",      food: "국밥"},
    {id: 1, category: "중식",      food: "마라탕"},
    {id: 2, category: "양식",      food: "파스타"},
    {id: 3, category: "일식",      food: "초밥"},
    {id: 4, category: "패스트푸드", food: "치킨"},
    {id: 5, category: "패스트푸드", food: "피자"},
    {id: 6, category: "패스트푸드", food: "햄버거"},
    {id: 7, category: "분식",      food: "라면"},
  ];

  // ------------- [추천결과 카드 컴포넌트 관련 코드] : 김상윤] -------------
  const menus = ["마라탕", "치킨", "피자", "라면", "초밥", "햄버거", "국밥"];
  const getRandomMenu = () => {
    const idx = Math.floor(Math.random() * menus.length);
    return menus[idx];
  };
  const[menu, setMenu] = useState(getRandomMenu);
  const randomMenu = () => {
    setMenu(getRandomMenu());
  };

  // ------------- [싫어하는 음식 선택 컴포 관련 코드: 홍인석] -------------
  const [disFood, setDisFood] = useState([
    { id: 0, food: "낫또" },
    { id: 1, food: "고수" },
    { id: 2, food: "오이" },
  ]);

  const handleDislike = (menuName) => {
    if (!menuName) return;                                                                // 빈 값이면 아무 것도 안 함
    const exists = disFood.some((item) => item.food === menuName);                        // 중복 체크
    if (exists) return;                                                                   // 중복 값이면 아무 것도 안 함
    const nextId = disFood.length === 0 ? 0 : Math.max(...disFood.map((v) => v.id)) + 1;  // 새 id 생성
    setDisFood([...disFood, { id: nextId, food: menuName }]);                             // 상태 업데이트
  };

  return (
    <div className="App">
      <Filter
        foodCategoryList={foodCategoryList}
        situationList={situationList}
        category={category}
        situation={situation}
        setCategory={setCategory}
        setSituation={setSituation}
      />
      <RcmdBtn tempList={tempList} handleTempList={handleTempList}/>
      <MenuCard menus={menus} menu={menu} randomMenu={randomMenu} handleDislike={handleDislike}/>
      <DisLike disFood={disFood} setDisFood={setDisFood}/>
    </div>
  );
}
