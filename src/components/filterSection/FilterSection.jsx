import "./FliterSection.css";

export default function FilterSection({ foodCategoryList, situationList, category, situation, setCategory, setSituation }) 
{
  const CATEGORIES = foodCategoryList.map((item)=>item.food);
  const SITUATIONS = situationList.map((item)=>item.food);
  // console.log("CATEGORIES: " + CATEGORIES);
  // console.log("SITUATIONS: " + SITUATIONS);

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
                category === id ? "active" : ""
              }`}
              onClick={() => {
                setCategory(id); 
                // console.log(id);
              }}
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
                situation === id ? "active" : ""
              }`}
              onClick={() => {
                setSituation(id); 
                // console.log(id);
              }}
            >
              {id}
            </button>
          ))}
        </div>
      </div>
      
    </section>
  );
}
