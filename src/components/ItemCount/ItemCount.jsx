import { useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import { products } from "../constantsProducts";

const ItemCount = ({ id }) => {
  const producto = products.find((product) => product.id == id);
  const stock = producto.stock;

  const [count, setCount] = useState(0);

  const buttonDecreaseHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const buttonIncreaseHandler = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <AddToCart id={id} />
        <div className="flex">
          <button
            type="button"
            className="rounded-md bg-gray-600 px-2.5 py-1.5 text-2xl font-semibold text-white shadow-sm hover:bg-gray-700 w-[40%] flex items-center justify-center"
            onClick={buttonDecreaseHandler}
          >
            -
          </button>
          <span className="w-[20%] flex items-center justify-center">
            {count}
          </span>
          <button
            type="button"
            className="rounded-md bg-gray-600 px-2.5 py-1.5 text-2xl font-semibold text-white shadow-sm hover:bg-gray-700 w-[40%] flex items-center justify-center"
            onClick={buttonIncreaseHandler}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
