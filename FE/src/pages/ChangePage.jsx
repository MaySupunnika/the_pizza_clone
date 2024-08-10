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
import Appetizer from "../components/ForAppetizerPage/Appetizer";
import Chicken from "../components/ForChickenPage/Chickens.jsx";
import Pasta from "../components/ForPastaPage/Pasta.jsx";
import Salad from "../components/ForSaladPage/Salad.jsx";
import Drinks from "../components/ForDrinkPage/Drinks.jsx";
import ValuePizza from "../components/ForPizzaPage/ForSuperValue/valuePizza.jsx";
import Pan from "../components/ForPizzaPage/ForPan/pan.jsx";
import Crispythin from "../components/ForPizzaPage/ForCrispyThin/crispythin.jsx";
import Extreme from "../components/ForPizzaPage/ForExtremeCrust/extremecrust.jsx";
import NewYork9 from "../components/ForPizzaPage/ForNewYork9/newyork9.jsx";
import NewYork12 from "../components/ForPizzaPage/ForNewYork12/newyork12.jsx";
import All from "../components/ForPizzaPage/ForAll/all.jsx";

export default function ChangePage() {
  return (
    <>
      <Navbar />
      <div className="flex pt-[8rem] ml-[19rem]">
        <div>
          <SlideCard />
          <Routes>
            <Route path="/pizza/*" element={<Pizza />} />
            <Route path="/puff" element={<Puff />} />
            <Route path="/puff/:id" element={<PuffById />} />
            <Route path="/value-set" element={<ValueSet />} />
            <Route path="/appetizers" element={<Appetizer />} />
            <Route path="/chicken" element={<Chicken />} />
            <Route path="/pasta" element={<Pasta />} />
            <Route path="/salad" element={<Salad />} />
            <Route path="/drinks-and-desserts" element={<Drinks />} />

            <Route path="/pizza/valuepizza" element={<ValuePizza />} />
            <Route path="/pizza/pan" element={<Pan />} />
            <Route path="/pizza/crispythin" element={<Crispythin />} />
            <Route path="/pizza/extreme" element={<Extreme />} />
            <Route path="/pizza/nympizza" element={<NewYork9 />} />
            <Route path="/pizza/newyorkpizza" element={<NewYork12 />} />
            <Route path="/pizza/all" element={<All />} />
          </Routes>
        </div>
        <Cart />
      </div>
      <Footer />
    </>
  );
}
