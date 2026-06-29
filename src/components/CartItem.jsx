import Button from "./UI/Button.jsx";
import { currencyFormatter } from "../util/formatting.js";

export default function CartItem({ item, addItem, removeItem }) {
  const onIncrease = () => addItem(item);
  const onDecrease = () => removeItem(item);
  return (
    <li className="cart-item">
      {/* <img
        height={150}
        src={`http://localhost:3000/${item.image}`}
        alt="Item Image"
      /> */}
      <h3>
        {item.name} : {item.quantity} x {currencyFormatter.format(item.price)} ={" "}
        {currencyFormatter.format(item.price * item.quantity)}
      </h3>
      <p className="cart-item-actions">
        <Button textOnly onClick={onDecrease}>
          -
        </Button>
        <span>{item.quantity}</span>
        <Button textOnly onClick={onIncrease}>
          +
        </Button>
      </p>
    </li>
  );
}
