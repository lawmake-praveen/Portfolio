import React from "react";
import {
  bootstrap,
  html,
  css,
  js,
  react,
  figma,
  materialui,
  jquery,
  github,
  tailwind,
  framer,
  scss,
} from "../assets";
import Resume from "./components/Resume";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    {name : 'HTML', image: html},
    {name : 'CSS', image: css},
    {name : 'JavaScript', image: js},
    {name : 'React', image: react},
    {name : 'JQuery', image: jquery},
    {name : 'GitHub', image: github},
    {name : 'Figma', image: figma},
    {name : 'Framer Motion', image: framer},
    {name : 'Scss', image: scss},
    {name : 'Material UI', image: materialui},
    {name : 'Bootstrap', image: bootstrap},
    {name : 'Tailwind CSS', image: tailwind},
];

  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <h1>Greetings! I'm Lawmake Praveen</h1>
      <p>
        As a self-taught frontend developer, I have learned tools and languages
        like JavaScript, Html, Css, Bootstrap, jQuery, and web design
        principles. I am excited to connect with like-minded professionals who
        share my passion for creating exceptional user experiences through
        innovative web development.
      </p>
      <h2 className="tech-stack">Tech Stack:</h2>
      <div className="skills">
        {skills.map((item) => {
          return (
            <div key={item.name} title={item.name}>
              <img src={item.image} alt={item.name} />
            </div>
          );
        })}
      </div>
      <Resume />
    </motion.div>
  );
};

export default About;
