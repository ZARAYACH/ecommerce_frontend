import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { axiosInstanceAuthoraized, axiosInstanceToLogout } from '../../axiosConfig/axiosInstance';

const Logout = ()=>{

    const navigate = useNavigate();

    useEffect(()=>{
        axiosInstanceAuthoraized.post("/user/logout").then((res)=>{
            if(localStorage.getItem("t_access_token")!=undefined||localStorage.getItem("t_refrech_token")!=undefined){
                localStorage.removeItem("t_access_token")
                localStorage.removeItem("t_refrech_token")
            }
            navigate("/")
        }).catch((err)=>{
        })
    },[])

    return"";

}

export default Logout;