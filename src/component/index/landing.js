import React,{useEffect,useState} from "react";
import "./landingStyle.css"
import axios from "axios";
import GlobalUrl from "../variables/Global";
function Landing(props){
    const url = GlobalUrl()+"/images/products/phone.svg";

    return (
        <main className="main">
         <div className="hero">
            <div className="up">
                <div className="baner">
                <span>Powered By Ai</span>
                <span>Driven by Values</span>
                </div>
            </div>
            <div className="actionBtn">
                <a>Learn more <i className="fa-solid fa-angle-right"></i></a>
            </div>
            <div className="down">
                <img src={url} alt=""></img>
            </div>
        </div>
        <div className="followHero">
            <div className="categorieCard">

            </div>

        </div>


        </main>
);
}

export default Landing;
