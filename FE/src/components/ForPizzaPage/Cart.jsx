import React, { useState, useEffect, useRef } from "react";
import CartIcon from "../../assets/cart-plus.svg";
import { useTranslation } from "react-i18next";

export default function cart() {
  const { t } = useTranslation();

  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const cartRef = useRef(null);
  useEffect(() => {
    const footer = document.getElementById("footer");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );
    if (footer) {
      observer.observe(footer);
    }
    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  useEffect(() => {
    const cart = cartRef.current;
    const handleScroll = () => {
      if (cart && !isFooterVisible) {
        cart.style.position = "fixed";
        cart.style.bottom = "5rem";
      } else if (cart && isFooterVisible) {
        cart.style.position = "absolute";
        cart.style.bottom = "auto";
        cart.style.top = `${footer.offsetTop - cart.clientHeight - 20}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFooterVisible]);
  return (
    <div
      ref={cartRef}
      className={`right-[20rem] z-10 ${isFooterVisible ? "absolute" : "fixed"}`}
      style={{
        bottom: isFooterVisible ? "auto" : "0",
        top: isFooterVisible
          ? `${window.innerHeight - footer.clientHeight}px`
          : "auto",
      }}
    >
      <div className="w-[20rem] h-[45rem] rounded-xl border-[1.5px] border-[#EBEBEB] flex flex-col items-center pt-[8rem] mt-[3.5rem] cursor-pointer">
        <div className="w-[4rem]">
          <img src={CartIcon} alt="cart-icon" />
        </div>
        <p className="text-[#98A2B3] font-medium text-lg px-4 text-center mt-4">
          {t("select category and product to order.")}
        </p>
      </div>
    </div>
  );
}
