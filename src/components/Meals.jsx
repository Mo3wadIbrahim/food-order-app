import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHTTP.js";
import ErrorComponent from "./ErrorComponent.jsx";
const initialData = {};
export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", initialData, []);
  if (isLoading) {
    return <p>Loading Data...</p>;
  }
  if (error) {
    return <ErrorComponent message={error} title={"There is an Error"} />;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
}
