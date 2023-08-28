import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Product } from '../index';
import { products } from '../constantsProducts';

const ItemListContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const  categoryId  = useParams().categoria;

  useEffect(() => {
    const filterProducts = (category) => {
      return new Promise((resolve) => {
        if (category) {
          const categoryProducts = products.filter(product => product.categoria === category);
          resolve(categoryProducts);
        } else {
          resolve(products);
        }
      });
    };

    filterProducts(categoryId)
      .then(filtered => {
        setFilteredProducts(filtered);
      })
      .catch(error => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {filteredProducts.map((product) => (
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

export default ItemListContainer;
