import React, { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import "boxicons";
import { useTranslation } from "react-i18next";

export default function SwitchToggle() {
  const { t } = useTranslation();
  const { selected, setSelected } = useContext(DataContext);
  return (
    <div className="w-[18rem] h-[2.7rem] bg-blue-200 border border-blue-100 rounded-xl ml-7 flex justify-between items-center">
      <button
        className={`${
          selected === "Delivery" ? "bg-green text-white" : ""
        } w-[49%] h-[97%] rounded-xl ml-[1px] flex items-center justify-center text-[0.92rem]`}
        onClick={() => setSelected("Delivery")}
      >
        {selected === "Delivery" && (
          <span className="mt-[5px]">
            <box-icon name="check" color="#ffffff"></box-icon>
          </span>
        )}
        {t("delivery")}
      </button>
      <button
        className={`${
          selected === "Pick Up" ? "bg-green text-white" : ""
        } w-[49%] h-[97%] rounded-xl ml-[1px] flex items-center justify-center text-[0.92rem]`}
        onClick={() => setSelected("Pick Up")}
      >
        {selected === "Pick Up" && (
          <span className="mt-[5px]">
            <box-icon name="check" color="#ffffff"></box-icon>
          </span>
        )}
        {t("pick up")}
      </button>
    </div>
  );
}
