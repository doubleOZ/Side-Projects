"use client";

import { useStateContext } from "@/context/StateContext";
import React from "react";

const Product = () => {
  const { addItem } = useStateContext();
  const product = "fudge brownies";
  return (
    <div>
      <button onClick={() => addItem(`${product}`, 1)}>
        <div>Product</div>
      </button>
    </div>
  );
};

export default Product;
