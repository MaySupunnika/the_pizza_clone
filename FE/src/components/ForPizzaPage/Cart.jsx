import React, { useState, useEffect, useRef, useContext } from "react";
import CartIcon from "../../assets/cart-plus.svg";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../contexts/dataContext";
import Bin from "../../assets/bin-icon.png";

export default function cart() {
  const { t } = useTranslation();

  const { cart, setCart } = useContext(DataContext);

  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const cartRef = useRef(null);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  const removeItem = (itemName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
  };

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
      <div className="w-[20rem] h-[45rem] rounded-2xl border-[1.5px] border-[#D6D6D6] flex flex-col items-center pt-[8rem] mt-[3.5rem] cursor-pointer">
        {cart.length > 0 ? (
          <>
            <div className="h-[90%] overflow-y-auto flex flex-col mt-[-5.5rem]">
              <div className="w-[18rem] flex justify-between ">
                <h3 className="text-2xl font-semibold">{t("my order")}</h3>
                <h3 className="text-2xl font-semibold">
                  ฿ {calculateTotalPrice()}
                </h3>
              </div>
              <div className="bg-[#D6D6D6] w-[18rem] h-[1px] my-3"></div>
              {cart.map((item, index) => (
                <div key={index}>
                  <div className="flex items-start mb-3">
                    <div className="w-[4rem] h-[4rem] flex justify-center items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-center "
                      />
                    </div>
                    <div className="flex flex-col w-[50%] h-[100%] ml-2">
                      <div className="flex">
                        <p className="mr-2">×{item.quantity}</p>
                        <h4>{item.name}</h4>
                      </div>
                      <div className="flex items-center">
                        <img src={Bin} alt="bin" className="w-3 h-3 " />
                        <p
                          onClick={() => removeItem(item.name)}
                          className="text-[#D10000] font-semibold ml-2 hover:text-[#DA5A65]"
                        >
                          {t("remove")}
                        </p>
                      </div>
                    </div>
                    <h4 className="ml-[1.2rem] font-semibold">
                      ฿ {item.totalPrice}
                    </h4>
                  </div>
                  <div className="bg-[#EBEBEB] w-[18rem] h-[1px] my-3"></div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray text-center mt-6">
              {t("*The price does not include delivery fees and discount.")}
            </p>
            <button className="bg-green mt-4 py-3 w-[17rem] rounded-xl hover:bg-[#319C78] text-white font-medium">
              {t("checkout")} ฿{calculateTotalPrice()}
            </button>
          </>
        ) : (
          <>
            <div className="w-[4rem]">
              <img src={CartIcon} alt="cart-icon" />
            </div>
            <p className="text-[#98A2B3] font-medium text-lg px-4 text-center mt-4">
              {t("select category and product to order.")}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
