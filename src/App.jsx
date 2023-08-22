import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import { Productos, Home, NoPage } from "./routes/constants-pages";
import { ProductoId } from "./components/index";

export default function App() {

  return (
    <div className="h-full">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />

          <Route path="/productos" element={<Productos />} />

          <Route path="/productos/categoria/:categoria" element={<Productos />} />


          <Route path="/productos/:id" element={<ProductoId  />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}