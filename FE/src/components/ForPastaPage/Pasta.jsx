import React, { useState, useEffect, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import pastaA from "../../assets/pastaA.webp";
import pastaB from "../../assets/pastaB.webp";
import pastaC from "../../assets/pastaC.webp";
import pastaD from "../../assets/pastaD.webp";
import pastaE from "../../assets/pastaE.webp";
import pastaF from "../../assets/pastaF.webp";
import pastaG from "../../assets/pastaG.webp";
import pastaH from "../../assets/pastaH.webp";
import pastaI from "../../assets/pastaI.webp";
import pastaJ from "../../assets/pastaJ.webp";
import pastaK from "../../assets/pastaK.webp";
import pastaL from "../../assets/pastaL.webp";
import { DataContext } from "../../contexts/dataContext";

export default function Pasta() {
  const { t } = useTranslation();

  const { addToCart } = useContext(DataContext);

  const [clickPasta, setClickPasta] = useState(null);
  const clickedRef = useRef([]);
  const [quantity, setQuantity] = useState({});

  const handleClickPasta = (index) => {
    setClickPasta(index === clickPasta ? null : index);
  };

  const handleChangeQuantity = (e, index) => {
    const { value } = e.target;
    setQuantity((prev) => ({ ...prev, [index]: parseInt(value, 10) || 0 }));
  };

  const handleAddToCart = (index) => {
    const pasta = pastas[index];
    const newQuantity = quantity[index] || 1;
    const totalPrice = pasta.price * newQuantity;
    addToCart({
      image: pasta.src,
      name: pasta.label,
      price: pasta.price,
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
        setClickPasta(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clickPasta]);

  const pastas = [
    { src: pastaA, label: t("Stir Fried Macaroni Ham and Omelet"), price: 129 },
    {
      src: pastaB,
      label: t("Stir Fried Macaroni Chicken and Omelet"),
      price: 129,
    },
    {
      src: pastaC,
      label: t("Stir Fried Macaroni Chicken Sausage"),
      price: 109,
    },
    {
      src: pastaD,
      label: t("Baked Macaroni and Cheese with Truffle and Ham"),
      price: 139,
    },
    {
      src: pastaE,
      label: t("Ham & Mushroom Spaghetti in Alfredo Sauce"),
      price: 129,
    },
    { src: pastaF, label: t("Spaghetti Keemao Sausage"), price: 129 },
    { src: pastaG, label: t("Spicy Sausage Spaghetti"), price: 129 },
    { src: pastaH, label: t("Spaghetti Carbonara"), price: 139 },
    { src: pastaI, label: t("Spicy Bacon Spaghetti"), price: 139 },
    { src: pastaJ, label: t("Spaghetti Kheemao Seafood"), price: 169 },
    {
      src: pastaK,
      label: t("Baked Macaroni & Cheese with BBQ Chicken"),
      price: 129,
    },
    { src: pastaL, label: t("Baked Macaroni & Cheese with Bacon"), price: 139 },
  ];
  return (
    <div className="w-[55rem] mt-5">
      <h1 className="text-green text-5xl font-bold">{t("select pasta")}</h1>
      <div className="grid grid-cols-3 gap-y-5 mt-7 gap-x-9 mb-5">
        {pastas.map((pasta, index) => (
          <div
            className="relative w-[18rem] h-[19rem] rounded-xl border border-blue-100 hover:shadow-lg "
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              handleClickPasta(index);
            }}
            ref={(el) => (clickedRef.current[index] = el)}
          >
            <img src={pasta.src} alt={pasta.label} className="w-[100%]  mt-1" />
            <p className="text-green text-medium pl-3 mt-2">฿{pasta.price}</p>
            <h4 className="text-grey font-semibold text-xl pl-3 mt-1">
              {pasta.label}
            </h4>
            {clickPasta === index && (
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
                  onClick={() => handleAddToCart(index, pasta)}
                  className="w-[80%] h-[20%] bg-green rounded-r-xl text-white font-semibold mb-3"
                >
                  {t("add to cart")} ฿
                  {quantity[index]
                    ? quantity[index] * pasta.price
                    : pasta.price}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
