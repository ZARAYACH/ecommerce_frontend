import React,{ useState , useRef,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./dashboardNav.css"


function DashboardNav(props) {

    const [activeNav,setActiveNav]= useState(false); 
    const location = useLocation()
    const navRef = useRef();
    const navRef2 = useRef();
    const homeRef = useRef();
    const searchRef = useRef();
    const cartRef = useRef();
    const logoutRef = useRef();
    const profileRef     = useRef();
    const settingsRef = useRef();
    const reviewRef = useRef();
    const [user,setUser] = useState(props.userr);



    useEffect(()=>{
        if(homeRef.current.classList.contains("active")){
            homeRef.current.classList.remove("active")
        }else if(profileRef.current.classList.contains("active")){
            profileRef.current.classList.remove("active")
        }else if(settingsRef.current.classList.contains("active")){
            settingsRef.current.classList.remove("active")
        }else if(searchRef.current.classList.contains("active")){
            searchRef.current.classList.remove("active")
        }else if(logoutRef.current.classList.contains("active")){
            logoutRef.current.classList.remove("active")
        }

        
        switch (location.pathname) {
            case ("/dashbord/home"):
                homeRef.current.classList.add("active")
                break;

                case ("/dashbord/profile"):
                    profileRef.current.classList.add("active")
                    break;

                     case ("/cart"):
                     cartRef.current.classList.add("active")
                     break;

                     case ("/dashbord/search"):
                    searchRef.current.classList.add("active")
                    break;
                    
                    case ("/dashbord/review"):
                    reviewRef.current.classList.add("active")
                    break;
                   
                    case ("/dashbord/settings"):
                        settingsRef.current.classList.add("active")
                        break;

                    case ("/dashbord/logout"):
                    logoutRef.current.classList.add("active")
                    break;
              
            default:
                break;
        }
    },[location])


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
            <li location="home" ref={homeRef} className="click ">
                <b></b>
                <b></b>
                <Link to={"/dashbord/home"}>
                    <i className="fa fa-house"></i>
                    <span>Home</span>
                </Link>
            </li>
            <li location="profile" ref={profileRef} className="click ">
            <b></b>
                <b></b>
                <Link to={"/dashbord/profile"} >
                <i className="fa fa-user-group"></i>
                    <span>Profile</span>
                </Link>
            </li>
{
                user.roles.map((role)=>{
                    if(role.id == 1 && role.name =="ADMIN"){            
                        return (
                            <li location="adminPanel" key={user.id+1} ref={cartRef} className="click">
                            <b></b>
                                <b></b>
                                <Link to={"/dashbord/admin/pannel"}>
                                <i className="fa-solid fa-folder-gear"></i>
                              <span>admin panel</span>
                                </Link>
                            </li>
                        )
                    }
                   })
            }
            <li location="cart" ref={cartRef} className="click">
            <b></b>
                <b></b>
                <Link to={"/cart"}>
                <i className="fa-solid fa-cart-shopping"></i>
                    <span>cart</span>
                </Link>
            </li>
            <li location="search" ref={searchRef} className="click">
            <b></b>
                <b></b>
                <Link to={"/dashbord/search"}>
                <i className="fa fa-search"></i>
                    <span>Search</span>
                </Link>
            </li>
            <li location="settings" ref={settingsRef} className="click">
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
        <li ref={logoutRef} className="click">
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