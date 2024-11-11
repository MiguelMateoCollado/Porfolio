"use client";
import React from "react";
import { Icon } from "@iconify/react";
import TransitionLink from "./TransitionLink";
import { usePathname } from 'next/navigation'
const Sidebar = () => {
  let routes = [
    { url: "/", icon: "mingcute:home-2-fill" },
    { url: "/aboutme", icon: "mingcute:user-2-fill" },
    { url: "/projects", icon: "mingcute:terminal-box-fill" },
    { url: "/contact", icon: "mingcute:mail-fill" },
  ];
  let pathname = usePathname();
  let iconClassname =
    " text-xl max-lg:text-3xl  hover:cursor-pointer hover:text-[#272121] ease-in-out duration-150";
  return (
    <div className="fixed shadow-md  max-lg:w-full max-lg:rounded-none z-10 max-lg:bottom-0 bg-main-color flex max-md:flex-wrap max-md:fixed  items-center gap-x-4 p-3 justify-center  right-0 left-0 mx-auto top-[90vh] w-1/5   rounded-full">
      {routes.map((route, index) => (
        <TransitionLink key={index} href={route.url}>
          <Icon
            icon={route.icon}
            className={`${iconClassname} ${
              pathname === route.url ? "text-[#272121]" : "text-[#FBFAF8]"
            }`}
          />
        </TransitionLink>
      ))}
    </div>
  );
};

export default Sidebar;
