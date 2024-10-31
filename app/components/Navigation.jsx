import React from "react";

const Navigation = ({ setActive }) => {
  let navItemClassName =
    "text-white hover:cursor-pointer ease-in-out duration-300 relative group/link hover:text-[#FF0000]";
  let hoverLink =
    "absolute bg-white ease-in-out duration-150 transition-all group-hover/link:bg-red-500 h-1 w-1/2 group-hover/link:w-full rounded-full";
  return (
    <ul className="flex gap-x-10 max-md:gap-x-between tracking-wide ">
      <li onClick={() => setActive("skills")} className={navItemClassName}>
        Skills <div className={hoverLink}></div>
      </li>
      <li onClick={() => setActive("experience")} className={navItemClassName}>
        Experience <div className={hoverLink}></div>
      </li>
      <li onClick={() => setActive("credentials")} className={navItemClassName}>
        Credentials <div className={hoverLink}></div>
      </li>
    </ul>
  );
};

export default Navigation;
