import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom'
import '../../scss/test.scss'


const RegistrationTest = ({ history, errors, touched, values, status }) => {
  
  const [user, setUser] = useState([])
  useEffect(() => {
    if (status) {
      setUser(user => status) 
    }
  }, [status])

  return (
    <div className="signupPage">
      <span className='loginTitle'>Register</span>
     <div className="contain">
      <Form>
      <div className="top-inputs">
        <Field 
          className="input"
          type="text"
          name="username"
          placeholder="Username"

        />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}

        <Field 
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

       </div> 

        <button  type='submit' className='loginButton'>Register</button>
        <p className="accountText">Already have an account?{' '}
          <Link to='/login' className="accountLink">
            Log in
          </Link>
        </p>
      </Form>
     </div> 
    </div>
  )
}

const FormikRegisterTest = withFormik({
  mapPropsToValues({ username, password}) {
    return {
      username: username || '',
      password: password || ''
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required!'),
    password: Yup.string().required('Password is required!'),    age: Yup.number().integer().required('Age needed'),
  }),

  handleSubmit(values, {props, setStatus}) {
    axios 
      .post('https://team-big-bosses-be.herokuapp.com/api/registration/', values)  // ENTER REGISTRATION ENDPOINT
      .then(res => {
        console.log('register', res.data)
        setStatus(res.data)
        localStorage.setItem(res.token)
        props.history.push('/world')
      })
      .catch(err => console.log(err.response))
  }
})(RegistrationTest)

export default FormikRegisterTest;