import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAdmin from './components/addAdmin';
//import AddAdmin from './components/addAdmin';
import Admin from './components/admin';
import AdminDashboard from './components/adminDashboard';
import AdminNav from './components/adminNav';
import Doctor from './components/doctor';
import UpdateAdmin from './components/updateAdmin';


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
      
    </Routes>

    </div>
  );
}

export default App;
