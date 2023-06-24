import React from 'react'

const Project = ({ content, link, linkName}) => {
  return (
    <div className='project'>
      <p className="details">
        {content}
      </p>
      <a href={link} target='_blank'>
        {linkName}
      </a>
      <iframe src={link}></iframe>
    </div>
  )
}

export default Project