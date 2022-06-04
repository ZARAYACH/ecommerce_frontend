import React,{useState,useEffect} from 'react'
import CarouselItem from '../carouselItem/carouselItem';
import {Swiper,SwiperSlide} from 'swiper/react/swiper-react.js'
import SwiperCore,{Pagination} from 'swiper'
import 'swiper/swiper-bundle.css'
import "./carousel.css";


function Carousel(props){

    SwiperCore.use([Pagination])
    const [products,setProducts] = useState(props.products);
    const slides = []
    products.map( product =>(
       slides.push(<SwiperSlide key={product.id}>
           <CarouselItem product ={product} key={product.id}/>
           </SwiperSlide>)
    ))

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