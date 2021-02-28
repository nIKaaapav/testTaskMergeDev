import React, {useState} from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import InputFormik from "./InputFormik";
import "./Form.scss";

const FormApp = () => {

  const [fieldName, setFieldName] = useState({ email: "",
    password: ""});
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
      <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
      validateOnChange={true}
    >
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form noValidate action="">
            <Field
              component={InputFormik}
              type="email"
              name="email"
              placeholder="enter login"
            />
            <Field
              component={InputFormik}

              linkComp={
                <Link className="form__link-forgot-pass" to="/">
                  Forgot your password?
                </Link>
              }
              type="password"
              name="password"
              placeholder="enter password"
            />
            <button
              type="submit"
              disabled={!formikProps.isValid || formikProps.isSubmitting}
              className={`form__submit-button form__submit-button`}
            >
                Sign in
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("this is not a valid email, dummy!")
    .required("this field is required"),
  password: yup
    .string()
    .required("this field is required")
    .min(5, "Min length is 5"),
});

const validateForm = (values) => {
  const errors = {};
  if (values.password === "" || values.email === "") {
    errors.confirmPassword = "passwords are not matched";
  }
  return errors;
};

export default FormApp;
