"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartTotal, setCartTotal] = useState(0);

  const addItem = (product, quantity) => {
    console.log(`product: ${product} and qty: ${quantity}`);
    setCartTotal((total) => total + quantity);
  };
  return (
    <Context.Provider
      value={{
        cartTotal,
        addItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
