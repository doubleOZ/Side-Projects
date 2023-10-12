"use client";

import { useStateContext } from "@/context/StateContext";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const { cartTotal } = useStateContext();

  return (
    <div className="flex justify-around py-5">
      <div className="flex space-x-2">
        <div className="">logo</div>
        <div className="">Brownie Time!</div>
      </div>
      <div className="flex space-x-4">
        <div className="">Categories</div>
        <div>Product Page</div>
        <Link href="/cart" className="relative flex cursor-pointer">
          <ShoppingCart />
          {cartTotal > 0 && (
            <span
              className="absolute flex rounded-full bg-orange-400 h-5 w-5 bottom-5 left-5 items-center justify-center"
              // style={{ lineHeight: "30px" }}
            >
              {cartTotal}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
