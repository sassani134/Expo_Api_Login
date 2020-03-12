//import EncryptedStorage from 'react-native-encrypted-storage';

//Types
export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const ERROR = 'ERROR'
export const LOGOUT = 'LOGOUT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const IS_LOGGED = 'IS_LOGGED'

//Actions
export const isLoading = (bool) => ({
  type:LOGIN_ATTEMPT ,
    isLoading: bool
});

export const loginFailed = error => ({
   type: LOGIN_FAILED,
   error
 });
 
export const error = error => ({
  type: ERROR,
  error
});

export const logout = () => ({
    type: LOGOUT
});

export const loginSuccess = (userJson, tokenData) => ({
    type: LOGIN_SUCCESS,
    payload: {userJson:userJson, tokenData: tokenData }
});

export const isLogged = (bool) => ({
  type: IS_LOGGED ,
  isLogged: bool
});

export function performLogout(){
  fetch(`http://192.168.0.46:3000/auth/sign_out`,{
  method: "DELETE",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ 
   "uid": tokenData.uid,
   "client": tokenData.client,
   "access-token": tokenData.access-token
 })
}
).then(res => res.json())
dispatch(isLoggedIn(false)),
dispatch(isLoading(false)),
dispatch(userData({})),
dispatch(tokenData({})),
dispatch(error(null))
}
export function onLogin(data){
  return dispatch => {
    dispatch(isLoading(true));
    return fetch('http://192.168.0.46:3000/auth/sign_in',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "email":data.email,
        "password":data.password
      })
    })
    .then((response) => {
      if(response.ok){
        dispatch(isLoading(false))
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          
          dispatch(loginSuccess(responseJSON, response.headers.map))
          dispatch(isLogged(true))
        })
      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          dispatch(isLoading(false))
          dispatch(loginFailed(responseJSON.message))
        })
      }
    })
    .catch((error) => {
      console.log("error",error);
      dispatch(isLoading(false))
      dispatch(loginFailed(error))
    })
  }
}