import Cart from "./components/Cart.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { ContextProvider } from "./store/CartContext.jsx";
import { UderProgressProvidor } from "./store/UserProgressContext.jsx";
function App() {
  return (
    <UderProgressProvidor>
      <ContextProvider>
        <Header />
        <Meals />
        <Cart />
      </ContextProvider>
    </UderProgressProvidor>
  );
}

export default App;
