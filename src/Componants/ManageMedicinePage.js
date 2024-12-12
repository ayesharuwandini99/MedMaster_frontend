// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './ManageMedicinePage.css'; // Assuming you want to add CSS for styling

// function ManageMedicinePage() {
//   const [medicines, setMedicines] = useState([]);
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [bodyPart, setBodyPart] = useState('');
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(false); // Loading state for CRUD operations
//   const [error, setError] = useState(''); // Error handling state

//   useEffect(() => {
//     fetchMedicines();
//   }, []);

//   const fetchMedicines = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('/api/medicines');
//       setMedicines(response.data);
//       setError('');
//     } catch (err) {
//       setError('Error fetching medicines');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addMedicine = async () => {
//     if (!name || !price || !bodyPart) {
//       setError('All fields are required.');
//       return;
//     }
//     setLoading(true);
//     try {
//       const newMedicine = { name, price, bodyPart };
//       await axios.post('/api/medicines', newMedicine);
//       setName('');
//       setPrice('');
//       setBodyPart('');
//       fetchMedicines();
//       setError('');
//     } catch (err) {
//       setError('Error adding medicine');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const editMedicine = (medicine) => {
//     setEditingId(medicine.id);
//     setName(medicine.name);
//     setPrice(medicine.price);
//     setBodyPart(medicine.bodyPart);
//   };

//   const updateMedicine = async () => {
//     if (!name || !price || !bodyPart) {
//       setError('All fields are required.');
//       return;
//     }
//     setLoading(true);
//     try {
//       const updatedMedicine = { name, price, bodyPart };
//       await axios.put(`/api/medicines/${editingId}`, updatedMedicine);
//       setEditingId(null);
//       setName('');
//       setPrice('');
//       setBodyPart('');
//       fetchMedicines();
//       setError('');
//     } catch (err) {
//       setError('Error updating medicine');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteMedicine = async (id) => {
//     setLoading(true);
//     try {
//       await axios.delete(`/api/medicines/${id}`);
//       fetchMedicines();
//       setError('');
//     } catch (err) {
//       setError('Error deleting medicine');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="medicine-crud-app">
//       <h1>Medicine CRUD Application</h1>
//       {error && <div className="error-message">{error}</div>}

//       <div className="form">
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Medicine Name"
//         />
//         <input
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           placeholder="Price"
//         />
//         <input
//           type="text"
//           value={bodyPart}
//           onChange={(e) => setBodyPart(e.target.value)}
//           placeholder="Body Part"
//         />
//         <button onClick={editingId ? updateMedicine : addMedicine} disabled={loading}>
//           {loading ? 'Processing...' : editingId ? 'Update Medicine' : 'Add Medicine'}
//         </button>
//       </div>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Body Part</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {medicines.map((medicine) => (
//               <tr key={medicine.id}>
//                 <td>{medicine.name}</td>
//                 <td>{medicine.price}</td>
//                 <td>{medicine.bodyPart}</td>
//                 <td>
              //   <button onClick={() => editMedicine(medicine)}>
              //   <i className="fa-solid fa-pencil"></i>
              // </button>
              //   <button 
              //     onClick={() => deleteMedicine(medicine.id)} className="delete-button">
              //     <i className="fa-solid fa-xmark fa-xl" style={{ color: '#e70808' }}></i>
              //   </button>
              // </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default ManageMedicinePage;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageMedicinePage.css';

function ManageMedicinePage() {
  const [medicines, setMedicines] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [bodyPart, setBodyPart] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    setLoading(true);
    try {
      // Mocked data for testing
      const mockData = [
        { id: 1, name: 'Aspirin', price: 10, bodyPart: 'Head' },
        { id: 2, name: 'Ibuprofen', price: 15, bodyPart: 'Muscle' },
        { id: 3, name: 'Paracetamol', price: 20, bodyPart: 'Body' },
      ];
      setMedicines(mockData); // Set mock data
      setError('');
    } catch (err) {
      setError('Error fetching medicines');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addMedicine = async () => {
    if (!name || !price || !bodyPart) {
      setError('All fields are required.');
      return;
    }
    setLoading(true);
    try {
      const newMedicine = { name, price, bodyPart };
      // Mock API request to add medicine
      setMedicines([...medicines, { ...newMedicine, id: Date.now() }]); // Simulate adding the medicine
      setName('');
      setPrice('');
      setBodyPart('');
      setError('');
    } catch (err) {
      setError('Error adding medicine');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const editMedicine = (medicine) => {
    setEditingId(medicine.id);
    setName(medicine.name);
    setPrice(medicine.price);
    setBodyPart(medicine.bodyPart);
  };

  const updateMedicine = async () => {
    if (!name || !price || !bodyPart) {
      setError('All fields are required.');
      return;
    }
    setLoading(true);
    try {
      const updatedMedicine = { name, price, bodyPart };
      // Mock API request to update medicine
      setMedicines(
        medicines.map((medicine) =>
          medicine.id === editingId ? { ...medicine, ...updatedMedicine } : medicine
        )
      );
      setEditingId(null);
      setName('');
      setPrice('');
      setBodyPart('');
      setError('');
    } catch (err) {
      setError('Error updating medicine');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteMedicine = async (id) => {
    setLoading(true);
    try {
      // Mock API request to delete medicine
      setMedicines(medicines.filter((medicine) => medicine.id !== id));
      setError('');
    } catch (err) {
      setError('Error deleting medicine');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="medicine-crud-app">
      <h1>MANAGE MEDICINE</h1>
      {error && <div className="error-message">{error}</div>}

      <div className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Medicine Name"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <input
          type="text"
          value={bodyPart}
          onChange={(e) => setBodyPart(e.target.value)}
          placeholder="Body Part"
        />
        <button onClick={editingId ? updateMedicine : addMedicine} disabled={loading}>
          {loading ? 'Processing...' : editingId ? 'Update Medicine' : 'Add Medicine'}
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Body Part</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.name}</td>
                <td>{medicine.price}</td>
                <td>{medicine.bodyPart}</td>
                <td>
                <button onClick={() => editMedicine(medicine)}>
                  <i className="fa-solid fa-pencil"></i>
                </button>
                  <button 
                    onClick={() => deleteMedicine(medicine.id)} className="delete-button">
                    <i className="fa-solid fa-xmark fa-xl" style={{ color: '#e70808' }}></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ManageMedicinePage;
