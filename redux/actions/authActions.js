//import EncryptedStorage from 'react-native-encrypted-storage';

//Types
export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const ERROR = 'ERROR'
export const LOGOUT = 'LOGOUT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const FETCH_DATA = 'FETCH_DATA'

//Actions
export const isLoading = () => ({
  type:LOGIN_ATTEMPT
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

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const fetchData = (userData, tokenData) => ({
  type: FETCH_DATA,
  payload: {userData: userData, tokenData: tokenData }
});

export function onLogin(data){
  return dispatch => {
    dispatch(isLoading());
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
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("Response Token:",response.headers.map);
          dispatch(fetchData(responseJSON, response.headers.map));
          dispatch(loginSuccess());
        })
      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          dispatch(isLoading())
          dispatch(loginFailed(responseJSON.message))
        })
      }
    })
    .catch((error) => {
      console.log("error",error);
      dispatch(isLoading())
      dispatch(loginFailed(error))
    });
  };
}