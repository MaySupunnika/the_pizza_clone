import React from "react";
import SlideCard from "../components/SlideCard";
import Cart from "../components/ForPizzaPage/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Pizza from "../components/ForPizzaPage/Pizza";
import Puff from "../components/ForPuffPage/Puff";
import PuffById from "../components/ForPuffPage/PuffById";
import ValueSet from "../components/ForValueSetPage/ValueSet";

export default function ChangePage() {
  return (
    <>
      <Navbar />
      <div className="flex pt-[8rem] ml-[19rem]">
        <div>
          <SlideCard />
          <Routes>
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/puff" element={<Puff />} />
            <Route path="/puff/:id" element={<PuffById />} />
            <Route path="/value-set" element={<ValueSet />} />
          </Routes>
        </div>
        <Cart />
      </div>
      <Footer />
    </>
  );
}
