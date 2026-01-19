import "./App.css";
import { useState } from "react";

import Filter from "./components/filterSection/FilterSection.jsx";
import RcmdBtn from "./components/recommendButton/RecommendButton.jsx";
import RcmdCard from "./components/recommendCard/RecommendationCard.jsx";
import DisLike from "./components/dislikedMenuSection/DislikedMenuSection.jsx";

export default function App() {
  // ------------- [카테고리 및 상황 선택 컴포 관련 코드: 김영웅] -------------
  const [category, setCategory] = useState([
    { id: 0, food: "한식" },
    { id: 1, food: "중식" },
    { id: 2, food: "일식" },
    { id: 3, food: "양식" },
  ]);
  const [situation, setSituation] = useState([
    { id: 0, food: "혼밥" },
    { id: 1, food: "회식" },
    { id: 2, food: "데이트" },
    { id: 3, food: "야식" },
  ]);

  // ------------- [추천결과 카드 컴포넌트 관련 코드] : 김상윤] -------------

  // ------------- [추천 버튼 컴포 관련 코드: 박재현] ------------- 

  // ------------- [싫어하는 음식 선택 컴포 관련 코드: 홍인석] -------------
  const [disFood, setDisFood] = useState([
    { id: 0, food: "낫또" },
    { id: 1, food: "고수" },
    { id: 2, food: "오이" },
  ]);

  const [rcmdMenu, setRcmdMenu] = useState(null);

  const handleDislike = (menuName) => {
    if (!menuName) return;

    const exists = disFood.some((item) => item.food === menuName);
    if (exists) return;

    const nextId =
      disFood.length === 0 ? 0 : Math.max(...disFood.map((v) => v.id)) + 1;

    setDisFood([...disFood, { id: nextId, food: menuName }]);
  };

  return (
    <div className="App">
      <Filter
        category={category}
        situation={situation}
        setCategory={setCategory}
        setSituation={setSituation}
      />

      <RcmdBtn setRcmdMenu={setRcmdMenu} />

      <RcmdCard rcmdMenu={rcmdMenu} onDislike={handleDislike} />

      <DisLike disFood={disFood} setDisFood={setDisFood} />
    </div>
  );
}
