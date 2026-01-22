// src/components/RecommendButton.js
import React from "react";
import "./RecommendButton.css";

export default function RecommendButton({ handleTempList, MENUS, onRecommend }) {
  const handleClick = () => {
    if (typeof handleTempList !== "function") return;

    const foodRequest = handleTempList();
    console.log("사용자 요청사항:", foodRequest);

    const {
      category,
      situation,
      disFood = []
    } = foodRequest;

    // 1️⃣ 카테고리만으로 1차 후보군 생성 (절대 제거 X)
    let candidates = MENUS.filter(menu => {
      if (!category || category === "전체") return true;
      return menu.category === category;
    });

    // 2️⃣ 싫어하는 음식 제거
    candidates = candidates.filter(
      menu => !disFood.includes(menu.name)
    );

    // 3️⃣ 상황 점수 부여 (필터 ❌, 정렬만 함)
    const scored = candidates.map(menu => ({
      ...menu,
      score: situation && menu.situations.includes(situation) ? 1 : 0
    }));

    // 4️⃣ 상황 맞는 메뉴를 위로
    scored.sort((a, b) => b.score - a.score);

    // 5️⃣ 상위 2개 랜덤 추천
    const top = scored.slice(0, 6); // 후보 풀
    const shuffled = [...top].sort(() => Math.random() - 0.5);
    const recommended = shuffled.slice(0, 2);
    onRecommend && onRecommend(recommended);
    console.log("❌ 제외된 메뉴:", disFood);
    console.log("✅ 추천 메뉴:", recommended.map(m => m.name));
  };

  return (
    <button className="recommend-btn" onClick={handleClick}>
      메뉴 추천받기
    </button>
  );
}
