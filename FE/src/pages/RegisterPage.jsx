import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import SignupImg from "../assets/register-banner.webp";
import MyCart from "../components/ForHomePage/MyCart";
import { useNavigate } from "react-router-dom";
import "boxicons";

export default function RegisterPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [clickSignupEmail, setClickSignupEmail] = useState(false);

  const handleSignupEmail = () => {
    setClickSignupEmail(true);
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
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  <span className="mx-3">❮</span> {t("back")}
                </p>
                <div className="flex items-center">
                  <p className="text-gray font-semibold text-medium">
                    {t("already have an account?")}
                  </p>
                  <button
                    className="text-medium bg-white border border-green rounded-lg px-3 py-2 ml-2 text-green font-semibold hover:bg-green hover:text-white"
                    onClick={() => navigate("/login")}
                  >
                    {t("sign in")}
                  </button>
                </div>
              </div>
              <div className=" bg-white rounded-lg w-[98%] h-[26.5rem] shadow-xl ml-3 mt-5 py-8 px-12">
                <h2 className="text-2xl text-gray font-bold w-[90%] mt-4 mb-5">
                  {t("sign up for exclusive delivery deals!")}
                </h2>
                <div className="relative">
                  <div className="absolute top-[22%] left-[23%]">
                    <box-icon
                      name="facebook-circle"
                      type="logo"
                      color="#ffffff"
                    ></box-icon>
                  </div>
                  <button className="bg-[#1877F2] w-[100%] rounded-xl text-white text-base py-3 pl-8">
                    {t("sign up with facebook")}
                  </button>
                </div>
                <p className="w-[100%] text-center my-3 font-semibold">
                  {t("or")}
                </p>
                <button
                  className="bg-[#00794E] w-[100%] rounded-xl text-white text-base py-3 hover:bg-[#329C78]"
                  onClick={handleSignupEmail}
                >
                  {t("sign up with email")}
                </button>
                {clickSignupEmail && (
                  <div className="w-[98%] h-[50rem] rounded-lg shadow-xl bg-white"></div>
                )}
                <p
                  className="text-gray cursor-pointer text-center my-5"
                  onClick={() => navigate("/")}
                >
                  {t("sign up later")}
                </p>

                <p className="text-gray text-sm">
                  {t("by signing up you agree to our")}{" "}
                  <span className="text-green underline">
                    {t("terms & conditions")}
                  </span>{" "}
                  {t("and")}
                  <span className="text-green underline">
                    {t("privacy statement")}
                  </span>
                  {t("of the minor food group pcl.")}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[45%]">
            <img
              src={SignupImg}
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
