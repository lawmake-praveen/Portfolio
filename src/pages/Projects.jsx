import React, { useState } from "react";
import Project from "./components/Project";
import { motion, useScroll } from "framer-motion";
import {
  reactnotes,
  currency,
  pictures,
  news,
  tictactoe,
  todo,
  v2painting,
  weather,
  portfolio,
} from "../assets/Project-screenshot/export";

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth < 600);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth < 600);
  });

  return (
    <>
      {windowWidth && (
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="scroll-progress"
        ></motion.div>
      )}

      <motion.div
        className="projects"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
      >
        <Project
          content="A simple personal portfolio website to showcase my skills and projects"
          link="https://lawmake-praveen.vercel.app/"
          appLink="Personal Portfolio"
          image={portfolio}
        />
        <Project
          content="This Weather app helps to know the recent weather in your city."
          link="https://weather-app-praveen.vercel.app/"
          appLink="All in one Weather App"
          image={weather}
        />
        <Project
          content="Keep all your Notes in one place with react notes"
          link="https://reactnotes-lawmake-praveen.vercel.app/"
          appLink="React Notes"
          image={reactnotes}
        />
        <Project
          content="This Currency Converter app helps to know the foreign exchange rate."
          link="https://currency-app-praveen.vercel.app/"
          appLink="Currency Calculator App"
          image={currency}
        />
        <Project
          content="Let's play Tic Tac Toe Multiplayer game and have fun."
          link="https://tic-tac-toe-praveen.vercel.app/"
          appLink="Tic Tac Toe Game"
          image={tictactoe}
        />
        <Project
          content="A Small demo website for a local painting Company."
          link="https://v2-service.vercel.app/"
          appLink="V2 Service and Painting"
          image={v2painting}
        />
        <Project
          content="Explore thousands of images with photo gallery app"
          link="https://plp-pictures-gallery.vercel.app/"
          appLink="Photo Gallery"
          image={pictures}
        />
        <Project
          content="Create, Save and Delete your Tasks instantly with Todo App."
          link="https://todo-app-praveen.vercel.app/"
          appLink="Todo App"
          image={todo}
        />
        <Project
          content="This Daily News app helps to know the recent news around the world."
          link="https://daily-news-praveen.vercel.app/"
          appLink="Daily News App"
          image={news}
        />
      </motion.div>
    </>
  );
};

export default Projects;
