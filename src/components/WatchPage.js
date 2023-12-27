import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchVideoCard from "./WatchVideoCard";
import useWatchByID from "../Hooks/useWatchByID";

const WatchPage = () => {
  const dispatch = useDispatch();

  let [SearchParams] = useSearchParams();

  SearchParams = SearchParams.get("v");

  useWatchByID(SearchParams);
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  const video = useSelector((store) => store.playingVideoByID.playingVideo);

  if (!video) return;

  return (
    <div>
      <WatchVideoCard info={video} />
    </div>
  );
};

export default WatchPage;
