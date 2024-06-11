import React from "react";
import { useTranslation } from "react-i18next";
import chicA from "../../assets/chic1.webp";
import chicB from "../../assets/chic2.webp";
import chicC from "../../assets/chic3.webp";
import chicD from "../../assets/chic4.webp";

export default function chicken() {
  const { t } = useTranslation();

  const chickens = [
    { src: chicA, label: t("BBQ Chicken Wings 6 pcs."), price: 149 },
    { src: chicB, label: t("Korean Style Chicken Wings 6 pcs"), price: 149 },
    { src: chicC, label: t("BBQ Chicken Wings 10"), price: 219 },
    { src: chicD, label: t("Korean Style Chicken Wings 10 pcs"), price: 219 },
  ];
  return (
    <div className="w-[55rem] mt-5">
      <h1 className="text-green text-5xl font-bold">{t("select chicken")}</h1>
      <div className="grid grid-cols-3 gap-y-5 mt-7 gap-x-9">
        {chickens.map((item, index) => (
          <div
            className="w-[18rem] h-[19rem] rounded-xl border border-blue-100 hover:shadow-lg "
            key={index}
          >
            <img src={item.src} alt={item.label} className="w-[100%] mt-1" />
            <p className="text-green text-medium pl-3 mt-2">฿{item.price}</p>
            <h4 className="text-grey font-semibold text-xl pl-3 mt-1">
              {item.label}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
