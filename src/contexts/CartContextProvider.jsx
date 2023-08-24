import React from "react";
import { useState } from "react";

export const listCartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [listCart, setListCart] = useState([]);

  const updateProductQuantity = (productIdx, newQuantity) => {
    const updatedProducts = [...listCart];
    updatedProducts[productIdx].cantidad = newQuantity;
    setListCart(updatedProducts); // Actualiza el estado de los productos
  };

  const isInCart = (id) => {
    return listCart.some((producto) => producto.id === id);
  };

  const addProduct = (product, cantidad) => {
    if (!isInCart(product.id)) {
      setListCart((prev) => [...prev, { ...product, cantidad }]);
    } else {
      console.error("este producto ya ha sido agregado");
    }
  };
  const getListCart=()=>{
    return listCart;
  }

  const clearCart = () => {
    setListCart([]);
  };

  const remove = (id) => {
    const updateList = listCart.filter((product) => product.id !== id);
    setListCart(updateList);
  };

  return (
    <listCartContext.Provider
      value={{
        remove,
        listCart,
        setListCart,
        addProduct,
        clearCart,
        getListCart,
        updateProductQuantity,
      }}
    >
      {children}
    </listCartContext.Provider>
  );
};
export default CartContextProvider;
