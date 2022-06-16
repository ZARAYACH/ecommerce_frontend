import axios from "axios";
import GlobalUrl from "../globals/Global";


const axiosInstancePublic = axios.create({
    baseURL:GlobalUrl(),
    headers:{'content-type':"application/json"}
     })

const axiosInstanceAuthoraized = axios.create({
    baseURL:GlobalUrl()+"/api/v1",
    withCredentials:true,
    headers:{"Authorization":"Bearer "+localStorage.getItem("t_access_token"),'content-type':"application/json"}
})

const axiosInstanceOfRefrechToken = axios.create({ 
    method:'POST',
    baseURL:GlobalUrl()+"/api/v1/token/refresh",
    headers:{"refreshToken":"Bearer "+localStorage.getItem("t_refrech_token"),'content-type':"application/json"}
})

axiosInstanceAuthoraized.interceptors.response.use((res)=>{
    console.log(res);
    return res;
},(error)=> {
    if (error.response.status === 498) {
       return(axiosInstanceOfRefrechToken()
       .then((res) => {
         localStorage.setItem('t_access_token',res.data.access_token);
        }).then((res)=>{ 
            error.config.headers.Authorization = "Bearer "+localStorage.getItem("t_access_token")
           return(
            axios.request(error.config).then((response)=>{
                return response;
            }).catch((err)=>{
                return err;
            })
           )
        }).catch((err)=>{
            return err;
        })
       )
    }else{
        return error;
    }
   
  });


export {
    axiosInstancePublic,
    axiosInstanceAuthoraized,
    axiosInstanceOfRefrechToken
}