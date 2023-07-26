import React, { useState } from "react";
import Project from "./components/Project";
import { motion, useScroll, useSpring } from "framer-motion";
import { projectsArray } from "./components/ProjectContent";

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 300,
    restDelta: 0.001,
    mass: 0.001,
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth < 600);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth < 600);
  });

  return (
    <>
      {windowWidth && (
        <motion.div style={{ scaleX }} className="scroll-progress"></motion.div>
      )}

      <motion.div
        className="projects"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
      >
        {projectsArray.map((project, index) => {
          return (
            <Project
              key={index}
              content={project.content}
              link={project.link}
              appLink={project.appLink}
              image={project.image}
            />
          );
        })}
      </motion.div>
    </>
  );
};

export default Projects;
