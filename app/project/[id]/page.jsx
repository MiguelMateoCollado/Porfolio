/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import ExperienceTab from "@/app/components/ExperienceTab";
const page = ({ params }) => {
  let projects = [
    {
      id: 1,
      link: "/imgs/videogames.jpg",
      url: "https://videogames.mmateo.com/",
      title: "Videogame Cataloge",
      description: `This project was created to implement the knowledge acquired during my course. With a two-week deadline, I used React, Express, CSS, and the rawg.io API to build a video game catalog where users could register, search, filter, and access additional information about each game. 

The project served as my final test during Henry's Bootcamp and marked my first major project. It taught me the value of practicing programming and helped me become comfortable with it. Since then, I've updated the project using new technologies I've acquired throughout my career and discovered the freedom to create anything once I have the right skills and practice.`,
      tabname: "Personal Project",
      skills: [
        "devicon:react",
        "logos:nodejs-icon",
        "devicon:tailwindcss",
        "vscode-icons:file-type-pgsql",
        "devicon:sequelize",
      ],
    },
    {
      id: 2,
      link: "/imgs/condovisitas.jpg",
      url: "https://condovisita.com/",
      title: "Condovisitas",
      time: "2023",
      tabname: "Prixet Tecnology",
      description: `I gained extensive UI design experience while completing a visitor management project. I implemented the design using CSS and
TailwindCSS and participated in backend/frontend development using React JS and Laravel. I also developed form constraints and
honed my Laravel database design skills.`,

      skills: ["devicon:react", "logos:laravel", "devicon:tailwindcss"],
    },
    {
      id: 3,
      link: "/imgs/loan.jpg",
      url: "https://condovisita.com/",
      title: "Loan System",
      time: "Present",
      tabname: "Freelance Project",
      description: `I gained extensive UI design experience while completing a visitor management project. I implemented the design using CSS and
TailwindCSS and participated in backend/frontend development using React JS and Laravel. I also developed form constraints and
honed my Laravel database design skills.`,

      skills: ["devicon:nextjs", "logos:jotai","devicon:tauri", "devicon:tailwindcss","devicon:mongodb","vscode-icons:file-type-prisma"],
    },
    {
      id: 4,
      link: "/imgs/aleja.jpg",
      url: "https://condovisita.com/",
      title: "Aleja Accesorios",
      time: "Present",
      tabname: "Prixet Technology",
      description: `I gained extensive UI design experience while completing a visitor management project. I implemented the design using CSS and
TailwindCSS and participated in backend/frontend development using React JS and Laravel. I also developed form constraints and
honed my Laravel database design skills.`,

      skills: ["mdi:wordpress","vscode-icons:file-type-css","vscode-icons:file-type-html","skill-icons:mysql-light"],
    },
  ];
  const [project] = useState(
    projects.find((project) => project.id == params.id)
  );
  return (
    <div className="container leading-relaxed gap-4 text-white mx-auto grid grid-cols-2 max-md:py-20 min-h-screen content-center">
      <div className="col-span-1 max-md:col-span-2 relative rounded-xl">
        <Image
          src={project.link}
          width={500}
          height={500}
          alt="project image"
        />
      </div>
      <div className="col-span-1 p-4 gap-3 max-md:col-span-2 flex flex-col gap-y-7">
        <h1 className="text-4xl font-light text-red-500">{project.title}</h1>
        <ExperienceTab
          description={project.description}
          tabname={project.tabname}
          defaultSize={"h-24"}
          time={project.time}
        />
        {/*<p className="font-light leading-relaxed">{project.description}</p> */}
        <h2 className="font-light">Stack:</h2>
        <span className="flex flex-row gap-4">
          {project.skills.map((value, index) => (
            <Icon key={index} icon={value} className="text-white text-3xl" />
          ))}
        </span>
        <span>
          <Link
            className="bg-white relative  group/project text-red-500 p-3 "
            href={project.url}
          >
            Link al proyecto.
            <div className="absolute group-hover/project:w-full group-hover/project:bg-red-600 transition-all duration-300  w-0 h-1 top-0 ease-in-out  bg-white"></div>
            <div className="absolute group-hover/project:h-full group-hover/project:bg-red-600 transition-all duration-300 ease-in-out w-1 h-0 rigth-0 top-0  bg-white"></div>
            <div className="absolute group-hover/project:h-full group-hover/project:bg-red-600 transition-all duration-300 ease-in-out w-1 h-0 -right-0 top-0  bg-white"></div>
            <div className="absolute group-hover/project:w-full group-hover/project:bg-red-600 transition-all duration-300 ease-in-out  w-0 h-1 bottom-0  bg-white"></div>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default page;
