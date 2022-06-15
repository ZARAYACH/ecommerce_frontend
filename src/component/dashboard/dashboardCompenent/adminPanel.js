import React from 'react';
 



const AdminPanel = ()=>{

    return(
        <div className="container_adminPannel">
             <div className="up">
          <div className="control">
              <div className="controle-title">
                  Controle Pannel
              </div>
              <div className="dir"><span>Home</span><span>Controle Pannel</span></div>
              <div className="add-trips-pannel">
                  <form action="./auth/addTrip.inc.php" method="POST" enctype="multipart/form-data">
                      <div className="form-body">
                        <div className="form-body-body">
                        <label htmlFor="to">Destination</label>
                        <input required id="to" name="to" type="text"></input>
                        </div>
                        <div className="form-body-body">
                        <label htmlFor="desc">Description</label>
                        <input required id="desc" name="desc" type="text"></input>
                        </div>
                      
                      </div>
                      <div className="form-body">
                        <div className="form-body-body">
                        <label htmlFor="price">price</label>
                        <input required id="price" name="price" type="number"></input>
                            </div>
                            <div className="form-body-body">
                            <label htmlFor="max">max seats</label>
                        <input required id="max" name="max" type="number"></input>
                        </div>
                      </div>

                      <div className="form-body">
                        <div className="form-body-body">
                        <label htmlFor="depart">time depart</label>
                        <input required id="depart" name="depart" type="date"></input>
                            </div>
                        <div className="form-body-body">
                        <label htmlFor="img">add a image</label>
                        <input required type="file" name="img" id="img"></input>
                      </div> 
                      
                      </div>
                     
                     
                     <div className="form-btn">
                     <div className="form-body-body">
                     <input type="reset" value="reset"></input>
                     </div>
                     <div className="form-body-body">
                     <input  type="submit" value="add"></input>
                     </div>
                     
                       
                     </div>
                       
                  </form>


              </div>
          </div>
      </div>
      <div className="down">
          <div className="down-title">all the trips</div>
          <table className="table">
          <thead>
        <tr>
            <th >name</th>
            <th >tikets left</th>
            <th >price</th>
            <th >Time depart</th>
            <th >action</th>
        </tr>
    </thead>
    <tbody>
    
    </tbody>
          </table>
      </div>

    </div>
    );


}

export default AdminPanel;