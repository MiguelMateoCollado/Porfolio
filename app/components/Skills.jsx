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
    { value: "Tecnologias Front end", collect: iconCollect, color: "text-[#61e8e1]" },
    {
      value: "Tecnologias Back end",
      collect: iconBackend,
      color: "text-[#f9eae1]",
    },
    { value: "Tecnologias de base de datos", collect: DatabaseIcons, color: "text-[#b3efb2]" },
    { value: "Intereses", collect: interest, color: "text-[#E5E059]" },
  ];
  return (
    <div className=" flex flex-col gap-2 w-full">
      {sections.map((section, index, ) => (
        <div
          key={index}
          className="flex flex-col gap-4 content-center justify-center"
        >
          <h1 className={`text-xl  tracking-wide   ${section.color}`}>
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



export default Skills;
