import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <header>
        <div className="logo">
            <a href="#">T</a>
        </div>
        <div className="links">
            <nav>
                <ul>
                    <li><Link to={"/products"}>Products</Link></li>
                    <li><Link to={"/explore"}>Explore</Link></li>
                    <li><Link to={"/support"}>Support</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/account"}>Account</Link></li>
                </ul>
            </nav>
        </div>
        <div className="buttons">
          <Link to={"/cart"}>
          <div className="button"><span className="material-icons">
                shopping_cart
                </span></div>
                </Link>
        </div>
    </header>
    );
}

export default NavBar;