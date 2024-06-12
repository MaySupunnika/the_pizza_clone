import React from "react";
import Logo from "../assets/logo.svg";
import FB from "../assets/logo-fb.svg";
import Line from "../assets/logo-line.svg";
import Visa from "../assets/logo-visa-white.svg";
import MasterCard from "../assets/logo-mastercard-white.svg";
import JCB from "../assets/logo-jcb-white.svg";
import PCI from "../assets/logo-pci-white.svg";
import AppStore from "../assets/AppStore-footer.svg";
import GooglePlay from "../assets/GooglePlay-footer.svg";
import Phone from "../assets/phone-solid-240.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div
      id="footer"
      className="h-[16.3rem]  bg-gray flex flex-col mt-[3rem] relative z-20"
    >
      <div className="flex mx-auto mt-[2rem] mb-7">
        <div className="w-[4rem] mr-5 cursor-pointer">
          <img src={Logo} alt="logo" />
        </div>
        <div className="w-[1.7rem] flex items-center">
          <img src={Phone} alt="phone" />
        </div>
        <h4 className="text-[1.7rem] font-bold flex items-center pt-1 text-soft-gray">
          1112
        </h4>
      </div>
      <div className="flex text-soft-gray gap-x-9 font-semibold mx-auto text-lg">
        <p className="cursor-pointer">{t("about us")}</p>
        <p className="cursor-pointer">{t("contact us")}</p>
        <p className="cursor-pointer">{t("track your orders")}</p>
        <p className="cursor-pointer">{t("find stores")}</p>
        <p className="cursor-pointer">{t("privacy statement")}</p>
      </div>
      <div className="w-[80rem] h-[1px] bg-soft-gray mx-auto mt-5"></div>
      <div className="flex mx-auto mt-6">
        <div className="w-[12rem] flex items-center">
          <p className="text-soft-gray font-semibold text-lg w-[73%]">
            {t("follow us")}:
          </p>
          <div className="w-[4rem] cursor-pointer">
            <img src={FB} alt="facebook" />
          </div>
          <div className="w-[4rem] cursor-pointer">
            <img src={Line} alt="line" />
          </div>
        </div>
        <div className="w-[14rem] flex items-center ml-[4rem]">
          <div className="w-[5rem]">
            <img src={Visa} alt="visa" />
          </div>
          <div className="w-[3rem]">
            <img src={MasterCard} alt="mastercard" />
          </div>
          <div className="w-[3rem]">
            <img src={JCB} alt="jcb" />
          </div>
          <div className="w-[3rem]">
            <img src={PCI} alt="pci" />
          </div>
        </div>
        <div className="w-[20rem] flex ml-[3rem]">
          <div className="w-[100%] cursor-pointer">
            <img src={AppStore} alt="app store" />
          </div>
          <div className="w-[100%] cursor-pointer">
            <img src={GooglePlay} alt="google play" />
          </div>
        </div>
        <p className="text-soft-gray flex items-center text-[0.8rem] ml-[3rem]">
          Copyright © 2010–2024 1112.com. All rights reserved.
        </p>
      </div>
    </div>
  );
}
