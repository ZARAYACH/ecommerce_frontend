import React, { useState, useEffect, useRef } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  axiosInstancePublic
} from "../axiosConfig/axiosInstance";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailTemp = useRef();
  const passwordTemp = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (password != "") {
       axiosInstancePublic
        .post("/login", { 
          email: email,
          password: password,
        })
        .then((res) => res.data)
        .then((data) =>{
          localStorage.setItem("t_access_token", data.access_token);
          localStorage.setItem("t_refrech_token", data.refresh_token);
          return localStorage.getItem("t_refrech_token");
        }).then((data)=>{
          if(localStorage.getItem("t_refrech_token")===data){
            navigate("/dashbord/home");         
          }
        })
        .catch((err) => {
          emailTemp.current.classList.add("error");
          passwordTemp.current.classList.add("error");
        });
    }
  }, [password]);

  return (
    <div className="login-wraper">
      <div className="login-container outline-border">
        <div className="container-head">
          <Link to={"/"} className="logo">
            T
          </Link>
        </div>
        <div className="main-form">
          <input
            ref={emailTemp}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            ref={passwordTemp}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <div className="checkbox">
            <input defaultChecked type="checkbox" name="stay" id="stay" />
            <label htmlFor="stay">Stay signed in</label>
          </div>
          <input
            onClick={() => {
              setEmail(emailTemp.current.value);
              setPassword(passwordTemp.current.value);
            }}
            type="button"
            value="Login"
          />
        </div>
        <div className="forgot">
          <Link to={"/forgot"}>Did You forgot your password</Link>
          <Link to={"/signup"}>You don't have an Account ?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
