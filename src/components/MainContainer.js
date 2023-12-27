import React from "react";
import ButtonList from "./ButtonList";
import VideoConatiner from "./VideoConatiner";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const toggleSideBar = useSelector((store) => store.app.sideBar);
  return (
    <div className="mt-2  w-full">
      <div
        className={
          toggleSideBar
            ? "flex w-[88%] overflow-x-auto scrollbar-hide"
            : "flex w-[98%] overflow-x-auto scrollbar-hide"
        }
      >
        <ButtonList />
      </div>
      <VideoConatiner />
    </div>
  );
};

export default MainContainer;
