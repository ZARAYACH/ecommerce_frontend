import axios from "axios";

const axiosInstancePublic = axios.create({
    baseURL:"http://localhost:8081",
    headers:{'content-type':"apllication/json"}
     })

const axiosInstanceAuthoraized = axios.create({
    baseURL:"http://localhost:8081/api/v1",
    headers:{"Authorization":"Bearer "+localStorage.getItem("t_access_token"),'content-type':"apllication/json"}
})

const axiosInstanceOfRefrechToken = axios.create({
    baseURL:"localhost:8081/api/v1/token/refresh",
    headers:{"refreshToken":"Bearer "+localStorage.getItem("t_referch_token"),'content-type':"apllication/json"}
})

export {
    axiosInstancePublic,
    axiosInstanceAuthoraized,
    axiosInstanceOfRefrechToken
}