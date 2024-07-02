import React from "react";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <img src={Logo} alt="pizza-logo" className="w-[12rem]" />

      <h2 className="text-gray text-[2rem] font-bold mt-[3rem]"> 404</h2>
      <h3 className="text-gray text-xl font-bold mb-[3rem] ">
        This page cannot be found.
      </h3>
      <button
        className="bg-green text-white font-semibold text-[0.83rem] py-3 px-[2.5rem] rounded-xl"
        onClick={() => navigate("/")}
      >
        Go Back To Home Page
      </button>
    </div>
  );
}
