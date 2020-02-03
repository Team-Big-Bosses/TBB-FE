import {axiosWithAuth} from '../../../utils/axiosWithAuth';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const loginUser = (credentials) => dispatch =>{
  console.log(credentials);
  dispatch({type: LOGIN_USER_START});
  axiosWithAuth()
    .post('/auth/login',credentials)
    .then(res =>{
      console.log(res);
      localStorage.setItem('token', res.data.token)
      dispatch({type:LOGIN_USER_SUCCESS, payload:res.data.user})
    })
    .catch(err =>{
      console.log(err);
    })
}

export const registerUser = (credentials) => dispatch =>{
  console.log('registerCreds', credentials);
  dispatch({type: REGISTER_USER_START});
  axiosWithAuth()
    .post('/auth/register', credentials)
    .then(res =>{
      console.log('registerRes', res);
      localStorage.setItem('message', res.data.message)
    })
    .catch(err =>{
      console.log(err);
    })
}