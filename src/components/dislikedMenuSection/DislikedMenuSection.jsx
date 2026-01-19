import React, { useState } from "react";

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

  const removeDislikedFood = (id) => {
    setDisFood(disFood.filter((item) => item.id !== id));
  };

  return (
    <section>
      <h2>😞 싫어하는 메뉴</h2>

      {disFood.length === 0 ? (
        <p>싫어하는 메뉴가 없습니다.</p>
      ) : (
        <ul>
          {disFood.map((item) => (
            <li key={item.id}>
              {item.food}
              <button type="button" onClick={() => removeDislikedFood(item.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      )}

      <div>
        <input
          type="text"
          placeholder="싫어하는 음식 추가"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={addDislikedFood}>
          추가
        </button>
      </div>
    </section>
  );
}
