import React from "react";

import FeedScreen from '../screens/connected/FeedScreen';
import SettingScreen from '../screens/connected/SettingScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
    <Stack.Navigator options={{ headerMode: "none" }} >
        <Stack.Screen name="Home" component={FeedScreen} />
        <Stack.Screen name="Setting" component={SettingScreen}/>
    </Stack.Navigator>
    );
  }

export default AppNavigator;