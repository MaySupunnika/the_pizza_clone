import React, { useState, useContext } from "react";
import PizzaImg from "../assets/pizza-v3.webp";
import PizzaPuff from "../assets/Cheesy_Square_210x232.webp";
import SpecialDeal from "../assets/SpecialDeals.webp";
import ValueSet from "../assets/ValuSet.webp";
import Appetizer from "../assets/Appetizer_210x232.webp";
import Chicken from "../assets/card_Chicken.webp";
import Pasta from "../assets/card_Pasta.webp";
import Salad from "../assets/card_Salad.webp";
import Drinks from "../assets/card_Desserts.webp";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/dataContext";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";

import "../css/SlideCard.css";

export default function SlideCard() {
  const { t } = useTranslation();
  const { selectCard, setSelectCard } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSelectCard = (index, path) => {
    setSelectCard(index);
    if (path) {
      navigate(path);
    }
  };

  const slides = [
    { src: PizzaImg, label: t("pizza"), path: "/pizza" },
    { src: PizzaPuff, label: t("cheesy puff & square pizza"), path: "/puff" },
    { src: SpecialDeal, label: t("special deals") },
    { src: ValueSet, label: t("value set"), path: "/value-set" },
    { src: Appetizer, label: t("appetizer") },
    { src: Chicken, label: t("chicken") },
    { src: Pasta, label: t("pasta") },
    { src: Salad, label: t("salad & steak") },
    { src: Drinks, label: t("drinks & desserts") },
  ];

  return (
    <>
      <Swiper
        slidesPerView={7}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper flex justify-center items-center w-[55rem] h-[11rem] px-4"
      >
        {slides.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex flex-col relative rounded-lg w-[6rem] h-[8.5rem] cursor-pointer hover:bg-blue-300 ${
                selectCard === index ? "bg-soft-green" : ""
              }`}
              onClick={() => handleSelectCard(index, card.path)}
            >
              <div className="w-full h-[65%] absolute rounded-t-lg overflow-hidden">
                <img src={card.src} alt={card.label} />
              </div>
              <p className="absolute z-20 bottom-0  w-[100%] h-[35%] text-xs pt-2 pl-2 font-semibold ">
                {card.label}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
