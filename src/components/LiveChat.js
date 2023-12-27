import React, { useEffect } from "react";
import LiveComments from "./LiveComments";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveCommentSlice";
import { getMessage, getNameGenerate } from "../HelperFunctions/NameAndMessage";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chat = useSelector((store) => store.chat.message);
  const Mode = useSelector((store) => store.app.mode);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          user: getNameGenerate(),
          Message: getMessage(20),
        })
      );
    }, 2000);

    return () => clearTimeout(i);
  }, []);

  return (
    <div className="">
      <div className={"w-full "}>
        {chat.map((c) => (
          <LiveComments name={c.user} Message={c.Message} />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
