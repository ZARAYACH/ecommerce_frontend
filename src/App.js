
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Route, Routes ,Link,useNavigate} from 'react-router-dom';
import Home from './component/home/home';
import Dashboard from './component/dashboard/Dashboard';
import Login from './component/login/login';
import Signup from './component/SignUp/SignUp';
import CartPage from './component/cart/CartPage';

function RedirectToDashbord(){

   const navigate = useNavigate();
 
   useEffect(()=>{
      navigate("/dashbord/home")
   },[])
   
}

function App() {

   

   return(
   <div className='container'>
         <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/account' element={<Login/>} />
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/dashbord' element={<RedirectToDashbord/>} />
            <Route path='/dashbord/home' element= {<Dashboard home/>} />
            <Route path='/dashbord/profile' element= {<Dashboard profile/>} />
            <Route path='/dashbord/reviews' element= {<Dashboard reviews/>} />
            <Route path='/dashbord/search' element= {<Dashboard search/>} />
            <Route path='/dashbord/settings' element= {<Dashboard settings/>} />
            <Route path='/dashbord/logout' element= {<Dashboard logout/>} />
            <Route path='/cart' element= {<CartPage/>} />
         </Routes>
   </div>
  );
}

export default App;


