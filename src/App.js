
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
<<<<<<< HEAD
         <Route path='/' element= {<Home/>} />
         <Route path='/account' element={Login} />
         <Route path='/dashbord' element= {<Dashboard/>} />


=======
            <Route path='/' element= {<Home/>} />
            <Route path='/account' element={<Login/>} />
            <Route path='/signup' element={<Signup/>}/>
   
>>>>>>> 43066d4aa158504260d673377be2f93ecf0a0a63
         </Routes>
      </Router>
      
   </div>
  );
}

export default App;


