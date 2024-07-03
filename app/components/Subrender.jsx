"use client";
import React from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import Skills from "./Skills";
import Experience from "./Experience";
import Credentials from "./Credentials";
const Subrender = () => {
  const [activeSection, setActiveSection] = useState("skills");
  return (
    <>
      <Navigation setActive={setActiveSection} />
      {activeSection === "skills" && <Skills />}
      {activeSection === "experience" && <Experience />}
      {activeSection === "credentials" && <Credentials />}
    </>
  );
};

export default Subrender;
