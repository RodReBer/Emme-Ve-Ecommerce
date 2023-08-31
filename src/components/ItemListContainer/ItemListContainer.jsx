import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../index";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Loader from "../Loader/Loader"; // Importa tu componente Loader aquí

const ItemListContainer = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  const categoryId = useParams().categoria;
  const db = getFirestore();
  const itemsCollection = collection(db, "items");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(itemsCollection);
        const docs = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data(),}));

        if (categoryId) {
          const categoryProducts = docs.filter(
            (product) => product.categoria === categoryId
          );
          setFilteredProducts(categoryProducts);
        } else {
          setFilteredProducts(docs);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
