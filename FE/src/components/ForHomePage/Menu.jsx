import React from "react";
import MenuIcon from "../../assets/menu.svg";
import { useTranslation } from "react-i18next";
import menuOne from "../../assets/pizza-v3.webp";
import menuTwo from "../../assets/Cheesy_Square_210x232.webp";
import menuThree from "../../assets/ValuSet.webp";
import menuFour from "../../assets/Appetizer_210x232.webp";
import menuFive from "../../assets/card_Chicken.webp";
import menuSix from "../../assets/card_Pasta.webp";
import menuSeven from "../../assets/card_Salad.webp";
import menuEight from "../../assets/card_Desserts.webp";

export default function Menu() {
  const { t } = useTranslation();

  const menu = [
    { src: menuOne, label: t("pizza") },
    { src: menuTwo, label: t("cheesy puff & square pizza") },
    { src: menuThree, label: t("value set") },
    { src: menuFour, label: t("appetizer") },
    { src: menuFive, label: t("chicken") },
    { src: menuSix, label: t("pasta") },
    { src: menuSeven, label: t("salad & steak") },
    { src: menuEight, label: t("drinks & desserts") },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex ml-[21rem] mb-5">
        <div className="w-[2rem]">
          <img src={MenuIcon} alt="menu-icon" />
        </div>
        <h3 className="text-[1.35rem] font-bold text-soft-black">
          {t("menu")}
        </h3>
      </div>
      <div className="w-[77rem] h-[29rem] grid grid-cols-6 gap-x-5 mx-auto">
        {menu.map((item, index) => (
          <div className="w-[11rem] relative" key={index}>
            <img
              src={item.src}
              alt={item.label}
              className="object-cover rounded-xl w-[100%]"
            />
            <p className="absolute top-[66%] left-2 w-[11rem] flex justify-center text-sm text-white font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
