
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route, Routes ,Link} from 'react-router-dom';
import Home from './component/home/home';



function App() {
  return(
   <div className='container'>
      <Router>
         <Routes>
         <Route path='/' element= {<Home/>} />
         </Routes>
      </Router>
      
   </div>
  );
}

export default App;


