import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">CONTACT US</h1>
      <p className="contact-text">
        Have any questions or concerns? We'd love to hear from you! Please fill out the form below or reach out to us
        directly.
      </p>

      <div className="contact-form">
        <input type="text" placeholder="Your Name" className="input-field" />
        <input type="email" placeholder="Your Email" className="input-field" />
        <textarea placeholder="Your Message" className="textarea-field" rows="5"></textarea>
        <button type="submit" className="submit-button">Send Message</button>
      </div>

      <div className="contact-info">
        <h2>Our Contact Details</h2>
        <p><strong>Email:</strong> medmaster@pharmacare.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
      </div>
      
    </div>
  );
}

export default ContactUs;
