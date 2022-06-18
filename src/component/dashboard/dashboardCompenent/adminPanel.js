import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { axiosInstanceAuthoraized, axiosInstancePublic } from '../../axiosConfig/axiosInstance';
import { Notification } from '../../Notification/Notification';
import ControleItem from '../ControleItem';


const AdminPanel = () => {

    const [categorie, setCategorie] = useState([]);
    const [CategorySelected, setCategorySelected] = useState();
    const [image, setImage] = useState({});
    const [products, setProducts] = useState([]);
    const [changed, setChanged] = useState(false);
    const location = useLocation();
    const titleRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const maxQuantityRef = useRef();
    const categoryRef = useRef();
    const imagesRef = useRef();


    const loadCategoriesOptions = () => {
        axiosInstanceAuthoraized("/admin/category/all")
            .then((res) => {
                if (res.status != undefined && res.status == 200) {
                    setCategorie(res.data)
                }
            })
    }

    useEffect(()=>{
        loadCategoriesOptions()
        axiosInstancePublic.get("/api/v1/product/all")
        .then((res) => {
            if (res != undefined) {
                if (res.name != "AxiosError" && res.status == 200) {
                    console.log('dd');
                    setProducts(res.data)
                }
            }
        })
    },[])

    useEffect(() => {
          if(changed){
            axiosInstancePublic.get("/api/v1/product/all")
            .then((res) => {
                if (res != undefined) {
                    if (res.name != "AxiosError" && res.status == 200) {
                        console.log('dd');
                        setProducts(res.data)
                        setChanged(false)
                    }
                }
            })
          }
    }, [changed])

    const handleAddProduct = () => {
        let flag = false;
        if (titleRef.current.value === "") {
            flag = false;
            titleRef.current.classList.add("error")
            return;
        } else {
            flag = true;
        }
        if (descriptionRef.current.value == "") {
            flag = false;
            descriptionRef.current.classList.add("error")
            return;
        } else {
            flag = true;
        }
        if (priceRef.current.value === "" || isNaN(priceRef.current.value)) {
            flag = false;
            priceRef.current.classList.add("error")
            return;
        } else {
            flag = true;
        }
        if (image == {}) {
            flag = false;
            imagesRef.current.classList.add("error")
            return;

        } else {
            flag = true;
        }

        if (maxQuantityRef.current.value == "" || isNaN(maxQuantityRef.current.value)) {
            flag = false;
            maxQuantityRef.current.classList.add("error")
            return;

        } else {
            flag = true;
        }

        if (CategorySelected === "" || CategorySelected === "Shoose a Category" || CategorySelected == + undefined) {
            categoryRef.current.classList.add("error")
        } else {
            flag = true;
        }

        if (flag) {
            axiosInstanceAuthoraized.post("/admin/product/add", {
                "name": titleRef.current.value,
                "description": descriptionRef.current.value,
                "quantityToSell": maxQuantityRef.current.value,
                "price": priceRef.current.value,
                "category": {
                    "name": CategorySelected
                }
            }).then((res) => {
                if (res != undefined) {
                    if (res.name != "AxiosError") {
                        if (res.status == 201) {
                            const formDate = new FormData();
                            formDate.append("images", image);
                            axiosInstanceAuthoraized.post("/admin/image/add?productId=" + res.data.id, formDate)
                                .then((ress) => {
                                    if (ress != undefined) {
                                        if (ress.status == 200) {
                                            Notification("Success", "the product was added successfuly", "success")
                                            setChanged(true)
                                        }
                                    }
                                })
                        }
                    }

                }
            })
        }
    }

    const deleteProduct = (productId) => {
        axiosInstanceAuthoraized.delete("/admin/product/delete/" + productId)
            .then((res) => {
                console.log(res);
            })
    }

    return (
        <div className="container_adminPannel">
            <div className="up">
                <div className="control">
                    <div className="controle-title">
                        Controle Pannel
                    </div>
                    <div className="dir"><span>{location.pathname}</span></div>
                    <div className="add-trips-pannel">
                        <form method="POST" encType="multipart/form-data">
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
                                    <input ref={priceRef} id="price" name="price" ></input>
                                </div>
                                <div className="form-body-body">
                                    <label htmlFor="max">max quantity</label>
                                    <input ref={maxQuantityRef} id="max" name="max"  ></input>
                                </div>
                            </div>

                            <div className="form-body">
                                <div className="form-body-body">
                                    <label htmlFor="depart">categorie</label>
                                    <select ref={categoryRef} onChange={(e) => setCategorySelected(e.target.value)} id="depart" name="depart" >
                                        <option key={categorie.id} value={categorie.name} >Shoose a Category</option>

                                        {
                                            categorie.map(categorie => (
                                                <option key={categorie.id} value={categorie.name} >{categorie.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-body-body">
                                    <label htmlFor="img">add a image</label>
                                    <input ref={imagesRef} type="file" onChange={(e) => {
                                        if (e.target.files[0].type == "image/png" || e.target.files[0].type == "image/jpeg" || e.target.files[0].type == "image/svg" || e.target.files[0].type == "image/jpg") {
                                            setImage(e.target.files[0])
                                        }
                                    }} name="img" id="img"></input>
                                </div>

                            </div>


                            <div className="form-btn">
                                <div className="form-body-body">
                                    <input type="reset" value="reset"></input>
                                </div>
                                <div className="form-body-body">
                                    <input onClick={() => {
                                        handleAddProduct()
                                    }} type="button" value="add"></input>
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
                            <th >Quantity</th>
                            <th >Categoty</th>
                            <th >price</th>
                            <th >action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => (
                                <ControleItem key={product.id} product={product} deleteProduct={deleteProduct} />
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default AdminPanel;