import { useState } from "react";
import { products } from "../constantsProducts";

const ItemCount = ({ stock, inicial, onAdd, id }) => {
  const [cantidad, setCantidad] = useState(inicial);

  const producto = products.find((product) => product.id == id);
  const inStock = producto.inStock;
  let textCarrito = "Agregar al carrito";

  function updateTextCarrito(inStock) {
    if (!inStock) {
      textCarrito = "No disponible";
    }
  }

  updateTextCarrito(inStock);
  const increment = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <button
        className={`flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-600 px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full ${
          inStock
            ? "cursor-pointer hover:bg-gray-700"
            : "cursor-not-allowed bg-opacity-70 hover:bg-gray-700/50"
        }`}
        onClick={(e) => {
          if (inStock) {
            e.preventDefault(); // Evitar el envío del formulario
            onAdd(cantidad);
          }
        }}
        disabled={!inStock}
      >
        {textCarrito}
      </button>

      <div className="flex">
        <button
          type="button"
          className="rounded-md bg-gray-600 px-2.5 py-1.5 text-2xl font-semibold text-white shadow-sm hover:bg-gray-700 w-[40%] flex items-center justify-center"
          onClick={decrement}
        >
          -
        </button>
        <span className="w-[20%] flex items-center justify-center">
          {cantidad}
        </span>
        <button
          type="button"
          className="rounded-md bg-gray-600 px-2.5 py-1.5 text-2xl font-semibold text-white shadow-sm hover:bg-gray-700 w-[40%] flex items-center justify-center"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
