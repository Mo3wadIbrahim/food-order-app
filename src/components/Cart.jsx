import UserProgressContext from "../store/UserProgressContext.jsx";
import CartContext from "../store/CartContext.jsx";

import { use } from "react";
import Modal from "./UI/Modal.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";

export default function Cart() {
  const { progress, hideCart } = use(UserProgressContext);

  const { items, addItem, removeItem } = use(CartContext);
  const cartTotalPrice = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );
  return (
    <Modal className="cart" open={progress === "cart"}>
      <h2 className="center">Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img
              height={150}
              src={`http://localhost:3000/${item.image}`}
              alt="Item Image"
            />
            <h3>{item.name}</h3>
            <p className="cart-item-actions">
              Quantity: {item.quantity}
              <Button textOnly onClick={() => addItem(item)}>
                +
              </Button>
              <Button textOnly onClick={() => removeItem(item)}>
                -
              </Button>
            </p>
          </li>
        ))}
      </ul>
      <p className="cart-total">
        Cart Total Price: {currencyFormatter.format(cartTotalPrice)}
      </p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        <Button onClick={hideCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
