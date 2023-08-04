import React, { useState } from "react";
import {
  bootstrap,
  html,
  css,
  js,
  react,
  figma,
  materialui,
  jquery,
  git,
  github,
  tailwind,
  framer,
  scss,
  nodejs,
  redux,
  express,
} from "../assets";
import Resume from "./components/Resume";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const [showToolTip, setShowToolTip] = useState({});

  const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: js },
    { name: "React.js", image: react },
    { name: "Redux.js", image: redux },
    { name: "Node.js", image: nodejs },
    { name: "Express.js", image: express },
    { name: "JQuery", image: jquery },
    { name: "Git", image: git },
    { name: "GitHub", image: github },
    { name: "Figma", image: figma },
    { name: "Scss", image: scss },
    { name: "Framer Motion", image: framer },
    { name: "Material UI", image: materialui },
    { name: "Tailwind CSS", image: tailwind },
    { name: "Bootstrap", image: bootstrap },
  ];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth < 600);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth < 600);
  });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    mass: 0.001,
  });

  return (
    <>
      {windowWidth && (
        <motion.div style={{ scaleX }} className="scroll-progress"></motion.div>
      )}

      <motion.div
        className="about"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
      >
        <h1>
          <span className="greetings">Greetings!</span>
        </h1>
        <p>
          As a self-taught web developer, I have learned tools and languages
          such as JavaScript, React, HTML, CSS, Node.js and jQuery.
          Additionally, I have a good understanding of UI/UX design. I have been
          learning these skills and tools for the past eight months through
          online courses and now looking to start my professional web developer
          career. I am excited to connect with like-minded professionals to
          create stunning websites.
        </p>
        <h2 className="tech-stack">Tech Stack and Tools:</h2>
        <div className="skills">
          {skills.map((item) => {
            return (
              <div
                key={item.name}
                onMouseEnter={(prev) => setShowToolTip({...prev, [item.name]: true})}
                onMouseLeave={(prev) => setShowToolTip({...prev, [item.name]: false})}
              >
                <span className={`tooltip ${showToolTip[item.name] && "show-tooltip"}`}>
                  {item.name}
                </span>
                <img src={item.image} alt={item.name} />
              </div>
            );
          })}
        </div>
        <Resume />
      </motion.div>
    </>
  );
};

export default About;
