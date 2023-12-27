import React from "react";
import { useSelector } from "react-redux";

const VideoCards = ({ video }) => {
  const toggleSideBar = useSelector((store) => store.app.sideBar);
  //console.log(video);

  const { thumbnails, title, channelTitle } = video.snippet;
  return (
    <div className={toggleSideBar ? "p-2 m-2 w-80" : "p-2 m-2 w-72"}>
      <img className="object- rounded-lg" src={thumbnails?.medium?.url} />
      <ul>
        <li className="p-1 font-semibold">{title}</li>
        <li className="p-1 font-serif text-sm">{channelTitle}</li>
        <li className="px-1 text-sm">
          {video?.statistics?.viewCount <= 999 &&
            video?.statistics?.viewCount + "views"}
          {video?.statistics?.viewCount > 9999 &&
            video?.statistics?.viewCount < 999999 &&
            Math.round(video?.statistics?.viewCount / 1000) + "K views"}
          {video?.statistics?.viewCount > 999999 &&
            Math.round(video?.statistics?.viewCount / 1000000) + "M views"}
        </li>
      </ul>
    </div>
  );
};

export default VideoCards;
