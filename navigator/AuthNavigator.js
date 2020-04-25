import React from "react";

import LoginScreen from '../screens/unconnected/LoginScreen';
import SignUpScreen from '../screens/unconnected/SignUpScreen';
import ResetPassword from '../screens/unconnected/ResetPassword';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
    <Stack.Navigator options={{ headerMode: "none" }} >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Reset Password" component={ResetPassword} />
    </Stack.Navigator>
    );
  }

export default AuthNavigator;