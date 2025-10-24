import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { myPic, myPicSmall } from "../assets/index";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  const variants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 40 },
  };
  useEffect(() => {
    document.title = "Praveen | Portfolio";
  }, []);
  return (
    <motion.div
      className="home"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="left-home">
        <LazyLoadImage
          src={myPic}
          placeholderSrc={myPicSmall}
          effect="blur"
          className="img"
        />
        <div className="for-border"></div>
      </div>
      <div className="right-home">
        <h1>Hi I'm Lawmake Praveen</h1>
        <p className="intro">
          Seasoned Web and Mobile App Developer with three years of experience in
          Flutter and React. I have delivered high level scalable apps and
          websites. <br />I have hands-on experience with AWS which involves
          deploying and scaling applications, enhancing performance and
          reliability in a cost effective manner. In addition to development, I
          have successfully led teams for two successful projects. <br />
          Let's connect for impactful collabration
        </p>
        <Link to="/about" className="about-me-btn">
          Profile{" "}
          <span>
            <BsBoxArrowUpRight />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
