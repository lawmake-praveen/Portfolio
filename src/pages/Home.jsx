import React from "react";
import { motion } from "framer-motion";
import { myPic } from "../assets/index";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {opacity: {delay: 0.4}, scale: {delay: 0}},
      }}
      exit={{ opacity: 0 }}
    >
      <div className="left-home">
        <img src={myPic} alt="My Pic" />
        <div className="for-border"></div>
      </div>
      <div className="right-home">
        <h1>Hi I'm Lawmake Praveen</h1>
        <p className="intro">
          "A passionate fresher web developer who recently entered the field of
          web development. Proficient in HTML, CSS, JavaScript, and frameworks
          such as React. Committed to delivering high-quality code and
          user-friendly interfaces. Let's connect and collaborate!"
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
