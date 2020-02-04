import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {registerUser} from './actions'
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup'

const Register = ({errors, touched, ...props}) =>{

  return(
    <div className="register-container">
      <h1>Sign Up!</h1>
      <Form>
        <Field type="text" name="username" placeholder="Email" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="text" name="password1" placeholder="Password" />
        {touched.password1 && errors.password1 && (
          <p className="error">{errors.password1}</p>
        )}
        <Field type="text" name="password2" placeholder="Confirm Password" />
        {touched.password2 && errors.password2 && (
          <p className="error">{errors.password2}</p>
        )}
        <button type="submit">Register</button>
      </Form>
      <p>Already have an account? <Link to='/login'>Login</Link></p>
    </div>
  );
};

const FormikRegister = withFormik({
  mapPropsToValues({ username, password1, password2 }) {
    return{
      username: username || "",
      password1: password1 || "",
      password2: password2 || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Email is required"),
    password1: Yup.string(),
    password2: Yup.string()
  }),
  handleSubmit(values, { resetForm, props }) {
    let credentials = {
      userEmail: values.username,
      userPassword1: values.password1,
      userPassword2: values.password2
    };
    props.registerUser(credentials, props.history);
    resetForm();
  }
})(Register);

const mapStateToProps = state =>{
  console.log('mSTP register', state);
  return{

  }
}

export default connect(mapStateToProps,{registerUser})(FormikRegister);