"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addItem = (product, quantity) => {
    setCartTotal((total) => total + quantity);
    console.log(`product: ${product} and qty: ${cartTotal}`);
  };
  return (
    <Context.Provider
      value={{
        cartTotal,
        addItem,
        toggleCart,
        isCartOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
