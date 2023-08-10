import React from "react";
import resumePdf from "../../assets/Resume - Lawmake Praveen.pdf";
import { BsDownload } from "react-icons/bs";

const Resume = () => {
  const skills = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "JQuery",
    "React.js",
    "Node.js",
    "Express.js",
    "Redux.js",
    "Figma",
    "Github",
    "Scss",
    "Material UI",
    "Tailwind",
    "Bootstrap",
  ];

  return (
    <div className="resume">
      <div className="resume-heading">
        <h1 className="resume-title">
          Resume{" "}
          <a
            href={resumePdf}
            target="_blank"
            download="Resume-Lawmake Praveen"
            title="Download Resume"
          >
            <BsDownload className="download-icon" />
          </a>
        </h1>
        <h2 className="name-title">Lawmake Praveen</h2>
      </div>
      <div className="mail-phone">
        <a href="mailto:lawmakepraveen@gmail.com" target="_blank">
          lawmakepraveen@gmail.com
        </a>{" "}
        |&nbsp;
        <a href="tel:6381376043">6381376043</a>
      </div>
      <hr />
      <h3 className="side-heading">Profile Snapshot:</h3>
      <p className="detail">
        A self-guided developer with an ability to design and develop dynamic,
        responsive, user-friendly websites with cross-browser compatibility.
        Staying up to date with the latest trends and quickly learning new tools
        or languages is a plus.
      </p>
      <h3 className="side-heading">Skills and Knowledge:</h3>
      <p className="detail s-and-k">
        {skills.map((item) => {
          return <span key={item}>● {item}</span>;
        })}
      </p>
      <h3 className="side-heading">Certification:</h3>
      <div className="detail">
        <p>
          ● Project Management Certification at Cognizant for Agile Methodology
          (virtual internship).
        </p>
        <p>● The Complete Web Development Course by Udemy.</p>
        <p>● Responsive Web Design by FreeCodeCamp.</p>
      </div>
      <h3 className="side-heading">Education:</h3>
      <p className="detail">
        B.Sc. Physics. St John’s College, Palayamkottai, MS University (2017 –
        2020)
      </p>
      <h3 className="side-heading">Relevent Projects:</h3>
      <div className="detail">
        <p>
          ● An{" "}
          <a href="https://shopease-store.vercel.app/" target="_blank">
            E-Commerce Website
          </a>{" "}
          to browse and shop.
        </p>
        <p>
          ● An{" "}
          <a href="https://activities-tab.vercel.app/" target="_blank">
            Activity Tab
          </a>{" "}
          to Create, Edit, Group and Delete your day to day Activities.
        </p>
        <p>
          ● A{" "}
          <a href="https://currency-app-praveen.vercel.app/" target="_blank">
            Currency Calculator App
          </a>{" "}
          to find foreign Exchange Rate
        </p>
        <p>
          ● A{" "}
          <a
            href="https://reactnotes-lawmake-praveen.vercel.app/"
            target="_blank"
          >
            React Notes App
          </a>{" "}
          to keep day to day notes
        </p>
        <p>
          In addition to that I have also developed a range of dynamic and
          interactive features and apps using Vanilla JavaScript, React and
          APIs. These include{" "}
          <a href="https://tic-tac-toe-praveen.vercel.app/" target="_blank">
            Tic Tac Toe
          </a>
          ,{" "}
          <a href="https://daily-news-praveen.vercel.app/" target="_blank">
            News App
          </a>
          ,{" "}
          <a href="https://weather-app-praveen.vercel.app/" target="_blank">
            Weather App
          </a>
          ,{" "}
          <a href="https://plp-pictures-gallery.vercel.app/" target="_blank">
            Picture Gallery
          </a>
          , Password generator, Mathematics Quiz game and several other games
          and apps.
        </p>
      </div>
      <h3 className="side-heading">Known Languages:</h3>
      <div className="detail">
        <p>Tamil (Native)</p>
        <p>English (Working Proficency)</p>
      </div>
      <h3 className="side-heading">Technical Skills:</h3>
      <div className="detail">
        <p>MS PowerPoint</p>
        <p>MS Excel</p>
        <p>MS Word</p>
      </div>
    </div>
  );
};

export default Resume;
