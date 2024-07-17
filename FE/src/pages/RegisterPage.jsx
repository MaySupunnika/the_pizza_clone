import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import SignupImg from "../assets/register-banner.webp";
import MyCart from "../components/ForHomePage/MyCart";
import { useNavigate } from "react-router-dom";
import FBicon from "../assets/facebook-circle-logo-240.png";
import view from "../assets/view.png";
import hide from "../assets/hide.png";
import Checkbox from "@mui/material/Checkbox";
import ErrorIcon from "../assets/error-icon.png";

import { useAuth } from "../contexts/authentication";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { Stack } from "@mui/material";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";

export default function RegisterPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const auth = useAuth();

  const [clickSignupEmail, setClickSignupEmail] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSelectGender, setIsSelectGender] = useState(" ");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [dobError, setDOBError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [genderError, setGenderError] = useState(null);
  const [checkboxError, setCheckboxError] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPW, setShowConfirmPW] = useState(false);

  const validateFirstName = (fName) => {
    if (!fName) {
      setFirstNameError("Required");
    } else if (!/^[A-Za-zก-ฮ0-9]+$/.test(fName)) {
      setFirstNameError("First name can only contain A-Z,a-z,ก-ฮ and 0-9");
    } else {
      setFirstNameError(null);
    }
  };

  const validateLastName = (lName) => {
    if (!lName) {
      setLastNameError("Required");
    } else if (!/^[A-Za-zก-ฮ0-9]+$/.test(lName)) {
      setLastNameError("Last name can only contain A-Z,a-z,ก-ฮ and 0-9");
    } else {
      setLastNameError(null);
    }
  };

  const validateBirthDate = (birthDate) => {
    if (!birthDate) {
      setDOBError("Required");
    } else if (new Date(birthDate) > new Date()) {
      setDOBError("Birthdate cannot be in the future.");
    } else {
      setDOBError(null);
    }
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

  const validateConfirmPassword = (value) => {
    if (!value) {
      setConfirmPasswordError("Required");
    } else if (value !== password) {
      setConfirmPasswordError("Password do not match");
    } else {
      setConfirmPasswordError(null);
    }
  };

  const validatePhoneNumber = (value) => {
    if (!value) {
      setPhoneNumberError("Required");
    } else if (!/^0\d{9}$/.test(value)) {
      setPhoneNumberError("Phone number must be 10 digits and start with 0");
    } else {
      setPhoneNumberError(null);
    }
  };

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
    if (event.target.checked) {
      setCheckboxError(null);
    } else {
      setCheckboxError("Required");
    }
  };

  const handleRadioGender = (event) => {
    setIsSelectGender(event.target.value);
    if (event.target.value) {
      setGenderError(null);
    } else {
      setGenderError("Required");
    }
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

  const handleSubmit = async () => {
    if (
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !dobError &&
      !passwordError &&
      !phoneNumberError &&
      !genderError
    ) {
      const dataRegister = await auth.register({
        first_name: firstName,
        last_name: lastName,
        email,
        birth_date: birthDate,
        password,
        phone: phoneNumber,
        gender: isSelectGender,
      });
      if (dataRegister) {
        navigate("/login");
      } else {
        console.log("Register failed");
      }
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

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-3 mt-5">
                      <div className="flex flex-col relative">
                        <label
                          className="text-xs font-medium"
                          htmlFor="firstName"
                        >
                          {t("first name")}{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={t("first name")}
                          value={firstName}
                          onChange={(e) => {
                            setFirstName(e.target.value);
                            validateFirstName(e.target.value);
                          }}
                          onBlur={(e) => validateFirstName(e.target.value)}
                          className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none
                                ${firstNameError ? "border-red-700" : ""}`}
                        />
                        {firstNameError && (
                          <>
                            <div className="absolute top-9 right-2 w-[1.3rem]">
                              <img src={ErrorIcon} alt="error-icon" />
                            </div>
                            <div className="text-red-700 text-xs font-semibold absolute top-0 left-[4.7rem]">
                              {firstNameError}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="flex flex-col relative">
                        <label
                          className="text-xs font-medium"
                          htmlFor="lastName"
                        >
                          {t("last name")}{" "}
                          <span className="text-red-500 "> *</span>
                        </label>
                        <input
                          type="text"
                          placeholder={t("last name")}
                          value={lastName}
                          onChange={(e) => {
                            setLastName(e.target.value);
                            validateLastName(e.target.value);
                          }}
                          onBlur={(e) => validateLastName(e.target.value)}
                          className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none
                                ${lastNameError ? "border-red-700" : ""}`}
                        />
                        {lastNameError && (
                          <>
                            <div className="absolute top-9 right-2 w-[1.3rem]">
                              <img src={ErrorIcon} alt="error-icon" />
                            </div>
                            <div className="text-red-700 text-xs font-semibold absolute top-0 left-[4.7rem]">
                              {lastNameError}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="flex flex-col mt-[0.65rem] relative">
                        <label
                          htmlFor="birthDate"
                          className="text-xs font-medium mb-[0.38rem]"
                        >
                          Birth Date
                          <span className="text-red-500"> *</span>
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Stack
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: dobError
                                    ? "rgb(185 28 28) !important"
                                    : "rgb(152 162 179) !important",
                                  borderWidth: "1px !important",
                                  borderRadius: "8px !important",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "rgb(152 162 179) !important",
                                  borderWidth: "1px !important",
                                },
                                "&.Mui-focused.Mui-error fieldset": {
                                  borderColor: "rgb(152 162 179) !important",
                                },
                              },
                              "& .MuiInputBase-root.Mui-error": {
                                color: "rgb(200 204 219) !important",
                              },
                              "& .MuiOutlinedInput-root.Mui-error": {
                                "& fieldset": {
                                  borderColor: "rgb(152 162 179) !important",
                                },
                              },
                              "& .MuiInputBase-input": {
                                padding: "0 0 0 12px !important",
                                width: "453px !important",
                                height: "42px !important",
                              },
                            }}
                          >
                            <DatePicker
                              value={dayjs(birthDate)}
                              onChange={(date) => {
                                setBirthDate(date);
                                validateBirthDate(date);
                              }}
                              onBlur={() => validateBirthDate(birthDate)}
                            />
                          </Stack>
                          {dobError && (
                            <>
                              <div className="text-red-700 bg-white text-xs font-semibold absolute left-[4.54rem] z-10">
                                {dobError}
                              </div>
                            </>
                          )}
                        </LocalizationProvider>
                      </div>
                      <div className="flex flex-col relative mt-2">
                        <label className="text-xs font-medium" htmlFor="email">
                          {t("email")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder={t("email")}
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            validateEmail(e.target.value);
                          }}
                          onBlur={(e) => validateEmail(e.target.value)}
                          className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none
                                ${emailError ? "border-red-700" : ""}`}
                        />
                        {emailError && (
                          <>
                            <div className="absolute top-9 right-2 w-[1.3rem] bg-white">
                              <img src={ErrorIcon} alt="error-icon" />
                            </div>
                            <div className="text-red-700 text-xs font-semibold absolute top-0 left-[3rem]">
                              {emailError}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="flex flex-col relative">
                        <label
                          className="text-xs font-medium"
                          htmlFor="password"
                        >
                          {t("password")}{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder={t("password")}
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            validatePassword(e.target.value);
                          }}
                          onBlur={(e) => validatePassword(e.target.value)}
                          className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none
                                ${passwordError ? "border-red-700" : ""}`}
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
                        {passwordError && (
                          <>
                            <div className="absolute top-9 right-[0.7rem] w-[1.3rem] bg-white">
                              <img src={ErrorIcon} alt="error-icon" />
                            </div>
                            <div className="text-red-700 text-xs font-semibold absolute top-0 left-[4.3rem]">
                              {passwordError}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="flex flex-col relative">
                        <label
                          className="text-xs font-medium"
                          htmlFor="confirmPassword"
                        >
                          {t("confirm password")}{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type={showConfirmPW ? "text" : "password"}
                          name="confirmPassword"
                          placeholder={t("password")}
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            validateConfirmPassword(e.target.value);
                          }}
                          onBlur={(e) =>
                            validateConfirmPassword(e.target.value)
                          }
                          className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none ${
                            confirmPasswordError ? "border-red-700" : ""
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
                        {confirmPasswordError && (
                          <>
                            <div className="absolute top-9 right-[0.7rem] w-[1.3rem] bg-white">
                              <img src={ErrorIcon} alt="error-icon" />
                            </div>
                            <div className="text-red-700 text-xs font-semibold absolute top-0 left-[7.7rem]">
                              {confirmPasswordError}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="flex flex-col relative">
                        <label
                          className="text-xs font-medium"
                          htmlFor="phoneNumber"
                        >
                          {t("phone number")}
                          <span className="text-red-500"> *</span>
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          placeholder="xxx-xxx-xxxx"
                          value={phoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                            validatePhoneNumber(e.target.value);
                          }}
                          onBlur={(e) => validatePhoneNumber(e.target.value)}
                          className={`my-2 border border-[#98A2B3] rounded-lg w-[100%] py-2 pl-2 placeholder:text-sm focus:outline-none
                                ${phoneNumberError ? "border-red-700" : ""}`}
                        />
                        {phoneNumberError && (
                          <>
                            <div className="absolute top-9 right-[0.7rem] w-[1.3rem] bg-white">
                              <img src={ErrorIcon} alt="error-icon" />
                            </div>
                            <div className="text-red-700 text-xs font-semibold absolute top-0 left-[6.4rem] w-[10rem]">
                              {phoneNumberError}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="ml-2 mt-2">
                      <FormControl>
                        <FormLabel className="text-xs font-medium">
                          {t("gender")}
                        </FormLabel>
                        <RadioGroup
                          value={isSelectGender}
                          onChange={handleRadioGender}
                          name="gender"
                        >
                          <div className="flex relative">
                            <Radio
                              value="female"
                              label={t("female")}
                              color="success"
                              size="sm"
                              className="mr-8 font-medium"
                              sx={{
                                "&.Mui-checked": {
                                  color: "#008556",
                                },
                              }}
                            />
                            <Radio
                              value="male"
                              label={t("male")}
                              color="success"
                              size="sm"
                              className="mr-8 font-medium"
                              sx={{
                                "&.Mui-checked": {
                                  color: "#008556",
                                },
                              }}
                            />
                            <Radio
                              value="none"
                              label={t("none")}
                              color="success"
                              size="sm"
                              className="font-medium"
                              sx={{
                                "&.Mui-checked": {
                                  color: "#008556",
                                },
                              }}
                            />
                            {genderError && (
                              <div className="absolute text-red-700 text-xs font-semibold">
                                {genderError}
                              </div>
                            )}
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="w-[100%] h-[1px] bg-blue-100 my-3"></div>
                    <div className="relative">
                      <div className="flex items-start ">
                        <Checkbox
                          name="condition"
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
                          <div className="text-red-700 text-xs font-semibold absolute top-[6.7rem] left-[2.5rem]">
                            {checkboxError}
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      onClick={() => dataRegister && navigate("/login")}
                      className="bg-green px-3 py-[0.6rem] rounded-xl text-white text-sm mt-8 hover:bg-[#329C78]"
                    >
                      {t("create account")}
                    </button>
                  </form>
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
