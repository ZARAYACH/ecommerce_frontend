import React,{useEffect,useState} from "react";
import "./landingStyle.css"
import axios from "axios";
function Landing(){

    const [state,setState] = useState(null);
    useEffect(()=>{
        axios("http://localhost:8081/api/v1/product/all")
        .then(response => console.log(response))
    },[])

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
                <img src="http://localhost:8081/images/hero-img-cropped.svg" alt=""></img>
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
