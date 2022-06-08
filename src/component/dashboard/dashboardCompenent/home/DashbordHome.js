import React from "react";
import './DashbordHome.css'

function DashbordHome(props) {
    


    return (
        <div className="home">
            
        <div className="up">
          <div className="spending">
              <div className="spending-title">
                  Travel Dashboard
              </div>
              <div className="dir"><span>Home</span></div>
              <div className="spending-container">
                  <div className="box">
                      <div className="box-title">Booked travels</div>
                      <div className="box-info">
                          <div className="box-booked"></div>
                          <div className="stat">
                              <div className="stat-chart"><i className="fa-solid fa-arrow-trend-up"></i></div>
                              <div className="stat-percentage">2.4%</div>

                          </div>
                      </div>
                  </div>

                  <div className="box">
                      <div className="box-title">average costs $</div>
                      <div className="box-info">
                          <div className="box-booked"></div>
                          <div className="stat">
                              <div className="stat-chart"><i className="fa-solid fa-arrow-trend-up"></i></div>
                              <div className="stat-percentage">2.4%</div>

                          </div>
                      </div>
                  </div>

                  <div className="box">
                      <div className="box-title">canceld travels</div>
                      <div className="box-info">
                          <div className="box-booked">0 </div>
                          <div className="stat">
                              <div className="stat-chart"><i className="fa-solid fa-arrow-trend-up"></i></div>
                              <div className="stat-percentage">2.4%</div>

                          </div>
                      </div>
                  </div>

                  <div className="box">
                      <div className="box-title">total costs $</div>
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
              <img src="./IMG/undraw_explore_re_8l4v (1).svg" alt=""></img>
          </div>

      </div>

    <div className="down">
        <div className="down-title">Your booked travels</div>
        <table className="table">
             <thead>
                <tr>
                    <th >name</th>
                    <th >qte</th>
                    <th > tikets left</th>
                    <th >travel cost</th>
                    <th >type</th>
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