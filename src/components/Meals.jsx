import { useState, useEffect } from "react";
import Meal from "./Meal";
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
          meals.map((meal) => <Meal meal={meal} key={meal.id} />)}
      </ul>
    </>
  );
}
