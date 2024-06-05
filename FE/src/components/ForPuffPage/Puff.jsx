import React from "react";
import { useTranslation } from "react-i18next";
import PuffOne from "../../assets/crabStick.webp";
import PuffTwo from "../../assets/spicyBBQ.webp";
import PuffThree from "../../assets/ham&Mushroom.webp";
import PuffFour from "../../assets/cheesyPuff.webp";
import PuffFive from "../../assets/cheesyPuffTripleMeat.webp";
import PuffSix from "../../assets/cheesyPuffChickenChili.webp";
import PuffSeven from "../../assets/cheesyPuffSausageCrabStick.webp";

export default function Puff() {
  const { t } = useTranslation();

  const puff = [
    {
      src: PuffOne,
      label: t("crab sticks and sausage"),
      price: 159,
      detail: t(
        "Thousand Island Sauce, Mozzarella Cheese, Parsley sausage, Crab stick, Sourcream sauce and Dried parsley"
      ),
    },
    {
      src: PuffTwo,
      label: t("spicy bbq chicken"),
      price: 159,
      detail: t(
        "Pizza sauce, Mozzarella Cheese, BBQ Chicken, Red&amp;Green Chili, BBQ sauce and Dried parsley"
      ),
    },
    {
      src: PuffThree,
      label: t("ham & mushroom"),
      price: 159,
      detail: t(
        "Pizza sauce, Mozzarella Cheese, Mushroom, Ham, Sourcream sauce and Dried parsley"
      ),
    },
    {
      src: PuffFour,
      label: t("cheesy puff cheese trio"),
      price: 149,
      detail: t(
        "Ham, Bacon, Onion, Mozzarella Cheese, Gouda Cheese, Parmesan Galic Cheese and Cheddar Cheese Sauce"
      ),
    },
    {
      src: PuffFive,
      label: t("cheesy puff triple meat"),
      price: 149,
      detail: t(
        "Ham, Italian Sausage, Bacon, Galic Butter, Mozzarella Cheese, Gouda Cheese, Parmesan Galic Cheese, Pizza Sauce and Cheddar Cheese Sauce"
      ),
    },
    {
      src: PuffSix,
      label: t("cheesy puff chicken chili"),
      price: 149,
      detail: t(
        "BBQ Chicken, Galic Butter, Red&amp;Green Chili, Mozzarella Cheese, Gouda Cheese, Parmesan Galic Cheese and Cheddar Cheese Sauce"
      ),
    },
    {
      src: PuffSeven,
      label: t("cheesy puff sausage & crab stick"),
      price: 149,
      detail: t(
        "Parsley Sausage, Crab Stick, Galic Butter,  Mozzarella Cheese, Gouda Cheese, Parmesan Galic Cheese and Thousand Island Sauce"
      ),
    },
  ];
  return (
    <div className="w-[55rem] mt-5">
      <h1 className="text-green text-5xl font-bold">
        {t("select cheesy puff & square pizza")}
      </h1>
      <div className="grid grid-cols-2 gap-y-8 gap-x-8 mt-7">
        {puff.map((item, index) => (
          <div
            className="w-[100%] h-[38rem] rounded-xl border border-blue-100 flex flex-col cursor-pointer hover:shadow-xl pb-5"
            key={index}
          >
            <div className="w-[100%] h-[50%] ">
              <img src={item.src} alt={item.label} className="rounded-xl" />
            </div>
            <p className="text-green text-[1.3rem] font-semibold mt-12 pl-6">
              ฿ {item.price}
            </p>
            <h2 className="text-[#414142] text-[1.3rem] mt-2 pl-6 font-semibold">
              {item.label}
            </h2>
            <p className="text-gray w-[97%] h-[15%] pl-6 mt-2 font-medium text-[0.9rem]">
              {item.detail}
            </p>
            <button className="w-[90%] h-[10%] bg-green text-white mx-auto mb-2 mt-5 font-semibold text-lg rounded-xl hover:bg-[#339D78]">
              {t("view detail")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
