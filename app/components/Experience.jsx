"use client";
import React from "react";
import { AcordionTab } from "./AcordionTab";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Experience = () => {
 
  let experience = [
    {
      id: 1,
      experience: "Prixet Technology",
      time: "2023 - 2024",
      description: `🔸 Identificación y resolución de fallos de seguridad en servidores, con una mejora del 80% en la prevención de hackeos.
🔸 Aplicación de conocimientos en servidores (nginx, apache y openlitespeed) y uso de OpenLiteSpeed con Geolite2 para redirigir usuarios, mejorando el engagement en una tienda online. 
🔸 Contribución como desarrollador front-end, mejorando la experiencia del usuario y la interfaz, así como la usabilidad de productos y servicios.
🔸 Diseñar y renovar UI de aplicaciones de la empresa.
🔸 Creación de lading page y paginas utiliando Wordpress.`,
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      {experience.map((exp, index) => (
        <AcordionTab key={index}>
          <AccordionItem value={exp.id}>
            <AccordionTrigger className="text-lg max-md:text-[0.9rem] flex-wrap font-light tracking-wide flex items-center gap-1  w-fit hover:text-red-400 transition-all duration-150 cursor-pointer text-[#D24545]">{exp.experience} - {exp.time}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 whitespace-pre-wrap tracking-wide truncate text-pretty transition-all duration-500 ease-in-out leading-relaxed">
              {exp.description}
            </AccordionContent>
          </AccordionItem>
        </AcordionTab>
      ))}
    </div>
  );
};
export default Experience;
