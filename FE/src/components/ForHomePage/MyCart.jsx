import React, { useState } from "react";
import MyCartIcon from "../../assets/grocery-store.png";
import { useTranslation } from "react-i18next";
import CartIcon from "../../assets/cart-plus.svg";

export default function MyCart() {
  const { t } = useTranslation();
  const [clicked, setClicked] = useState(false);
  const [closed, setClosed] = useState(false);

  const handleClickCart = () => {
    setClicked(true);
  };

  const handleCloseCart = () => {
    setClosed(true);
    setClicked(false);
  };
  return (
    <>
      <div
        className="fixed z-[9999] top-[50%] right-0 w-[4.3rem] h-[6.5rem] bg-green rounded-l-xl shadow-xl flex flex-col items-center justify-center hover:w-[4.55rem] cursor-pointer"
        onClick={handleClickCart}
      >
        <div className="w-[1.5rem]">
          <img src={MyCartIcon} alt="my-cart-icon" />
        </div>
        <p className="text-white text-sm mt-1">{t("my cart")}</p>
      </div>
      {clicked && (
        <div className="w-[18rem] h-[40rem] bg-white rounded-l-xl shadow-xl fixed top-[20%] right-0 flex flex-col items-center z-[999999]">
          <p
            className="text-green text-sm w-[100%] flex justify-end pr-3 pt-3 cursor-pointer font-medium"
            onClick={handleCloseCart}
          >
            X {t("close")}
          </p>
          <div className="w-[4rem] mt-[8rem]">
            <img src={CartIcon} alt="cart-icon" />
          </div>
          <p className="text-[#98A2B3] font-medium text-md text-center mt-5">
            {t("select category and product to order.")}
          </p>
        </div>
      )}
    </>
  );
}
