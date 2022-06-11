import React, { useRef, useState, useEffect } from "react";
import "./Dashboard.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import DashboardNav from "./dashboardCompenent/nav/dashboardNav";
import DashbordHome from "./dashboardCompenent/home/DashbordHome";
import DashbordProfileCard from "./dashboardCompenent/dashbordCard/DashbordProfileCard";
import { axiosInstanceAuthoraized, axiosInstanceOfRefrechToken } from "../axiosConfig/axiosInstance";
import GlobalUrl from "../variables/Global";
import Logout from "./dashboardCompenent/Logout";

function Dashboard(props) {

  const [user,setUser] = useState({});
  const [orders,setOrders] = useState([]);
  const [laoding,setLaoding] = useState(true);
  const navigate = useNavigate();
  const [authorized,setAuthorized] = useState(false);

  useEffect(()=>{
   axiosInstanceAuthoraized.get("/user/info").then(res=>{
      if(res != undefined){
        if(res.name == undefined && res.name != "AxiosError" ){
          setAuthorized(true)
          setUser(res.data)
          console.log(res.data);
        }else{
           if(res.response.status === 403){
             setAuthorized(false)
             navigate("/account")
           }
         }
      }else{
        navigate("/")
      } 
    
   })
  },[])

  useEffect(()=>{
    if(laoding){
      if(user != {}){
        axiosInstanceAuthoraized.get("/user/order/all")
        .then(res=>{
          if(res != undefined){
            if(res.status === 200){
              setOrders(res.data)
              setLaoding(false)
              console.log(res.data);
            }
          }else{
            navigate("/")
          }
        })
      }
    }      

  },[laoding])



  if(authorized){
    
  
  return (
    <div className="dashboard-container">
      <DashboardNav></DashboardNav>
      <div className="main_dashbord">
        {props.home && <DashbordHome user={user !={} ? user : {}} orders ={orders} />}
        {/* {props.search && <DashbordSearch/>}
            {props.profile && <DashbordProfile/>}
            {props. && <DashbordHome/>*/}
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
