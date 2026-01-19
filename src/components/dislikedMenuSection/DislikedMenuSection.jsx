export default function DislikedMenuSection({ disFood, setDisFood }) {

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
              <button
                type="button"
                onClick={() => removeDislikedFood(item.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
