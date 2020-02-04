import {LOGIN_USER_START, LOGIN_USER_SUCCESS, REGISTER_USER_START, REGISTER_USER_SUCCESS} from '../actions';



const initialState = {
  isFetching: false,
  error: '',
  //user:{all data from GET USER by ID OR from LOGIN}
  user:{},
  };


export const reducer = (state = initialState, action) =>{
  switch (action.type){
    case LOGIN_USER_START:
      return{
        ...state,
        isFetching: true,
        error: ''
      };
    case LOGIN_USER_SUCCESS:
      console.log(action.payload, "User info Stored in Payload After Login");
      return{
        ...state,
        isFetching: false,
        user:action.payload
      };
    case REGISTER_USER_START:
      return{
        ...state,
        isFetching: true,
        error: ''
      };
    case REGISTER_USER_SUCCESS:
     // console.log(action.payload, 'hello from register');
      return{
        ...state,
        isFetching: false
      };
    }
}