import React from "react";
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

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, FreeMode } from "swiper/modules";

import "../css/SlideCard.css";

export default function SlideCard() {
  const { t } = useTranslation();
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={7}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, FreeMode, Autoplay]}
        className="mySwiper flex justify-center items-center w-[55rem] h-[11rem] px-4"
      >
        <SwiperSlide>
          <div className="flex flex-col w-[6rem] h-[8.5rem] cursor-pointer">
            <div className="w-full h-[65%] rounded-t-lg overflow-hidden">
              <img src={PizzaImg} alt="pizza-img" />
            </div>
            <p className="bg-white h-[35%] w-[100%] rounded-b-lg text-xs font-semibold pt-[0.3rem] pl-[0.3rem] hover:bg-blue-300">
              {t("pizza")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col w-[6rem] h-[8.5rem] cursor-pointer">
            <div className="w-full h-[65%] rounded-t-lg overflow-hidden">
              <img src={PizzaPuff} alt="pizza-puff-img" />
            </div>
            <p className="bg-white h-[35%] w-full rounded-b-lg text-xs font-semibold pt-[0.3rem] pl-[0.3rem] hover:bg-blue-300">
              {t("cheesy puff & square pizza")}
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col w-[6rem] h-[8.5rem] cursor-pointer">
            <div className="w-full h-[65%] rounded-t-lg overflow-hidden">
              <img src={SpecialDeal} alt="special-deal" />
            </div>
            <p className="bg-white h-[35%] w-full rounded-b-lg text-xs font-semibold pt-[0.3rem] pl-[0.3rem] hover:bg-blue-300">
              {t("special deals")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col w-[6rem] h-[8.5rem] cursor-pointer">
            <div className="w-full h-[65%] rounded-t-lg overflow-hidden">
              <img src={ValueSet} alt="value-set" />
            </div>
            <p className="bg-white h-[35%] w-full rounded-b-lg text-xs font-semibold pt-[0.3rem] pl-[0.3rem] hover:bg-blue-300">
              {t("value set")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col w-[6rem] h-[8.5rem] cursor-pointer">
            <div className="w-full h-[65%] rounded-t-lg overflow-hidden">
              <img src={Appetizer} alt="appetizer" />
            </div>
            <p className="bg-white h-[35%] w-full rounded-b-lg text-xs font-semibold pt-[0.3rem] pl-[0.3rem] hover:bg-blue-300">
              {t("appetizer")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col w-[6rem] h-[8.5rem] cursor-pointer">
            <div className="w-full h-[65%] rounded-t-lg overflow-hidden">
              <img src={Chicken} alt="chicken" />
            </div>
            <p className="bg-white h-[35%] w-full rounded-b-lg text-xs font-semibold pt-[0.3rem] pl-[0.3rem] hover:bg-blue-300">
              {t("chicken")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col w-[6rem] h-[8.5rem] cursor-pointer">
            <div className="w-full h-[65%] rounded-t-lg overflow-hidden">
              <img src={Pasta} alt="pasta" />
            </div>
            <p className="bg-white h-[35%] w-full rounded-b-lg text-xs font-semibold pt-[0.3rem] pl-[0.3rem] hover:bg-blue-300">
              {t("pasta")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col w-[6rem] h-[8.5rem] cursor-pointer">
            <div className="w-full h-[65%] rounded-t-lg overflow-hidden">
              <img src={Salad} alt="salad" />
            </div>
            <p className="bg-white h-[35%] w-full rounded-b-lg text-xs font-semibold pt-[0.3rem] pl-[0.3rem] hover:bg-blue-300">
              {t("salad & steak")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col w-[6rem] h-[8.5rem] cursor-pointer">
            <div className="w-full h-[65%] rounded-t-lg overflow-hidden">
              <img src={Drinks} alt="drink" />
            </div>
            <p className="bg-white h-[35%] w-full rounded-b-lg text-xs font-semibold pt-[0.3rem] pl-[0.3rem] hover:bg-blue-300">
              {t("drinks & desserts")}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
