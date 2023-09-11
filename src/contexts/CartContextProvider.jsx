import React from "react";
import { useState } from "react";
import { AlertAddToCart, AlertSuccessfully } from "../components";

export const listCartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [listCart, setListCart] = useState([]);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const [priceShipping, setPriceShipping] = useState(0);


  const handleShowNotification = () => {
    setNotificationVisible(true);
  };
  const handleShowSuccessfull = () => {
    setAlertVisible(true);
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
      (item) =>
        item.id === product.id &&
        item.colorSeleccionado === selectedColor &&
        item.talleSeleccionado === selectedSize
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

  const remove = (id, size, color) => {
    const updateList = listCart.filter(
      (product) =>
        product.id !== id ||
        product.colorSeleccionado !== color ||
        product.talleSeleccionado !== size
    );
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
        setPriceShipping,
        priceShipping,
        handleShowSuccessfull,
        setAlertVisible,
      }}
    >
      {children}
      {alertVisible && <AlertSuccessfully />}
      {notificationVisible && <AlertAddToCart />}
    </listCartContext.Provider>
  );
};
export default CartContextProvider;
