// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import auth from './authReducer'
//import nav from './navReducer'

const rootReducer = combineReducers({
  auth
})

export default rootReducer;