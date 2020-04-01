import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from '../reducers'
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
//import immutableTransform from 'redux-persist-transform-immutable';

const persistConfig = {
    //transforms: [immutableTransform()],
    timeout: 10000,
    key: 'root',
    storage: AsyncStorage,
    //stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
    whitelist: ['auth']
   };
   
   const pReducer = persistReducer(persistConfig, rootReducer);
   
   export const store = createStore(pReducer,applyMiddleware(thunk,logger));
   export let persistor = persistStore(store);