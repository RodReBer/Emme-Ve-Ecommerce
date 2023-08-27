import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Productos, Home, NoPage, Carrito } from "./routes/constants-pages";
import { ItemDetail, ScrollToTop } from "./components/index";
import CartContextProvider from "./contexts/CartContextProvider";
const App = () => {
  return (
    <CartContextProvider>
      <div className="h-full">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />

            <Route path="*" element={<NoPage />} />

            <Route path="/productos" element={<Productos />} />

            <Route
              path="/productos/categoria/:categoria"
              element={<Productos />}
            />

            <Route path="/productos/:id" element={<ItemDetail />} />

            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
};
export default App;
