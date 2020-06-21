//DrawerContent.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    DrawerItem,
    DrawerContentScrollView,
  } from '@react-navigation/drawer';

export function DrawerContent(){
    return(
        <View>
        <Drawer.Navigator>
            <Drawer.Screen
                name="FeedScreen"
                component={FeedScreen}
            />
            <Drawer.Screen name="SettingScreen" component={SettingScreen} />
            <Drawer.Screen name="Déconexion" component={Deco}/>
        </Drawer.Navigator>
        </View>
    )
}

const AppDrawer = () => {
    return (
        <DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItems
                label ="Home"
                onPress = {() => {}}
                />

                <DrawerItems
                label ="setting"
                onPress = {() => {}}
                />
            </Drawer.Section>
            <Drawer.Section>
            <DrawerItems
                label ="deconexion"
                onPress = {() => {}}
                />
            </Drawer.Section>
        </DrawerContentScrollView>
    );
};