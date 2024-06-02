import React from "react";
import ProOne from "../../assets/proone.webp";
import ProTwo from "../../assets/protwo.webp";
import ProThree from "../../assets/prothree.webp";
import ProFour from "../../assets/profour.webp";
import { useTranslation } from "react-i18next";
import Icon from "../../assets/special-deals.svg";
import Menu from "../../assets/menu.svg";

export default function PromotionOfMonth() {
  const { t } = useTranslation();

  const promotionDeals = [
    { src: ProOne, label: "pro-one" },
    { src: ProTwo, label: "pro-two" },
    { src: ProThree, label: "pro-three" },
    { src: ProFour, label: "pro-four" },
  ];
  return (
    <div className="w-screen flex flex-col mt-10 ">
      <div className="flex ml-[20rem]">
        <div className="w-[2rem] flex items-center">
          <img src={Icon} alt="icon-deal" />
        </div>
        <h3 className="text-[1.35rem] font-bold text-soft-black">
          {t("promotion of the month")}
        </h3>
      </div>
      <div className="grid grid-cols-2 w-[80rem] gap-8 mx-auto mt-4 mb-8">
        {promotionDeals.map((deal, index) => (
          <div key={index}>
            <img
              src={deal.src}
              alt={deal.label}
              className="w-[100%] rounded-xl cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
