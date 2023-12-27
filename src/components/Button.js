import React from "react";
import { useSelector } from "react-redux";

const Button = ({ name }) => {
  const Mode = useSelector((store) => store.app.mode);
  return (
    <div>
      <button
        className={
          "px-3 py-1 bg-gray-300 mx-2 rounded-lg " + (!Mode && " text-black")
        }
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
