import React, { useContext } from "react";
import LocationIcon from "../assets/maps-and-flags.png";
import { ToggleContext } from "../contexts/toggleContext";
import { useTranslation } from "react-i18next";

export default function LocationDropDown() {
  const { t } = useTranslation();
  const { selected, setSelected } = useContext(ToggleContext);

  const handleSelectCange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="relative inline-block w-[25rem] h-[2.5rem] ml-7">
      <div className="w-[1.2rem] absolute top-2">
        <img src={LocationIcon} alt="location-icon" className="mx-2" />
      </div>
      <select
        className="appearance-none w-full py-2 px-4 pl-8 bg-white border border-blue-100 rounded-xl leading-tight focus:outline-none focus:border-green-500"
        value={selected}
        onChange={handleSelectCange}
        required
      >
        {selected === "Delivery" ? (
          <>
            <option value="">{t("select address")}</option>
            <option value="1">{t("Use my current location")}</option>
            <option value="2">{t("Add address")}</option>
          </>
        ) : (
          <>
            <option value="">{t("select store")}</option>
            <option value="1">{t("Pizza store One")}</option>
            <option value="2">{t("Pizza store Two")}</option>
            <option value="3">{t("Pizza store Three")}</option>
          </>
        )}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green">
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
