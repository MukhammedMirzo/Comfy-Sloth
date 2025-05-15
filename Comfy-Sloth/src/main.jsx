import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./Context/ProductContext/product_context.jsx";
import { UserProvider } from "./Context/UserContext/user_context.jsx";
import { CartProvider } from "./Context/CardContext/card_context.jsx";
import { FilterProvider } from "./Context/FillterContext/fillter_context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ProductProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductProvider>
    </UserProvider>
  </StrictMode>
);
