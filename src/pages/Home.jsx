import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { myPic, myPicSmall } from "../assets/index";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; 

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {opacity: {delay: 0.4}, y: {delay: 0}},
      }}
      exit={{ opacity: 0, y: 40 }}
    >
      <div className='left-home'>
        <LazyLoadImage src={myPic} placeholderSrc={myPicSmall} effect="blur" className="img" />
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
        <Link to='/about' className="about-me-btn">
          Profile <span><BsBoxArrowUpRight /></span>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
