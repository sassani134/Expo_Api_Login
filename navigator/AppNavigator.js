import React from "react";
import { Button } from 'react-native';
import FeedScreen from '../screens/connected/FeedScreen';
import SettingScreen from '../screens/connected/SettingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItems } from '@react-navigation/drawer';
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

function Deco(){
    return(
        <Button
        title={'BadOut'}
        onPress = {() => this.props.dispatch(logout())}
        />
    )
}

  const AppDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="FeedScreen"
                component={FeedScreen}
            />
            <Drawer.Screen name="SettingScreen" component={SettingScreen} />
            <Drawer.Screen name="Déconexion" component={Deco}/>
        </Drawer.Navigator>
    );
};


export default AppNavigator;
// FeedScreen drawner: SettingScreen HistoryScreen bookmarks profile