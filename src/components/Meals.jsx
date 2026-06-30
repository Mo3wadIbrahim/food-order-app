import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHTTP.js";
const initialData = {};
export default function Meals() {
  const { data: meals, isLoading } = useHttp(
    "http://localhost:3000/meals",
    initialData,
    [],
  );
  if (isLoading) {
    return <p>Loading Data...</p>;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
}
