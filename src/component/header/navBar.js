import React from "react";
import "./navBar.css";

function NavBar(){
    return(
        <header>
        <div className="logo">
            <a href="#">T</a>
        </div>
        <div className="links">
            <nav>
                <ul>
                    <li><a href="">Products</a></li>
                    <li><a href="">Explore</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Account</a></li>
                </ul>
            </nav>
        </div>
        <div className="buttons">
            <div className="button"><span className="material-icons">
                shopping_cart
                </span></div>
        </div>
    </header>
    );
}

export default NavBar;