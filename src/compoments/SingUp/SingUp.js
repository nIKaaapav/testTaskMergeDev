import React from 'react';
import FormApp from "../Form/Form";
import {Link} from "react-router-dom";

const SingUp = () => {
    return (
        <div>
            <h2 className='sing-up__title-page'>Sign in</h2>
            <p className='sing-up__subtitle-page'>Don’t have an account?
                <Link className='sing-up__link-to-register' to='/'>Sign up now</Link>
            </p>
            <FormApp/>
        </div>
    );
};

export default SingUp;