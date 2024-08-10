import React, { useState, useEffect, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import drinkA from "../../assets/drinkA.webp";
import drinkB from "../../assets/drinkB.webp";
import drinkC from "../../assets/drinkC.webp";
import drinkD from "../../assets/drinkD.webp";
import drinkE from "../../assets/drinkE.webp";
import drinkF from "../../assets/drinkF.webp";
import drinkG from "../../assets/drinkG.webp";
import drinkH from "../../assets/drinkH.webp";
import drinkI from "../../assets/drinkI.webp";
import drinkJ from "../../assets/drinkJ.webp";
import drinkK from "../../assets/drinkK.webp";
import drinkL from "../../assets/drinkL.webp";
import { DataContext } from "../../contexts/dataContext";

export default function Drinks() {
  const { t } = useTranslation();
  const { addToCart } = useContext(DataContext);

  const [clickDrink, setClickDrink] = useState(null);
  const clickedRef = useRef([]);
  const [quantity, setQuantity] = useState({});

  const handleClickDrink = (index) => {
    setClickDrink(index === clickDrink ? null : index);
  };

  const handleChangeQuantity = (e, index) => {
    const { value } = e.target;
    setQuantity((prev) => ({ ...prev, [index]: parseInt(value, 10) || 0 }));
  };

  const handleAddToCart = (index) => {
    const drink = drinks[index];
    const newQuantity = quantity[index] || 1;
    const totalPrice = drink.price * newQuantity;
    addToCart({
      image: drink.src,
      name: drink.label,
      price: drink.price,
      quantity: newQuantity,
      totalPrice: totalPrice,
    });
    setQuantity((prevQuantity) => ({ ...prevQuantity, [index]: newQuantity }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        clickedRef.current.every((ref) => ref && !ref.contains(event.target))
      ) {
        setClickDrink(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clickDrink]);

  const drinks = [
    { src: drinkA, label: t("Choco Lava"), price: 69 },
    { src: drinkB, label: t("Chocolate Ice Cream"), price: 259 },
    { src: drinkC, label: t("Chocolate Chip Ice Cream"), price: 259 },
    { src: drinkD, label: t("Rum Raisin Ice Cream"), price: 259 },
    { src: drinkE, label: t("Very Strawberry Ice Cream"), price: 259 },
    { src: drinkF, label: t("Mocha Almond Fudge Ice Cream"), price: 259 },
    { src: drinkG, label: t("Coke 1.25 Ltr."), price: 45 },
    { src: drinkH, label: t("Coke (NO SUGAR) 1.25 Ltr."), price: 45 },
    { src: drinkI, label: t("Sprite 1.25 Ltr."), price: 45 },
    { src: drinkJ, label: t("Coke 510 ml."), price: 30 },
    { src: drinkK, label: t("Coke (NO SUGAR) 510 ml."), price: 30 },
    { src: drinkL, label: t("Sprite 500 ml."), price: 30 },
  ];
  return (
    <div className="w-[55rem] mt-5">
      <h1 className="text-green text-5xl font-bold">
        {t("select drinks & desserts")}
      </h1>
      <div className="grid grid-cols-3 gap-y-5 mt-7 gap-x-9 mb-5">
        {drinks.map((drink, index) => (
          <div
            className="relative w-[18rem] h-[19rem] rounded-xl border border-blue-100 hover:shadow-lg "
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              handleClickDrink(index);
            }}
            ref={(el) => (clickedRef.current[index] = el)}
          >
            <img src={drink.src} alt={drink.label} className="w-[100%]  mt-1" />
            <p className="text-green text-medium pl-3 mt-2">฿{drink.price}</p>
            <h4 className="text-grey font-semibold text-xl pl-3 mt-1">
              {drink.label}
            </h4>
            {clickDrink === index && (
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
                <button
                  onClick={() => handleAddToCart(index, drink)}
                  className="w-[80%] h-[20%] bg-green rounded-r-xl text-white font-semibold mb-3"
                >
                  {t("add to cart")} ฿
                  {quantity[index]
                    ? quantity[index] * drink.price
                    : drink.price}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
