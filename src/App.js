import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAdmin from './components/addAdmin';
import AddDoctor from './components/addDoctor';
import Admin from './components/admin';
import AdminDashboard from './components/adminDashboard';
import AdminNav from './components/adminNav';
import Doctor from './components/doctor';
import Login from './components/login';
import Patient from './components/patient';
import Reporter from './components/reporter';
import UpdateAdmin from './components/updateAdmin';
import UpdateDoctor from './components/updateDoctor';


function App() {
  return (
    <div>
    <AdminNav/>
    <Routes>
      <Route path="/adminDashboard" element={<AdminDashboard/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/addAdmin" element={<AddAdmin/>}></Route>
      <Route path="/admin/update/:id" element={<UpdateAdmin />} />
      <Route path="/doctor" element={<Doctor/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/admin/updateDoctor/:id" element={<UpdateDoctor />} />
      <Route path="/addDoctor" element={<AddDoctor/>}/>
      <Route path="/patient" element={<Patient/>}/>
      <Route path="/reporter" element={<Reporter/>}/>
    </Routes>
    </div>
  );
}

export default App;
