import React from "react";

const Statics = ({ stats, position }) => {
  return (
    <span className="flex flex-col w-1/2 max-md:w-full">
      <span className="text-7xl max-md:text-5xl text-[#FF0000] ">{stats}</span>
      <span className=" break-words max-md:text-xl   text-4xl text-wrap">
        {position}
      </span>
    </span>
  );
};

export default Statics;
