import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { grey } from "@mui/material/colors"
import "../styles/Portfolio.css"
import WhatTheFridge from "../images/WhatTheFridge.png"
import ExpressMovies from "../images/ExpressMovies.png"
import WeatherDashboard from "../images/WeatherDashboard.png"
import SocialNetworkAPI from "../images/SocialNetworkAPI.png"
import EmployeeTracker from "../images/EmployeeTracker.png"
import TeamProfileGenerator from "../images/TeamProfileGenerator.png"

const projectList = [
  {
    title: "WhatTheFridge",
    image: WhatTheFridge,
    link: "https://jessicamdittrich.github.io/PRJ-WTMJ060622/",
    github: "https://github.com/jessicamdittrich/PRJ-WTMJ060622",
    description: "This project uses 3rd party APIs to search for recipes based on user-inputted ingredients. The user is also able to save recipes for later reference.",
    technologies: [
      "HTML",
      "CSS",
      "Bulma",
      "JavaScript",
      "3rd Party API"
    ]
  },
  {
    title: "Express Movies",
    image: ExpressMovies,
    link: "https://vast-shelf-82768.herokuapp.com/",
    github: "https://github.com/WilliamL1998/crispy-octo-bassoon"
  },
  {
    title: "Weather Dashboard",
    image: WeatherDashboard,
    link: "https://williaml1998.github.io/expert-giggle/",
    github: "https://github.com/WilliamL1998/expert-giggle"
  },
  {
    title: "Social Network API",
    image: SocialNetworkAPI,
    link: "https://github.com/WilliamL1998/reimagined-waddle",
    github: "https://github.com/WilliamL1998/reimagined-waddle"
  },
  {
    title: "Employee Tracker",
    image: EmployeeTracker,
    link: "https://github.com/WilliamL1998/psychic-octo-guacamole",
    github: "https://github.com/WilliamL1998/psychic-octo-guacamole"
  },
  {
    title: "Team Profile Generator",
    image: TeamProfileGenerator,
    link: "https://github.com/WilliamL1998/scaling-robot",
    github: "https://github.com/WilliamL1998/scaling-robot"
  },
]

const Portfolio = () => {
  return (
    <div className = "portfolio">
      {projectList.map(({title, image, link, github, description, technologies}, i) => (
        <div className = "card" key = {i}>
          <p className='cardTitle'>{title}</p>
          <div className = "cardContent">
            <div className = "cardImage">
              <img src={image} alt="project preview"></img>
              <div className = "imageOverlay">
                <a href= {link} target = "_blank" rel = "noreferrer">
                <OpenInNewIcon sx={{ color: grey["A100"] }} fontSize = "large"/>
                </a>
                <a href = {github} target = "_blank" rel = "noreferrer">
                  <GitHubIcon sx={{ color: grey["A100"] }} fontSize = "large"/>
                </a>
              </div>
            </div>
            <p className = "cardDescription">{description}</p>
            {/* <ul className='cardTechnologies'>
              {technologies.map((tech, j) => (
                <li className = "tech" key={j}>{tech}</li>
              ))}
            </ul> */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Portfolio