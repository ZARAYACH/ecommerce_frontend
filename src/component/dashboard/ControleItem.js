import React, { useEffect, useState } from 'react';
import GlobalUrl from '../globals/Global';

const ControleItem=(props)=>{

    const [product,setProduct] = useState(props.product);
   
    
    return(
        <tr>
               <td className='name'>
                   <div className='image'><img src={product.productImgs.map((image)=>{
                        if(image.primaryImg){
                           return GlobalUrl()+image.path
                        }
                   }) } alt=''></img></div>
                   <div className='travel-name'>
                    {product.name}
                       <span>{product.description}</span>
                   </div>
               </td>
               <td className='qte'>{product.quantityToSell}</td>
               <td className='tikets-left'>{product.category.name}</td>
               <td className='travel-cost'>{product.price}</td>
               <td className='type delete'><i onClick={()=>{
                   props.deleteProduct(product.id)
               }} className='fa-solid fa-trash'></i></td>
           </tr>
    );
}

export default ControleItem;