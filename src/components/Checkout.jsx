import UserProgressContext from "../store/UserProgressContext.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";

import { use } from "react";
import Modal from "./UI/Modal.jsx";
import Button from "./UI/Button.jsx";
import Input from "./UI/Input.jsx";

export default function Checkout() {
  const { progress, showCart, hideCheckout } = use(UserProgressContext);
  const { items } = use(CartContext);

  const cartTotalPrice = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );
  return (
    <Modal
      className={"checkout"}
      open={progress === "checkout"}
      onClose={progress === "checkout" ? hideCheckout : null}
    >
      <h3>Total Amount: {currencyFormatter.format(cartTotalPrice)}</h3>
      <form>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button textOnly onClick={hideCheckout}>
            Close
          </Button>
          <Button textOnly onClick={showCart}>
            Return to Cart
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
