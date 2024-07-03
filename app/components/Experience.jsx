import React from "react";
import ExperienceTab from "./ExperienceTab";

const Experience = () => {
  let experience = [
    {
      experience: "Prixet Technology",
      time: "2023 - 2024",
      description:
        "I excel in application development using React, NextJS, Laravel, and Node JS, ensuring the creation of robust and cutting-edge web applications. My expertise in WordPress web development guarantees the delivery of elegant and functional websites. Additionally, I confidently handle web page deployment on VPS, server management using Vultr and Mochahost, and prioritize security management with Nginx. I also have a strong track record in implementing server-side functions such as geolocation with Litespeed and creating impactful landing page designs using CSS and Tailwind CSS.",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      {experience.map((exp, index) => (
        <ExperienceTab
          defaultSize={"h-5"}
          key={index}
          time={exp.time}
          description={exp.description}
          tabname={exp.experience}
        />
      ))}
    </div>
  );
};

export default Experience;
