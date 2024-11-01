import React from "react";
import { Icon } from "@iconify/react";

const Skills = () => {
  let iconCollect = [
    { value: "teenyicons:react-outline", name: "react", color: "#36dff8" },
    { value: "teenyicons:nextjs-outline", name: "nextjs", color: "#221f1f" },
    {
      value: "teenyicons:javascript-outline",
      name: "javascript",
      color: "#f0db4f",
    },
    {
      value: "teenyicons:typescript-outline",
      name: "typescript",
      color: "#007acc",
    },
    { value: "teenyicons:css3-outline", name: "CSS", color: "#264de4" },
    { value: "teenyicons:html5-outline", name: "HTML", color: "#e34c26" },
    {
      value: "teenyicons:tailwind-outline",
      name: "Tailwind CSS",
      color: "#06b6d4",
    },
  ];
  let iconBackend = [
    {
      value: "teenyicons:laravel-outline",
      name: "Laravel",
      color: "#fb503b",
    },
    {
      value: "teenyicons:nodejs-outline",
      name: "Node JS ",
      color: "#68a063",
    },
    {
      value: "bxl:php",
      name: "PHP",
      color: "#8993be",
    },

    {
      value: "simple-icons:express",
      name: "Express",
      color: "#000000",
    },
  ];
  let DatabaseIcons = [
    { value: "teenyicons:mongodb-outline", name: "mongodb", color: "#0cd45b" },
    { value: "file-icons:prisma", name: "prisma", color: "#1A202C" },
    { value: "file-icons:postgresql", name: "postgresql", color: "#336791" },
    { value: "grommet-icons:mysql", name: "mysql", color: "#F29111" },
  ];
  let interest = [
    { value: "teenyicons:rust-outline", name: "Rust", color: "#F65008" },
    { value: "simple-icons:tauri", name: "Tauri", color: "#FFC337" },
  ];
  let sections = [
    { value: "Web Developer", collect: iconCollect, color: "text-[#61e8e1]" },
    {
      value: "Back end Developer",
      collect: iconBackend,
      color: "text-[#ED254E]",
    },
    { value: "Database", collect: DatabaseIcons, color: "text-[#3D7068]" },
    { value: "Interest", collect: interest, color: "text-[#E5E059]" },
  ];
  return (
    <div className=" flex flex-col gap-2 w-full">
      {sections.map((section, index, ) => (
        <div
          key={index}
          className="flex flex-col gap-2 content-center justify-center"
        >
          <h1 className={`text-xl font-light tracking-wide   ${section.color}`}>
            {section.value} 
          </h1>
          <div className="flex gap-4 flex-wrap">
            {section.collect.map((icon, index) => (
              <Icon
                key={index}
                icon={icon.value}
                className={`text-3xl ${icon.color}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

/*
  <span className="font-light flex max-md:flex-wrap items-center gap-4 tracking-wider text-gray-300/70">
        <h1 className="max-md:text-lg text-blue-400">
          Web Developer <span className="max-md:hidden">-</span>{" "}
        </h1>
        <div className="flex space-x-2">
          {iconCollect.map(({ value, name, color }, index) => (
            <div key={index} className="group relative">
              <p
                style={{ backgroundColor: `${color}` }}
                className={`absolute hidden z-10 bg-[${color}]  p-2 text-sm text-white rounded-md  group-hover:block top-7 `}
              >
                {name}
              </p>
              <Icon icon={value} className={`text-white text-2xl`} />
            </div>
          ))}
        </div>
      </span>
      <span className="font-light flex max-md:flex-wrap items-center gap-4 tracking-wider text-gray-300/70">
        <h1 className="max-md:text-[1.7rem] text-red-400">
          Back end Developer -{" "}
        </h1>
        <div className="flex gap-4">
          {iconBackend.map(({ value, name, color }, index) => (
            <div key={index} className="group relative">
              <p
                style={{ backgroundColor: `${color}` }}
                className={`absolute hidden p-2 z-10 text-white  group-hover:block rounded-md top-6 `}
              >
                {name}
              </p>
              <Icon icon={value} className="text-white text-2xl" />
            </div>
          ))}
        </div>
      </span>
      <span className="font-light flex max-md:flex-wrap items-center gap-4 tracking-wider text-gray-300/70">
        <h1 className="max-md:text-[1.7rem] text-green-400">Database - </h1>
        <div className="flex gap-4">
          {DatabaseIcons.map(({ value, name, color }, index) => (
            <div key={index} className="group relative">
              <p
                style={{ backgroundColor: `${color}` }}
                className={`absolute hidden p-2 z-10 text-white  group-hover:block rounded-md top-6 `}
              >
                {name}
              </p>
              <Icon icon={value} className="text-white text-2xl" />
            </div>
          ))}
        </div>
      </span>
      <span className="font-light flex items-center gap-4  max-md:flex-col max-md:items-start tracking-wider text-gray-300/70">
        <h1 className="max-md:text-[1.7rem] text-orange-400">
          {" "}
          Interestings -{" "}
        </h1>
        <div className="flex gap-4">
          {interest.map(({ value, name, color }, index) => (
            <div key={index} className="group relative">
              <p
                style={{ backgroundColor: `${color}` }}
                className={`absolute hidden p-2 z-10 text-white  group-hover:block rounded-md top-6 `}
              >
                {name}
              </p>
              <Icon icon={value} className="text-white text-2xl" />
            </div>
          ))}
        </div>
      </span> */

export default Skills;
