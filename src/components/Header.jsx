import { use, useState } from "react";
import CartContext from "../store/CartContext.jsx";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import Modal from "./Modal.jsx";
import { currencyFormatter } from "../util/formatting.js";
export default function Header() {
  const { items, removeItem } = use(CartContext);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal
        className={"modal"}
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <ul>
          {items.map((item) => (
            <li className="meal-item">
              <article>
                <img src={`http://localhost:3000/${item.image}`} alt="Logo" />
                <div>
                  <h3>{item.name}</h3>
                  <p className="meal-item-price">
                    {currencyFormatter.format(item.price)}
                  </p>
                  <p className="meal-item-description">{item.description}</p>
                </div>
                <div className="meal-item-actions">
                  <Button textOnly onClick={() => removeItem(item.id)}>
                    Remove from Cart
                  </Button>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <Button onClick={() => setShowModal(false)}>Close</Button>
      </Modal>
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="" />
          <h1>reactfood</h1>
        </div>
        <nav>
          <Button
            textOnly
            onClick={() => setShowModal((prevState) => !prevState)}
          >
            Cart ({items.length})
          </Button>
        </nav>
      </header>
    </>
  );
}
