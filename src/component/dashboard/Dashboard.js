import React,{useRef,useState,useEffect} from 'react';
import "./Dashboard.css";
import DashboardNav from './dashboardCompenent/dashboardNav';
import {Route, Routes ,Link,useNavigate} from 'react-router-dom';
import Home from '../home/home';
import DashbordHome from './dashboardCompenent/dashbordHome/DashbordHome';

function Dashboard(props) {
    
    return (
        <div className="container">
            <DashboardNav/>
            {/* {props.search && <DashbordSearch/>}
            {props.profile && <DashbordProfile/>}
            {props.settings && <DashbordSettings/>}
            {props.home && <DashbordHome/>} */}


        </div>
    );
  }



export default Dashboard;