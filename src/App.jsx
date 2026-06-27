import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { ContextProvider } from "./store/CartContext.jsx";
function App() {
  return (
    <ContextProvider>
      <Header />
      <Meals />
    </ContextProvider>
  );
}

export default App;
