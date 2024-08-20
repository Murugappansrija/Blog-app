import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DashBoard from "./Pages/DashBoard";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import HeaderBar from './Component/HeaderBar';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path="/project" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
