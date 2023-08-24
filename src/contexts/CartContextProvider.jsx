import React from "react";
import { useState } from "react";
import { AlertAddToCart } from "../components";

export const listCartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [listCart, setListCart] = useState([]);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleShowNotification = () => {
    setNotificationVisible(true);
  };

  const updateProductQuantity = (productIdx, newQuantity) => {
    const updatedProducts = [...listCart];
    updatedProducts[productIdx].cantidad = newQuantity;
    setListCart(updatedProducts); // Actualiza el estado de los productos
  };

  const isInCart = (id) => {
    return listCart.some((producto) => producto.id === id);
  };

  const calculateTotal = () => {
    let total = 0;
    listCart.forEach((product) => {
      total += product.price * product.cantidad;
    });
    return total;
  };

  const addProduct = (product, cantidad, selectedColor, selectedSize) => {
    const existingProductIndex = listCart.findIndex(
      (item) => item.id === product.id && item.colorSeleccionado === selectedColor && item.talleSeleccionado === selectedSize
    );
  
    if (existingProductIndex === -1) {
      const newQuantity = Math.min(cantidad, product.stock);
      const productWithColorAndSize = {
        ...product,
        cantidad: newQuantity,
        colorSeleccionado: selectedColor,
        talleSeleccionado: selectedSize,
      };
      setListCart([...listCart, productWithColorAndSize]);
  
      handleShowNotification();
      setTimeout(() => {
        setNotificationVisible(false);
      }, 3000);
    } else {
      const currentQuantity = listCart[existingProductIndex].cantidad;
      const newQuantity = currentQuantity + cantidad;
      const maxQuantity = Math.min(newQuantity, product.stock);
  
      const updatedCart = [...listCart];
      updatedCart[existingProductIndex].cantidad = maxQuantity;
      setListCart(updatedCart);
  
      handleShowNotification();
      setTimeout(() => {
        setNotificationVisible(false);
      }, 3000);
    }
  };
  

  const getListCart = () => {
    return listCart;
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
        getListCart,
        updateProductQuantity,
        calculateTotal,
      }}
    >
      {children}
      {notificationVisible && <AlertAddToCart />}
    </listCartContext.Provider>
  );
};
export default CartContextProvider;
