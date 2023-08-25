import { Link } from "react-router-dom";
import { Product } from "../";
import { useParams } from "react-router-dom";

import { products } from "../constantsProducts";

function getProductsByCategory(products, idCategory) {
  let productos = products.filter(
    (product) => product.categoria === idCategory
  );
  if (productos == undefined) {
    productos = products;
  }
  return productos;
}

const Products = () => {
  const Category = useParams().categoria;

  let productos;

  if (Category !== undefined) {
    productos = getProductsByCategory(products, Category);
  } else {
    // Si Category es undefined, obtén todos los productos
    productos = products;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {productos.map((product) => (
            <Link
              key={product.id}
              to={`/productos/${product.id}`}
              className="group text-sm"
            >
              <Product product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
