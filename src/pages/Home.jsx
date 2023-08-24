import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { myPic, myPicSmall } from "../assets/index";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; 

const Home = () => {
  const variants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 40 }
  }
  useEffect(() => {
    document.title = "Praveen | Portfolio"
  },[])
  return (
    <motion.div
      className="home"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
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
