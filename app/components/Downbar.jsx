'use client'
import TransitionLink from "./TransitionLink";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
const Downbar = () => {
  let iconClassname =
    "text-[#FBFAF8] text-3xl hover:cursor-pointer hover:text-[#272121] ease-in-out duration-150";
  let routes = [
    { url: "/", icon: "mingcute:home-2-fill" },
    { url: "/aboutme", icon: "mingcute:user-2-fill" },
    { url: "/projects", icon: "mingcute:terminal-box-fill" },
    { url: "/contact", icon: "mingcute:mail-fill" },
  ];
  let pathname = usePathname();
  return (
    <div className="  max-lg:flex hidden  fixed bg-main-color  flex-wrap items-center z-10 gap-x-4  py-3 justify-center w-full -bottom-0">
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

export default Downbar;
