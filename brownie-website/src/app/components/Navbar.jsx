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
        <Link href="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
