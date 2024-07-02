import React from "react";
import SideBar from "./components/sideBar";
import AddMenu from "./components/addMenu";
import SlideCard from "../components/SlideCard";

export default function AdminHome() {
  return (
    <div className="min-w-screen flex">
      <div className="w-[13%] fixed top-0 left-0">
        <SideBar />
      </div>
      <div className="w-[87%] ml-[13%]">{/* <AddMenu /> */}</div>
    </div>
  );
}
