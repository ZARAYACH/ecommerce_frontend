import React,{ useState , useRef,useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./dashboardNav.css"


function DashboardNav(props) {

    const [activeNav,setActiveNav]= useState(false); 
    const navRef = useRef();
    const navRef2 = useRef();

    useEffect(()=>{
        if(activeNav){
            navRef.current.style.width = '14rem'
            navRef2.current.style.width = '14rem'
        }else{
            navRef.current.style.width = '3.8rem'
            navRef2.current.style.width = '3.8rem'
        }

    },[activeNav])


    return(
        <div className="dashNav">
        <div className="above">
        <ul onMouseEnter={()=>{setActiveNav(true)}}
            onMouseLeave={()=>{setActiveNav(false)}} ref={navRef}>
            <li location="home" className="click ">
                <b></b>
                <b></b>
                <Link to={"/dashbord/home"}>
                    <i className="fa fa-house"></i>
                    <span>Home</span>
                </Link>
            </li>
            <li location="profile" className="click ">
            <b></b>
                <b></b>
                <Link to={"/dashbord/profile"} >
                <i className="fa fa-user-group"></i>
                    <span>Profile</span>
                </Link>
            </li>
            <li location="reviews" className="click">
            <b></b>
                <b></b>
                <Link to={"/dashbord/reviews"}>
                <i className="fa fa-signal"></i>
                    <span>reviews</span>
                </Link>
            </li>
            <li location="search" className="click">
            <b></b>
                <b></b>
                <Link to={"/dashbord/search"}>
                <i className="fa fa-search"></i>
                    <span>Search</span>
                </Link>
            </li>
            <li location="settings" className="click">
            <b></b>
                <b></b>
                <Link to={"/dashbord/settings"}>
                <i className="fa fa-gear"></i>    
                <span>settings</span>
                </Link>
            </li>
            </ul>
        </div>
        <div className="under">
        <ul ref={navRef2}  onMouseEnter={()=>{setActiveNav(true)}}
            onMouseLeave={()=>{setActiveNav(false)}} >
        <li className="click">
        <b></b>
                <b></b>
        <Link to={"/dashbord/logout"}>
                <i className="fa fa-arrow-right-from-bracket"></i>    
                <span>Log out</span>
                </Link>
            </li>
        </ul>
        </div>
    </div>

    );
  }

export default DashboardNav;