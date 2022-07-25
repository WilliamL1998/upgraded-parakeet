import React, { useEffect, useState } from 'react'
import "../styles/Home.css"

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
    </div>
  )
}

export default Home