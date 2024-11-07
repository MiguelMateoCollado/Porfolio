import React from "react";

const Navigation = ({ setActive }) => {
  let navItemClassName =
    "text-[#e0e2db] hover:cursor-pointer ease-in-out duration-300 relative group/link hover:text-[#FF0000]";
  let hoverLink =
    "absolute bg-[#e0e2db] ease-in-out duration-150 transition-all group-hover/link:bg-red-500 h-1 w-1/2 group-hover/link:w-full rounded-full";
  return (
    <ul className="flex max-md:space-x-2.5 max-lg:space-x-10 space-x-5 tracking-wide w-full max-md:text-sm  ">
      <li onClick={() => setActive("skills")} className={navItemClassName}>
        Habilidades <div className={hoverLink}></div>
      </li>
      <li onClick={() => setActive("experience")} className={navItemClassName}>
        Experiencia <div className={hoverLink}></div>
      </li>
      <li onClick={() => setActive("credentials")} className={navItemClassName}>
        Certificados <div className={hoverLink}></div>
      </li>
    </ul>
  );
};

export default Navigation;
