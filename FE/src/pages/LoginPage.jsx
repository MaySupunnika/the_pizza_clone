import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginImg from "../assets/login-banner.webp";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F2F4F7] h-screen flex mb-[-3rem]">
        <div className="w-[60%] mt-[8rem]">
          <div className="flex flex-col w-[45%] ml-[25rem]">
            <div className="flex justify-between items-center">
              <p className="text-gray font-semibold text-medium cursor-pointer">
                {" "}
                <span className="mx-3">❮</span> Back
              </p>
              <div className="flex items-center">
                <p className="text-gray font-semibold text-medium">
                  Don't have an account ?
                </p>
                <button className="text-medium bg-white border border-green rounded-lg px-3 py-2 ml-2 text-green font-semibold">
                  Sign up
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg w-[98%] h-[30rem] shadow-xl ml-3 mt-5"></div>
          </div>
        </div>
        <div className="w-[30%]">
          <img
            src={LoginImg}
            alt="lopgin-img"
            className="h-screen object-cover"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
