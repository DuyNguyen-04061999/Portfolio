import About from "@/components/About";
import Feedback from "@/components/Feedback";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import React from "react";

const Home = () => {
  return (
    <>
      <About />
      <TechStack />
      <Projects />
      <Feedback />
    </>
  );
};

export default Home;
