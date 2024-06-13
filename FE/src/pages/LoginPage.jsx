import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginImg from "../assets/login-banner.webp";
import { useTranslation } from "react-i18next";
import view from "../assets/view.png";
import hide from "../assets/hide.png";
import { useNavigate } from "react-router-dom";
import MyCart from "../components/ForHomePage/MyCart";
import "boxicons";

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Navbar />
      <MyCart />
      <div className="bg-[#F2F4F7] h-screen flex mb-[-3rem]">
        <div className="w-[83%] flex justify-center">
          <div className="w-[90%] mt-[8rem]">
            <div className="flex flex-col w-[45%] ml-[25rem]">
              <div className="flex justify-between items-center">
                <p
                  className="text-gray font-semibold text-medium cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  {" "}
                  <span className="mx-3">❮</span> {t("back")}
                </p>
                <div className="flex items-center">
                  <p className="text-gray font-semibold text-medium">
                    {t("don't have an account ?")}
                  </p>
                  <button
                    className="text-medium bg-white border border-green rounded-lg px-3 py-2 ml-2 text-green font-semibold hover:bg-green hover:text-white"
                    onClick={() => navigate("/signup")}
                  >
                    {t("sign up")}
                  </button>
                </div>
              </div>
              <div className="relative bg-white rounded-lg w-[98%] h-[33rem] shadow-xl ml-3 mt-5 py-8 px-12">
                <h2 className="text-2xl text-gray font-bold w-[90%] mt-4 mb-5">
                  {t("welcome! To continue, please sign in.")}
                </h2>
                <form>
                  <label className="text-xs font-medium">
                    {t("email")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder={t("email")}
                    className="my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none"
                  />
                  <label className="text-xs font-medium">
                    {t("password")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={t("password")}
                    className="mt-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none"
                  />
                  <div
                    className="w-[1.5rem] absolute right-[13%] top-[48.5%]"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? (
                      <img src={hide} alt="hide-password" />
                    ) : (
                      <img src={view} alt="view-password" />
                    )}
                  </div>
                  <p className="text-[#338F25] text-sm font-semibold my-5 cursor-pointer">
                    {t("forgot password")}
                  </p>

                  <button className="bg-[#00794E] w-[100%] rounded-xl text-white text-base py-3 hover:bg-[#329C78]">
                    {t("sign in")}
                  </button>

                  <p className="w-[100%] text-center my-3 font-semibold">
                    {t("or")}
                  </p>
                  <div className="relative">
                    <div className="absolute top-[22%] left-[23%]">
                      <box-icon
                        name="facebook-circle"
                        type="logo"
                        color="#ffffff"
                      ></box-icon>
                    </div>
                    <button className="bg-[#1877F2] w-[100%] rounded-xl text-white text-base py-3 pl-8">
                      {t("sign in with facebook")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-[45%]">
            <img
              src={LoginImg}
              alt="lopgin-img"
              className="h-screen object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
