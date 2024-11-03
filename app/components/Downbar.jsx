import React from "react";
import TransitionLink from "./TransitionLink";
import { Icon } from "@iconify/react";
const Downbar = () => {
  let iconClassname =
    "text-[#FBFAF8] text-3xl hover:cursor-pointer hover:text-[#272121] ease-in-out duration-150";

  return (
    <div className="  max-lg:flex hidden  fixed bg-[#FF4444]  flex-wrap items-center z-10 gap-x-4  py-3 justify-center w-full -bottom-0">
      <TransitionLink href="/">
        <Icon icon="mingcute:home-2-fill" className={`${iconClassname}`} />
      </TransitionLink>
      <TransitionLink href="/aboutme">
        <Icon icon="mingcute:user-2-fill" className={`${iconClassname}`} />
      </TransitionLink>
      <TransitionLink href="/projects">
        <Icon
          icon="mingcute:terminal-box-fill"
          className={`${iconClassname}`}
        />
      </TransitionLink>
      <TransitionLink href="/contact">
        <Icon icon="mingcute:mail-fill" className={`${iconClassname}`} />
      </TransitionLink>
    </div>
  );
};

export default Downbar;
