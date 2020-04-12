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

//https://devise-token-auth.gitbook.io/devise-token-auth/usage

//connexion
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

//Déconnexion
export function onLogout(data){
  return dispatch => {
    dispatch(isLoading());
    return fetch(`http://192.168.0.46:3000/auth/sign_out`,{
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
       "uid": data.uid,
       "client": data.client,
       "access-token": data.accessToken
     })
    }
    )
    .then((response) => {
      if(response.ok){
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
          //change
          dispatch(logout());
        })
      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
        })
      }
    })
    .catch((error) => {
      console.log("error",error);
      console.log("response", response);
    });
  };
}

//Create an account
export function onSignUp(data){
  return dispatch => {
    dispatch(isLoading());
    return fetch('http://192.168.0.46:3000/auth/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "email":data.email,
        "password":data.password,
        "password-confirmation":data.password-confirmation
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

//Delete an account
export function onDelete(data){
  return dispatch => {
    dispatch(isLoading());
    return fetch(`http://192.168.0.46:3000/auth/`,{
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
       "uid": data.uid,
       "client": data.client,
       "access-token": data.accessToken
     })
    }
    )
    .then((response) => {
      if(response.ok){
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
          //change
          dispatch(logout());
        })
      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
        })
      }
    })
    .catch((error) => {
      console.log("error",error);
      console.log("response", response);
    });
  };
}

//Update Password
export function onUpdate(data){
  return dispatch => {
    dispatch(isLoading());
    return fetch(`http://192.168.0.46:3000/auth/`,{
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
       "password": data.password,
       "password_confirmation": data.password_confirmation
     })
    }
    )
    .then((response) => {
      if(response.ok){
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
          //change
          dispatch(logout());
        })
      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
        })
      }
    })
    .catch((error) => {
      console.log("error",error);
      console.log("response", response);
    });
  };
}

//
export function checkToken(data){
  return dispatch => {
    dispatch(isLoading());
    return fetch(`http://192.168.0.46:3000/auth/validate_token`,{
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
       "uid": data.password,
       "client": data.password_confirmation
      })
    }
    )
    .then((response) => {
      if(response.ok){
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
          //change
          dispatch(logout());
        })
      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
        })
      }
    })
    .catch((error) => {
      console.log("error",error);
      console.log("response", response);
    });
  };
}

//
export function onPasswordRecovery(data){
  return dispatch => {
    dispatch(isLoading());
    return fetch(`http://192.168.0.46:3000/auth/password`,{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
       "email": data.email
     })
    }
    )
    .then((response) => {
      if(response.ok){
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
          //change
          dispatch(logout());
        })
      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
        })
      }
    })
    .catch((error) => {
      console.log("error",error);
      console.log("response", response);
    });
  };
}

//nom a changé
export function onPasswordRecoveryChange(data){
  return dispatch => {
    dispatch(isLoading());
    return fetch(`http://192.168.0.46:3000/auth/password`,{
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
       "password": data.password,
       "password_confirmation":data.password_confirmation
     })
    }
    )
    .then((response) => {
      if(response.ok){
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
          //change
          dispatch(logout());
        })
      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
        })
      }
    })
    .catch((error) => {
      console.log("error",error);
      console.log("response", response);
    });
  };
}

//nom a changé avant dernier de Usage
export function verifyUser(data){
  return dispatch => {
    dispatch(isLoading());
    return fetch(`http://192.168.0.46:3000/auth/password/edit`,{
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
       "reset_password_token": data.reset_password_token
      })
    }
    )
    .then((response) => {
      if(response.ok){
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
          //change
          dispatch(logout());
        })
      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
        })
      }
    })
    .catch((error) => {
      console.log("error",error);
      console.log("response", response);
    });
  };

}

//nom a changé dernier de Usage
export function reSendEmailConfirmation(data){
  return dispatch => {
    dispatch(isLoading());
    return fetch(`http://192.168.0.46:3000/auth/confirmation`,{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
       "email": data.email
      })
    }
    )
    .then((response) => {
      if(response.ok){
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
          //change
          dispatch(logout());
        })
      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
        })
      }
    })
    .catch((error) => {
      console.log("error",error);
      console.log("response", response);
    });
  };
}

//creer un fichier avec les réponse de chaque fetch pour de future utilisation