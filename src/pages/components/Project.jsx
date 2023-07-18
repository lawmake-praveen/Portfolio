import React from "react";

const Project = ({ content, link, appLink, image }) => {
  return (
    <div className="project">
      <p className="details">{content}</p>
      <a href={link} target="_blank">
        {appLink}
      </a>
      <div className="image-container">
        <img src={image} alt="Image not available" />
      </div>
    </div>
  );
};

export default Project;
