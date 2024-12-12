// src/components/WhatsAppButton.js
import React, { useState } from 'react';
import './WhatsAppButton.css'; // Optional: if you want to style the button

const WhatsAppButton = () => {
  const [phoneNumber, setPhoneNumber] = useState('');  // State to store the phone number entered by the user
  const [message, setMessage] = useState('');  // Optional: Predefined message

  // Function to handle the click event and open the WhatsApp chat
  const handleChatClick = () => {
    // Check if a phone number is entered
    if (phoneNumber) {
      // Create the WhatsApp URL with the entered phone number and optional message
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      // Open WhatsApp chat in a new tab
      window.open(url, '_blank');
    } else {
      alert('Please enter a valid phone number.');
    }
  };

  return (
    <div className="whatsapp-chat-container">
      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}  // Update phone number on input change
        className="whatsapp-phone-input"
      />
      <button onClick={handleChatClick} className="whatsapp-button">
      <i class="fab fa-whatsapp" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default WhatsAppButton;
