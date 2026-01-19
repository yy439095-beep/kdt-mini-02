// src/components/RecommendButton.js
import React from "react";
import "./RecommendButton.css"; // CSS 파일 import

function RecommendButton({ onRecommend }) {
  const handleClick = () => {
    if (typeof onRecommend === "function") {
      onRecommend(); // App.js에서 받은 함수 실행 (추천 시작 트리거)
    }
  };

  return (
    <button className="recommend-btn" onClick={handleClick}>
      메뉴 추천받기
    </button>
  );
}

export default RecommendButton

//-------------------------------------다른 버전으로 ----------

// import React from "react";
// import "./RecommendButton.css";

// function RecommendButton({ onRecommend }) {
//   const handleClick = () => {
//     // App.js에서 받은 함수를 그대로 실행 (데이터 전달은 App.js에서)
//     onRecommend();
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
//       <button className="recommend-button" onClick={handleClick}>
//         메뉴 추천받기
//       </button>
//     </div>
//   );
// }

// export default RecommendButton;
