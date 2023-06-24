import React from 'react'
import { motion } from 'framer-motion'
import { myPic } from '../assets'

const Home = () => {
  return (
    <motion.div className='home' initial={{opacity:0, x:'-100%'}} animate={{opacity:1, x:0}} exit={{opacity: 0,x:'100%'}}>
      <div className="left-home">
        <img src={myPic} alt='My Pic' />
      </div>        
      <div className="right-home">
        <h1>Hi I'm Lawmake Praveen</h1>
        <p>"Passionate web developer experienced in building modern, responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and frameworks such as React. Committed to delivering high-quality code and user-friendly interfaces. Let's connect and collaborate!"</p>
      </div>
    </motion.div>
  )
}

export default Home