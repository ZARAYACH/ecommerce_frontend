import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../globals/Functions";
import GlobalUrl from "../globals/Global";
import "./carouselItemStyle.css";

function CarouselItem(props){
    const url = GlobalUrl()
   const [imgs,setImgs] = useState(props.product.productImgs)
   const [imgPath,setImgPath] = useState("")

    useEffect(()=>{
        props.product.productImgs.map(img =>{
            if(img.primaryImg){
                setImgPath(img.path)

            }
        });
    },[])

    return(
        <div className="carousel_container">
            <div className="bg"><img src={(imgPath.length>0)?url+imgPath:''} alt="" /></div>
            <div className="left">
                <div className="title">{props.product.name}</div>
                <div className="description">{props.product.description}</div>
                <div className="features">
                    <div className="feature">Up to 16GB memory</div>
                    <div className="feature">Touch ID</div>
                    <div className="feature">Up to 18 hours battery life</div>
                    <div className="feature">Up to 2TB storage</div>
                    </div>;
                 <button onClick={()=>{addToCart(props.product.id)
                }} className="addToCartBtn">Add to Cart</button>
                </div>
        </div>
    );
}

export default CarouselItem;