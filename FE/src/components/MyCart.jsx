import React, { useState } from "react";
import MyCartIcon from "../assets/grocery-store.png";

export default function MyCart() {
  return (
    <div className="fixed z-[9999] top-[50%] right-0 w-[4.3rem] h-[6.5rem] bg-green rounded-l-xl shadow-xl flex flex-col items-center justify-center">
      <div className="w-[1.5rem]">
        <img src={MyCartIcon} alt="my-cart-icon" />
      </div>
      <p className="text-white text-sm mt-1">My Cart</p>
    </div>
  );
}
