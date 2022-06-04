import './App.css';
import React,{useState,useEffect} from 'react';
import Landing from './component/index/landing';
import NavBar from './component/header/navBar';
import Carousel from './component/carousel/carousel';
import axios from 'axios';


function App() {
const [products,setProducts] = useState({});
const [laoding,setLouding] = useState(true);

   
  useEffect(()=>{
     fetch("http://localhost:8081/api/v1/product/all")
        .then(response => response.json())
        .then(response => {
           setLouding(false);
           setProducts(response)
        })
      },[])
  return(
   <div className='container'>
      <NavBar/>
      <Landing/>
      {(!laoding) ? <Carousel products={products}/> :'' }
      
   </div>
  );
}

export default App;


