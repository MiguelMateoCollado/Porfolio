"use client";
import { useEffect } from "react";
import { animatePageIn } from "./utils/animations";

const Template = ({ children }) => {
  useEffect(() => {
    animatePageIn();
  });
  return (
    <div>
      <div
        id="slide-1"
        className="max-h-screen h-full fixed bg-[#ed4d4d] z-10 overflow-hidden  top-0 left-0 w-full"
      ></div>
      <div
        id="slide-2"
        className="max-h-screen h-full fixed  bg-[#ff3333] z-20 overflow-hidden top-0 left-2/4 w-full"
      ></div>
      <div
        id="slide-3"
        className="max-h-screen h-full fixed  bg-[#e00000] z-30 overflow-hidden top-0 left-3/4 w-full"
      ></div>
      {children}
    </div>
  );
};

export default Template;
