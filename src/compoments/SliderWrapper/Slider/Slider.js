import React, {useState} from 'react';
import { SwiperSlide } from 'swiper/react';


const Slider = ({title, test, img}) => {

    return (
      <div className='slider__item'>
          <div  className='slider__item-img-wrapper' >
              <img  className='slider__item-img' src={img} alt='slider img'/>
          </div>

          <h3 className='slider__item-title'>{title}</h3>
          <p className='slider__item-text'>{test}</p>
      </div>
    );
};

export default Slider;