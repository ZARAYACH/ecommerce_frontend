
import React,{useState,useEffect} from 'react';
import Landing from '../index/landing';
import NavBar from '../header/navBar';
import Carousel from '../carousel/carousel';
import axios from 'axios';
import {BrowseRouter as Router,Route,Switch,Link} from 'react-router-dom'



function Home() {
const [products,setProducts] = useState({});
const [laoding,setLouding] = useState(true);

   
  useEffect(()=>{
     fetch("http://localhost:8081/api/v1/product/categorie/tecknologie")
        .then(response => response.json())
        .then(response => {
         setProducts(response)
         setLouding(false);
        })
      },[])
  return(
   <div className='container'>
      <NavBar/>
      <Landing/>
      {(!laoding) ? <Carousel products={products}/> :"" }
      
   </div>
  );
}

export default Home;


