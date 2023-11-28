// Contact.js
import React from "react";
import Map from "./Map"; // Import the Map component (replace with your actual path)
import "../Style/Contact.css";

const Contact = () => {
  return (

    
    <>
    
      <div className="contact-container">
        <h1>Get in Touch</h1>
        <p>
          Welcome to our contact page. Feel free to reach out to us with any
          inquiries or messages.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input type="tel" id="contactNumber" name="contactNumber" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="securityCode">Security Code:</label>
            <input type="text" id="securityCode" name="securityCode" required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* <Map /> */}
    </>
  );
};

export default Contact;
