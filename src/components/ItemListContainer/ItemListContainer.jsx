import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Product, Loader } from "../index";
import { getFirestore, collection, getDocs, orderBy, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryId = useParams().categoria;


  useEffect(() => {
    const db = getFirestore();
    const queryCollections = categoryId ? collection(db, "items") : query(collection(db, "items"), orderBy("categoria", "asc"))
    const queryFilter = categoryId ? query(queryCollections, where("categoria", "==", categoryId)) : queryCollections
    getDocs(queryFilter)
      .then(resp => setFilteredProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [categoryId]);

  if (loading) {
    return <Loader />;
  }

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
