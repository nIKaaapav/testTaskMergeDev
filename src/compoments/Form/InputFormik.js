import React from "react";

const InputFormik = ({ form, linkComp, field, ...rest }) => {
  const { name } = field;

  const flag =
   ( form.values[name] !== 0 && !form.errors[name])
      ? "form__input-wrap--container"
      : !form.errors[name]
      ? "form__input-wrap--complete"
      : "form__input-wrap--erorr";
  console.log(flag);

  return (
    <>
      <label className="form__input-wrapper">
        <div className="form__input-header">
          <p className="form__input-name">
            {name[0].toUpperCase() + name.slice(1)}
          </p>
          {form.errors[name] && form.touched[name] && (
            <span className="form__err-message">
              {" "}
              {form.errors[name][0].toUpperCase() + form.errors[name].slice(1)}
            </span>
          )}
        </div>
        <div className={`form__input-wrap ${flag}`}>
          <input className="form__input" {...field} {...rest} />
          {linkComp}
        </div>
      </label>
    </>
  );
};

export default InputFormik;
