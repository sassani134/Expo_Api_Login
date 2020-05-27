
import {FETCH_POST_PENDING, FETCH_POST_SUCCESS, FETCH_POST_ERROR} from '../actions/postActions';

const INITIAL_STATE = {
    pending: false,
    posts: {},
    error: null
}

export default function post(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_POST_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                pending: false,
                posts:action.payload
            }
        case FETCH_POST_ERROR:
            return {
                ...state,
                pending: false,
                error:action.error
            }
        default: 
            return state;
    }
}
