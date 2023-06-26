import React from "react";
import { github, linkedin } from "../../assets/social-media";

const Social = () => {
  return (
    <div
      className="social"
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <span>Social: </span>
      <div>
        <a
          href="https://github.com/lawmake-praveen"
          target="_blank"
          className="box"
        >
          <img src={github} alt="Github" />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/lawmake-praveen-928a15239/"
          target="_blank"
          className="box"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Social;
