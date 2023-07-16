import React from "react";
import  * as logos  from "../../assets/social-media";

const socialLinks = (link, name) => {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        className="box"
      >
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
      {socialLinks("https://github.com/lawmake-praveen", logos.github)}
      {socialLinks("https://www.linkedin.com/in/lawmake-praveen-928a15239", logos.linkedin)}
      {socialLinks("https://wa.me/6381376043", logos.whatsapp)}
    </div>
  );
};

export default Social;
