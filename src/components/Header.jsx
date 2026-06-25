import logo from "../assets/logo.jpg";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>reactfood</h1>
      </div>
      <nav>
        <button>Card (0)</button>
      </nav>
    </header>
  );
}
