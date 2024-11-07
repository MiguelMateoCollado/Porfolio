"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
const ExperienceTab = ({
  tabname,
  description,
  time,
  certificate,
  isOpen,
  id,
  onToggle,
  defaultSize,
}) => {

  return (
    <div className="">
      <h1
        onClick={onToggle}
        className="text-lg max-md:text-[0.9rem] flex-wrap font-light tracking-wide flex items-center gap-1  w-fit hover:text-red-400 transition-all duration-150 cursor-pointer text-[#D24545]"
      >
        {tabname} - {time}
        {open ? (
          <span>
            <Icon icon="teenyicons:down-small-outline" />
          </span>
        ) : (
          <Icon icon="teenyicons:right-small-outline" />
        )}
      </h1>
      <p
        className={` flex flex-col gap-2 whitespace-pre-wrap tracking-wide truncate text-pretty transition-all duration-500 ease-in-out leading-relaxed  ${
          id === isOpen  ? `${defaultSize} text-white/50` : "h-fit mb-4 text-white"
        } text-sm font-light `}
      >
        {description
          .trim()
          .split("\n")
          .map((line, index) => (
            <div
              key={index}
              className={`flex items-start ${
                line.startsWith("🔵") ? "ml-6" : ""
              }`}
            >
              <p>{line.replace()}</p>
            </div>
          ))}
        {certificate && (
          <Link
            className="text-sm w-fit text-blue-200 hover:text-blue-400 transition-all duration-150"
            href={certificate}
          >
            Certificate
          </Link>
        )}
      </p>
    </div>
  );
};

export default ExperienceTab;
