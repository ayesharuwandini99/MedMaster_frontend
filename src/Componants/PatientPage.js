// import axios from 'axios';
// import React, { useState } from 'react';
// import './PatientPage.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom';

// function PatientPage() {
//   const [prescription, setPrescription] = useState(null);
//   const [pharmacies, setPharmacies] = useState([]);
//   const [filteredPharmacies, setFilteredPharmacies] = useState([]);
//   const [selectedPharmacy, setSelectedPharmacy] = useState(null); // Track selected pharmacy
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
//   const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false); // State to toggle shop dropdown


//   const handleFileUpload = (e) => setPrescription(e.target.files[0]);

//   const handleUpload = () => {
//     if (prescription) {
//       const formData = new FormData();
//       formData.append('prescription', prescription);
//       axios.post('/api/upload-prescription', formData)
//         .then(() => alert('Prescription uploaded successfully!'))
//         .catch(() => alert('Failed to upload prescription.'));
//     }
//   };

//   const fetchPharmaciesForPrescription = (medicines) => {
//     axios
//       .get('/api/pharmacies')
//       .then((response) => {
//         const allPharmacies = response.data;

//         // Filter pharmacies based on available medicines
//         const filtered = allPharmacies.filter((pharmacy) =>
//           pharmacy.medicines.some((med) => medicines.includes(med.name))
//         );

//         setPharmacies(allPharmacies);
//         setFilteredPharmacies(filtered);
//       })
//       .catch(() => alert('Failed to fetch pharmacies.'));
//   };

//   const selectPharmacy = (pharmacy) => setSelectedPharmacy(pharmacy); 


//   const handleOrderNow = () => {
//     alert(`Order placed successfully at ${selectedPharmacy.name}!`);
//     // Additional logic such as API calls can be added here.
//   };
  
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
//   const toggleShopDropdown = () => setIsShopDropdownOpen(!isShopDropdownOpen); // Toggle shop dropdown

//   return (
//     <div className="patient-page">
//       {/* Navbar Section */}
//       <nav className="navbar">
//         <div className="navbar-logo">
//           {/* You can add a logo here if needed */}
//         </div>

//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a className="nav-link" href="#">Home</a>
//           </li>
//           <li className="nav-item">
//   <a className="nav-link" href="#" onClick={toggleShopDropdown}>Shop</a>
//   {isShopDropdownOpen && (
//     <div className="shop-dropdown">
//       <ul>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Ayurvedic-Care.jpg" alt="Ayurvedic Care" />
//           <span>Ayurvedic Care</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/baby-care.jpg" alt="Baby Care" />
//           <span>Baby Care</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Blood-Pressure-Monitor.jpg" alt="Blood Pressure Monitor" />
//           <span>Blood Pressure Monitor</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Collaborated-Brands.jpg" alt="Collaborated Brands" />
//           <span>Collaborated Brands</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Diabetes-Care.jpg" alt="Diabetes Care" />
//           <span>Diabetes Care</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/First-Aid-Items.jpg" alt="First Aid Items" />
//           <span>First Aid Items</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Nebulizer.jpg" alt="Nebulizer" />
//           <span>Nebulizer</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Personal-Care.jpg" alt="Personal Care" />
//           <span>Personal Care</span>
//         </li>
//         <li className="image-item">
//           <img width="80px" height="80px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/08/Food-Supplements.jpg" alt="Food Supplements" />
//           <span>Food Supplements</span>
//         </li>
//       </ul>
//     </div>
//   )}
// </li>

//           <li className="nav-item">
//             <a className="nav-link" href="#" onClick={toggleShopDropdown}>Brands</a>
//             {isShopDropdownOpen && (
//               <div className="shop-dropdown">
//                 <ul>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/FL.jpg"/>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/RS.jpg"/>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/BR.jpg"/>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/SP.jpg"/>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/CM.jpg"/>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/AC.jpg"/>
//                 <img width="150px" height="103px" src="https://unionchemistspharmacy.lk/wp-content/uploads/2022/07/KW.jpg"/>
//                 </ul>
//               </div>
//             )}
//           </li>
//           <li className="nav-item">
//           <Link className="nav-link" to="/about">About Us</Link> {/* Link to About Us page */}
//         </li>

//         <li className="nav-item">
//           <Link className="nav-link" to="/contact">Contact Us</Link> {/* Link to Contact Us page */}
//         </li>

//         </ul>
//         <div className="navbar-menu">
//           <button className="menu-btn" onClick={toggleMenu}>☰</button> {/* Menu button */}
//           {isMenuOpen && (
//             <div className="menu-dropdown">
//               <ul>
//                 <li>Profile</li>
//                 <li>Settings</li>
//                 <li>Logout</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </nav>

//       <h1 className="title1">WELCOME</h1>
//       <h2 className="title">"Empowering health at your fingertips – where convenience meets care, and prescriptions are just a click away."</h2>

     
//       <div className="upload-section">
//         <input type="file" onChange={handleFileUpload} className="file-input" />
//         <button onClick={handleUpload} className="upload-btn">Upload Prescription</button>
//       </div>

      
//       <h3>Available Pharmacies</h3>
//       <ul className="pharmacy-list">
//         {filteredPharmacies.map((pharmacy) => (
//           <li
//             key={pharmacy.id}
//             className={`pharmacy-card ${selectedPharmacy?.id === pharmacy.id ? 'selected' : ''}`}
//             onClick={() => selectPharmacy(pharmacy)}
//           >
//             <h3>{pharmacy.name}</h3>
//             <p>{pharmacy.address}</p>
//           </li>
//         ))}
//       </ul>

//       {selectedPharmacy && (
//         <div className="selected-pharmacy-details">
//           <h3>Selected Pharmacy</h3>
//           <p><strong>Name:</strong> {selectedPharmacy.name}</p>
//           <p><strong>Address:</strong> {selectedPharmacy.address}</p>
//           <p><strong>Contact:</strong> {selectedPharmacy.contact}</p>
//         </div>
//         )}
//         </div>
//   );
// }

// export default PatientPage;



import axios from 'axios';
import React, { useState } from 'react';
import './PatientPage.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

function PatientPage() {
  const [prescription, setPrescription] = useState(null);
  const [pharmacies, setPharmacies] = useState([]);
  const [filteredPharmacies, setFilteredPharmacies] = useState([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null); // Track selected pharmacy
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false); // State to toggle shop dropdown

   const samplePharmacies = [
    { id: 1, name: 'Walgreens', address: '123 Main St', contact: '123-456-7890', medicines: ['Aspirin', 'Panadol'] },
    { id: 2, name: 'CVS Health', address: '456 Elm St', contact: '987-654-3210', medicines: ['Asprin', 'Panadol'] },
    { id: 3, name: 'Health Mart', address: '789 Oak St', contact: '555-123-4567', medicines: ['Asprin', 'Panadol'] },
    { id: 4, name: 'Apothecary', address: '321 Maple St', contact: '555-987-6543', medicines: ['Aspirin', 'Cough Syrup'] }
  ];

  const handleFileUpload = (e) => setPrescription(e.target.files[0]);


  const handleUpload = () => {
    if (prescription) {
      alert('Prescription uploaded successfully!');

      // Simulate medicines extracted from the prescription
      const extractedMedicines = ['Paracetamol', 'Aspirin'];

      fetchPharmaciesForPrescription(extractedMedicines);
    }
  };

  const fetchPharmaciesForPrescription = (medicines) => {
    // Filter pharmacies based on available medicines
    const filtered = samplePharmacies.filter((pharmacy) =>
      pharmacy.medicines.some((med) => medicines.includes(med))
    );

    setPharmacies(samplePharmacies); // Set all pharmacies for full list
    setFilteredPharmacies(filtered); // Set only filtered pharmacies
  };

  const selectPharmacy = (pharmacy) => setSelectedPharmacy(pharmacy);


  const handleOrderNow = () => {
    alert(`Order placed successfully at ${selectedPharmacy.name}!`);
    // Additional logic such as API calls can be added here.
  };
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  const toggleShopDropdown = () => setIsShopDropdownOpen(!isShopDropdownOpen); // Toggle shop dropdown

  return (
    <div className="patient-page">
      {/* Navbar Section */}
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

      <h1 className="title1"> </h1>
      <h1 className="text-6xl font-bold text-blue-900">WELCOME</h1>
      <h2 className="title">"Empowering health at your fingertips – where convenience meets care, and prescriptions are just a click away."</h2>

     
      <div className="upload-section">
        <input type="file" onChange={handleFileUpload} className="file-input" />
        <button onClick={handleUpload} className="upload-btn">Upload Prescription</button>
      </div>


<h3>Available Pharmacies</h3>
      <ul className="pharmacy-list">
        {filteredPharmacies.map((pharmacy) => (
          <li
            key={pharmacy.id}
            className={`pharmacy-card ${selectedPharmacy?.id === pharmacy.id ? 'selected' : ''}`}
            onClick={() => selectPharmacy(pharmacy)}
          >
            <h3>{pharmacy.name}</h3>
            <p>{pharmacy.address}</p>
          </li>
        ))}
      </ul>

      {selectedPharmacy && (
        <div className="selected-pharmacy-details">
          <h3>Selected Pharmacy</h3>
          <p><strong>Name:</strong> {selectedPharmacy.name}</p>
          <p><strong>Address:</strong> {selectedPharmacy.address}</p>
          <p><strong>Contact:</strong> {selectedPharmacy.contact}</p>

          <button className="order-btn" onClick={handleOrderNow}>
      Order Now
    </button>
        </div>
      )}
    </div>
  );
}

export default PatientPage;
