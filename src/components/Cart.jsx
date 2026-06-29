import UserProgressContext from "../store/UserProgressContext.jsx";
import CartContext from "../store/CartContext.jsx";

import { use } from "react";
import Modal from "./UI/Modal.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const { progress, hideCart, showCheckout } = use(UserProgressContext);

  const { items, addItem, removeItem } = use(CartContext);
  const cartTotalPrice = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );
  return (
    <Modal
      className="cart"
      open={progress === "cart"}
      onClose={progress === "cart" ? hideCart : null}
    >
      <h2 className="center">Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addItem={addItem}
            removeItem={removeItem}
          />
        ))}
      </ul>
      <p className="cart-total">
        Cart Total Price: {currencyFormatter.format(cartTotalPrice)}
      </p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={showCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
