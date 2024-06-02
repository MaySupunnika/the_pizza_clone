import React from "react";
import Homeone from "../../assets/homeone.jpg";
import Hometwo from "../../assets/hometwo.jpg";
import Homethree from "../../assets/homethree.jpg";
import Homefour from "../../assets/homefour.jpg";
import Homefive from "../../assets/homefive.jpg";
import Homesix from "../../assets/homesix.jpg";
import Homeseven from "../../assets/homeseven.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../css/SpecialSlides.css";

import { Pagination, Autoplay, FreeMode, Navigation } from "swiper/modules";

export default function SpecialSlides() {
  const slides = [
    { src: Homeone, label: "special-menu-one" },
    { src: Hometwo, label: "special-menu-two" },
    { src: Homethree, label: "special-menu-three" },
    { src: Homefour, label: "special-menu-four" },
    { src: Homefive, label: "special-menu-five" },
    { src: Homesix, label: "special-menu-six" },
    { src: Homeseven, label: "special-menu-seven" },
  ];

  return (
    <>
      <Swiper
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        freeMode={true}
        modules={[Pagination, Navigation, Autoplay, FreeMode]}
        className="mySwiper pt-[6rem] w-screen"
      >
        {slides.map((card, index) => (
          <SwiperSlide key={index} className="w-screen">
            <div className="h-[40.9rem]">
              <img src={card.src} alt={card.label} className="w-full h-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
