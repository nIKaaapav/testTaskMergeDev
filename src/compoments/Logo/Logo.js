import React from 'react';
import './Logo.scss'

const Logo = () => {
    return (
        <div className='logo__wrapper'>
            <div className='logo__icon icon'>
                <div className='icon__body'></div><div className='icon__arrow-border'></div></div>
            <h1 className='logo__name'>Merge development</h1>
        </div>
    );
};

export default Logo;