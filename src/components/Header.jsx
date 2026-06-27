import { use } from "react";
import { CartContext } from "../store/CartContext.jsx";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
export default function Header() {
  const { items } = use(CartContext);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>reactfood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({items.length})</Button>
      </nav>
    </header>
  );
}
