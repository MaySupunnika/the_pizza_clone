import React from "react";
import { useTranslation } from "react-i18next";
import SuperValue from "../../assets/super-value.webp";
import Pan from "../../assets/TPCnew_category_menu_pan.webp";
import CrispyThin from "../../assets/TPCnew_category_menu_crispythin.webp";
import Extreme from "../../assets/TPCnew_category_menu_extreme.webp";
import NYMax from "../../assets/NYMaxNPD_1080x720_EN.webp";
import NYMega from "../../assets/NY_12-eng.webp";
import All from "../../assets/dealofthemonth-v2.webp";

import { useNavigate, Routes, Route } from "react-router-dom";
import ValuePizza from "./ForSuperValue/valuePizza";

export default function Pizza() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const cards = [
    {
      src: SuperValue,
      label: t("super value"),
      path: "/pizza/valuepizza",
    },
    { src: Pan, label: t("pan"), path: "/pizza/pan" },
    { src: CrispyThin, label: t("crispy thin"), path: "/pizza/crispythin" },
    { src: Extreme, label: t("extreme crust"), path: "/pizza/extreme" },
    {
      src: NYMax,
      label: t("new york pizza max 9 inches"),
      path: "/pizza/nympizza",
    },
    {
      src: NYMega,
      label: t("new york pizza mega 12 inches"),
      path: "/pizza/newyorkpizza",
    },
    { src: All, label: t("all"), path: "/pizza/all" },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="w-[55rem] flex flex-col mt-5">
      <h2 className="text-5xl font-bold text-soft-black">
        {t("select pizza")}
      </h2>
      <div className="grid grid-cols-3 mt-7 gap-x-5 gap-y-7 ">
        {cards.map((card, index) => (
          <div
            className="flex flex-col w-[17.3rem] h-[16rem] rounded-xl border border-blue-100 hover:shadow-lg "
            key={index}
            onClick={() => handleCardClick(card.path)}
          >
            <div className="w-[100%] h-[80%] ">
              <img src={card.src} alt={card.label} className="rounded-t-xl" />
            </div>
            <p className="pl-5 pt-2 text-xl font-semibold w-[100%] h-[32%] rounded-b-xl">
              {card.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
