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
    method:'POST',
    baseURL:GlobalUrl()+"/api/v1/token/refresh",
    headers:{"refreshToken":"Bearer "+localStorage.getItem("t_refrech_token"),'content-type':"apllication/json"}
})

axiosInstanceAuthoraized.interceptors.response.use((res)=>{
    return res;
},(error)=> {
    if (error.response.status === 498) {
       return(axiosInstanceOfRefrechToken()
       .then((res) => {
         localStorage.setItem('t_access_token',res.data.access_token);
        })
        .then((res)=>{ 
            error.config.headers.Authorization = "Bearer "+localStorage.getItem("t_access_token")
           return(
            axios.request(error.config).then((response)=>{
                return response;
            })
           )
        }).catch((error)=>{
            return error;
        })
       )
    }
   
  });


export {
    axiosInstancePublic,
    axiosInstanceAuthoraized,
    axiosInstanceOfRefrechToken
}