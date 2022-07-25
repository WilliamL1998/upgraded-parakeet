import React, { useState } from 'react'
import Home from './components/Home'
import AboutMe from "./components/AboutMe"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const PageCheck = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        <Navigation currentPage = {currentPage} handlePageChange = {handlePageChange} />
        {renderPage()}
        <Footer />
      </div>
    )
}

export default PageCheck