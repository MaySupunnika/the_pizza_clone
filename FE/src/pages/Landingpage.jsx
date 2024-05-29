import React from "react";
import Navbar from "../components/Navbar";
import SlideCard from "../components/SlideCard";
import Cart from "../components/cart";

export default function Landingpage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="mt-[3.5rem] flex flex-col mr-5">
          <SlideCard />
        </div>
        <Cart />
      </div>
    </>
  );
}
