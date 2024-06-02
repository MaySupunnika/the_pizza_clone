import React from "react";
import Navbar from "../components/Navbar";
import SlideCard from "../components/ForPizzaPage/SlideCard";
import Cart from "../components/ForPizzaPage/Cart";
import Pizza from "../components/ForPizzaPage/Pizza";
import Footer from "../components/Footer";

export default function PizzaPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-start ml-[19rem] pt-[6rem]">
        <Cart />
        <div className="mt-[3.5rem] flex flex-col mr-5">
          <SlideCard />
          <Pizza />
        </div>
      </div>
      <Footer />
    </>
  );
}
