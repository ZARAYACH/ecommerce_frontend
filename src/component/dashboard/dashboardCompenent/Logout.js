import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { axiosInstanceAuthoraized, axiosInstanceToLogout } from '../../axiosConfig/axiosInstance';

const Logout = ()=>{

    const navigate = useNavigate();

    useEffect(()=>{
        axiosInstanceAuthoraized.post("/user/logout").then((res)=>{
            console.log(res);
            navigate("/")
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return"";

}

export default Logout;