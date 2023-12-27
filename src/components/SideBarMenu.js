import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBarMenu = () => {
  const sideBar = useSelector((store) => store.app.sideBar);

  return !sideBar ? null : (
    <div className="">
      <ul className="p-5">
        <li className="p-1 font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="p-1 font-semibold">Shorts</li>
        <li className="p-1 font-semibold">Subscriptions</li>
      </ul>
      <h1 className="font-bold px-5">Subscriptions</h1>
      <ul className="px-5">
        <li className="p-1">Sports</li>
        <li className="p-1">Gaming</li>
        <li className="p-1">Music</li>
        <li className="p-1">Anime</li>
      </ul>
      <h1 className="font-bold px-5 pt-5">Watch Later</h1>
      <ul className="px-5">
        <li className="p-1">Sports</li>
        <li className="p-1">Gaming</li>
        <li className="p-1">Music</li>
        <li className="p-1">Anime</li>
      </ul>
    </div>
  );
};

export default SideBarMenu;
