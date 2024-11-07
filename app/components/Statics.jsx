import React from "react";

const Statics = ({ stats, position }) => {
  return (
    <span className="flex flex-col w-1/2 max-lg:w-full justify-start">
      <span className=" max-lg:text-5xl text-6xl text-main-color">{stats}</span>
      <span className=" break-words max-md:text-sm   text-3xl  whitespace-pre-line text-balance">
        {position}
      </span>
    </span>
  );
};

export default Statics;
