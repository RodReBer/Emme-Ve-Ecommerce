import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../index";
import { products } from "../constantsProducts";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [items, setItems] = useState({});

  const categoryId = useParams().categoria;

  const db = getFirestore();

  const itemsCollection = collection(db, "items");

  getDocs(itemsCollection).then((snapshot) => {
    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setItems(docs);
  });

  useEffect(() => {
    const filterProducts = (category) => {
      return new Promise((resolve) => {
        if (category) {
          const categoryProducts = items.filter(
            (product) => product.categoria === category
          );
          resolve(categoryProducts);
        } else {
          resolve(items);
        }
      });
    };

    filterProducts(categoryId)
      .then((filtered) => {
        setFilteredProducts(filtered);
      })
      .catch((error) => {
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
