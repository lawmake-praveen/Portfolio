import React from 'react'

const Project = ({ content, link, appName}) => {
  return (
    <div className='project'>
      <p className="details">
        {content}
      </p>
      <a href={link} target='_blank'>
        {appName}
      </a>
      <iframe src={link}></iframe>
    </div>
  )
}

export default Project