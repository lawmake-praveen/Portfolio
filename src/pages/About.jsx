import React from 'react'
import { bootstrap, html, css, js, react, figma, mui, jquery, github, tailwind } from '../assets'
import Resume from './components/Resume'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='about'>
      <h1>Greetings! I'm Lawmake Praveen</h1>
      <p>As a self-taught frontend developer, I have learned tools and languages like JavaScript, Html, Css, Bootstrap, jQuery, and web design principles.
        I am excited to connect with like-minded professionals who share my passion for creating exceptional user experiences through innovative web development.
      </p>
      <div className="skills">
        <img src={html} alt="Html" />
        <img src={css} alt="Css" />
        <img src={js} alt="Javascript" />
        <img src={react} alt="React" />
        <img src={jquery} alt="jQuery" />
        <img src={github} alt="Github" />
        <img src={figma} alt="Figma" />
        <img src={mui} alt="Material" />
        <img src={tailwind} alt="Tailwind" />
        <img src={bootstrap} alt="Bootstrap" />
      </div>
      <Resume />
    </div>
  )
}
