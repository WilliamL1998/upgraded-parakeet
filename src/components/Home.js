import React, { useEffect, useState } from 'react'
import "../styles/Home.css"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const skills = [
  "JavaScript",
  "Node.js",
  "Express.js",
  "React.js",
  "MySQL",
  "MongoDB",
  "GraphQL",
  "Model-View-Controller",
  "MERN Stack",
  "REST API"
]

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1 < skills.length ? index + 1 : 0);
    }, 5000)

    return (() => {
      clearInterval(interval)
    })
  })

  return (
    <div className="home">
      <p className = "greeting">Hi, I'm <span className="William">William</span></p>
      <p className = "prompt" key={skills[index]}>Let me help you with <span className="skills">{skills[index]}</span></p>
      <p>
        <EmailIcon color= "action"/> williamliao1998@gmail.com
        <PhoneIcon color= "action"/> (647) - 879 - 1386
      </p>
    </div>
  )
}

export default Home