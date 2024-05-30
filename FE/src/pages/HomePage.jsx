import React from "react";
import { useNavigate } from "react-router-dom";
import SpecialSlides from "../components/SpecialSlides";
import Navbar from "../components/Navbar";

export default function HomePage() {
  // const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <Navbar />
      <SpecialSlides />
    </div>
  );
}
