import React,{ useState , useRef,useEffect } from 'react';
import "./dashboardNav.css"


function DashboardNav(props) {

    return(
        <div className="nav">
        <div className="above">
        <ul>
            <li location="home" className="click ">
                <b></b>
                <b></b>
                <a>
                <i className="fa fa-house"></i>
            <span>Home</span>
                </a>
            </li>
            <li location="profile" className="click ">
            <b></b>
                <b></b>
                <a>
                <i className="fa fa-user-group"></i>
                    <span>Profile</span>
                </a>
            </li>
            <li location="reviews" className="click">
            <b></b>
                <b></b>
                <a>
                <i className="fa fa-signal"></i>
                    <span>reviews</span>
                </a>
            </li>
            <li location="search" className="click">
            <b></b>
                <b></b>
                <a>
                <i className="fa fa-search"></i>
                    <span>Search</span>
                </a>
            </li>
            <li location="settings" className="click">
            <b></b>
                <b></b>
                <a>
                <i className="fa fa-gear"></i>    
                <span>settings</span>
                </a>
            </li>
            </ul>
        </div>
        <div className="under">
        <ul>
        <li className="click">
        <b></b>
                <b></b>
        <a href='./auth/logout.inc.php' >
                <i className="fa fa-arrow-right-from-bracket"></i>    
                <span>Log out</span>
                </a>
            </li>
        </ul>
        </div>
    </div>
    );
  }

export default DashboardNav;