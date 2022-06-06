
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route, Routes ,Link} from 'react-router-dom';
import Home from './component/home/home';
import Dashboard from './component/dashboard/Dashboard';
import Login from './component/login/login';
import Signup from './component/SignUp/SignUp';



function App() {
  return(
   <div className='container'>
      <Router>
         <Routes>
         <Route path='/' element= {<Home/>} />
         <Route path='/account' element={<Login/>} />
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/dashbord' element= {<Dashboard/>} />
   
         </Routes>
      </Router>
      
   </div>
  );
}

export default App;


