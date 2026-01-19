import "./FliterSection.css";

export default function FilterSection({ foodCategoryList, situationList, category, situation, setCategory, setSituation }) 
{
  const CATEGORIES = foodCategoryList.map((item)=>item.food);
  const SITUATIONS = situationList.map((item)=>item.food);
  // console.log("CATEGORIES: " + CATEGORIES);
  // console.log("SITUATIONS: " + SITUATIONS);

//체크용 함수
  const handleCheck = () => {
    console.log("카테고리:", selectedCategory);
    console.log("상황:", selectedSituation);

    alert(
      `선택된 값 확인\n카테고리: ${selectedCategory}\n상황: ${selectedSituation}`
    );
  };


  return (
    <div>
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
    {/*확인용 체크 버튼*/}
<div>
   <button
        className="check-btn"
        onClick={handleCheck}
        disabled={!selectedCategory || !selectedSituation}
      >
        선택값 확인
      </button>

      {/* 기존 메뉴 추천받기 버튼 */}
      <button
        className="recommend-btn"
        onClick={handleRecommend}
        disabled={!selectedCategory || !selectedSituation}
      >
        메뉴 추천받기
      </button>
</div>

</div>
  );
}
