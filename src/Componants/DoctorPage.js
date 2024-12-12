import axios from 'axios';
import React, { useState } from 'react';
import './DoctorPage.css'; // Ensure this file contains relevant styles
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf'; // Import jsPDF

function DoctorPage() {
    const [patientName, setPatientName] = useState('');
    const [patientAge, setPatientAge] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [medicines, setMedicines] = useState('');
    const [doctorName, setDoctorName] = useState(''); // New state for doctor name
    const [generatedPrescription, setGeneratedPrescription] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false); // State to toggle shop dropdown


    const handleGeneratePrescription = () => {
      if (patientName.trim() && patientAge.trim() && symptoms.trim() && medicines.trim() && doctorName.trim()) {
        const currentDate = new Date();
        const date = currentDate.toLocaleDateString();
        const time = currentDate.toLocaleTimeString(); // Get the current time

          setGeneratedPrescription(
      `*** Prescription ***\n\n` +
      `Patient Name: ${patientName}\n` +
      `Age: ${patientAge}\n\n` +
      `Symptoms:\n${symptoms}\n\n` +
      `Medicines:\n${medicines}\n\n` +
      `Issued by: Dr. ${doctorName}\nDate: ${date}  Time: ${time}`
    );
  } else {
    alert('Please fill in all fields.');
  }
};

const handleDownloadPrescriptionPDF = () => {
  if (generatedPrescription) {
      const doc = new jsPDF(); // Create a new jsPDF instance

      // Add the generated prescription content to the PDF
      doc.text(generatedPrescription, 10, 10);

      // Save the PDF with a dynamic name
      doc.save(`prescription_${patientName}_${new Date().toLocaleDateString()}.pdf`);
  } else {
      alert('Please generate the prescription first.');
  }
};


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  const toggleShopDropdown = () => setIsShopDropdownOpen(!isShopDropdownOpen); // Toggle shop dropdown

  return (
    <div className="doctor-page">
      <nav className="navbar">
      <div className="flex justify-center mb-4 text-3xl  text-blue-900 font-logo2 font-thin">
          MedMaster
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
  <a className="nav-link" href="#" onClick={toggleShopDropdown}>Shop</a>
  {isShopDropdownOpen && (
    <div className="shop-dropdown">
      <ul>
        <li className="image-item">
          <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Ayurvedic-Care.jpg" alt="Ayurvedic Care" />
          <span>Ayurvedic Care</span>
        </li>
        <li className="image-item">
          <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/baby-care.jpg" alt="Baby Care" />
          <span>Baby Care</span>
        </li>
        <li className="image-item">
          <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Blood-Pressure-Monitor.jpg" alt="Blood Pressure Monitor" />
          <span>Blood Pressure Monitor</span>
        </li>
        <li className="image-item">
          <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Collaborated-Brands.jpg" alt="Collaborated Brands" />
          <span>Collaborated Brands</span>
        </li>
        <li className="image-item">
          <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Diabetes-Care.jpg" alt="Diabetes Care" />
          <span>Diabetes Care</span>
        </li>
        <li className="image-item">
          <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/First-Aid-Items.jpg" alt="First Aid Items" />
          <span>First Aid Items</span>
        </li>
        <li className="image-item">
          <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Nebulizer.jpg" alt="Nebulizer" />
          <span>Nebulizer</span>
        </li>
        <li className="image-item">
          <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Personal-Care.jpg" alt="Personal Care" />
          <span>Personal Care</span>
        </li>
        <li className="image-item">
          <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Food-Supplements.jpg" alt="Food Supplements" />
          <span>Food Supplements</span>
        </li>
      </ul>
    </div>
  )}
</li>

          <li className="nav-item">
            <a className="nav-link" href="#" onClick={toggleShopDropdown}>Brands</a>
            {isShopDropdownOpen && (
              <div className="shop-dropdown">
                <ul>
                <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/FL.jpg"/>
                <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/RS.jpg"/>
                <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/BR.jpg"/>
                <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/SP.jpg"/>
                <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/CM.jpg"/>
                <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/AC.jpg"/>
                <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/KW.jpg"/>
                </ul>
              </div>
            )}
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link> {/* Link to About Us page */}
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link> {/* Link to Contact Us page */}
        </li>

        </ul>
        <div className="navbar-menu">
          <button className="menu-btn" onClick={toggleMenu}>☰</button> {/* Menu button */}
          {isMenuOpen && (
            <div className="menu-dropdown">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <h1 className="title2"></h1>
      <h1 className="text-6xl font-bold text-blue-900">WELCOME</h1>
      <h2 className="title3">"Your health, our priority—trusted care, anytime, anywhere."</h2>

    {/* Prescription Input Section */}
      <div className="prescription-section">
        <input
          type="text"
          className="prescription-input"
          placeholder="Enter patient's name..."
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
        <input
          type="text"
          className="prescription-input"
          placeholder="Enter patient's age..."
          value={patientAge}
          onChange={(e) => setPatientAge(e.target.value)}
        />
        <textarea
          className="prescription-input"
          placeholder="Enter symptoms here..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <textarea
          className="prescription-input"
          placeholder="Enter medicines here..."
          value={medicines}
          onChange={(e) => setMedicines(e.target.value)}
        />
        <input
          type="text"
          className="prescription-input"
          placeholder="Enter doctor's name..."
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
        />
        <button onClick={handleGeneratePrescription} className="generate-btn">
          Generate Prescription
        </button>
      </div>

      {/* Generated Prescription Display */}
      {generatedPrescription && (
        <div className="generated-prescription">
          <div className="prescription-card">
            <pre>{generatedPrescription}</pre>
          </div>
            {/* Download button */}
            <button onClick={handleDownloadPrescriptionPDF} className="download-btn">
                        Download PDF
            </button>
        </div>
      )}
    </div>
  );
}

export default DoctorPage;