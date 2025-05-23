import React, { useState, useEffect } from "react";
import {
  bootstrap,
  css,
  expressjs,
  html,
  js,
  react,
  figma,
  mui,
  jquery,
  git,
  github,
  tailwind,
  framer,
  scss,
  nodejs,
  redux,
  flutter,
  dart,
  aws,
  jira,
  postman,
  xcode,
} from "../assets/tech-stack/tech-stack-export";
import Resume from "./components/Resume";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const [showToolTip, setShowToolTip] = useState({});

  const skills = [
    { name: "Flutter", image: flutter },
    { name: "React.js", image: react },
    { name: "Dart", image: dart },
    { name: "JavaScript", image: js },
    { name: "Redux.js", image: redux },
    { name: "Node.js", image: nodejs },
    { name: "Express.js", image: expressjs },
    { name: "AWS", image: aws },
    { name: "Postman", image: postman },
    { name: "Jira", image: jira },
    { name: "Xcode", image: xcode },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Scss", image: scss },
    { name: "JQuery", image: jquery },
    { name: "Git", image: git },
    { name: "GitHub", image: github },
    { name: "Figma", image: figma },
    { name: "Framer Motion", image: framer },
    { name: "Material UI", image: mui },
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
  const variants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 40 },
  };
  useEffect(() => {
    document.title = "About | Praveen";
  }, []);
  return (
    <>
      {windowWidth && (
        <motion.div style={{ scaleX }} className="scroll-progress"></motion.div>
      )}

      <motion.div
        className="about"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h1>
          <span className="greetings">Greetings!</span>
        </h1>
        <p>
          As a self-taught web and app developer, I have learned tools and
          languages such as JavaScript, React, Flutter, HTML, CSS, Node.js and
          jQuery. Additionally, I have a good understanding of UI/UX design. I
          am excited to connect with like-minded professionals to create
          stunning websites and apps.
        </p>
        <h2 className="tech-stack">Tech Stack and Tools:</h2>
        <div className="skills">
          {skills.map((item) => {
            return (
              <div
                key={item.name}
                onMouseEnter={(prev) =>
                  setShowToolTip({ ...prev, [item.name]: true })
                }
                onMouseLeave={(prev) =>
                  setShowToolTip({ ...prev, [item.name]: false })
                }
              >
                <span
                  className={`tooltip ${
                    showToolTip[item.name] && "show-tooltip"
                  }`}
                >
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
