import React from 'react'
import "../styles/Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <p>
          <a href="https://github.com/WilliamL1998" target = "_blank" rel = "noreferrer">
            <GitHubIcon color = "action" fontSize = "large"/>
          </a>
          <a href="https://www.linkedin.com/in/william-liao-b27089236/" target = "_blank" rel = "noreferrer">
            <LinkedInIcon color = "action" fontSize = "large"/>
          </a>
          <EmailIcon color= "action" fontSize = "large"/> williamliao1998@gmail.com
          <PhoneIcon color= "action" fontSize = "large"/> (647) - 879 - 1386
        </p>
      </div>
    </div>
  )
}

export default Footer