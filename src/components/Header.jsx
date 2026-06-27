import logo from "../assets/logo.jpg";
// eslint-disable-next-line no-unused-vars
import Button from "./UI/Button.jsx";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>reactfood</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
