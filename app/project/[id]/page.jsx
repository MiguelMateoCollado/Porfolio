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
I created this project to summarize my learning during the course. In just one week, I developed a video game catalog using React, Express, CSS, and the rawg.io API.

Users can register, search, filter, and view game details. This final project at Henry's Bootcamp was my first major challenge, teaching me the value of practice and boosting my confidence.

It showed me that with hard work, I can achieve my goals. I’ve continued improving it by exploring new technologies, realizing that my only limit is my imagination.`,
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
      description: `Condovisitas es una app de visitas a residenciales y llevar un registro de las visitas de los inquilinos la idea es llevar un registro constantes de las visitas de las personas y agilizar el proceso.
      
Me encarge del frontend y el backend de la app. Desarrolle la app con React y Laravel. En el frontend Utilice Tailwind y en el backend use PHP y MySQL. Desarrolle todas las funcionaldades del front y maneje los formularios utilizando PHP y laravel.`,

      skills: [
        "devicon:react",
        "logos:laravel",
        "devicon:tailwindcss",
        "vscode-icons:file-type-php",
        "vscode-icons:file-type-mysql",
      ],
    },
    {
      id: 3,
      link: "/imgs/noah.png",
      url: "https://restaurantenoah.com.do/",
      title: "Restaurante Noah",
      time: "2024",
      tabname: "Prixet Technology",
      description: `Fui encargado de rediseñar la UI del restaurante Noah. Utilice Wordpress, Realice un rediseño de la UI de la app.`,

      skills: ["devicon:html5", "devicon:css3", "simple-icons:wordpress"],
    },
    {
      id: 4,
      link: "/imgs/aleja.jpg",
      url: "https://es.alejaaccesorios.com/",
      title: "Aleja Accesorios",
      time: "2024",
      tabname: "Prixet Technology",
      description: `Aleja Accesorios es una tienda online de accesorios. la idea principal era darle un aire frezco a su pagina anterior cambiando la UI y optimizando el rendimiento de la pagina.
      desarrolle un e-commerce con Wordpress. Utilice Wordpress, implementando la UI y pagos con Paypal registro y un metodo de redireccionamiento con Geolite2., desplegue la aplicación utilizando nginx`,

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
            <AccordionContent className="flex flex-col gap-2 whitespace-pre-wrap tracking-wide max-xl:text-xs truncate text-pretty transition-all duration-500 ease-in-out leading-relaxed">
              {project.description}
            </AccordionContent>
          </AccordionItem>
        </AcordionTab>

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
