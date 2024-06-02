import React from "react";
import CartIcon from "../../assets/cart-plus.svg";
import { useTranslation } from "react-i18next";

export default function cart() {
  const { t } = useTranslation();
  return (
    <div className="fixed right-[20rem] z-10 ">
      <div className="w-[20rem] h-[45rem] rounded-xl border-[1.5px] border-[#EBEBEB] flex flex-col items-center pt-[8rem] mt-[3.5rem] cursor-pointer">
        <div className="w-[4rem]">
          <img src={CartIcon} alt="cart-icon" />
        </div>
        <p className="text-[#98A2B3] font-medium text-lg px-4 text-center mt-4">
          {t("select category and product to order.")}
        </p>
      </div>
    </div>
  );
}
