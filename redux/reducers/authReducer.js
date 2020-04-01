import {LOGIN_SUCCESS, LOGIN_ATTEMPT, LOGIN_FAILED, ERROR, LOGOUT, FETCH_DATA} from '../actions/authActions'


const INITIAL_STATE={
    isLoggedIn:false,
    isLoading:false,
    userData:{},
    tokenData:{},
    error:''
  }
  
  export default function auth(state=INITIAL_STATE,action){
    switch (action.type) {
      case LOGIN_ATTEMPT:
        return {
          ...state,
          isLoading: true,
          isLoggedIn: false
        }
      case FETCH_DATA:
        return{
          ...state,
          userData:action.payload.userData,
          tokenData:action.payload.tokenData
        }
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isLoggedIn: true,
          error: null
        }
      case LOGIN_FAILED:
        return {
          ...state,
          isLoading: false,
          isLoggedIn: false,
          error: action.error
        }
      case LOGOUT:
        return {
          INITIAL_STATE
        }
      default:
        return state
    }
  }