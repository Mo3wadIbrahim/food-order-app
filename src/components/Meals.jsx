import { useState, useEffect } from "react";
export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const meals = await response.json();
      setMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <>
      {meals.length === 0 && <p>Loading Meals...</p>}
      <ul id="meals">
        {meals.length > 0 &&
          meals.map((meal) => (
            <li className="meal-item" key={meal.id}>
              <h3>{meal.name}</h3>
              <p className="meal-item-price">${meal.price}</p>
              <img src={`http://localhost:3000/${meal.image}`} alt="" />
              <article className=".meal-item-description">
                {meal.description}
              </article>
              <div className="meal-item-actions">
                <button>Add to Cart</button>
                <button></button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
