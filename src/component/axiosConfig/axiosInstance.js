import axios from "axios";
import GlobalUrl from "../variables/Global";

const axiosInstancePublic = axios.create({
    baseURL:GlobalUrl(),
    headers:{'content-type':"application/json"}
     })

const axiosInstanceAuthoraized = axios.create({
    baseURL:GlobalUrl()+"/api/v1",
    headers:{"Authorization":"Bearer "+localStorage.getItem("t_access_token"),'content-type':"apllication/json"}
})

const axiosInstanceOfRefrechToken = axios.create({
    baseURL:GlobalUrl()+"/api/v1/token/refresh",
    headers:{"refreshToken":"Bearer "+localStorage.getItem("t_referch_token"),'content-type':"apllication/json"}
})

export {
    axiosInstancePublic,
    axiosInstanceAuthoraized,
    axiosInstanceOfRefrechToken
}