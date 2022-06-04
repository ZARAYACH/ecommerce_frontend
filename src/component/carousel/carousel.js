import React,{useState,useEffect} from 'react'
import CarouselItem from '../carouselItem/carouselItem';
import {Swiper,SwiperSlide} from 'swiper/react/swiper-react.js'
import SwiperCore,{Pagination} from 'swiper'
import 'swiper/swiper-bundle.css'
import "./carousel.css";
import {BrowseRouter as Router,Route,Switch,Link} from 'react-router-dom'


function Carousel(props){

    SwiperCore.use([Pagination])
    const [products,setProducts] = useState([]);
    const slides = []
    useEffect(()=>{
        setProducts(props.products)
    },[])
    if(products != null){
        products.map( product =>(
            slides.push(<SwiperSlide key={product.id}>
                <CarouselItem product ={product} key={product.id}/>
                </SwiperSlide>)
         ))
    }
   
    return(
        <React.Fragment>
            <section>
            <Swiper 
            id="main"
            className="carousel"
            tag='section'
            pagination
            >
                {slides}
        </Swiper>
      </section>

        </React.Fragment>
      
    );
}

export default Carousel;