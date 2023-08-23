import React from "react";
import { products } from "../components/constantsProducts";
import { useState } from "react";

export const listCartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [listCart, setListCart] = useState([]);
  console.log(listCart)


  const addProduct = (id) => {
    const productoAdd = products.find((product) => product.id == id);


    const productToMaintain = listCart.filter((product) => product.id !== id);
    let add = true;

    for (let product of listCart) {
      if (product.id == id) {
        let quantity = product.quantity;

        if (quantity < productoAdd.stock) {
          const newQuantity = { ...product, quantity: quantity + 1 };
          setListCart([...productToMaintain, newQuantity]);
        }
        add = false;
        break;
      }
      add &&
        setListCart([...productToMaintain, { ...productoAdd, quantity: 1 }]);
    }
    console.log(listCart)


  };
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
      }}
    >
      {children}
    </listCartContext.Provider>
  );
};
export default CartContextProvider;
