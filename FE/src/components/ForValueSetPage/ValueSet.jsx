import React from "react";
import SetOne from "../../assets/set-one.webp";
import SetTwo from "../../assets/set-two.webp";
import SetThree from "../../assets/set-three.webp";
import SetFour from "../../assets/set-four.webp";
import SetFive from "../../assets/set-five.webp";
import SetSix from "../../assets/set-six.webp";
import SetSeven from "../../assets/set-seven.webp";
import SetEight from "../../assets/set-eaight.webp";
import SetNine from "../../assets/set-nine.webp";
import SetTen from "../../assets/set-ten.webp";
import { useTranslation } from "react-i18next";

export default function ValueSet() {
  const { t } = useTranslation();

  const cards = [
    {
      src: SetOne,
      label: t("family combo set 399"),
      price: 399,
      detail: t(
        "Super Deal! Enjoy with medium pan pizza with classic topping, BBQ chicken wing 4 pcs., spaghetti 129.- and waffle fries"
      ),
    },
    {
      src: SetTwo,
      label: t("hit combo set 359"),
      price: 359,
      detail: t(
        "Enjoy with a group with medium pan pizza with classic topping, BBQ chicken wing 4 pcs. and spaghetti 129.- "
      ),
    },
    {
      src: SetThree,
      label: t("combo set 359 "),
      price: 359,
      detail: t(
        "Enjoy with the gang with medium pan pizza with classic topping, Spaghetti 129.-, Crispy onions, Chicken Pop"
      ),
    },
    {
      src: SetFour,
      label: t("extreme combo set 499"),
      price: 499,
      detail: t(
        "Enjoy with your group with medium extreme crust pizza with classic topping, BBQ chicken wing 4 pcs., spaghetti 129.- and chicken sticks."
      ),
    },
    {
      src: SetFive,
      label: t("super combo set 699"),
      price: 699,
      detail: t(
        "Super Deal! Enjoy with medium extreme crust pizza with classic topping, medium pan pizza with classic topping, spaghetti 129.-, BBQ chicken wing 4 pcs., chicken nuggets and waffle fries."
      ),
    },
    {
      src: SetSix,
      label: t("combo set 299"),
      price: 299,
      detail: t(
        "Fulfill your meal with medium crispy thin pizza with classic topping, spaghetti 129.- and chicken nuggets"
      ),
    },
    {
      src: SetSeven,
      label: t("solo set 159 a"),
      price: 159,
      detail: t(
        "Set for one enjoy with small pan pizza with classic topping and chicken pop. Fulfill your meal with medium crispy thin pizza with classic topping, spaghetti 129.- and chicken nuggets"
      ),
    },
    {
      src: SetEight,
      label: t("solo set 159 b"),
      price: 159,
      detail: t(
        "Duo combination with small pan pizza with classic topping and Crispy onions"
      ),
    },
    {
      src: SetNine,
      label: t("solo set 199 a"),
      price: 199,
      detail: t(
        "Fulfill your meal with a small pan pizza with classic toppings and BBQ chicken wings 4 pieces."
      ),
    },
    {
      src: SetTen,
      label: t("solo set 199 b"),
      price: 199,
      detail: t("So good with so square pizza and chicken nuggets."),
    },
  ];

  return (
    <div className="flex flex-col w-[55rem] mt-5">
      <h2 className="text-5xl font-bold text-soft-black">
        {t("select value set")}
      </h2>
      <div className="grid grid-cols-2 gap-7 mt-3">
        {cards.map((card, index) => (
          <div
            className="w-[100%] h-[36rem] border border-blue-200 rounded-xl cursor-pointer hover:shadow-xl"
            key={index}
          >
            <div className="w-[100%] h-[auto]">
              <img src={card.src} alt={card.label} className="rounded-t-xl" />
            </div>
            <div className="mt-[3rem] ml-5 ">
              <p className="text-green text-[1.3rem] font-semibold">
                ฿ {card.price}
              </p>
              <h3 className="text-[#414142] text-[1.3rem] font-semibold">
                {card.label}
              </h3>
              <p className="text-gray w-[97%] h-[5.5rem] font-medium text-[0.9rem] mt-3">
                {card.detail}
              </p>
              <button className="w-[90%] h-[3rem] bg-green text-white mx-auto mt-8 font-semibold text-lg rounded-xl hover:bg-[#339D78]">
                {t("view detail")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
