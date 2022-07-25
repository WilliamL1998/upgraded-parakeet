import React from 'react'
import "../styles/Navigation.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavItems = [
  {
    className: "nav-link",
    href: "#AboutMe",
    title: "AboutMe"
  },
  {
    className: "nav-link",
    href: "#Portfolio",
    title: "Portfolio"
  },
  {
    className: "nav-link",
    href: "#Contact",
    title: "Contact"
  },
  {
    className: "nav-link",
    href: "#Resume",
    title: "Resume"
  },
]

const Navigation = ({currentPage, handlePageChange}) => {
  return (
    <nav>
      <div className="nav-logo">
        <a
          href="#Home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "active" : "navigation"}
        >
          William Liao
        </a>
      </div>
      <ul className="nav-menu">
        {NavItems.map((result, i) => (
          <li>
            <div className={result.className} key = {i}>
              <a
                href={result.href}
                onClick={() => handlePageChange(result.title)}
                className={currentPage === result.title ? "active" : "navigation"}
              >
                {result.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation