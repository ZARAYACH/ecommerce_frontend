import React from 'react';
import './dachbordCardProfile.css'
import GlobalUrl from '../../../variables/Global';


function DashbordProfileCard(props) {
    
    
    return(
        <div>
            <div className="id-card">
            <div className="user-img"><div className="imgChange">
                <form action="" encType="multipart/form-data">
                <label htmlFor="changee"><i className="fa fa-upload"></i></label>    
                <input id="changee" name="changee" type="file"></input>
                </form>
            </div><img id='userIMG' src={props.user.img==null?GlobalUrl()+"/images/users/default.png":GlobalUrl()+props.user.img} alt=""></img></div>
                <div className="user-name">{props.user.firstName +' '+props.user.lastName}<span>Dear Customer ,Welcome</span>
                </div>
            <div className="contact">
                <p>Contact information</p>
                <div className="contact-info">
                    <label htmlFor="">Email</label>
                    <div className="info">
                        <span>{props.user.email}</span>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                </div>
                    <div className="contact-info">
                    <label htmlFor="">Phone</label>
                    <div className="info">
                    <span id="phoneNbre">{props.user.phoneNumber}<span id="country-code"></span></span>
                    <i className="fa fa-phone"></i>
                    </div>
                    </div>
                
                </div>
                <div className="charts">
                    <div className="charts-head">
                        <span>Progress</span>
                        <select name="" id="">
                            <option value="week">This week</option>
                            <option value="week">This month</option>
                            <option value="year">This year</option>
                        </select>
                    </div>
                    <div className="keys">
                        <div className="dot">Planned</div>
                        <div className="dot">booked</div>
                        <div className="dot">Canceled</div>
                    </div>
                    <div className="statistiques">
                    <div className="tower">
                        <div className="chart">
                            <span className="planned"></span>
                            <span className="booked"></span>
                            <span className="Canceled"></span>
                        </div>
                        <div className="day">Sun</div>
                    </div>
                    <div className="tower">
                        <div className="chart">
                        <span className="planned"></span>
                            <span className="booked"></span>
                            <span className="Canceled"></span>
                        </div>
                        <div className="day">Mon</div>
                    </div>
                    <div className="tower">
                        <div className="chart">
                        <span className="planned"></span>
                            <span className="booked"></span>
                            <span className="Canceled"></span>
                        </div>
                        <div className="day">Tue</div>
                    </div>
                    <div className="tower">
                        <div className="chart">
                        <span className="planned"></span>
                            <span className="booked"></span>
                            <span className="Canceled"></span>
                        </div>
                        <div className="day">Wed</div>
                    </div>
                    <div className="tower">
                        <div className="chart">
                        <span className="planned"></span>
                            <span className="booked"></span>
                            <span className="Canceled"></span>
                        </div>
                        <div className="day">Thu</div>
                    </div>
                    <div className="tower">
                        <div className="chart">
                        <span className="planned"></span>
                            <span className="booked"></span>
                            <span className="Canceled"></span>
                        </div>
                        <div className="day">Fri</div>
                    </div>
                    <div className="tower">
                        <div className="chart"> 
                        <span className="planned"></span>
                            <span className="booked"></span>
                            <span className="Canceled"></span>
                        </div>
                        <div className="day">sat</div>
                    </div>
                    
                    </div>
                    
                </div>
        
            
            </div>
        </div>
    );
}

export default DashbordProfileCard;