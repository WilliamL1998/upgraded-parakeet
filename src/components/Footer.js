import React from 'react'
import "../styles/Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <a href="https://github.com/WilliamL1998" target = "_blank" rel = "noreferrer">
          <GitHubIcon color = "action" fontSize = "large"/>
        </a>
        <a href="https://www.linkedin.com/in/william-liao-b27089236/" target = "_blank" rel = "noreferrer">
          <LinkedInIcon color = "action" fontSize = "large"/>
        </a>
      </div>
    </div>
  )
}

export default Footer