import React, { useState } from "react";
import "./DislikedMenuSection.css";

export default function DislikedMenuSection({ disFood, setDisFood }) {
  const [input, setInput] = useState("");

  const addDislikedFood = () => {
    const value = input.trim();
    if (!value) return;

    const exists = disFood.some((item) => item.food === value);
    if (exists) {
      setInput("");
      return;
    }

    const nextId =
      disFood.length === 0 ? 0 : Math.max(...disFood.map((v) => v.id)) + 1;

    setDisFood([...disFood, { id: nextId, food: value }]);
    setInput("");
  };

  // 클릭한 음식 리스트에서 제거하는 함수
  const removeDislikedFood = (id) => {
    setDisFood(disFood.filter((item) => item.id !== id));
  };

  return (
    <section className="dislike">
      <h2 className="dislike-title">😞 싫어하는 메뉴</h2>

      {disFood.length === 0 ? (
        <p className="dislike-empty">싫어하는 메뉴가 없습니다.</p>
      ) : (
        <ul className="dislike-list">
          {disFood.map((item) => (
            <li key={item.id} className="dislike-item">
              <span>{item.food}</span>
              <button
                className="dislike-remove"
                type="button"
                onClick={() => removeDislikedFood(item.id)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="dislike-add">
        <input
          className="dislike-input"
          type="text"
          placeholder="싫어하는 음식 추가"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="dislike-btn" type="button" onClick={addDislikedFood}>
          추가
        </button>
      </div>
    </section>
  );
}
