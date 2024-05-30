import React from "react";
import Homeone from "../assets/homeone.jpg";
import Hometwo from "../assets/hometwo.jpg";
import Homethree from "../assets/homethree.jpg";
import Homefour from "../assets/homefour.jpg";
import Homefive from "../assets/homefive.jpg";
import Homesix from "../assets/homesix.jpg";
import Homeseven from "../assets/homeseven.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/SpecialSlides.css";

import { Pagination, Autoplay, FreeMode, Navigation } from "swiper/modules";

export default function SpecialSlides() {
  const slides = [
    { src: Homeone },
    { src: Hometwo },
    { src: Homethree },
    { src: Homefour },
    { src: Homefive },
    { src: Homesix },
    { src: Homeseven },
  ];
  console.log(slides);
  return (
    <>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        freeMode={true}
        modules={[Pagination, Navigation, Autoplay, FreeMode]}
        className="mySwiper pt-[6rem]"
      >
        {slides.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="w-[100vw] h-[41.25rem]">
              <img src={card.src} alt="special-pic" className="w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Pagination, Navigation } from "swiper/modules";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         pagination={{
//           type: "progressbar",
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper pt-[15rem]"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
