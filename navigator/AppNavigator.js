import React from "react";
import FeedScreen from '../screens/connected/FeedScreen';
import SettingScreen from '../screens/connected/SettingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerItems } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppNavigator() {
    return (
    <Stack.Navigator >
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
    </Stack.Navigator>
    );
  }

  const AppDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="FeedScreen"
                component={FeedScreen}
            />
            <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        </Drawer.Navigator>
    );
};


export default AppNavigator;
// FeedScreen drawner: SettingScreen HistoryScreen