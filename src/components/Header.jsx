import { use } from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
// import Modal from "./Modal.jsx";
// import { currencyFormatter } from "../util/formatting.js";
export default function Header() {
  const { items } = use(CartContext);
  const itemsQuantity = items.reduce((total, item) => total + item.quantity, 0);
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
            Cart ( {itemsQuantity} )
          </Button>
        </nav>
      </header>
    </>
  );
}
