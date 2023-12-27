import React from "react";
import SideBarMenu from "./SideBarMenu";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const Mode = useSelector((store) => store.app.mode);

  return (
    <div className={"flex w-full " + (!Mode && " bg-black text-white")}>
      <SideBarMenu />
      <Outlet />
    </div>
  );
};

export default Body;
