import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginImg from "../assets/login-banner.webp";
import { useTranslation } from "react-i18next";
import view from "../assets/view.png";
import hide from "../assets/hide.png";
import { useNavigate } from "react-router-dom";
import MyCart from "../components/ForHomePage/MyCart";
import FBicon from "../assets/facebook-circle-logo-240.png";
import ErrorIcon from "../assets/error-icon.png";
import { useAuth } from "../contexts/authentication";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const auth = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (value) => {
    if (!value) {
      setEmailError("Required");
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError(null);
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError("Required");
    } else if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (!/^[A-Za-z0-9]+$/.test(value)) {
      setPasswordError("Invalid characters");
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    validateEmail(email);
    validatePassword(password);

    if (!emailError && !passwordError) {
      try {
        const dataLogin = await auth.login({
          email,
          password,
        });
        if (dataLogin) {
          navigate("/");
        } else {
          console.log("Login failed");
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    } else {
      console.log("Validation errors:", { emailError, passwordError });
    }
  };

  return (
    <>
      <Navbar />
      <MyCart />
      <div className="bg-[#F2F4F7] min-h-screen flex mb-[-3rem]">
        <div className="w-[83%] flex justify-center">
          <div className="w-[100%] mt-[8rem]">
            <div className="flex flex-col w-[47%] ml-[25rem]">
              <div className="flex justify-between items-center">
                <p
                  className="text-gray font-semibold text-medium cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <span className="mx-3">❮</span> {t("back")}
                </p>
                <div className="flex items-center">
                  <p className="text-gray font-semibold text-medium">
                    {t("don't have an account ?")}
                  </p>
                  <button
                    className="text-medium bg-white border border-green rounded-lg px-3 py-2 ml-2 text-green font-semibold hover:bg-green hover:text-white"
                    onClick={() => navigate("/register")}
                  >
                    {t("sign up")}
                  </button>
                </div>
              </div>
              <div className="relative bg-white rounded-lg w-[98%] h-[33rem] shadow-xl ml-3 mt-5 py-8 px-12">
                <h2 className="text-2xl text-gray font-bold w-[90%] mt-4 mb-5">
                  {t("welcome! To continue, please sign in.")}
                </h2>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email" className="text-xs font-medium">
                    {t("email")} <span className="text-red-700">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      placeholder={t("email")}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                      }}
                      onBlur={(e) => validateEmail(e.target.value)}
                      className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none
                          ${emailError ? "border border-red-700" : ""}`}
                      required
                    />
                    {emailError && (
                      <>
                        <div className="absolute top-5 right-2 w-[1.3rem]">
                          <img src={ErrorIcon} alt="error-icon" />
                        </div>
                        <div className="text-red-700 absolute text-xs font-semibold top-[-1.2rem] left-[3rem]">
                          {emailError}
                        </div>
                      </>
                    )}
                  </div>
                  <label htmlFor="password" className="text-xs font-medium">
                    {t("password")} <span className="text-red-700">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder={t("password")}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        validatePassword(e.target.value);
                      }}
                      onBlur={(e) => validatePassword(e.target.value)}
                      className={`mt-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none ${
                        passwordError ? "border border-red-700" : ""
                      }`}
                      required
                    />
                    <div
                      className="w-[1.5rem] absolute right-[3%] top-[35%]"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? (
                        <img src={hide} alt="hide-password" />
                      ) : (
                        <img src={view} alt="view-password" />
                      )}
                    </div>
                    {passwordError && (
                      <>
                        <div className="absolute top-5 right-2 w-[2rem] flex justify-end bg-white">
                          <img
                            src={ErrorIcon}
                            alt="error-icon"
                            className="w-[1.3rem] "
                          />
                        </div>
                        <div className="text-red-700 absolute text-xs font-semibold top-[-1.2rem] left-[4.5rem]">
                          {passwordError}
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-[#338F25] text-sm font-semibold my-5 cursor-pointer">
                    {t("forgot password")}
                  </p>

                  <button
                    type="submit"
                    className="bg-[#00794E] w-[100%] rounded-xl text-white text-base py-3 hover:bg-[#329C78]"
                  >
                    {t("sign in")}
                  </button>

                  <p className="w-[100%] text-center my-3 font-semibold">
                    {t("or")}
                  </p>
                  <div className="relative">
                    <div className="absolute top-[22%] left-[23%]">
                      <img
                        src={FBicon}
                        alt="facebook-icon"
                        className="w-[1.5rem]"
                      />
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
              className="min-h-[71rem] object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
