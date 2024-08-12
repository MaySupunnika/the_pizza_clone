import React, { useState, useEffect, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import Value1 from "../../../assets/super-1.png";
import Value2 from "../../../assets/super-2.png";
import Value3 from "../../../assets/super-3.png";
import Pan1 from "../../../assets/pan-1.png";
import Pan2 from "../../../assets/pan-2.png";
import Pan3 from "../../../assets/pan-3.png";
import Pan4 from "../../../assets/pan-4.png";
import Pan5 from "../../../assets/pan-5.png";
import Pan6 from "../../../assets/pan-6.png";
import { DataContext } from "../../../contexts/dataContext";

export default function pan() {
  const { t } = useTranslation();

  const [clickValuePizza, setClickValuePizza] = useState(null);
  const clickRef = useRef([]);
  const [quantity, setQuantity] = useState({});

  const [selectedSize, setSelectedSize] = useState({});

  const handleM = (index) => {
    setSelectedSize((prevSizes) => ({ ...prevSizes, [index]: "M" }));
  };

  const handleL = (index) => {
    setSelectedSize((prevSizes) => ({ ...prevSizes, [index]: "L" }));
  };

  const { addToCart } = useContext(DataContext);

  const handleChangeQuantity = (e, index) => {
    const { value } = e.target;
    setQuantity((prev) => ({ ...prev, [index]: parseInt(value, 10 || 0) }));
  };

  const handleAddToCart = (index) => {
    const pan = pans[index];
    const newQuantity = quantity[index] || 1;
    const size = selectedSize[index] || "M";
    const priceForSelectedSize = size === "L" ? pan.price + pan.l : pan.price;
    const totalPrice = priceForSelectedSize * newQuantity;

    addToCart({
      image: pan.src,
      name: pan.label,
      size: size,
      price: priceForSelectedSize,
      quantity: newQuantity,
      totalPrice: totalPrice,
    });
  };

  const textLength = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const pans = [
    {
      src: Value1,
      label: t("spicy bbq chicken"),
      detail: t(
        "Pizza sauce, Mozzarella Cheese, BBQ Chicken, Red&amp;Green Chili, BBQ sauce and Dried parsley"
      ),
      price: 129,
    },
    {
      src: Value2,
      label: t("crab sticks and sausage"),
      detail: t(
        "Thousand Island Sauce, Mozzarella Cheese, Parsley sausage, Crab stick"
      ),
      price: 129,
    },
    {
      src: Value3,
      label: t("Ham & Mushroom"),
      detail: t("Pizza sauce, Mozzarella Cheese, Mushroom, Ham"),
      price: 129,
    },
    ,
    {
      src: Pan1,
      label: t("Double Cheese"),
      detail: t("Extra Mozzarella Cheese and Pizza Sauce"),
      price: 299,
      l: 100,
    },
    {
      src: Pan2,
      label: t("Double Pepperoni"),
      detail: t("Pepperoni, Mozzarella Cheese and Pizza Sauce"),
      price: 299,
      l: 100,
    },
    {
      src: Pan3,
      label: t("Hawaiian"),
      detail: t("Ham, Bacon, Pineapple, Mozzarella Cheese and Pizza Sauce"),
      price: 379,
      l: 120,
    },
    {
      src: Pan4,
      label: t("Seafood Cocktail"),
      detail: t(
        "Shrimp, Crab Sticks, Ham, Pineapple, Mozzarella Cheese and Thousand Island Sauce"
      ),
      price: 439,
      l: 120,
    },
    {
      src: Pan5,
      label: t("Super Deluxe"),
      detail: t(
        "Ham, Bacon, Pepperoni, Smoked Sausage, Italian Sausage, Mushroom, Pineapple, Onion, Capsicums, Mozzarella Cheese and Pizza Sauce"
      ),
      price: 379,
      l: 120,
    },
    {
      src: Pan6,
      label: t("Spicy Super Seafood"),
      detail: t(
        "Squid, Garlic Pepper Shrimp, Red & Green Chilli, Capsicums, Onion, Basil, Mozzarella Cheese and Marinara Sauce"
      ),
      price: 439,
      l: 120,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (clickRef.current.every((ref) => ref && !ref.contains(event.target))) {
        setClickValuePizza(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clickValuePizza]);

  return (
    <div className="w-[55rem] mt-5 mb-[4rem]">
      <h2 className="text-gray text-5xl font-bold">{t("super value")}</h2>
      <div className="relative grid grid-cols-3 gap-7 mt-[3rem]">
        {pans.map((pan, index) => (
          <div
            key={index}
            className="relative w-[18rem] h-[21rem] rounded-xl border border-blue-100 hover:shadow-lg group"
          >
            <img src={pan.src} alt={pan.label} className="w-[100%] mt-1" />
            <p className="text-green text-medium pl-3 mt-2">฿{pan.price}</p>
            <h4 className="text-[#414142] font-semibold text-xl pl-3 mt-1">
              {pan.label}
            </h4>
            <h5 className="text-gray text-[1rem] pl-3 mt-1">
              {textLength(pan.detail, 90)}
            </h5>

            <div
              className="flex flex-col h-[100%] w-[100%] absolute bottom-0 bg-gradient-to-t from-white opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              {index < 2 ? (
                <div
                  className={`w-[3rem] h-[3rem] flex justify-center items-center absolute z-10 bottom-[6.8rem] right-5 rounded-full ${
                    selectedSize[index] === "M"
                      ? "bg-green text-white"
                      : "bg-white text-green border border-green"
                  } font-semibold cursor-pointer hover:bg-[#319C78]`}
                  onClick={() => handleM(index)}
                >
                  M
                </div>
              ) : (
                <>
                  <div
                    className={`w-[3rem] h-[3rem] flex justify-center items-center absolute z-10 bottom-[6.8rem] right-[6rem] rounded-full ${
                      selectedSize[index] === "M"
                        ? "bg-green text-white"
                        : "bg-white text-green border border-green"
                    } font-semibold cursor-pointer hover:bg-[#319C78]`}
                    onClick={() => handleM(index)}
                  >
                    M
                  </div>
                  <div
                    className={`w-[4rem] h-[4rem] flex flex-col justify-center items-center text-center absolute z-10 bottom-[6.8rem] right-3 rounded-full ${
                      selectedSize[index] === "L"
                        ? "bg-green text-white"
                        : "bg-white text-green border border-green"
                    } font-semibold cursor-pointer hover:bg-[#319C78] hover:text-white`}
                    onClick={() => handleL(index)}
                  >
                    <p className="text-lg">L</p>
                    <p className="text-xs">+฿{pan.l}</p>
                  </div>
                </>
              )}

              <div className="w-[100%] h-[13%] rounded-t-xl border border-green absolute z-10 bottom-[3.5rem] flex justify-center items-center text-green bg-white text-medium cursor-pointer hover:bg-[#319C78] hover:border-none hover:text-white">
                {t("modify")}
              </div>
              <div className="flex items-end h-[80%] w-[100%] absolute bottom-0">
                <input
                  type="number"
                  className="w-[20%] h-[17%] rounded-bl-xl border border-green flex justify-start text-gray pl-4 mb-3 focus:outline-none"
                  min={1}
                  value={quantity[index] || 1}
                  onChange={(e) => handleChangeQuantity(e, index)}
                />
                <button
                  onClick={() => handleAddToCart(index, pan)}
                  className="w-[80%] h-[17%] bg-green rounded-br-xl text-white font-semibold mb-3 hover:bg-[#319C78]"
                >
                  {t("add to cart")} ฿
                  {quantity[index]
                    ? quantity[index] *
                      (selectedSize[index] === "L"
                        ? pan.price + pan.l
                        : pan.price)
                    : selectedSize[index] === "L"
                    ? pan.price + pan.l
                    : pan.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
