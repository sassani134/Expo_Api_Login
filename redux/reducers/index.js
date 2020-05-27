// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import auth from './authReducer'
import post from './postReducer'
//import nav from './navReducer'

const rootReducer = combineReducers({
  auth,
  post
})

export default rootReducer;