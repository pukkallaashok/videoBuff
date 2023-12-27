import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Cricket",
    "Football",
    "Music",
    "Anime",
    "Politics",
    "Naruto",
    "Trailer",
    "Series",
    "Gadgets",
    "Gym",
    "Workouts",
    "Kids",
    "BedStories",
    "Politics",
    "Naruto",
    "Trailer",
    "Series",
    "Gadgets",
    "Gym",
    "Workouts",
    "Kids",
    "BedStories",
  ];

  return (
    <div className="flex p-2 m-2 mx-4 ">
      <div className="flex ">
        {list.map((buttonlist, index) => (
          <Button key={index} name={buttonlist} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
