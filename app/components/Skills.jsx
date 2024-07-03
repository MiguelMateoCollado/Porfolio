import React from "react";
import { Icon } from "@iconify/react";

const Skills = () => {
  let iconCollect = [
    "teenyicons:react-outline",
    "teenyicons:nextjs-outline",
    "teenyicons:nodejs-outline",
    "teenyicons:html5-outline",
    "teenyicons:tailwind-solid",
    "teenyicons:laravel-outline",
    "akar-icons:php-fill",
  ];
  let interest = ["simple-icons:rust", "simple-icons:tauri"];
  return (
    <div className=" flex flex-col gap-4  ">
      <span className="font-light flex max-md:flex-wrap items-center gap-4 tracking-wider text-gray-300/70">
        <h1 className="max-md:text-[1.7rem]">Web Developer - </h1>
        <div className="flex gap-4">
          {iconCollect.map((value, index) => (
            <Icon key={index} icon={value} className="text-white text-2xl" />
          ))}
        </div>
      </span>
      <span className="font-light flex items-center gap-4  max-md:flex-col max-md:items-start tracking-wider text-gray-300/70">
        <h1 className="max-md:text-[1.7rem]"> Interestings - </h1>
        <div className="flex gap-4">
          {interest.map((value, index) => (
            <Icon key={index} icon={value} className="text-white text-2xl" />
          ))}
        </div>
      </span>
    </div>
  );
};

export default Skills;
