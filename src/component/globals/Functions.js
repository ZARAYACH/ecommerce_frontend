import React from 'react'
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
})

}