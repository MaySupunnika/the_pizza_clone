import React, { useContext, useState } from "react";
import LocationIcon from "../assets/maps-and-flags.png";
import { DataContext } from "../contexts/dataContext";
import { useTranslation } from "react-i18next";
import ArrowDown from "../assets/down-arrow.png";
import ArrowUp from "../assets/up-arrow.png";

export default function LocationDropDown() {
  const { t } = useTranslation();
  const { selected, setSelected } = useContext(DataContext);
  const [clickDropDown, setClickDropDown] = useState(false);

  const handleDropDown = () => {
    setClickDropDown((prevStatus) => !prevStatus);
  };
  const handleSelectCange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="relative inline-block w-[25rem] h-[2.5rem] ml-7">
      <div className="w-[1.2rem] absolute top-2">
        <img src={LocationIcon} alt="location-icon" className="mx-2" />
      </div>
      <select
        className="appearance-none w-full py-2 px-4 pl-8 bg-white border border-blue-100 rounded-xl leading-tight focus:outline-none focus:border-green-500 cursor-pointer"
        value={selected}
        onChange={handleSelectCange}
        onClick={handleDropDown}
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
      <div className="pointer-events-none absolute w-[1.7rem] inset-y-0 right-0 flex items-center px-2 text-green">
        {clickDropDown ? (
          <img src={ArrowUp} alt="arrow-up" />
        ) : (
          <img src={ArrowDown} alt="arrow-down" />
        )}
      </div>
    </div>
  );
}
