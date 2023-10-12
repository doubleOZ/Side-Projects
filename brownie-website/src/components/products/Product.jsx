"use client";

import { useStateContext } from "@/context/StateContext";
import React from "react";

const Product = () => {
  const { addItem } = useStateContext();
  return (
    <div>
      <button onClick={() => addItem("fudge brownie", 1)}>
        <div>Product</div>
      </button>
    </div>
  );
};

export default Product;
