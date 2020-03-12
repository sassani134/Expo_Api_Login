import {LOGIN_SUCCESS, LOGIN_ATTEMPT, LOGIN_FAILED, ERROR, LOGOUT, IS_LOGGED} from '../actions/authActions'


const INITIAL_STATE={
    isLoggedIn:false,
    isLoading:false,
    userData:{},
    tokenData:{},
    error:null
  }
  
  export default function auth(state=INITIAL_STATE,action){
    switch (action.type) {
      case LOGIN_ATTEMPT:
        return {
          ...state,
          isLoading: true,
          isLoggedIn: false
        }

      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isLoggedIn: true,
          tokenData:action.payload.tokenData,
          error: null
        }
      case IS_LOGGED:
        return{
          ...state,
          isLoading: false,
          isLoggedIn: true,
        }
      case LOGIN_FAILED:
        return {
          ...state,
          isLoading: false,
          isLoggedIn: false,
          error:action.error
        }
      case LOGOUT:
        return {
          ...state,
          INITIAL_STATE
        }
      default:
        return state
    }
  }