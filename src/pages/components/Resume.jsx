import React from 'react'

const Resume = () => {
  return (
    <div>
      <div className="resume">
        <h1>Resume</h1>
        <h2>Lawmake Praveen</h2>
        <div className='mail-phone'>
          <a href="mailto:lawmakepraveen@gmail.com" target='_blank'>lawmakepraveen@gmail.com</a> |&nbsp;
          <a href="tel:6381376043" target='_blank'>6381376043</a>
        </div>
        <hr />
        <h3 className="side-heading">Profile Snapshot:</h3>
        <p className="detail">
          A Self-guided developer with an ability to design and develop dynamic, responsive, userfriendly and cross-browser capabilities websites. Strong problem solving and communication
          skills, with a passion for staying up to date with the latest technologies and trends.
        </p>
        <h3 className="side-heading">Skills and Knowledge:</h3>
        <p className="detail s-and-k">
          <span>● JavaScript</span>
          <span>● React</span>
          <span>● Html 5</span>
          <span>● Css 3</span>
          <span>● JQuery</span>
          <span>● Figma</span>
          <span>● Github</span>
          <span>● Material UI</span>
          <span>● Tailwind</span>
          <span>● Bootstrap</span>
        </p>
        <h3 className="side-heading">Certification:</h3>
        <div className='detail'>
          <p>● Project Management Certification at Cognizant for Agile Methodology (virtual internship).</p>
          <p>● The Complete Web Development Course by Udemy.</p>
          <p>● Responsive Web Design by FreeCodeCamp.</p>
        </div>
        <h3 className="side-heading">Education:</h3>
        <p className='detail'>
          B.Sc. Physics. St John’s College, Palayamkottai, MS University (2017 – 2020)
        </p>
        <h3 className="side-heading">Relevent Projects:</h3>
        <div className="detail">
          <p>A Simple company website for a local <a href="https://v2-service.vercel.app/" target='_blank'>painting and services company.</a>  Design and developedcompletely on my own</p>
          <p>A <a href="https://weather-app-praveen.vercel.app/" target='_blank'>Weather App</a>  to find the local weather in your city</p>
          <p>A <a href="https://currency-app-praveen.vercel.app/" target='_blank'>Currency Calculator App</a>  to find foreign Exchange Rate</p>
          <p>In addition to that I have also developed a range of dynamic and interactive features and
            apps using Vanilla JavaScript, React and APIs. These include <a href="https://tic-tac-toe-praveen.vercel.app/" target='_blank'>Tic Tac Toe</a>,<a href="https://daily-news-praveen.vercel.app/" target='_blank'>News App</a>,<a href="https://todo-app-praveen.vercel.app/" target='_blank'>To-do List</a>, Password generator,
            Mathematics Quiz game and several other games and apps. 
          </p>
        </div>
        <h3>Known Languages:</h3>
        <div className='detail'>
          <p>Tamil (Native)</p>
          <p>English (Working Proficency)</p>
        </div>
        <h3 className='side-heading'>Technical Skills:</h3>
        <div className="detail">
          <p>MS PowerPoint</p>
          <p>MS Excel</p>
          <p>MS Word</p>
        </div>
      </div>
    </div>
  )
}

export default Resume