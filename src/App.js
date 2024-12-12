import Login from './Componants/Login';
import Register from "./Componants/Register"
import PatientPage from "./Componants/PatientPage"
import DoctorPage from "./Componants/DoctorPage"
import PharmacistPage from "./Componants/PharmacistPage"
import AboutUs from "./Componants/AboutUs"
import ContactUs from "./Componants/ContactUs"
import MedicinePage from './Componants/ManageMedicinePage';
import WhatsAppButton from './Componants/WhatsAppButton';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/pharmacist" element={<PharmacistPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/managemedicine" element={<MedicinePage />} />
      </Routes>

      <footer>
        <WhatsAppButton /> {/* Add WhatsApp button in footer */}
      </footer>
    </Router>
  );
}

export default App;
