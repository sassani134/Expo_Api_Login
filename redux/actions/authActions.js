//import EncryptedStorage from 'react-native-encrypted-storage';
import { Alert } from 'react-native';

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

//Email registration
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
        "password-confirmation":data["password-confirmation"]
      })
    })
    .then((response) => {
      if(response.ok){
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
        })
        //Do i need to alert the sucess only??

        //Conexion is performed imediatly after the account is created
        //onLogin(data)
        

        //Alert the success
        Alert.alert('Sucess ', 'Création de compte réussi');
        dispatch(logout);

      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          Alert.alert('Echec ', 'Création de compte raté mdp');
          dispatch(isLoading())
          //dispatch(loginFailed(responseJSON.message))
        })
      }
    })
    .catch((error) => {
      Alert.alert('Login Failed', 'Some error occured, please retry');
      console.log("error",error);
      dispatch(isLoading())
      dispatch(loginFailed(error))
    });
  };
}

//Account deletion
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
          //change
          Alert.alert('Account deleted', 'Success');
          dispatch(logout());
        })
      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("something happen but it's not an error");
        })
      }
    })
    .catch((error) => {
      Alert.alert('Login Failed', 'Some error occured, please retry');
      console.log("error",error);
      console.log("response", response);

    });
  };
}
//Account updates
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
          //i need to dispatch login false and alert the user
          dispatch(isLoading()); //maybe it works backward unk
        })
      }
      else{
        // what can be else with update?
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("something happen but it's not an error")
          dispatch(logout()); 
        })
      }
    })
    .catch((error) => {
      Alert.alert('Login Failed', 'Some error occured, please retry');
      console.log("error",error);
      console.log("response", response);
      dispatch(logout());
    });
  };
}

//Email authentication
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
          Alert.alert('raté ', 'email ou mdp incorecte');
          dispatch(isLoading())
          dispatch(loginFailed(responseJSON.message))
        })
      }
    })
    .catch((error) => {
      console.log("error",error);
      Alert.alert('Login Failed', 'Some error occured, please retry');
      dispatch(isLoading());
      dispatch(loginFailed(error));
    });
  };
}

// End the user's current session
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
          //bug disapear without response
          //console.log("response", response);
          //change
          dispatch(logout());
        })
      }
      else{
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
          console.log("response", response);
          console.log("Probleme de déconnexion");
        })
      }
    })
    .catch((error) => {
      Alert.alert('Login Failed', 'Some error occured, please retry');
      console.log("error",error);
      console.log("response", response);
      dispatch(logout());
    });
  };
}

//destination for client authentication (provider)
//...

//oauth2 provider's callback
//...

//validate tokens
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

//password concern
//https://github.com/lynndylanhurley/devise_token_auth/blob/master/docs/usage/reset_password.md

//send a password reset confirmation
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

//change users' passwords
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

//Verify user by password reset token
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

//Re-sends confirmation email
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