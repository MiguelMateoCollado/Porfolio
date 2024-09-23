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
      position: "Full Stack Developer",
      title: "Catalogo de videojuegos - Proyecto Final",
      time: "2023",
      description: `Responsabilidades:
      🌟 Crear un catalogo de videojuegos con el uso de React, Express, CSS, y la API rawg.io para mostrar información de videojuegos.
      🌟 Crear un CRUD para registrar, buscar, filtrar y mostrar información de videojuegos.
      🌟 Crear una funcionalidad para mostrar más información sobre los videojuegos.
      🌟 Desarrollar todo el front-end del proyecto.

      Descripción:

      Este proyecto nació con el propósito de plasmar todo lo que aprendí durante mi curso. Con solo dos semanas de plazo, me sumergí en el desarrollo de un catálogo de videojuegos utilizando React, Express, CSS y la API de rawg.io. En él, los usuarios pueden registrarse, buscar, filtrar y descubrir información detallada sobre cada juego. Fue mi proyecto final en el Bootcamp de Henry, y más que un simple examen, significó mi primer gran desafío como programador.

A través de este proceso, aprendí lo valiosa que es la práctica constante y cómo, poco a poco, empecé a sentirme más seguro en este camino que había elegido. Este proyecto me marcó, no solo porque fue el primero, sino porque me demostró que, con esfuerzo y dedicación, podía lograr cualquier cosa.

Con el paso del tiempo, seguí mejorándolo, aplicando las nuevas tecnologías que he ido aprendiendo a lo largo de mi carrera. Descubrí que, cuando tienes las habilidades y la pasión por lo que haces, el único límite para crear es tu propia imaginación.`,
      tabname: "Proyecto Final Henry Bootcamp",
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
      time: "2022",
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
      description: `
      
      I gained extensive UI design experience while completing a visitor management project. I implemented the design using CSS and
TailwindCSS and participated in backend/frontend development using React JS and Laravel. I also developed form constraints and
honed my Laravel database design skills.`,

      skills: [
        "devicon:nextjs",
        "logos:jotai",
        "devicon:tauri",
        "devicon:tailwindcss",
        "devicon:mongodb",
        "vscode-icons:file-type-prisma",
      ],
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

      skills: [
        "mdi:wordpress",
        "vscode-icons:file-type-css",
        "vscode-icons:file-type-html",
        "skill-icons:mysql-light",
      ],
    },
  ];
  const [project] = useState(
    projects.find((project) => project.id == params.id)
  );
  return (
    <div className="container leading-relaxed gap-4 text-white mx-auto grid grid-cols-2 max-md:py-20 min-h-screen content-center">
      <div className="col-span-1 max-md:col-span-2 content-center relative rounded-xl">
        <Image
          src={project.link}
          width={500}
          height={500}
          alt="project image"
        />
      </div>
      <div className="col-span-1 p-4 gap-3 max-md:col-span-2 flex flex-col gap-y-7">
        <span>
          <h1 className="text-3xl font-light text-[crimson]">
            {project.title}
          </h1>
          <h1 className="text-xl font-light text-gray-500">
            {project.position}
          </h1>
        </span>
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
