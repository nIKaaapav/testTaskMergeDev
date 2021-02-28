import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import 'swiper/components/pagination/pagination.scss';
import './SliderWrapper.scss'
import Slider from "./Slider/Slider";

SwiperCore.use([Pagination]);



const SliderWrapper = () => {

    const sliderData = [
        {
            title: 'Tokenplace',
            test: 'Multi-exchange Trading Terminal',
            img: 'http://localhost:3000/slider1.png'
        },
        {
            title: 'Fund Platform',
            test: 'Hedge funds wealth management',
            img: 'http://localhost:3000/slider2.png'
        },
        {
            title: 'Noviscient',
            test: 'Management Platform',
            img: 'http://localhost:3000/slider3.png'
        }
    ];

    const slideItem = sliderData.map((el, item) =>(
        <SwiperSlide key={item}>
            <Slider  {...el}/>
        </SwiperSlide>
    ));


    return (
        <div  className='slider'>
            <div className='slider-before'></div>
            <Swiper
                className='slider__container'
                tag="section"
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {slideItem}

            </Swiper>
        </div>

    )
};

export default SliderWrapper;