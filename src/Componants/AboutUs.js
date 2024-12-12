import React, { useState, useEffect } from 'react';
import './AboutUs.css';

function AboutUs() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation on component mount
    setAnimate(true);
  }, []);

  return (
    <div className={`about-container ${animate ? 'popup-animation' : ''}`}>
      <h1 className="about-title">ABOUT US</h1>
      <p className="about-text">
        Welcome to <strong>MedMaster</strong>, your trusted partner in modern healthcare management. Our mission is to
        revolutionize the way pharmacies operate by providing a seamless, efficient, and user-friendly platform designed
        to meet the evolving needs of patients, pharmacists, and healthcare providers.
      </p>
      <p className="about-text">
        We understand the critical role pharmacies play in delivering timely medications and quality care. That's why
        we've created an innovative system that simplifies prescription management, streamlines inventory control, and
        enhances customer experience—all while ensuring compliance with industry standards and regulations.
      </p>

      <div className="about-section">
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            To empower pharmacies with cutting-edge technology that enhances operational efficiency, ensures accuracy,
            and improves patient satisfaction.
          </p>
        </div>
        <div className="card">
          <h2>Our Vision</h2>
          <p>
            To be the global leader in pharmacy management solutions, transforming healthcare delivery through
            innovation, integrity, and reliability.
          </p>
        </div>
        <div className="card">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Patient-Centered Care</strong>: Ensuring the well-being and safety of every patient.</li>
            <li><strong>Innovation</strong>: Continuously enhancing our platform with the latest advancements in technology.</li>
            <li><strong>Integrity</strong>: Upholding the highest standards of ethics and professionalism.</li>
            <li><strong>Collaboration</strong>: Building strong partnerships with pharmacies, healthcare providers, and patients.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
