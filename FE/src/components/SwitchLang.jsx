import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Dropup from "../assets/drop-up-arrow.png";
import Dropdown from "../assets/drop-down-arrow.png";

export default function SwitchLang() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChangeLang = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  const hoverMouse = () => {
    setIsDropdownOpen(true);
  };

  const leaveMouse = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div
      className="relative"
      onMouseEnter={hoverMouse}
      onMouseLeave={leaveMouse}
    >
      <div className="ml-7 h-[5rem] w-[4rem] flex items-center text-green font-bold cursor-pointer">
        {language.toLocaleUpperCase()}
      </div>
      <div className="pointer-events-none absolute  inset-y-0 left-[3.2rem] flex items-center px-2 text-green">
        <div className="w-[0.5rem]">
          {isDropdownOpen ? (
            <img src={Dropup} alt="drop-up" />
          ) : (
            <img src={Dropdown} alt="drop-down" />
          )}
        </div>
      </div>
      {isDropdownOpen && (
        <div className="z-[999] absolute top-[4rem] w-[7rem] h-[6rem] flex flex-col items-center justify-center drop-shadow-langbox bg-white">
          <p
            className="hover:bg-blue-300 w-[80%] h-[40%] flex items-center pl-1 font-semibold text-sm cursor-pointer"
            onClick={() => handleChangeLang("en")}
          >
            EN
          </p>
          <p
            className="hover:bg-blue-300 w-[80%] h-[40%] flex items-center pl-1 font-semibold text-sm cursor-pointer"
            onClick={() => handleChangeLang("th")}
          >
            TH
          </p>
        </div>
      )}
    </div>
  );
}
