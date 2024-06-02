import React from "react";
import { useNavigate } from "react-router-dom";
import SpecialSlides from "../components/ForHomePage/SpecialSlides";
import Navbar from "../components/Navbar";
import MyCart from "../components/ForHomePage/MyCart";
import PromotionOfMonth from "../components/ForHomePage/PromotionOfMonth";
import SpecialOffers from "../components/ForHomePage/SpecialOffers";
import Menu from "../components/ForHomePage/Menu";
import Footer from "../components/Footer";
export default function HomePage() {
  // const navigate = useNavigate();
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Navbar />
      <SpecialSlides />
      <MyCart />
      <PromotionOfMonth />
      <SpecialOffers />
      <Menu />
      <Footer />
    </div>
  );
}
