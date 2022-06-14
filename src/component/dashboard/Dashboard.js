import React, { useRef, useState, useEffect } from "react";
import "./Dashboard.css";
import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import DashboardNav from "./dashboardCompenent/nav/dashboardNav";
import DashbordHome from "./dashboardCompenent/home/DashbordHome";
import DashbordProfileCard from "./dashboardCompenent/dashbordCard/DashbordProfileCard";
import { axiosInstanceAuthoraized, axiosInstanceOfRefrechToken } from "../axiosConfig/axiosInstance";
import GlobalUrl from "../globals/Global";
import Logout from "./dashboardCompenent/Logout";
import axios from "axios";

function Dashboard(props) {

  const [user,setUser] = useState({});
  const [orders,setOrders] = useState([]);
  const [cartItems,setCartItems] = useState();
  const [laoding,setLaoding] = useState(false);
  const navigate = useNavigate();
  const [authorized,setAuthorized] = useState(false);
  const location = useLocation(); 

  const [home,setHome] = useState();



  useEffect(()=>{
    console.log(location.state.t_access_token);
    if(location.state.t_access_token != undefined){

      axios.get(GlobalUrl()+"/api/v1/user/info",{
        headers:{
          "Authorization":"Bearer "+location.state.t_access_token
        }}).then(res=>{
          setLaoding(true)
          setUser(res.data)
          setAuthorized(true)
        }).catch(err=>{
          if(err.response.status === 403){
            setAuthorized(false)
            navigate("/account")
          }else{
           navigate("/")
          }
        })

    }else{
      axiosInstanceAuthoraized.get("/user/info",).then(res=>{
        if(res != undefined){
          if(res.name == undefined && res.name != "AxiosError" ){
            setLaoding(true)
            setUser(res.data)
            setAuthorized(true)
          }else{
             if(res.response.status === 403){
               setAuthorized(false)
               navigate("/account")
             }else{
              navigate("/")
             }
           }
        }else{
          navigate("/")
        } 
      
     })
    }
  },[])

  useEffect(()=>{
      if(laoding){
        axiosInstanceAuthoraized.get("/user/order/all")
        .then(res=>{
          if(res != undefined){
            if(res.status === 200){
              setOrders(res.data)
            }
          }else{
            navigate("/")
          }
        })
        axiosInstanceAuthoraized.get("/user/cart/Cartitems/all")
          .then(res=>{
            if(res != undefined){
              if(res.status === 200){
                setCartItems(res.data.length)
              
              }
            }else{
              navigate("/")
            }
          })
        }
  },[laoding])
  



  if(authorized){
    
  
  return (
    <div className="dashboard-container">
      <DashboardNav></DashboardNav>
      <div className="main_dashbord">
        {props.home &&  <DashbordHome  orders ={orders!=[]?orders:[]} authorized={authorized} cartItems = {cartItems} />}
        {/* {props.search && <DashbordSearch/>}
            {props.profile && <DashbordProfile/>}
            {props. && <DashbordHome/> */}
            {props.logout && <Logout/>} 
      </div>
      <div className="placeholder"></div>
      <DashbordProfileCard user={user !={} ? user : {}} />
    </div>
  );
}else{
    return'';
 
}
}
export default Dashboard;
