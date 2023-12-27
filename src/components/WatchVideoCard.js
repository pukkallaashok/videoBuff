import React from "react";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import { useSelector } from "react-redux";

const WatchVideoCard = ({ info }) => {
  // console.log(info);

  const { id, snippet, statistics } = info[0];

  const { title, description, channelTitle } = info[0].snippet;

  const Mode = useSelector((store) => store.app.mode);

  return (
    <div>
      <div className="flex w-full">
        <div className="pl-16 ml-10 pt-10">
          <iframe
            className="rounded-2xl"
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" mt-10 ml-8 w-[50%]">
          <h1
            className={
              "font-semibold text-slate-400 text-center border border-black  shadow-md rounded-t-lg " +
              (!Mode && " bg-black border border-white")
            }
          >
            Live-Chat
          </h1>
          <div
            className={
              "p-2   h-[480px] border border-black  rounded-b-2xl overflow-y-scroll flex flex-col-reverse" +
              (!Mode && " bg-black border border-white")
            }
          >
            <LiveChat />
          </div>
        </div>
      </div>
      <div className=" px-16 py-2 ml-10  my-1">
        <h1 className="font-bold font-sans text-xl w-[70%]">{title}</h1>
        <div className="flex flex-wrap py-4  my-2 border border-slate-600 rounded-3xl w-[68%]">
          <h4 className="font-medium p-4 ">{channelTitle}</h4>
          {statistics?.likeCount && (
            <h6 className="font-mono p-4  pl-28">
              {statistics?.likeCount <= 999 &&
                statistics?.likeCount + " comments "}
              {statistics?.likeCount > 999 &&
                statistics?.likeCount < 999999 &&
                Math.round(statistics?.likeCount / 1000) + "K Likes"}
              {statistics?.likeCount > 999999 &&
                Math.round(statistics?.likeCount / 1000000) + "M Likes"}
            </h6>
          )}
          {statistics?.commentCount && (
            <h6 className="font-mono p-4 pl-16">
              {statistics?.commentCount <= 999 &&
                statistics?.commentCount + " comments "}
              {statistics?.commentCount > 999 &&
                statistics?.commentCount < 999999 &&
                Math.round(statistics?.commentCount / 1000) + "K comments"}
              {statistics?.commentCount > 999999 &&
                Math.round(statistics?.commentCount / 1000000) + "M comments"}
            </h6>
          )}
          {statistics?.viewCount && (
            <h6 className="font-mono p-4 pl-10">
              {statistics?.viewCount <= 999 && statistics?.viewCount + "views"}
              {statistics?.viewCount > 999 &&
                statistics?.viewCount < 999999 &&
                Math.round(statistics?.viewCount / 1000) + "K views"}
              {statistics?.viewCount > 999999 &&
                Math.round(statistics?.viewCount / 1000000) + "M views"}
            </h6>
          )}
        </div>
        {description && (
          <div className="w-[68%] rounded-3xl h-auto px-4 py-10">
            <p>{description}</p>
          </div>
        )}
        <div>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default WatchVideoCard;
