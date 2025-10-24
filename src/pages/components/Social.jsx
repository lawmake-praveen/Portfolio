import React from "react";
import { github, linkedin, whatsapp } from "../../assets/social-media/index";

const SocialLinks = ({ link, name }) => {
  return (
    <div>
      <a href={link} target="_blank" className="box">
        <img src={name} />
      </a>
    </div>
  );
};

const Social = () => {
  return (
    <div
      className="social"
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <span>Social: </span>
      <SocialLinks link="https://github.com/lawmake-praveen" name={github} />
      <SocialLinks
        link="https://www.linkedin.com/in/lawmakepraveen/"
        name={linkedin}
      />
      <SocialLinks link="https://wa.me/6381376043" name={whatsapp} />
    </div>
  );
};

export default Social;
