import React,{useEffect,useState,useRef} from 'react';
import { axiosInstanceAuthoraized } from '../axiosConfig/axiosInstance';
import { useNavigate } from 'react-router-dom';
import './cart.css'
import CartItem from './CartItem';
import DashboardNav from '../dashboard/dashboardCompenent/nav/dashboardNav';
import { Notification } from '../Notification/Notification';


const CartPage = ()=>{

    const cardHolder = useRef();
    const cardNumber= useRef();
    const cardCvv = useRef();
    const cardExpiredDate = useRef();
    const errorHolder = useRef();

    const [error,setError] = useState("");
    const [user,setUser] = useState({});
    const navigate = useNavigate();
    const [authorized,setAuthorized] = useState(false); 
    const [cartItems,setCartItems] = useState([]);
      
    const [subCharge,setSubCharge] = useState(0);
    const [extra,setExtra] = useState(0);
    const [total,setTotal] = useState(0);


    useEffect(()=>{
     axiosInstanceAuthoraized.get("/user/info").then(res=>{
        if(res != undefined){
          if(res.name == undefined && res.name != "AxiosError" ){
            setUser(res.data)
            setAuthorized(true)
          }else{
             if(res.response.status === 403){
               setAuthorized(false)
               navigate("/account")
             }
           }
        }else{
          navigate("/account")
        } 
      
     })
    },[])

    useEffect(()=>{
        if(authorized){
            axiosInstanceAuthoraized.get("/user/cart/Cartitems/all")
            .then(res=>{
                if(res!= undefined){
                    if(res.name!="AxiosError"){
                        setCartItems(res.data);
                    }else if(res.status === 401){
                        navigate("/account")
                    }
                }
            })
        }

    },[authorized])

    useEffect(()=>{
        let subCharge =0
        let extraCharge =0
        for(let i=0;i<cartItems.length;i++){
            subCharge +=cartItems[i].quantity*cartItems[i].product.price;
            extraCharge+=5
        }
        setSubCharge(subCharge)
        setExtra(extraCharge)
    },[cartItems])

    useEffect(()=>{
        setTotal(extra+subCharge)
    },[extra,subCharge])

    const removeFromCart = (cartItem)=>{
        axiosInstanceAuthoraized.delete("/user/cart/item/delete?id="+cartItem.id)
        .then((res)=>{
            if(res != undefined){
            if(res.status==200){
                setCartItems(cartItems.filter(function(f){ return f !== cartItem }));
                Notification("Success",res.data.success,"success")
            }
            }
        })
    }

    const makeOrder = ()=>{
        if(cardCvv.current.value === '' || isNaN(cardCvv.current.value)){
            cardCvv.current.classList.add("error")
            setError("empty inputs or cardCvv incorrect");
        }else if(cardHolder.current.value === ''){
            cardHolder.current.classList.add("error")
            setError("empty inputs")
        }else if(cardNumber.current.value === ''|| isNaN(cardNumber.current.value)){
            cardNumber.current.classList.add("error")
            setError("empty inputs or cardNumber is incorrect")
        }else if(cardExpiredDate.current.value === '' ){
            cardExpiredDate.current.classList.add("error")
            setError("empty inputs or date the expiration incorrect")
        }else{
            axiosInstanceAuthoraized.post("/user/makeOrder",{
                "cardHolderName":cardHolder.current.value,
                "cartNumber":cardNumber.current.value,
                "cvv":cardCvv.current.value,
                "expirationDate":cardExpiredDate.current.value,
                "type":"visa"
               }).then((res)=>{
                if(res != undefined){
                    if(res.status==200){
                        setCartItems([])
                    cardCvv.current.classList.add("succes")
                    cardHolder.current.classList.add("succes")
                    cardNumber.current.classList.add("succes")
                    cardExpiredDate.current.classList.add("success")
                    errorHolder.current.value = "your purshase is done successfully"

                    }
                    }
                      
               })
            }
       
    }

    const updateCartItems=(cartItem)=>{
        let newCartItems= [];
       for(let i =0;i<cartItems.length;i++){
        if(cartItems[i].id==cartItem.id){
            newCartItems.push(cartItem)
        }else{
            newCartItems.push(cartItems[i])
        }
       }
       setCartItems(newCartItems)
    }

    if(authorized){
        return(
            <div className="container_chekout">
        <div className="left">
            <div className="back">
                    <div className="click">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    <p>Continu exploring</p> 
                    </div>
                </div>
            <div className="head" > 
                <div className="title">
                 <h1>waiting your reservation! </h1>
                 <span>you have <span id="nbr"></span> trips in your list</span>
                </div>      
                <div className="sort">
                    <p>Sort By :</p>
                    <select name="" id="">
                        <option value="price">Price</option>
                        <option value="data">Date</option>
                    </select>

                </div> 
                </div>
                
               <div className="cards_container">
                {
                    cartItems.map((cartItem)=>(
                        <CartItem key = {cartItem.id} cartItem = {cartItem} updateCartItems={updateCartItems}  removeCartItem={removeFromCart} />
                    ))
                }
               </div>
        
        </div>
        <div className="right">
            <div className="right_head">
                <div className="right_title">card details</div>
                <div className="UserImg"><img src="./IMG/pic1.png" alt=""></img></div>
            </div>
            <div className="ways">
            <p>card type :</p>
               <div className="cards">
                   <div id="pay">
                    <i  className="fa-brands fa-cc-mastercard"></i>
                    <span id="selected"><i className="material-icons">check_circle</i></span>

                </div>
                <div className="active" id="pay" >
                <i className="fa-brands fa-cc-visa"></i>
                    <span className="active" id="selected"><i className="material-icons">check_circle</i></span>
                   
                </div>
                <div id="pay">
                <i className="fa-brands fa-cc-paypal"></i>
                    <span id="selected"><i className="material-icons">check_circle</i></span>
                  
                </div>
               </div>
                </div>
                <div className="form">
                    <label htmlFor="holder-name">card holder name</label>
                    <input ref={cardHolder} className='p' id="holder-name" type="text" placeholder="Tom Hanks"></input>
                    <label htmlFor="card-number">Card Number</label>
                    <input ref={cardNumber} className='p' id="card-number" type="text" inputMode="numeric" maxLength="16" placeholder="1111 2222 3333 4444"></input>
                    <div className="para">
                        <div className="para_1">
                        <label htmlFor="experation-date">Experation Date</label>
                        <div className="exp-wrapper p">
                                <input ref={cardExpiredDate} autoComplete="off" className="exp" inputMode="numerical" placeholder="expertion date" type="date"/>
                        </div>
                        </div>
                        <div className="para_2">
                        <label htmlFor="cvv">cvv</label>
                            <input ref={cardCvv} className='p' id="cvv" maxLength="3" inputMode="numeric" type="text" pattern="[0-9]{3}" placeholder="123" ></input>
                        </div>
                    </div>
                </div>
                <span ref={errorHolder} className="errorText" >{error}</span>
                <div className="summary">
                    <div className="extra">
                        <p>Sub Total </p>
                        <span id="subTotal">{subCharge}</span>
                    </div>
                    <div className="extra">
                        <p>Extra charge</p>
                        <span id="extra_charges">{extra}</span>
                    </div>
                    <div className="extra">
                        <p>Total </p>
                        <span id="total" >{total}</span>
                    </div>
                </div>
                <div onClick={()=>makeOrder()} className="validate">
                    <span id="total">${total}</span>
                <span id="bla">chekout<i className="fa fa-arrow-right" aria-hidden="true"></i> </span>
                
        </div>
            </div>
        </div>
        );
    }else{
        return null;
    }
    
} 

export default CartPage;