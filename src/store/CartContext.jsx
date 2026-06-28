import { useReducer, createContext } from "react";

const CartContext = createContext({
  items: [],
  // eslint-disable-next-line no-unused-vars
  addItem: (item) => {},
  // eslint-disable-next-line no-unused-vars
  removeItem: (id) => {},
});
function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    );
    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = updatedItems[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: [...updatedItems] };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    );
    const updatedItems = [...state.items];
    const existingCartItem = { ...state.items[existingCartItemIndex] };
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: [...updatedItems] };
  }
  return state;
}
export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatch({ type: "ADD_ITEM", item: item });
  }

  function removeItem(item) {
    dispatch({ type: "REMOVE_ITEM", item });
  }
  const contextValue = {
    items: state.items,
    addItem,
    removeItem,
  };
  return <CartContext value={contextValue}>{children}</CartContext>;
}

export default CartContext;
