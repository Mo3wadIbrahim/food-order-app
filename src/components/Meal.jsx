import { use } from "react";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
export default function Meal({ meal }) {
  const { items, addItem, removeItem } = use(CartContext);
  const isItemExist = items.findIndex((item) => item.id === meal.id);
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="Logo" />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <div className="meal-item-actions">
          {isItemExist > -1 ? (
            <Button textOnly onClick={() => removeItem(meal.id)}>
              Remove from Cart
            </Button>
          ) : (
            <Button onClick={() => addItem(meal)}>Add to Cart</Button>
          )}
        </div>
      </article>
    </li>
  );
}
