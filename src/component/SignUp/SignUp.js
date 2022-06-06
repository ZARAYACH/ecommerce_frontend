import React, { useState, useEffect , useRef} from "react";
import "./SignUp.css";
import { Link,useNavigate } from "react-router-dom";
import {
  axiosInstancePublic
} from "../axiosConfig/axiosInstance";
import axios from "axios";

function Signup() {

    const firstNameTemp = useRef();
    const lastNameTemp = useRef();
    const emailTemp = useRef();
    const phoneNumberTemp = useRef();
    const passwordTemp = useRef();
    const passwordRepeatTemp = useRef();
    const genderTemp = useRef();
    const birthDateTemp = useRef();
    const errorMesage = useRef();

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [password,setPassword] = useState("");
    const [passwordRepeat,setPasswordRepeat] = useState("");
    const [gender,setGender] = useState("");
    const [birthDate,setBirthDate] = useState("");


    useEffect(() => {
        if(password !== ""){
          if(firstName !== "" &&
        lastName !== "" &&
        email !== "" &&
        phoneNumber !== "" &&
        password !== "" &&
        passwordRepeat !== "" &&
        gender !== "" &&
        birthDate !== ""){
          console.log(gender);

            axiosInstancePublic.post
            ("/api/v1/user/signup",
              {
                "firstName":firstName,
                "lastname":lastName,
                "email":email,
                "phoneNumber":phoneNumber,
                "gender":gender,
                "birthDate":birthDate,
                "userCredentials":{
                  "password":password
              }

            }
           
            ).then(res=>{
              makeEvryEntryDone()
              if(errorMesage.current.classList.contains("errorMessage")){
                errorMesage.current.classList.remove("errorMessage")
                errorMesage.current.classList.add("doneMessage")
              }else{
                errorMesage.current.classList.add("doneMessage")
              }
              errorMesage.current.textContent = res.data.success
            })
            .catch(err=>{
              makeEvryEntryError()
              console.log(err);
              if(errorMesage.current.classList.contains("doneMessage")){
                errorMesage.current.classList.remove("doneMessage")
                errorMesage.current.classList.add("errorMessage")
              }else{
                errorMesage.current.classList.add("errorMessage")
              }
              errorMesage.current.textContent = err.response.data.error
              passwordRepeatTemp.current.value =""
              passwordTemp.current.value =""
            })
          }else{
            makeEvryEntryError()

          }
        }      
       },[password]);

       const makeEvryEntryError = ()=>{
        firstNameTemp.current.classList.add("error")
        lastNameTemp.current.classList.add("error")
        emailTemp.current.classList.add("error")
        genderTemp.current.classList.add("error")
        birthDateTemp.current.classList.add("error")
        passwordTemp.current.classList.add("error")
        passwordRepeatTemp.current.classList.add("error")
        phoneNumberTemp.current.classList.add("error")
       }
       const makeEvryEntryDone= ()=>{
        firstNameTemp.current.classList.add("sucess")
        lastNameTemp.current.classList.add("sucess")
        emailTemp.current.classList.add("sucess")
        genderTemp.current.classList.add("sucess")
        birthDateTemp.current.classList.add("sucess")
        passwordTemp.current.classList.add("sucess")
        passwordRepeatTemp.current.classList.add("sucess")
        phoneNumberTemp.current.classList.add("sucess")
       }

  return (
    <div className="signup-wraper">
      <div className="signup-container outline-border-signup">
        <div className="container-head">
          <Link to={"/"} className="logo">
            T
          </Link>
        </div>
        <div className="main-form">
       <div className="name">
       <input
            ref={firstNameTemp}
            type="text"
            name="firstName"
            id="firstName"
            placeholder="first Name"
          />
            <input
            ref={lastNameTemp}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="last Name"
          />
       </div>
          <input
            ref={emailTemp}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            ref={phoneNumberTemp}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="phone number"
          />
           <select
            ref={genderTemp}
            type="text"
            name="gender"
            id="gender"
            placeholder="gender"
          >
              <option>Male</option>
              <option>Female</option>
          </select>
          <input ref={birthDateTemp} type="date" name="birthDate" id="birthDate" />
       <div className="name">   
            <input
            ref={passwordTemp}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
           <input
            ref={passwordRepeatTemp}
            type="password"
            name="passwordRepeat"
            id="passwordRepeat"
            placeholder="repeat password"
          /></div>
          <span ref={errorMesage} className=""></span>
          <input
            type="button"
            value="signup"
            onClick={()=>{
                setPhoneNumber(phoneNumberTemp.current.value)
                setFirstName(firstNameTemp.current.value)
                setLastName(lastNameTemp.current.value)
                setEmail(emailTemp.current.value)
                setGender(genderTemp.current.value)
                setBirthDate(birthDateTemp.current.value)
                setPassword(passwordTemp.current.value)
                setPasswordRepeat(passwordRepeatTemp.current.value)
            }}
          />
        </div>
        <div className="forgot">
            <Link to={'/account'}>I have an account </Link>

        </div>
      </div>
    </div>
  );
}

export default Signup;
