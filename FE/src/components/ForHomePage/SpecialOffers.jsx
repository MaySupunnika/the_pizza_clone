import React from "react";
import ComboSet from "../../assets/comboset.webp";
import FamilyComboSet from "../../assets/familycomboset.webp";
import ExtremeComboSet from "../../assets/extracomboset.webp";
import SuperComboSet from "../../assets/supercomboset.webp";
import Deal from "../../assets/special-deals.svg";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";

export default function SpecialOffers() {
  const { t } = useTranslation();
  const comboset = [
    { src: ComboSet, label: "combo-set" },
    { src: FamilyComboSet, label: "family-combo-set" },
    { src: ExtremeComboSet, label: "extreme-combo-set" },
    { src: SuperComboSet, label: "super-combo-set" },
  ];
  return (
    <div className="w-screen my-5 pt-7 bg-blue-400">
      <div className="flex ml-[20rem] mb-3">
        <div className="flex">
          <div className="w-[2rem] flex justify-center">
            <img src={Deal} alt="menu-icon" />
          </div>
          <p className="text-[1.35rem] font-bold text-soft-black">
            {t("special offers")}
          </p>
        </div>
        <p className="text-green text-sm mt-1 ml-[62rem] cursor-pointer">
          {t("see all")}
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper flex justify-center items-center w-[80rem] h-[18rem]"
      >
        {comboset.map((combo, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <div className="w-[25rem]">
              <img
                src={combo.src}
                alt={combo.label}
                className="w-[100%] rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
