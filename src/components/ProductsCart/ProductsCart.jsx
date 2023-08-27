import { CheckIcon, ClockIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { listCartContext } from "../../contexts/CartContextProvider";
const ProductsCart = ({ products }) => {
  let { updateProductQuantity, remove } = useContext(listCartContext);

  const handleQuantityChange = (productIdx, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    updateProductQuantity(productIdx, newQuantity); // Actualizar en el contexto
  };

  const handleRemoveClick = (productId, productSize, productColor) => {
    remove(productId, productSize, productColor);
  };

  return (
    <>
      <ul
        role="list"
        className="divide-y divide-gray-200 border-b border-t border-gray-200"
      >
        {products.map((product, productIdx) => (
          <li
            key={`${product.id}-${product.talleSeleccionado}-${product.colorSeleccionado}`}
            className="flex py-6 sm:py-10"
          >
            <Link to={`/productos/${product.id}`}>
              <div className="flex-shrink-0">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                />
              </div>
            </Link>

            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-sm">
                      <Link
                        to={`/productos/${product.id}`}
                        className="font-medium text-gray-700 hover:text-gray-800"
                      >
                        {product.name}
                      </Link>
                    </h3>
                  </div>
                  <div className="mt-1 flex text-sm">
                    <p className="text-gray-500">{product.colorSeleccionado}</p>
                    <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                      {product.talleSeleccionado}
                    </p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>

                <div className="mt-4 sm:mt-0 sm:pr-9">
                  <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                    Quantity, {product.name}
                  </label>
                  <select
                    id={`quantity-${productIdx}`}
                    name={`quantity-${productIdx}`}
                    className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm"
                    value={product.cantidad}
                    onChange={(event) =>
                      handleQuantityChange(productIdx, event)
                    }
                  >
                    {[...Array(product.stock).keys()].map((quantity) => (
                      <option key={quantity + 1} value={quantity + 1}>
                        {quantity + 1}
                      </option>
                    ))}
                  </select>

                  <div className="absolute right-0 top-0">
                    <button
                      type="button"
                      className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                      onClick={() =>
                        handleRemoveClick(
                          product.id,
                          product.talleSeleccionado,
                          product.colorSeleccionado
                        )
                      }
                    >
                      <span className="sr-only">Remove</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                {product.inStock ? (
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ClockIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                    aria-hidden="true"
                  />
                )}

                <span>
                  {product.inStock
                    ? "In stock"
                    : `Ships in ${product.leadTime}`}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ProductsCart;
