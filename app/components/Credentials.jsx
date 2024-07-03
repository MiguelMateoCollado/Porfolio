import React from "react";
import ExperienceTab from "./ExperienceTab";

const Credentials = () => {
  let experience = [
    {
      experience: "Henry Bootcamp",
      time: "2022 - 2023",
      certificate:
        "https://certificates.soyhenry.com/new-cert?id=7e8069fc217c06d4c6af890b5ee944cb8f6c011423c618b2477e51001a22dded",
      description:
        "I completed the intensive Full Stack Development Program, dedicating over 1000 hours to mastering core technologies such as JavaScript, React, Node.js, Sequelize, and Express. Throughout the program, I undertook individual and group projects, developing applications that consumed data from a video game API and creating an e-commerce platform. This experience has equipped me with the essential skills and knowledge to succeed in web development.",
    },
    {
      experience: "React University",
      time: "2022",
      certificate:
        "https://www.udemy.com/certificate/UC-f479516b-458c-4ada-9940-a179aee96dc2/",
      description: `I have completed a comprehensive React course based on the LEAP methodology, acquiring advanced skills in:
      React API and Context API: Mastering the React API and its Context API for efficient global state management.
      Hooks and Functional Components: Creating modern functional components using Hooks.
      High-Quality Component Development: Design and development of reusable and maintainable components.
      Forms Management: Handling controlled and uncontrolled inputs in React forms.
      HTTP Requests: Integration of HTTP requests and data management in React components.
      Animations and Transitions: Implementing smooth animations and transitions.
      Styled Components and Advanced CSS: Advanced styling management with styled components.
      React Router: Configuring routing systems for applications.
      State Management with Redux: Using Redux for complex state management.
      Testing: Performing unit tests with Jest and Enzyme.
      Additionally, I have received training in animations and transitions, styled components, React Router and Redux as complementary courses.`,
    },
  ];
  return (
    <div>
      {experience.map((exp, index) => (
        <ExperienceTab
          key={index}
          time={exp.time}
          description={exp.description}
          certificate={exp.certificate}
          tabname={exp.experience}
          defaultSize={"h-5"}
        />
      ))}
    </div>
  );
};

export default Credentials;
