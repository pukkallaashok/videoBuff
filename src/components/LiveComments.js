import React from "react";
import { profileImg } from "../utils/constants";

const LiveComments = ({ name, Message }) => {
  return (
    <div className="p-2 m-2">
      <div className="flex ">
        <img
          alt="profile "
          src={profileImg}
          className="h-10 w-10 rounded-3xl"
        />
        <p className="m-2 font-bold">{name}</p>
        <p className="m-2">{Message}</p>
      </div>
    </div>
  );
};

export default LiveComments;
