//https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao
import { Alert } from 'react-native';

// Types
export const FETCH_POST_PENDING = 'FETCH_POST_PENDING';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_ONE_POST_SUCCESS = 'FETCH_ONE_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

//Actions
//Index GetPosts
function fetchPostsPending() {
    return {
        type: FETCH_POST_PENDING
    }
}

function fetchPostsSuccess(posts) {
    return {
        type: FETCH_POST_SUCCESS,
        payload: posts
    }
};

function fetchOnePostSuccess(onepost) {
  return {
      type: FETCH_ONE_POST_SUCCESS,
      payload: onepost
  }
};
function fetchPostsError(error) {
    return {
        type: FETCH_POST_ERROR,
        error: error
    }
}

export function fetchPost(){
    return dispatch => {
        dispatch(fetchPostsPending());
        return fetch('http://192.168.0.46:3000/api/v0/posts')
        .then((response)=>{
            if(response.ok){
                return response.json()
                .then((response)=>
                    dispatch(fetchPostsSuccess(response))
                )
            }
            else{
                return response.json()
                .then((response)=>{
                    console.log("Response:",response);
                    dispatch(fetchPostsError);
                })
            }
        })
        .catch((error)=>{
            console.log("error:",error);
            dispatch(fetchPostsError);
        })
    }
}


///api/v0/posts
//Create New Post
export function onCreate(data){
    return dispatch => {
      dispatch(fetchPostsPending());
      return fetch('http://192.168.0.46:3000/api/v0/posts',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          "title":data.title,
          "content":data.content,
          "category_id":data.category_id,
          "rdv":data.rdv,
          "entry":data.entry,
          "tag1":data.tag1,
          "tag2":data.tag2,
          "tag3":data.tag3,
          "user_id":data.user_id,
          "created_at":Date.now(),
          "updated_at":Date.now()
        })
      })
      .then((response) => {
        if(response.ok){
          response.json().then((responseJSON) => {
            console.log("responseJSON",responseJSON);
            console.log("Response Token:",response.headers.map);
            Alert.alert('New Post', 'Le Post a Bien ete créer');
            dispatch(fetchPostsPending());
          })
        }
        else{
          response.json().then((responseJSON) => {
            console.log("responseJSON",responseJSON);
            Alert.alert('raté ', 'email ou mdp incorecte');
            dispatch(fetchPostsPending())
          })
        }
      })
      .catch((error) => {
        console.log("error",error);
        Alert.alert('Login Failed', 'Some error occured, please retry');
        dispatch(fetchPostsError(error));
      });
    };
  }


//Read One Post
export function onRead(data){
  return dispatch => {
      dispatch(fetchPostsPending());
      return fetch('http://192.168.0.46:3000/api/v0/posts/'+data.id)
      .then((response)=>{
          if(response.ok){
              return response.json()
              .then((response)=>
                  dispatch(fetchOnePostSuccess(response)),
                  dispatch(fetchPostsPending())

              )
          }
          else{
              return response.json()
              .then((response)=>{
                  console.log("Response:",response);
                  dispatch(fetchPostsError);
              })
          }
      })
      .catch((error)=>{
          console.log("error:",error);
          dispatch(fetchPostsError);
      })
  }
}