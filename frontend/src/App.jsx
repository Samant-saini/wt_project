
import React, { useContext, useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appointment from './pages/Appointment';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Login from "./pages/Login";
import { Context } from "./main";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

const App = () => {
  const {isAuthenticated,setIsAuthenticated,setUser}=useContext(Context);
  useEffect(()=>{
    const fetchUser=async()=>{
      try{
        
        const response=await axios.get("http://localhost:4000/user/patient/me ",
          {
            withCredentials:true});///yhaa se hmm patienece ki deatil le rhe hai or yeh detail tbhi hi ayengi jbb pateice authentiacted hongaa
        setIsAuthenticated(true);
        setUser(response.data.user);

      }catch(error){
        setIsAuthenticated(false);
        setUser({});
      } 
    };
    fetchUser();
  },[isAuthenticated]);
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
        <ToastContainer position="top-center" />
      </Router>
    </div>
  );
}

export default App;
