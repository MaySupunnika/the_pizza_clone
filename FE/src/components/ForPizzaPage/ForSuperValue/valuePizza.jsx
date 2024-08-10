import React, { useState, useEffect, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import Value1 from "../../../assets/super-1.png";
import Value2 from "../../../assets/super-2.png";
import Value3 from "../../../assets/super-3.png";
import { DataContext } from "../../../contexts/dataContext";

export default function valuePizza() {
  const { t } = useTranslation();

  const [clickValuePizza, setClickValuePizza] = useState(null);
  const clickRef = useRef([]);
  const [quantity, setQuantity] = useState({});

  const { addToCart } = useContext(DataContext);

  //   const handleClickValuePizza = (index) => {
  //     setClickValuePizza(index === clickValuePizza ? null : index);
  //   };

  const handleChangeQuantity = (e, index) => {
    const { value } = e.target;
    setQuantity((prev) => ({ ...prev, [index]: parseInt(value, 10 || 0) }));
  };

  const handleAddToCart = (index) => {
    const valuePizza = valuePizzas[index];
    const newQuantity = quantity[index] || 1;
    const totalPrice = valuePizza.price * newQuantity;
    addToCart({
      image: valuePizza.src,
      name: valuePizza.label,
      price: valuePizza.price,
      quantity: newQuantity,
      totalPrice: totalPrice,
    });
    setQuantity((prevQuantity) => ({ ...prevQuantity, [index]: newQuantity }));
  };

  const valuePizzas = [
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
      <div className="grid grid-cols-3 gap-7 mt-[3rem]">
        {valuePizzas.map((valuePizza, index) => (
          <div
            key={index}
            className="relative w-[18rem] h-[21rem] rounded-xl border border-blue-100 hover:shadow-lg group"
          >
            <img
              src={valuePizza.src}
              alt={valuePizza.label}
              className="w-[100%] mt-1"
            />
            <p className="text-green text-medium pl-3 mt-2">
              ฿{valuePizza.price}
            </p>
            <h4 className="text-[#414142] font-semibold text-xl pl-3 mt-1">
              {valuePizza.label}
            </h4>
            <h5 className="text-gray text-[1rem] pl-3 mt-1">
              {valuePizza.detail}
            </h5>
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
                onClick={() => handleAddToCart(index, valuePizza)}
                className="w-[80%] h-[20%] bg-green rounded-r-xl text-white font-semibold mb-3"
              >
                {t("add to cart")} ฿
                {quantity[index]
                  ? quantity[index] * valuePizza.price
                  : valuePizza.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
