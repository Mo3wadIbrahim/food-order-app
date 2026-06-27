import { useReducer, createContext, useContext } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
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
    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    );
    if (existingCartItemIndex > -1) {
      const oldItems = [...state.items];
      const updatedItems = oldItems.filter(
        (item) => item.id !== action.item.id,
      );
      return { ...state, items: updatedItems };
    } else {
      // handle item not exist
    }
  }
  return state;
}
export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return <CartContext>{children}</CartContext>;
}
