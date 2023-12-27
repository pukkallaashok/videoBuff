import React from "react";
import { profileImg } from "../utils/constants";
import { useSelector } from "react-redux";

const commentsData = [
  {
    name: "Ashok",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Ashok",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [],
      },
      {
        name: "Ashok",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [],
      },
    ],
  },
  {
    name: "Ashok",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    name: "Ashok",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    name: "Ashok",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    name: "Ashok",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    name: "Ashok",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const CommentList = ({ list }) => {
  const Mode = useSelector((store) => store.app.mode);
  console.log(Mode + " comments");
  const { name, text, replies } = list;
  return (
    <div className={"m-2 p-2 rounded-full" + (!Mode && " bg-black text-white")}>
      <div className="flex">
        <img
          className="h-12 w-12 rounded-full mx-2"
          alt="profile"
          src={profileImg}
        />
        <p className="pt-3 font-semibold">{name}</p>
      </div>
      <p className="pl-16">{text}</p>
    </div>
  );
};

const CommentsNested = ({ comment }) => {
  return comment.map((data, i) => (
    <div key={i}>
      <CommentList list={data} />
    </div>
  ));
};

const comments = () => {
  //const Mode = useSelector((store) => store.app.mode);

  return (
    <div>
      <h1 className={"font-bold p-2 m-2 text-2xl "}>Comments : </h1>
      <CommentsNested comment={commentsData} />
    </div>
  );
};

export default comments;
