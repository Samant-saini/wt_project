import React, { useContext } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import AddNewAdmin from './components/AddNewAdmin';
import AddNewDoctor from './components/AddNewDoctor';
import Doctors from './components/Doctors';
import Messages  from './components/Messages';
import Sidebar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from './main';
import axios from 'axios';
import { useEffect } from 'react';
const App = () => {
  const {isAuthenticated,setIsAuthenticated,user,setUser}=useContext(Context);
  useEffect(()=>{
    const fetchUser=async()=>{
      try{
        const response=await axios.get("http://localhost:4000/user/admin/me",{WithCredentilas:true});
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
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/doctor/addnew" element={<AddNewDoctor />} ></Route>
      <Route path="/admin/addnew" element={<AddNewAdmin/>}></Route>
      <Route path="/messages" element={<Messages/>}></Route>
      <Route path="/doctors" element={<Doctors/>}></Route>
      
    </Routes>
    <ToastContainer position="top-center" />
   </Router>
   </>
  )
}

export default App