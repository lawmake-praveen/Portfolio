import React from "react";
import Project from "./components/Project";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <Project
        content="This Weather app helps to know the recent weather in your city."
        link="https://weather-app-praveen.vercel.app/"
        appName="All in one Weather App"
      />
      <Project
        content="Keep all your Notes in one place"
        link="https://reactnotes-lawmake-praveen.vercel.app/"
        appName="React Notes"
      />
      <Project
        content="This Currency Converter app helps to know the exchange rate of foreign currency."
        link="https://currency-app-praveen.vercel.app/"
        appName="Currency Calculator App"
      />
      <Project
        content="Let's play Tic Tac Toe Multiplayer game and have fun."
        link="https://tic-tac-toe-praveen.vercel.app/"
        appName="Tic Tac Toe Game"
      />
      <Project
        content="A Small demo website for a local painting Company."
        link="https://v2-service.vercel.app/"
        appName="V2 Service and Painting"
      />
      <Project
        content="Explore images"
        link="https://plp-pictures-gallery.vercel.app/"
        appName="Photo Gallery"
      />
      <Project
        content="Create, Save and Delete your Tasks instantly with Todo App."
        link="https://todo-app-praveen.vercel.app/"
        appName="Todo App"
      />
      <Project
        content="This Daily News app helps to know the recent news around the world."
        link="https://daily-news-praveen.vercel.app/"
        appName="Daily News App"
      />
    </motion.div>
  );
};

export default Projects;
