import React from 'react';
import SingUpWrapper from "../compoments/SingUpWrapper/SingUpWrapper";
import SliderWrapper from "../compoments/SliderWrapper/SliderWrapper";
import './HomePage.scss'

const HomePage = () => {
    return (
        < div className='app-wrapper'>
            <SliderWrapper/>
            <SingUpWrapper/>
        </div>
)
    ;
};

export default HomePage;