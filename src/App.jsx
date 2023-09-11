import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import {
  Productos,
  Home,
  NoPage,
  Carrito,
  DetailListContainer,
  Envios,
  Pago,
} from "./routes/constants-pages";
import { ScrollToTop } from "./components/index";

import CartContextProvider from "./contexts/CartContextProvider";

const routes = [
  { path: "/", element: <Home /> },
  { path: "*", element: <NoPage /> },
  { path: "/productos", element: <Productos /> },
  { path: "/productos/categoria/:categoria", element: <Productos /> },
  { path: "/productos/:id", element: <DetailListContainer /> },
  { path: "/carrito", element: <Carrito /> },
  { path: "/envios", element: <Envios /> },
  { path: "/pago", element: <Pago /> },

];

const App = () => {
  const routeElements = routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ));

  return (
    <CartContextProvider>
      <div className="h-full">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>{routeElements}</Routes>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
};

export default App;
