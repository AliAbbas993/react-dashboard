import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import FormOptions from './views/FormOptions';
import AccessForm from './views/accessForm';
import NewHireForm from './views/hireForm';
import NewTermForm from './views/termForm';
import HardwareForm from './views/hardwareForm';
import SoftwareForm from './views/softwareForm';
import MISCForm from './views/miscForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/forms-options" element={<FormOptions/>}/>
        <Route path="/access-form" element={<AccessForm/>}/>
        <Route path="/newhire-form" element={<NewHireForm/>}/>
        <Route path="/newterm-form" element={<NewTermForm/>}/>
        <Route path="/hardware-form" element={<HardwareForm/>}/>
        <Route path="/software-form" element={<SoftwareForm/>}/>
        <Route path="/misc-form" element={<MISCForm/>}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
