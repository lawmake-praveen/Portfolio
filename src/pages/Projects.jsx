import React, { useState, useEffect } from "react";
import Project from "./components/Project";
import { motion, useScroll, useSpring } from "framer-motion";
import { projectsArray } from "./components/ProjectContent";
import { HiInformationCircle } from "react-icons/hi";

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
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const variants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 40 }
  }
  useEffect(() => {
    document.title = "Projects | Praveen"
  },[])
  return (
    <>
      {windowWidth && (
        <motion.div style={{ scaleX }} className="scroll-progress"></motion.div>
      )}
      <motion.div
        className="projects"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="projects-disclaimer">
          <span
            className={`disclaimer ${showDisclaimer && "show-dis"}`}
            onMouseEnter={() => setShowDisclaimer(true)}
            onMouseLeave={() => setShowDisclaimer(false)}
          >
            All these projects have been entirely designed and developed by me,
            without any copied and pasted code or methods.
          </span>
          <span
            className="diclaimer-icon"
            onMouseEnter={() => setShowDisclaimer(true)}
            onMouseLeave={() => setShowDisclaimer(false)}
          >
            <HiInformationCircle />
          </span>
        </div>

        <div className="all-projects">
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
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
