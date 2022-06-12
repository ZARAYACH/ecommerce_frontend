import React, { useEffect, useState } from 'react';
import { axiosInstanceAuthoraized } from '../axiosConfig/axiosInstance';
import GlobalUrl from '../globals/Global';

const CartItem = (props)=>{

    const [cartItem,setCartItem] = useState(props.cartItem);
    const [cartItemiMG,setCartItemiMG] = useState("");
    const [quantity,setQuantity] = useState(props.cartItem.quantity);


    useEffect(()=>{
        setCartItem(props.cartItem)
        setQuantity(props.cartItem.quantity)
        let imgList = cartItem.product.productImgs;
        for(let i = 0;i<imgList.length;i++){
            if(imgList[i].primaryImg){
               setCartItemiMG(imgList[i].path)
            }
        }
    },[props.cartItem])


    const addQuantity= ()=>{
        axiosInstanceAuthoraized.put("/user/cart/item/add/quantity",{
            "id":cartItem.id
        }).then((res)=>{
            if(res.status==200){
                setQuantity(res.data)
            }
        })
    }
    const minusQuantity = ()=>{
        axiosInstanceAuthoraized.put("/user/cart/item/minus/quantity",{
            "id":cartItem.id
        }).then((res)=>{
            if(res!=undefined){
                if(res.status==200){
                    setQuantity(res.data)
                }
            }
        })
    }

    return(
        <div className='card'>
        <div className='img'><img src={cartItemiMG == "" ? "" :GlobalUrl()+cartItemiMG } alt='' srcSet=''></img></div>
        <div className='card_title'>
            <div className='trip_title'>{cartItem.product.name}</div>
            <div className='trip_destination'>{cartItem.product.description}</div>
        </div>
        <div className='Number'>    
            <div  id='plus'  ><i className='fa fa-plus-circle plus' onClick={()=>{addQuantity()}}aria-hidden='true'></i></div>
            <div data-id-person='$id' className='person'>{quantity}</div>
            <div  id='minus'  ><i onClick={()=>{minusQuantity()}}  className='fa fa-minus-circle minus' aria-hidden='true'></i></div>
        </div>
       <div className='price'> <span id='currency'>$</span><span className='prix'>{cartItem.product.price}</span></div>
        <div className='delete'><i className='fa-solid fa-trash-can' onClick={()=>{props.removeCartItem(cartItem)}} ></i></div>
    </div> 
    );

}

export default CartItem;