import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PatientHome() {
    
  const [patientName, setPatientName] = useState('');

  useEffect(() => {
    // Fetch patient name from the backend
    axios.get('http://localhost:5000/api/users/getname')
      .then((response) => {
        setPatientName(response.data.patientName);
      })
      .catch((error) => {
        console.error('Error fetching patient data:ok', error);
      });
  }, []);

  return (
    <div>
      <h1>Patient Name: {patientName}</h1>
    </div>
  );
}

export default PatientHome;