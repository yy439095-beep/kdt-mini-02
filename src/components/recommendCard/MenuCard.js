import React from "react";
import "./MenuCard.css";

export default function MenuCard({menus, menu, randomMenu, handleDislike}) {

  return (
    <div className="card">
      <div className="header">
        <span className="icon">🍜</span>
        <span>오늘의 추천 메뉴</span>
      </div>

      <div className="menu">
        <span className="menu-icon">🥢</span>
        <span className="menu-name">{menu}</span>
      </div>

      <div className="buttons">
        <button className="btn retry" onClick={randomMenu}>
          다시 추천
        </button>
        <button className="btn like" onClick={() => handleDislike(menu)}>싫어요</button>
      </div>
    </div>
  );
}

