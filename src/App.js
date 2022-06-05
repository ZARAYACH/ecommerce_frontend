
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route, Routes ,Link} from 'react-router-dom';
import Home from './component/home/home';
import Login from './component/login/login';



function App() {
  return(
   <div className='container'>
      <Router>
         <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/account' element={<Login/>} />
         </Routes>
      </Router>
      
   </div>
  );
}

export default App;


