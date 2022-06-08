import React from "react";
import './DashbordHome.css'
import GlobalUrl from "../../../variables/Global";

function DashbordHome(props) {
    


    return (
        <div className="home">
            
        <div className="up">
          <div className="spending">
              <div className="spending-title">
                  Your Dashboard
              </div>
              <div className="dir"><span>Home</span></div>
              <div className="spending-container">
                  <div className="box">
                      <div className="box-title">bough product</div>
                      <div className="box-info">
                          <div className="box-booked"></div>
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
                          <div className="box-booked">0 </div>
                          <div className="stat">
                              <div className="stat-chart"><i className="fa-solid fa-arrow-trend-up"></i></div>
                              <div className="stat-percentage">2.4%</div>

                          </div>
                      </div>
                  </div>

                  <div className="box">
                      <div className="box-title">total costs$</div>
                      <div className="box-info">
                          <div className="box-booked"></div>
                          <div className="stat">
                              <div className="stat-chart"><i className="fa-solid fa-arrow-trend-up"></i></div>
                              <div className="stat-percentage">2.4%</div>

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
                    <th >name</th>
                    <th >qte</th>
                    <th >categorie</th>
                    <th >status</th>
                    <th >total</th>
                </tr>
            </thead>
        <tbody>


        </tbody>
</table>
</div>
        </div>
    );
}

export default DashbordHome;