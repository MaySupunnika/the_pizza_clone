import React from "react";
import SwitchToggle from "./SwitchToggle";
import LocationDropDown from "./LocationDropDown";
import Logo from "../assets/logo.svg";
import RewardIcon from "../assets/reward_icon.svg";
import SwitchLang from "./SwitchLang";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="fixed z-[999]">
      <div className="w-screen h-[6rem] drop-shadow-set bg-white flex justify-center items-center">
        <div className="w-[4rem] cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} alt="logo-pizza" />
        </div>
        <SwitchToggle />
        <LocationDropDown />
        <div className="flex flex-col items-center justify-center border-r px-8 h-[3.5rem] border-gray-100 cursor-pointer">
          <div className="w-[1.3rem] mb-2">
            <img src={RewardIcon} alt="reward-icon" />
          </div>
          <p className=" text-green text-xs font-semibold">{t("Reward")}</p>
        </div>
        <SwitchLang />
        <div
          className="w-[15rem] h-[2.7rem] flex justify-center items-center border border-green rounded-lg font-bold text-lg text-green hover:text-white hover:bg-soft-green cursor-pointer"
          onClick={() => navigate("/login")}
        >
          {t("Sign in / Sign up")}
        </div>
      </div>
    </div>
  );
}
