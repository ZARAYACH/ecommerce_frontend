import React from 'react'
import { useNavigate } from 'react-router'
import { axiosInstanceAuthoraized } from '../axiosConfig/axiosInstance'

export const addToCart = (productId)=>{

    axiosInstanceAuthoraized.post("/user/cart/item/add",(
       { "product":{
            "id":productId
        },
    "quantity":"1"
}
)).then((res)=>{
    return res;
}).catch((err)=>{
    return err;
})

}