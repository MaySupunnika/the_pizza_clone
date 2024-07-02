import React from "react";
import Logo from "../../assets/logo.svg";
import User from "../../assets/user.png";
import LogOut from "../../assets/logout.png";

export default function SideBar() {
  return (
    <div className=" min-h-screen shadow-xl flex flex-col items-center py-5">
      <div className="flex">
        <img src={Logo} alt="pizza-logo" className="w-[4rem]" />
        <p className="text-gray font-bold text-lg flex items-center ml-2">
          1112 ADMIN
        </p>
      </div>
      <div className="flex flex-col items-center mt-[3rem]">
        <img src={User} alt="user-icon" className="w-[2rem]" />
        <p className="text-gray font-semibold text-sm mt-3">Admin: name</p>
      </div>
      <div className="flex flex-col w-[90%] mt-[5rem]">
        <div className=" hover:bg-soft-green h-[3rem] flex items-center justify-center rounded-full">
          Menu
        </div>
      </div>
      <div className="flex w-[90%] mt-[30rem] text-center justify-center hover:bg-soft-green py-3 rounded-full">
        <div className="w-[1.3rem] h-[1.3rem] mr-3">
          <img src={LogOut} alt="log-out-icon" />
        </div>
        Log out
      </div>
    </div>
  );
}
