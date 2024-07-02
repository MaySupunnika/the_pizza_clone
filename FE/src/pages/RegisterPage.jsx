import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import SignupImg from "../assets/register-banner.webp";
import MyCart from "../components/ForHomePage/MyCart";
import { useNavigate } from "react-router-dom";
import FBicon from "../assets/facebook-circle-logo-240.png";
import DatePicker from "../components/ForRegisterPage/DatePicker";
import CalendarIcon from "../assets/calendar.png";
import view from "../assets/view.png";
import hide from "../assets/hide.png";
import RadioGender from "../components/ForRegisterPage/GenderRadio";
import Checkbox from "@mui/material/Checkbox";
import ErrorIcon from "../assets/error-icon.png";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function RegisterPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [clickSignupEmail, setClickSignupEmail] = useState(false);
  const [clickCalendar, setClickCalendar] = useState(false);
  const calendarRef = useRef(null);
  const [selectDOB, setSelectDOB] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPW, setShowConfirmPW] = useState(false);

  const [checkboxError, setCheckboxError] = useState(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setClickCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCalendar = () => {
    setClickCalendar(!clickCalendar);
  };

  const handleDateChange = (date) => {
    setSelectDOB(date.format("DD / MM / YYYY"));
    setClickCalendar(false);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordConfirm = () => {
    setShowConfirmPW(!showConfirmPW);
  };

  const handleSignupEmail = () => {
    setClickSignupEmail(true);
  };

  const handleBackSignupEmail = () => {
    if (clickSignupEmail) {
      setClickSignupEmail(false);
    } else {
      navigate("/login");
    }
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    dob: Yup.string()
      .required("required")
      .max(new Date(), "DOB cannot be in the future"),
    email: Yup.string().email("Invalid email").required("required"),
    password: Yup.string()
      .required("required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/, "Phone number is not valid")
      .required("required"),
    gender: Yup.string().required("required"),
  });

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
    if (event.target.checked) {
      setCheckboxError("");
    } else {
      setCheckboxError("requied");
    }
  };

  const handleSubmit = (values) => {
    if (!isCheckboxChecked) {
      setCheckboxError("You must agree to receive information.");

      return;
    }

    console.log("Your information:", values);
    navigate("/login");
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
                  onClick={handleBackSignupEmail}
                >
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
              {clickSignupEmail ? (
                <div className="w-[98%] h-[48.5rem] rounded-lg shadow-xl bg-white ml-3 mt-5 flex flex-col px-8">
                  <h3 className="text-gray font-semibold text-[1.7rem] w-[20rem] mt-9">
                    {t("sign up for exclusive delivery deals!")}
                  </h3>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="grid grid-cols-2 gap-x-3 gap-y-3 mt-5">
                          <div className="flex flex-col relative">
                            <label
                              className="text-xs font-medium"
                              htmlFor="firstName"
                            >
                              {t("first name")}{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <Field
                              type="text"
                              name="firstName"
                              placeholder={t("first name")}
                              className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none
                                ${
                                  errors.firstName && touched.firstName
                                    ? "border-red-700"
                                    : ""
                                }`}
                            />
                            {errors.firstName && touched.firstName && (
                              <div className="absolute top-9 right-2 w-[1.3rem]">
                                <img src={ErrorIcon} alt="error-icon" />
                              </div>
                            )}
                            <ErrorMessage
                              name="firstName"
                              component="div"
                              className="text-red-700 text-xs font-semibold absolute top-0 left-[4.7rem]"
                            />
                          </div>
                          <div className="flex flex-col relative">
                            <label
                              className="text-xs font-medium"
                              htmlFor="lastName"
                            >
                              {t("last name")}{" "}
                              <span className="text-red-500 "> *</span>
                            </label>
                            <Field
                              name="lastName"
                              type="text"
                              placeholder={t("last name")}
                              className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none
                                ${
                                  errors.lastName && touched.lastName
                                    ? "border-red-700"
                                    : ""
                                }`}
                            />
                            {errors.lastName && touched.lastName && (
                              <div className="absolute top-9 right-2 w-[1.3rem]">
                                <img src={ErrorIcon} alt="error-icon" />
                              </div>
                            )}
                            <ErrorMessage
                              name="lastName"
                              component="div"
                              className="text-red-700 text-xs font-semibold absolute top-0 left-[4.7rem]"
                            />
                          </div>
                          <div
                            className="flex flex-col relative"
                            onClick={handleCalendar}
                          >
                            <div className="relative">
                              <label
                                className="text-xs font-medium"
                                htmlFor="dob"
                              >
                                {t("date of birth")}
                                <span className="text-red-500"> *</span>
                              </label>
                              <Field
                                type="text"
                                name="dob"
                                placeholder="DD / MM / YYYY"
                                value={selectDOB}
                                onChange={(e) => setSelectDOB(e.target.value)}
                                className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none
                             ${
                               errors.dob && touched.dob ? "border-red-700" : ""
                             }
                                `}
                              />
                              {clickCalendar && (
                                <div
                                  className="absolute top-[100%] z-50 bg-white rounded-xl border border-[#98A2B3]"
                                  ref={calendarRef}
                                >
                                  <DatePicker onDateChange={handleDateChange} />
                                </div>
                              )}
                              <img
                                src={CalendarIcon}
                                alt="calendar-icon"
                                className="w-[1rem] absolute top-[55%] right-2 cursor-pointer"
                              />
                              {errors.dob && touched.dob && (
                                <div className="absolute top-11 right-2 w-[1.3rem] bg-white">
                                  <img src={ErrorIcon} alt="error-icon" />
                                </div>
                              )}
                              <ErrorMessage
                                name="dob"
                                component="div"
                                className="text-red-700 text-xs font-semibold absolute top-1 left-[5.5rem]"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col relative mt-2">
                            <label
                              className="text-xs font-medium"
                              htmlFor="email"
                            >
                              {t("email")}{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <Field
                              type="email"
                              name="email"
                              placeholder={t("email")}
                              className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none
                                ${
                                  errors.email && touched.email
                                    ? "border-red-700"
                                    : ""
                                }`}
                            />
                            {errors.email && touched.email && (
                              <div className="absolute top-9 right-2 w-[1.3rem] bg-white">
                                <img src={ErrorIcon} alt="error-icon" />
                              </div>
                            )}
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-700 text-xs font-semibold absolute top-0 left-[3rem]"
                            />
                          </div>
                          <div className="flex flex-col relative">
                            <label
                              className="text-xs font-medium"
                              htmlFor="password"
                            >
                              {t("password")}{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <Field
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder={t("password")}
                              className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none
                                ${
                                  errors.password && touched.password
                                    ? "border-red-700"
                                    : ""
                                }`}
                            />
                            <div
                              className="absolute w-[1.2rem] top-[50%] right-3"
                              onClick={togglePassword}
                            >
                              {showPassword ? (
                                <img src={view} alt="view-password" />
                              ) : (
                                <img src={hide} alt="hide-password" />
                              )}
                            </div>
                            {errors.password && touched.password && (
                              <div className="absolute top-9 right-[0.7rem] w-[1.3rem] bg-white">
                                <img src={ErrorIcon} alt="error-icon" />
                              </div>
                            )}
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-red-700 text-xs font-semibold absolute top-0 left-[4.3rem]"
                            />
                          </div>
                          <div className="flex flex-col relative">
                            <label
                              className="text-xs font-medium"
                              htmlFor="confirmPassword"
                            >
                              {t("confirm password")}{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <Field
                              type={showConfirmPW ? "text" : "password"}
                              name="confirmPassword"
                              placeholder={t("password")}
                              className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none ${
                                errors.confirmPassword &&
                                touched.confirmPassword
                                  ? "border-red-700"
                                  : ""
                              }`}
                            />
                            <div
                              className="absolute w-[1.2rem] top-[50%] right-3"
                              onClick={togglePasswordConfirm}
                            >
                              {showConfirmPW ? (
                                <img src={view} alt="view-password" />
                              ) : (
                                <img src={hide} alt="hide-password" />
                              )}
                            </div>
                            {errors.confirmPassword &&
                              touched.confirmPassword && (
                                <div className="absolute top-9 right-[0.7rem] w-[1.3rem] bg-white">
                                  <img src={ErrorIcon} alt="error-icon" />
                                </div>
                              )}
                            <ErrorMessage
                              name="confirmPassword"
                              component="div"
                              className="text-red-700 text-xs font-semibold absolute top-0 left-[7.7rem]"
                            />
                          </div>
                          <div className="flex flex-col relative">
                            <label
                              className="text-xs font-medium"
                              htmlFor="phoneNumber"
                            >
                              {t("phone number")}
                              <span className="text-red-500"> *</span>
                            </label>
                            <Field
                              type="text"
                              name="phoneNumber"
                              placeholder="xxx-xxx-xxxx"
                              className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none
                                ${
                                  errors.phoneNumber && touched.phoneNumber
                                    ? "border-red-700"
                                    : ""
                                }`}
                            />
                            {errors.phoneNumber && touched.phoneNumber && (
                              <div className="absolute top-9 right-[0.7rem] w-[1.3rem] bg-white">
                                <img src={ErrorIcon} alt="error-icon" />
                              </div>
                            )}
                            <ErrorMessage
                              name="phoneNumber"
                              component="div"
                              className="text-red-700 text-xs font-semibold absolute top-0 left-[6.4rem] w-[10rem]"
                            />
                          </div>
                        </div>
                        <div className="ml-2 mt-2">
                          <RadioGender />
                        </div>
                        <div className="w-[100%] h-[1px] bg-blue-100 my-3"></div>
                        <div className="relative">
                          <div className="flex items-start ">
                            <Checkbox
                              checked={isCheckboxChecked}
                              onChange={handleCheckboxChange}
                              sx={{
                                color: "#008556",
                                "&.Mui-checked": {
                                  color: "#008556",
                                },
                              }}
                            />
                            <div className="text-sm w-[85%] text-gray mt-2">
                              {t(
                                "I am interested in and would like to receive information about products, services, free gifts, discounts, promotions and other relevant activities from 1112 Delivery and"
                              )}{" "}
                              <span className="text-green text-sm underline decoration-2">
                                {t("affiliated companies and relevant brands")}
                              </span>
                            </div>
                            {checkboxError && (
                              <div className="text-red-700 text-xs font-semibold absolute top-0">
                                {checkboxError}
                              </div>
                            )}
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="bg-green px-3 py-[0.6rem] rounded-xl text-white text-sm mt-8 hover:bg-[#329C78]"
                        >
                          {t("create account")}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              ) : (
                <div className=" bg-white rounded-lg w-[98%] h-[26.5rem] shadow-xl ml-3 mt-5 py-8 px-12">
                  <h2 className="text-2xl text-gray font-bold w-[90%] mt-4 mb-5">
                    {t("sign up for exclusive delivery deals!")}
                  </h2>
                  <div className="relative">
                    <div className="absolute top-[22%] left-[23%]">
                      <img
                        src={FBicon}
                        alt="facebook-icon"
                        className="w-[1.5rem]"
                      />
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
                    {t("and ")}
                    <span className="text-green underline">
                      {t("privacy statement ")}
                    </span>
                    {t("of the minor food group pcl.")}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-[45%]">
            <img
              src={SignupImg}
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
