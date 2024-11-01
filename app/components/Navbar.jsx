import React from "react";
import { Icon } from "@iconify/react";
const Navbar = () => {
  let iconClassname =
    "text-[#FBFAF8] text-3xl  hover:cursor-pointer hover:text-[#272121] ease-in-out duration-150";
  return (
    <nav className="container py-5 z-10 fixed max-lg:bg-red-500   w-full  grid grid-cols-2">
      <div className="col-span-1">
        <h1 className="text-2xl text-[#FBFAF8]">Mmateo.</h1>
      </div>
      <ul className=" flex col-span-1 items-center gap-x-2 justify-end">
        <li>
          <Icon icon="teenyicons:linkedin-solid" className={`${iconClassname}`} />
        </li>
        <li>
          <Icon icon="teenyicons:github-solid" className={`${iconClassname}`} />
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
