
import React,{useState,useEffect} from 'react';
import Landing from '../index/landing';
import NavBar from '../header/navBar';
import Carousel from '../carousel/carousel';
import {
   axiosInstancePublic
 } from "../axiosConfig/axiosInstance";

function Home() {
const [products,setProducts] = useState({});
const [laoding,setLouding] = useState(true);
   
  useEffect(()=>{
     axiosInstancePublic("/api/v1/product/categorie/tecknologie")
        .then(response => response.data)
        .then(response => {
         setProducts(response)
         setLouding(false);
        })
      },[])
  return(
   <div>
      <NavBar/>
      <Landing/>
      {(!laoding) ? <Carousel products={products}/> :"" }
      
   </div>
  );
}

export default Home;


