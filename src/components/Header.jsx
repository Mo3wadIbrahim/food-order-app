import { use } from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
// import Modal from "./Modal.jsx";
// import { currencyFormatter } from "../util/formatting.js";
export default function Header() {
  const { items } = use(CartContext);
  const { showCart } = use(UserProgressContext);
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="" />
          <h1>reactfood</h1>
        </div>
        <nav>
          <Button textOnly onClick={showCart}>
            Cart Items: ( {items.length} ) - Quantity: ({" "}
            {items.reduce((total, item) => {
              return total + item.quantity;
            }, 0)}{" "}
            )
          </Button>
        </nav>
      </header>
    </>
  );
}
