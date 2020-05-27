//https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao

// Types
export const FETCH_POST_PENDING = 'FETCH_POST_PENDING';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

//Actions
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