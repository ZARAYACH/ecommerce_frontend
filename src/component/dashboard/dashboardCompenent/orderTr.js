import React,{useState,useEffect,useRef} from 'react'
import GlobalUrl from '../../variables/Global'

const Order = (props)=>{

    let date = props.order.timeStamp.slice(0,props.order.timeStamp.indexOf("T"))

    return( 
            <tr>
               <td className='name'>
                       {props.order.id}
               </td>
               <td className='qte'>{props.order.orderItems.length}</td>
               <td className='tikets-left'>{props.order.status}</td>
               <td className='travelècost'>{date}</td>
               <td className='travel-cost'>{props.order.totalPrice}</td>

               <td className='type'><i className='fa-solid fa-plane'></i></td>
           </tr>
    );

}

export default Order;