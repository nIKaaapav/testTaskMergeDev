import React from "react";
import {ErrorMessage} from "formik";

const InputFormik = ({ form,linkComp , field, ...rest }) => {
  const { name } = field;
  return (
    <>
        <label className='form__input-wrapper'>
            <div className='form__input-header'>
                <p className='form__input-name'>{name[0].toUpperCase() + name.slice(1)}</p>
                {
                  form.errors[name] && form.touched[name]
                  && <span className='form__err-message'> {form.errors[name][0].toUpperCase() + form.errors[name].slice(1)}</span>
                }
            </div>
            <div className={!form.errors[name] ? 'form__input-container'  : 'form__input-erorr '}>
                <input className='form__input'  {...field} {...rest}/>
                {linkComp}
            </div>
        </label>

    </>
  );
};

export default InputFormik;
