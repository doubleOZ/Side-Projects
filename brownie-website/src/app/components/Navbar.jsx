import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-around py-5">
      <div className="flex space-x-2">
        <div className="">logo</div>
        <div className="">Brownie Time!</div>
      </div>
      <div className="flex space-x-4">
        <div className="">Categories</div>
        <div>Product Page</div>
        <Link href="/cart" className="relative">
          <ShoppingCart className="relative inline-block " />
          <span className="absolute block rounded-full bg-orange-400 h-5 w-5 bottom-5 left-5">
            <div className="flex justify-center">1</div>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
