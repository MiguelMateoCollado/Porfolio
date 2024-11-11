import { Icon } from "@iconify/react";
import Link from "next/link";
export const AnimatedButton = ({ children, link }) => {
  let animation =
    "absolute group-hover/project:h-full group-hover/project:bg-main-color transition-all duration-300 ease-in-out bg-white";
  return (
    <Link
      href={link}
      className="bg-white relative w-full  group/project text-main-color p-3"
      target="_blank"
    >
      {children}
      <div className="absolute group-hover/project:w-full group-hover/project:bg-main-color transition-all duration-300  w-0 h-1 top-0 ease-in-out  bg-white"></div>
      <div className="absolute group-hover/project:h-full group-hover/project:bg-main-color transition-all duration-300 ease-in-out w-1 h-0 rigth-0 top-0  bg-white"></div>
      <div className="absolute group-hover/project:h-full group-hover/project:bg-main-color transition-all duration-300 ease-in-out w-1 h-0 -right-0 top-0  bg-white"></div>
      <div className="absolute group-hover/project:w-full group-hover/project:bg-main-color transition-all duration-300 ease-in-out  w-0 h-1 bottom-0  bg-white"></div>
    </Link>
  );
};
