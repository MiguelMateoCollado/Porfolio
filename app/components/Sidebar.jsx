import React from "react";
import { Icon } from "@iconify/react";
import TransitionLink from "./TransitionLink";
const Sidebar = () => {
  let iconClassname =
    "text-[#FBFAF8] text-xl hover:cursor-pointer hover:text-[#272121] ease-in-out duration-150";
  return (
    <div className="fixed shadow-md  max-lg:hidden bg-main-color flex  items-center gap-x-4 p-3 justify-center  right-0 left-0 mx-auto top-[90vh] w-1/5   rounded-full">
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
