import React from 'react';
import Logo from "../Logo/Logo";
import SingUp from "../SingUp/SingUp";
import './SingUpWrapper.scss'

const SingUpWrapper = () => {
    return (
        <div className='sing-up__wrapper'>
            <Logo/>
            <SingUp/>
        </div>
    );
};

export default SingUpWrapper;