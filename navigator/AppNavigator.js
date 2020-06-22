import React from "react";
import { Button } from 'react-native';
import HomeScreen from '../screens/connected/HomeScreen';
import FeedScreen from '../screens/connected/FeedScreen';
import SettingScreen from '../screens/connected/SettingScreen';
import Deconexionscreen from '../screens/connected/DeconexionScreen';
import PostScreen from '../screens/connected/PostScreen';
import NewPost from '../screens/connected/NewPost';
import EditPost from '../screens/connected/EditPost';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItems } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppNavigator() {
    return (
    <Stack.Navigator >
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
        <Stack.Screen name="Post" component={PostScreen}/>
    </Stack.Navigator>
    );
  }


  const AppDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Feed" component={FeedScreen} />
            <Drawer.Screen name="New" component={NewPost}/>
            <Drawer.Screen name="Setting" component={SettingScreen} />
            <Drawer.Screen name="Déconexion" component={Deconexionscreen}/>
        </Drawer.Navigator>
    );
};


export default AppNavigator;
// FeedScreen drawner: SettingScreen HistoryScreen bookmarks profile
// see twitter instagram tinder cards reddit 9Gag