import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SwitchLang() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const handleChangeLang = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <div className="relative">
      <select
        className="appearance-none w-full py-2 px-4  bg-white leading-tight focus:outline-none focus:border-green-500"
        value={language}
        onChange={handleChangeLang}
      >
        <option value="en">EN</option>
        <option value="th">TH</option>
      </select>
      <div className="pointer-events-none absolute  inset-y-0 left-[2.3rem] flex items-center px-2 text-green">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
}
