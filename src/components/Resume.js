import React from 'react'
import "../styles/Resume.css"

const Resume = () => {
  return (
    <div className='resume'>
      <p>Resume</p>
      <div className='resumeContainer'>
        <div className='resumeCard'>
          <a href="resume/Resume.pdf" download>Click to download</a>
        </div>
      </div>
    </div>
  )
}

export default Resume