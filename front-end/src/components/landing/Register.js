import React, { useState } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {registerUser} from './actions'

const Register = (props) =>{
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e =>{
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault();
    props.registerUser(credentials)
    props.history.push('/world')
  }

  return(
    <div className="register-container">
      <h1>Sign Up!</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input type="email" placeholder="Email" onChange={handleChange} value={credentials.username} />
        </FormGroup>
        <FormGroup>
          <Input type="password" placeholder="Password" onChange={handleChange} value={credentials.password} />
        </FormGroup>
        <FormGroup>
          <Input type="password" placeholder="Confirm Password" onChange={handleChange} value={credentials.confirmPassword} />
        </FormGroup>
        <Button type="submit">Register!</Button>
      </Form>
      <p>Already have an account? <Link to='/login'>Login!</Link></p>
    </div>
  )
}

const mapStateToProps = state =>{
  console.log('mSTP register', state);
  return{

  }
}

export default connect(mapStateToProps,{registerUser})(Register);