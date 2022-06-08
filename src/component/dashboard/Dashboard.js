import React, { useRef, useState, useEffect } from "react";
import "./Dashboard.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import DashboardNav from "./dashboardCompenent/nav/dashboardNav";
import DashbordHome from "./dashboardCompenent/home/DashbordHome";
import DashbordProfileCard from "./dashboardCompenent/dashbordCard/DashbordProfileCard";

function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <DashboardNav></DashboardNav>
      <div className="main_dashbord">
        {props.home && <DashbordHome />}
        {/* {props.search && <DashbordSearch/>}
            {props.profile && <DashbordProfile/>}
            {props. && <DashbordHome/>}
            {props.home && <DashbordHome/>} */}
      </div>
      <DashbordProfileCard />
    </div>
  );
}

export default Dashboard;
