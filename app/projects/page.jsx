import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
const page = () => {
  let projects = [
    {
      id: 1,
      link: "./imgs/videogames.jpg",
      url: "https://videogames.mmateo.com/",
      state: "complete",
    },
    {
      id: 2,
      link: "./imgs/condovisitas.jpg",
      url: "https://condovisita.com/",
      state: "complete",
    },
    {
      id: 3,
      link: "./imgs/loan.jpg",
      url: "https://condovisita.com/",
      state: "building",
    },
    {
      id: 4,
      link: "./imgs/aleja.jpg",
      url: "https://condovisita.com/",
      state: "complete",
    },
  ];
  return (
    <section className="container leading-relaxed text-white mx-auto grid gap-4 grid-cols-2 max-md:py-20 min-h-screen content-center">
      <div className=" flex flex-col max-md:col-span-2 col-span-1 gap-4">
        <h1 className="text-6xl max-md:text-4xl">
          Mis Proyectos<span className="text-red-500">.</span>
        </h1>
        <p className="text-base w-2/3 max-md:text-sm max-md:font-light max-md:w-full text-[#d6d6d6] tracking-wide leading-relaxed text-wrap">
          A lo largo del tiempo, e desarrollado diversos proyectos tanto por
          parte de las empresas donde e trabajado como retos personales, los
          principales objetivos de estos proyectos es aportar algo y a la vez
          tener un significado y un porque de su existencia. Cada uno de ellos
          significo algo en mi carrear y por eso estan aqui, en la muestra de
          mis logros.
        </p>
      </div>
      <div className=" max-md:h-[50vh] max-md:py-5 grid grid-cols-2 max-md:col-span-2 col-span-1 items-stretch  justify-center gap-4">
        {projects.map(({ link, url, id, state }, index) => {
          return (
            <Link
              key={index}
              href={`/project/${id}`}
              style={{ backgroundImage: `url(${link})` }}
              className={`col-span-1 max-md:col-span-2 group/project h-[25vh] cursor-pointer bg-cover bg-center inner-shadow rounded-lg hover:scale-105 transition-all duration-300 hover:rotate-1 bg-red-500`}
            >
              {state === "complete" ? (
                <div className="bg-none text-center items-center justify-center group-hover/project:bg-gray-800/50  text-xl transition-all duration-300 rounded-lg flex h-full ">
                  <span className="flex relative items-center gap-2 group-hover/project:bg-white p-2 pl-0  group-hover/project:text-red-500  tracking-wider ">
                    <span className="flex pl-2 items-center text-white/0 group-hover/project:text-red-500">
                      Live Project{" "}
                      <Icon icon="material-symbols:arrow-forward-rounded" />
                    </span>
                    <div className="absolute group-hover/project:w-full group-hover/project:bg-red-600 transition-all duration-300  w-0 h-1 top-0 ease-in-out  bg-white"></div>
                    <div className="absolute group-hover/project:h-full group-hover/project:bg-red-600 transition-all duration-300 ease-in-out w-1 h-0 rigth-0  bg-white"></div>
                    <div className="absolute group-hover/project:h-full group-hover/project:bg-red-600 transition-all duration-300 ease-in-out w-1 h-0 -right-0  bg-white"></div>
                    <div className="absolute group-hover/project:w-full group-hover/project:bg-red-600 transition-all duration-300 ease-in-out  w-0 h-1 bottom-0  bg-white"></div>
                  </span>
                </div>
              ) : (
                <div className="bg-none text-center items-center justify-center group-hover/project:bg-gray-800/50  text-xl transition-all duration-300 rounded-lg flex h-full ">
                  <span className="flex relative items-center gap-2 group-hover/project:bg-white p-2 pl-0  group-hover/project:text-gray-500  tracking-wider ">
                    <span className="flex pl-2 items-center text-white/0 group-hover/project:text-gray-500">
                      {state}
                      <Icon icon="material-symbols:arrow-forward-rounded" />
                    </span>
                    <div className="absolute group-hover/project:w-full group-hover/project:bg-gray-600 transition-all duration-300  w-0 h-1 top-0 ease-in-out  bg-white"></div>
                    <div className="absolute group-hover/project:h-full group-hover/project:bg-gray-600 transition-all duration-300 ease-in-out w-1 h-0 rigth-0  bg-white"></div>
                    <div className="absolute group-hover/project:h-full group-hover/project:bg-gray-600 transition-all duration-300 ease-in-out w-1 h-0 -right-0  bg-white"></div>
                    <div className="absolute group-hover/project:w-full group-hover/project:bg-gray-600 transition-all duration-300 ease-in-out  w-0 h-1 bottom-0  bg-white"></div>
                  </span>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default page;
