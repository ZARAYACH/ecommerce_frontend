import React,{useRef,useState,useEffect} from 'react';
import "./Dashboard.css";
import DashboardNav from './dashboardCompenent/dashboardNav';

function Dashboard(prop) {
    return (
        <div className="container">
            <DashboardNav/>
        </div>
    );
  }



export default Dashboard;