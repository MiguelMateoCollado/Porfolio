import React from "react";
import { Icon } from "@iconify/react";
import TransitionLink from "./TransitionLink";
const Sidebar = () => {
  let iconClassname =
    "text-[#FBFAF8] text-xl hover:cursor-pointer hover:text-[#272121] ease-in-out duration-150";

  return (
    <div className="absolute shadow-md  max-md:hidden    bg-[#FF0000]/50 flex flex-wrap items-center gap-y-3 p-3 justify-center w-[3em] top-[35vh] bottom-[35vh] right-[3vw] rounded-full">
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

export default Sidebar;
