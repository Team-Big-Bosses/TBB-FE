import React, { useState } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser} from './actions'

const Login = (props) =>{
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = e =>{
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e =>{
    e.preventDefafult();
    props.loginUser(credentials);
    props.history.push('/world')
  }

  return(
    <div className="login-container">
      <h1>Login!</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input type="email" placeholder="Email" onChange={handleChange} value={credentials.username} />
        </FormGroup>
        <FormGroup>
          <Input type="password" placeholder="Password" onChange={handleChange} value={credentials.password} />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
      <p>Not registered yet? <Link to='/register'>Sign up here!</Link></p>
    </div>
  )
}

const mapStateToProps = state =>{
  console.log('mSTP login', state);
  return{

  }
}

export default connect(mapStateToProps, {loginUser})(Login);