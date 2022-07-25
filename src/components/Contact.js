import React, { useState } from 'react'
import { validateEmail } from "../utils/helpers"
import "../styles/Contact.css"

const Contact = () => {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    if (!name || !message || !email) {
      setErrorMessage("Please fill out the form to submit")
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  }

  return (
    <div className = "contact" id = "contactId">
      <h1>Contact</h1>
      <form className = "contactForm">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <input
          value={message}
          name="messsage"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Send Message</button>
      </form>
      {errorMessage && (
        <div>
          <p className = "error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  )

}

export default Contact