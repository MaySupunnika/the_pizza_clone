import React, { useState, useEffect, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import chicA from "../../assets/chic1.webp";
import chicB from "../../assets/chic2.webp";
import chicC from "../../assets/chic3.webp";
import chicD from "../../assets/chic4.webp";
import { DataContext } from "../../contexts/dataContext";

export default function chicken() {
  const { t } = useTranslation();

  const { addToCart } = useContext(DataContext);

  const [clickChicken, setClickChicken] = useState(null);
  const clickRef = useRef([]);
  const [quantity, setQuantity] = useState({});

  const handleClickChicken = (index) => {
    setClickChicken(index === clickChicken ? null : index);
  };

  const handleChangeQuantity = (e, index) => {
    const { value } = e.target;
    setQuantity((prev) => ({ ...prev, [index]: parseInt(value, 10 || 0) }));
  };

  const handleAddToCart = (index) => {
    const chicken = chickens[index];
    const newQuantity = quantity[index] || 1;
    const totalPrice = chicken.price * newQuantity;
    addToCart({
      image: chicken.src,
      name: chicken.label,
      price: chicken.price,
      quantity: newQuantity,
      totalPrice: totalPrice,
    });
    setQuantity((prevQuantity) => ({ ...prevQuantity, [index]: newQuantity }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (clickRef.current.every((ref) => ref && !ref.contains(event.target))) {
        setClickChicken(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clickChicken]);

  const chickens = [
    { src: chicA, label: t("BBQ Chicken Wings 6 pcs."), price: 149 },
    { src: chicB, label: t("Korean Style Chicken Wings 6 pcs"), price: 149 },
    { src: chicC, label: t("BBQ Chicken Wings 10"), price: 219 },
    { src: chicD, label: t("Korean Style Chicken Wings 10 pcs"), price: 219 },
  ];
  return (
    <div className="w-[55rem] mt-5">
      <h1 className="text-green text-5xl font-bold">{t("select chicken")}</h1>
      <div className="grid grid-cols-3 gap-y-5 mt-7 gap-x-9 mb-5">
        {/* {chickens.map((item, index) => (
          <div
            className="relative w-[18rem] h-[19rem] rounded-xl border border-blue-100 hover:shadow-lg "
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              handleClickChicken(index);
            }}
            ref={(el) => (clickRef.current[index] = el)}
          >
            <img src={item.src} alt={item.label} className="w-[100%] mt-1" />
            <p className="text-green text-medium pl-3 mt-2">฿{item.price}</p>
            <h4 className="text-grey font-semibold text-xl pl-3 mt-1">
              {item.label}
            </h4>
            {clickChicken === index && (
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
                  onClick={() => handleAddToCart(index, chicken)}
                  className="w-[80%] h-[20%] bg-green rounded-r-xl text-white font-semibold mb-3"
                >
                  {t("add to cart")} ฿
                  {quantity[index]
                    ? quantity[index] * chicken.price
                    : chicken.price}
                </button>
              </div>
            )}
          </div>
        ))} */}
        {chickens.map((item, index) => (
          <div
            className="relative w-[18rem] h-[19rem] rounded-xl border border-blue-100 hover:shadow-lg group"
            key={index}
          >
            <img src={item.src} alt={item.label} className="w-[100%] mt-1" />
            <p className="text-green text-medium pl-3 mt-2">฿{item.price}</p>
            <h4 className="text-grey font-semibold text-xl pl-3 mt-1">
              {item.label}
            </h4>
            <div
              className="flex items-end h-[100%] w-[100%] absolute top-0 bg-gradient-to-t from-white opacity-0 group-hover:opacity-100 transition-opacity"
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
                onClick={() => handleAddToCart(index)}
                className="w-[80%] h-[20%] bg-green rounded-r-xl text-white font-semibold mb-3"
              >
                {t("add to cart")} ฿
                {quantity[index] ? quantity[index] * item.price : item.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
