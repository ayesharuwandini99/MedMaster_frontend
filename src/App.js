import Login from './Componants/Login';
import Register from "./Componants/Register"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Doctor from "./UserPages/Doctor"
import Patients from "./UserPages/Patients"
import Pharme from './UserPages/Pharme';
import PatientHome from './Homepages/PatientHome';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path='/Doctor' element={<Doctor />} />
        <Route path='/Patients' element={<Patients />} />
        <Route path='/Pharme' element={<Pharme />} />
        <Route path='/PatientHome' element={<PatientHome />} />
      </Routes>
    </Router>
  );
}

export default App;
