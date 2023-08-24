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
        <ProjectLine initial='A' desc='to search for your favourite Movies and Tv shows' link='https://movie-in.vercel.app/' name='Movie database website' />
        <ProjectLine initial='An' desc='to browse and shop.' link='https://shopease-store.vercel.app/' name='E-Commerce Website' />
        <ProjectLine initial='An' desc='to Create, Edit, Group and Delete your day to day Activities.' link='https://activities-tab.vercel.app/' name='Activity Tab' />
        <ProjectLine initial='A' desc='to find foreign Exchange Rate' link='https://currency-app-praveen.vercel.app/' name='Currency Calculator App' />
        <ProjectLine initial='A' desc='to keep day to day notes' link='https://reactnotes-lawmake-praveen.vercel.app/' name=' React Notes App' />
        <p>
          In addition to that I have also developed a range of dynamic and
          interactive features and apps using Vanilla JavaScript, React and
          APIs. These include{" "}
          <ProjectSpan name='Tic Tac Toe' link='https://tic-tac-toe-praveen.vercel.app/' />
          <ProjectSpan name='News App' link='https://daily-news-praveen.vercel.app/' />
          <ProjectSpan name='Weather App' link='https://weather-app-praveen.vercel.app/' />
          <ProjectSpan name='Picture Gallery' link='https://plp-pictures-gallery.vercel.app/' />
          Password generator, Mathematics Quiz game and several other games
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

const ProjectLine = ({ initial, desc, link, name}) => {
  return (
    <p>
    ● {initial}{" "}
    <a href={link} target="_blank">
      {name}
    </a>{" "}
    {desc}
  </p>
  )
}
const ProjectSpan = ({name, link}) => {
  return (
    <span>
      <a href={link} target="_blank">
    {name}
  </a>
  ,{" "}
    </span>
    
  )
}

export default Resume;
