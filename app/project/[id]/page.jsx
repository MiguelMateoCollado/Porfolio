/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { AnimatedButton } from "@/app/components/AnimatedButton";
import { AcordionTab } from "@/app/components/AcordionTab";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
Este proyecto nació con el propósito de plasmar todo lo que aprendí durante mi curso. Con solo dos semanas de plazo, me sumergí en el desarrollo de un catálogo de videojuegos utilizando React, Express, CSS y la API de rawg.io.
En él, los usuarios pueden registrarse, buscar, filtrar y descubrir información detallada sobre cada juego. Fue mi proyecto final en el Bootcamp de Henry, y más que un simple examen, significó mi primer gran desafío como programador. A través de este proceso, aprendí lo valiosa que es la práctica constante y cómo, poco a poco, empecé a sentirme más seguro en este camino que había elegido. Este proyecto me marcó, no solo porque fue el primero, sino porque me demostró que, con esfuerzo y dedicación, podía lograr cualquier cosa.
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
      link: "/imgs/noah.png",
      url: "https://restaurantenoah.com.do/",
      title: "Restaurante Noah",
      time: "2024",
      tabname: "Prixet Technology",
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
      url: "https://es.alejaaccesorios.com/",
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
    <div className="container leading-relaxed gap-4 text-white mx-auto max-lg:max-w-md grid grid-cols-2 max-md:py-20 min-h-screen lg:h-[90vh] content-center">
      <div className="col-span-1 max-lg:col-span-2 justify-items-center content-center relative rounded-xl">
        <Image
          src={project.link}
          width={500}
          height={600}
          alt="project image"
        />
      </div>
      <div className="col-span-1 p-4 gap-3 max-lg:col-span-2 max-lg:p-0 flex flex-col gap-y-2">
        <span>
          <h1 className="text-3xl max-lg:text-xl tracking-wide text-main-color">
            {project.title}
          </h1>
          <h1 className="text-xl font-light text-gray-500">
            {project.position}
          </h1>
        </span>
        <AcordionTab>
          <AccordionItem value={project.id}>
            <AccordionTrigger className="text-lg max-md:text-[0.9rem] flex-wrap font-light tracking-wide flex items-center gap-1  w-fit hover:text-red-400 transition-all duration-150 cursor-pointer text-[#D24545]">
              {project.tabname} - {project.time}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 whitespace-pre-wrap tracking-wide truncate text-pretty transition-all duration-500 ease-in-out leading-relaxed">
              {project.description}
            </AccordionContent>
          </AccordionItem>
        </AcordionTab>
        {/*<p className="font-light leading-relaxed">{project.description}</p> */}
        <h2 className="font-light">Stack:</h2>
        <span className="flex flex-row gap-x-4 px-0 p-3">
          {project.skills.map((value, index) => (
            <Icon key={index} icon={value} className="text-white text-3xl" />
          ))}
        </span>
        <span>
          <AnimatedButton link={project.url}> Ver Proyecto</AnimatedButton>
        </span>
      </div>
    </div>
  );
};

export default page;
