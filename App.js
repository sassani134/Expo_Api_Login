//basique
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Redux Redux-Persist React-Redux Dependencies
import {Provider } from 'react-redux';
import { persistor, store } from './redux/store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';


//react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Screen & Localisation
import LoginScreen from './screens/unconnected/LoginScreen';
import SignUpScreen from './screens/unconnected/SignUpScreen';
import ResetPassword from './screens/unconnected/ResetPassword';
import SplashScreen from './screens/SplashScreen';
import FeedScreen from './screens/connected/FeedScreen';
import SettingScreen from './screens/connected/SettingScreen';
import AuthLoadingScreen from './screens/unconnected/AuthLoadingScreen'
const Stack = createStackNavigator();

// Uncomment in case you want to delete state from persistant storage.
//persistor.purge();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AuthLoadingScreen/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}