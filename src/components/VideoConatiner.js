import React, { useEffect, useState } from "react";
import { Youtube_API_Key } from "../utils/constants";
import VideoCards from "./VideoCards";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredVideo, getYoutubeData } from "../utils/videoSlice";
import { Link } from "react-router-dom";

const VideoConatiner = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(Youtube_API_Key);
    const json = await data.json();

    dispatch(getYoutubeData(json.items));
    dispatch(getFilteredVideo(json.items));
  };
  const video = useSelector((store) => store.video?.filteredVideo);

  if (!video) return;
  return (
    <div className="flex flex-wrap w-screen">
      {video.map((videoData) => (
        <Link to={"/watch?v=" + videoData.id} key={videoData.id}>
          <VideoCards video={videoData} />
        </Link>
      ))}
    </div>
  );
};

//export const { handleSearch } = handleSearch;
export default VideoConatiner;
