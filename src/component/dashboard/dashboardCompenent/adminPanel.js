import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { axiosInstanceAuthoraized } from '../../axiosConfig/axiosInstance';


const AdminPanel = ()=>{

    const [categorie,setCategorie]= useState([]);
    const location = useLocation();
    const titleRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const maxQuantityRef = useRef();
    const categoryRef = useRef();
    const imagesRef = useRef();


   const loadCategoriesOptions= () =>{
        axiosInstanceAuthoraized("/admin/category/all")
        .then((res)=>{
            if(res.status != undefined && res.status == 200){
                setCategorie(res.data)
            }
        })    
   }
 
    useEffect(()=>{
        loadCategoriesOptions()
    },[])

    // const handleAddProduct=()=>{
    //     if(titleRef.current.value != ""){
    //         if(descriptionRef.current.value != ""){
    //             if(priceRef.current.value != ""){
    //             }
    //         }
    //     }
    // }

    return(
        <div className="container_adminPannel">
             <div className="up">
          <div className="control">
              <div className="controle-title">
                  Controle Pannel
              </div>
              <div className="dir"><span>{location.pathname}</span></div>
              <div className="add-trips-pannel">
                  <form  method="POST" encType="multipart/form-data">
                      <div className="form-body">
                        <div className="form-body-body">
                        <label htmlFor="to">product title</label>
                        <input ref={titleRef} id="to" name="to" type="text"></input>
                        </div>
                        <div className="form-body-body">
                        <label htmlFor="desc">Description</label>
                        <input ref={descriptionRef} id="desc" name="desc" type="text"></input>
                        </div>
                      
                      </div>
                      <div className="form-body">
                        <div className="form-body-body">
                        <label htmlFor="price">price</label>
                        <input ref={priceRef}  id="price" name="price" ></input>
                            </div>
                            <div className="form-body-body">
                            <label htmlFor="max">max quantity</label>
                        <input ref={maxQuantityRef}  id="max" name="max"  ></input>
                        </div>
                      </div>

                      <div className="form-body">
                        <div className="form-body-body">
                        <label htmlFor="depart">categorie</label>
                        <select ref={categoryRef}  id="depart" name="depart" >
                            {
                                categorie.map(categorie=>(
                                    <option key={categorie.id} value={categorie.name} >{categorie.name}</option>
                                ))
                            }
                        </select>
                            </div>
                        <div className="form-body-body">
                        <label htmlFor="img">add a image</label>
                        <input ref={imagesRef} type="file" name="img" id="img" multiple></input>
                      </div> 
                      
                      </div>
                     
                     
                     <div className="form-btn">
                     <div className="form-body-body">
                     <input type="reset" value="reset"></input>
                     </div>
                     <div className="form-body-body">
                     <input /*onClick={handleAddProduct()}*/  type="button" value="add"></input>
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