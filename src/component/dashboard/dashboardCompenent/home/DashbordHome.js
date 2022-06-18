import React, { useEffect, useState } from "react";
import './DashbordHome.css'
import GlobalUrl from "../../../globals/Global";
import Order from "../orderTr";
import { useLocation } from "react-router-dom";
import { Notification } from "../../../Notification/Notification";


function DashbordHome(props) {

    const [user,setUser] = useState(props.user)
    const [orders,setOrders] = useState([])
    const [nbrBought,setNbrBought]= useState(0)
    const [nbrCartItems,setNbrCartItems]= useState(0)
    const [averageCosts,setAverageCosts] = useState(0.0)
    const [inCart,setInCart] = useState()
    const [tokens,setTokens] = useState();
    const [totalCosts,setTotalCosts] = useState()
     const location = useLocation();


    
    useEffect(()=>{
        setOrders(props.orders)
    },[props.orders])

    useEffect(()=>{
        setNbrCartItems(props.cartItems)
    },[props.cartItems])

    useEffect(()=>{
        let nbrBoughtT =0;
        let totalCotsTemp = 0.0;
        for(let i=0;i<orders.length;i++){
            nbrBoughtT +=orders[i].orderItems.length
            totalCotsTemp +=orders[i].totalPrice;
        }
        setNbrBought(nbrBoughtT)
        setTotalCosts(totalCotsTemp)
    },[orders])
    useEffect(()=>{
        if(!user.active){
        Notification("activate your account","avtivate your account to be able to complete your future purchses","warning")
        }
    },[user])
        
    return (
        <div className="home">
        <div className="upp">
          <div className="spending">
              <div className="spending-title">
                  Your Dashboard
              </div>
              <div className="dir"><span>Home</span></div>
              <div className="spending-container">
                  <div className="box">
                      <div className="box-title">bough product</div>
                      <div className="box-info">
                          <div className="box-booked">{nbrBought}</div>
                          <div className="stat">
                              <div className="stat-chart"><i className="fa-solid fa-arrow-trend-up"></i></div>
                              <div className="stat-percentage">0%</div>

                          </div>
                      </div>
                  </div>

                  <div className="box">
                      <div className="box-title">average costs$</div>
                      <div className="box-info">
                          <div className="box-booked"></div>
                          <div className="stat">
                              <div className="stat-chart"><i className="fa-solid fa-arrow-trend-up"></i></div>
                              <div className="stat-percentage">0%</div>

                          </div>
                      </div>
                  </div>

                  <div className="box">
                      <div className="box-title">In cart</div>
                      <div className="box-info">
                          <div className="box-booked">{nbrCartItems}</div>
                          <div className="stat">
                              <div className="stat-chart"><i className="fa-solid fa-arrow-trend-up"></i></div>
                              <div className="stat-percentage">0%</div>

                          </div>
                      </div>
                  </div>

                  <div className="box">
                      <div className="box-title">total costs$</div>
                      <div className="box-info">
                          <div className="box-booked">{totalCosts}</div>
                          <div className="stat">
                              <div className="stat-chart"><i className="fa-solid fa-arrow-trend-up"></i></div>
                              <div className="stat-percentage">0%</div>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="photo">
              <img src={`${GlobalUrl()}/images/products/undraw_shopping_re_hdd9.svg`} alt=""></img>
          </div>

      </div>

    <div className="down">
        <div className="down-title">Your Orders</div>
        <table className="table">
             <thead>
                <tr>
                    <th >traking Number</th>
                    <th >items</th>
                    <th >status</th>
                    <th> date</th>
                    <th >total</th>
                </tr>
            </thead>
        <tbody>
        {
          props.orders.map((order)=>(
            <Order key ={order.id} order={order} />
           ))
        }
       
        </tbody>
</table>
</div>
        </div>
    );
}

export default DashbordHome;