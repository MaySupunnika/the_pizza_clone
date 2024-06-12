import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import crispy_onions from "../../assets/crispy-onions.webp";
import french_fries from "../../assets/french-fries.webp";
import spicy_chic_pop from "../../assets/spicy-chic-pop.webp";
import spicy_shrimp_pop from "../../assets/spicy-shrimp-pop.webp";
import bread_stick from "../../assets/bread-sticks.webp";
import cheese_garlic_bread from "../../assets/cheese-garlic-bread.webp";
import garlic_bread from "../../assets/garlic-bread.webp";
import chic_nugget from "../../assets/chic-nugget-6-ketchup.webp";
import chic_stick from "../../assets/chic-sticks.webp";
import fish_finger from "../../assets/fish-fingers.webp";
import cheese_stick from "../../assets/cheese-sticks.webp";
import baked_spinach from "../../assets/baked-spinach.webp";
import bbq_dipping from "../../assets/bbq-dip-sauce.webp";
import cocktail_sauce from "../../assets/cocktail-sauce.webp";

export default function Appetizer() {
  const { t } = useTranslation();

  const [clickAppetizer, setClickAppetizer] = useState(null);
  const clickedRef = useRef([]);
  const [quantity, setQuantity] = useState({});

  const handleClickAppetizer = (index) => {
    setClickAppetizer(index === clickAppetizer ? null : index);
  };

  const handleChangeQuantity = (e, index) => {
    const { value } = e.target;
    setQuantity((prev) => ({ ...prev, [index]: parseInt(value, 10) || 0 }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        clickedRef.current.every((ref) => ref && !ref.contains(event.target))
      ) {
        setClickAppetizer(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clickAppetizer]);

  const appetizers = [
    { src: crispy_onions, label: t("crispy onions"), price: 79 },
    { src: french_fries, label: t("french fries"), price: 69 },
    { src: spicy_chic_pop, label: t("spicy chicken pop"), price: 89 },
    { src: spicy_shrimp_pop, label: t("spicy shrimp pop"), price: 99 },
    { src: bread_stick, label: t("bread sticks"), price: 79 },
    { src: cheese_garlic_bread, label: t("cheese garlic bread"), price: 89 },
    { src: garlic_bread, label: t("garlic bread"), price: 79 },
    {
      src: chic_nugget,
      label: t("chicken nuggets 6 pcs with ketchup"),
      price: 89,
    },
    { src: chic_stick, label: t("chicken sticks"), price: 89 },
    { src: fish_finger, label: t("fish fingers"), price: 89 },
    { src: cheese_stick, label: t("cheese sticks"), price: 89 },
    { src: baked_spinach, label: t("baked spinach"), price: 179 },
    { src: bbq_dipping, label: t("bbq dipping sauce"), price: 10 },
    { src: cocktail_sauce, label: t("cocktail sauce"), price: 10 },
  ];
  return (
    <div className="w-[55rem] mt-5">
      <h1 className="text-green text-5xl font-bold">{t("select appetizer")}</h1>
      <div className="grid grid-cols-3 gap-y-5 mt-7">
        {appetizers.map((appetizer, index) => (
          <div
            className="relative w-[17rem] h-[17rem] rounded-xl border border-blue-200 hover:shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              handleClickAppetizer(index);
            }}
            ref={(el) => (clickedRef.current[index] = el)}
            key={index}
          >
            <div className="w-[100%] h-[65%] ">
              <img
                src={appetizer.src}
                alt={appetizer.label}
                className="rounded-xl"
              />
            </div>
            <p className="text-green text-medium pl-3">฿{appetizer.price}</p>
            <h3 className="text-gray font-semibold text-xl pl-3">
              {appetizer.label}
            </h3>
            {clickAppetizer === index && (
              <div
                className="flex items-end h-[100%] w-[100%] absolute top-0 bg-gradient-to-t from-white"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="number"
                  className="w-[20%] h-[20%] rounded-l-xl border-2 border-green flex justify-start text-gray pl-4 mb-3 focus:outline-none"
                  min={1}
                  value={quantity[index] || 1}
                  onChange={(e) => handleChangeQuantity(e, index)}
                />
                <button className="w-[80%] h-[20%] bg-green rounded-r-xl text-white font-semibold mb-3">
                  {t("add to cart")} ฿
                  {quantity[index]
                    ? quantity[index] * appetizer.price
                    : appetizer.price}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
