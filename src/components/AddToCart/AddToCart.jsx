import { useContext } from "react";
import { listCartContext } from "../../contexts/CartContextProvider";

const AddToCart = ({id}) => {
  let { addProduct } = useContext(listCartContext);

  return (
    <>
      <button
        type="button"
        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-600 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        onClick={()=> addProduct(id)}
      >
        Añadidr al carrito
      </button>
    </>
  );
};
export default AddToCart;
