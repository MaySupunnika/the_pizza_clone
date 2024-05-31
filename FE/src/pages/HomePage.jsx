import React from "react";
import { useNavigate } from "react-router-dom";
import SpecialSlides from "../components/SpecialSlides";
import Navbar from "../components/Navbar";
import MyCart from "../components/MyCart";
import PromotionOfMonth from "../components/PromotionOfMonth";
import SpecialOffers from "../components/SpecialOffers";

export default function HomePage() {
  // const navigate = useNavigate();
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Navbar />
      <SpecialSlides />
      <MyCart />
      <PromotionOfMonth />
      <SpecialOffers />
    </div>
  );
}
