import { CartProvider } from "./providers/CartProvider";
import { UserProvider } from "./providers/UserContext/UserContext";
import { MainRoutes } from "./routes";
import { GlobalStyled } from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyled />
      <UserProvider>
        <CartProvider>
          <MainRoutes />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
