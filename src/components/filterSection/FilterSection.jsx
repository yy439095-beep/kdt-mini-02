import { useState } from "react";
import "./FliterSection.css";

const CATEGORIES = ["한식", "중식", "일식", "양식"];
const SITUATIONS = ["혼밥", "회식", "데이트", "야식"];

function FilterSection({ setFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSituation, setSelectedSituation] = useState("");

  const handleRecommend = () => {
    setFilter({
      category: selectedCategory,
      situation: selectedSituation,
    });
  };

  return (
    <section className="filter-section">
      {/* 카테고리 */}
      <div className="filter-group1">
        <p className="filter-title">카테고리:</p>
        <div className="filter-buttons">
          {CATEGORIES.map((id) => (
            <button
              key={id}
              className={`filter-btn ${
                selectedCategory === id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(id)}
            >
              {id}
            </button>
          ))}
        </div>
      </div>

      {/* 상황 */}
      <div className="filter-group2">
        <p className="filter-title">상황 선택:</p>
        <div className="filter-buttons">
          {SITUATIONS.map((id) => (
            <button
              key={id}
              className={`filter-btn ${
                selectedSituation === id ? "active" : ""
              }`}
              onClick={() => setSelectedSituation(id)}
            >
              {id}
            </button>
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default FilterSection;