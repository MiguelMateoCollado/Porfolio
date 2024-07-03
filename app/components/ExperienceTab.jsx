"use client";
import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
const ExperienceTab = ({
  tabname,
  description,
  time,
  certificate,
  defaultSize,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1
        onClick={() => setOpen(!open)}
        className="text-lg max-md:text-[0.9rem] flex-wrap font-light tracking-wide flex items-center gap-1  w-fit hover:text-red-400 transition-all duration-150 cursor-pointer text-[#FF0000]"
      >
        {tabname} - {time}{" "}
        {open === true ? (
          <span>
            {" "}
            <Icon icon="teenyicons:down-small-outline" />
          </span>
        ) : (
          <Icon icon="teenyicons:right-small-outline" />
        )}
      </h1>
      <p
        className={` flex flex-col gap-2  tracking-wide truncate text-balance transition-all duration-500 ease-in-out leading-relaxed  ${
          open === false
            ? `${defaultSize} text-white/50`
            : "h-fit mb-10 text-white"
        } text-sm font-light `}
      >
        {description}
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
