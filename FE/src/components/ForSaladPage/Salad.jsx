import React, { useState, useEffect, useRef } from "react";
import saladA from "../../assets/saladA.webp";
import saladB from "../../assets/saladB.webp";
import saladC from "../../assets/saladC.webp";
import saladD from "../../assets/saladD.webp";
import saladE from "../../assets/saladE.webp";
import saladF from "../../assets/saladF.webp";
import { useTranslation } from "react-i18next";

export default function Salad() {
  const { t } = useTranslation();

  const [clickSalad, setClickSalad] = useState(null);
  const clickedRef = useRef([]);
  const [quantity, setQuantity] = useState({});

  const handleClickSalad = (index) => {
    setClickSalad(index === clickSalad ? null : index);
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
        setClickSalad(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clickSalad]);

  const salads = [
    {
      src: saladA,
      label: t("Signature BBQ Grilled Chicken with Garlic Bread"),
      price: 149,
    },
    { src: saladB, label: t("Pork Chop Steak with Garlic Bread"), price: 219 },
    { src: saladC, label: t("Caesar Salad"), price: 99 },
    { src: saladD, label: t("Garden Salad with Salad Cream"), price: 99 },
    { src: saladE, label: t("Caesar Salad Dressing"), price: 10 },
    { src: saladF, label: t("Original Salad Cream"), price: 10 },
  ];
  return (
    <div className="w-[55rem] mt-5">
      <h1 className="text-green text-5xl font-bold">{t("select salad")}</h1>
      <div className="grid grid-cols-3 gap-y-5 mt-7 gap-x-9 mb-5">
        {salads.map((item, index) => (
          <div
            className="relative w-[18rem] h-[19rem] rounded-xl border border-blue-100 hover:shadow-lg "
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              handleClickSalad(index);
            }}
            ref={(el) => (clickedRef.current[index] = el)}
          >
            <img src={item.src} alt={item.label} className="w-[100%]  mt-1" />
            <p className="text-green text-medium pl-3 mt-2">฿{item.price}</p>
            <h4 className="text-grey font-semibold text-xl pl-3 mt-1">
              {item.label}
            </h4>
            {clickSalad === index && (
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
                  {quantity[index] ? quantity[index] * item.price : item.price}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
