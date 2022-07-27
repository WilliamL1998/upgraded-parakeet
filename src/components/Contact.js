import React, { useState, useRef } from 'react'
import { validateEmail } from "../utils/helpers"
import "../styles/Contact.css"
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();

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
    if ( name || message || email) {
      emailjs.sendForm(
        "service_q65yffd",
        "template_jchn488",
        form.current,
        "9wOn__hQUV4ml5Bzp"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      )
    }

    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  }

  return (
    <div className = "contact" id = "contactId">
      Contact
      <form ref = {form} className = "contactForm">
        <p>Name</p>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your name..."
        />
        <p>Email</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Your email..."
        />
        <p>Message</p>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Write me a message..."
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