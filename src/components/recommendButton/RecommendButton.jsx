// src/components/RecommendButton.js
import React from "react";
import "./RecommendButton.css"; // CSS 파일 import

export default function RecommendButton({ tempList, handleTempList }) {
  const handleClick = () => {
    if (typeof handleTempList === "function") {
      const foodRequest = handleTempList();
      console.log("사용자 요청사항:", foodRequest);
    }
  };

  return (
    <button className="recommend-btn" onClick={handleClick}>
      메뉴 추천받기
    </button>
  );
}
