import * as React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { useSelector } from 'react-redux';
import rootReducer from '../redux/reducers';


//localisation
//import LoginScreen from '../unconnected/LoginScreen';
//import SignUpScreen from '../unconnected/SignUpScreen';
//import ResetPassword from '../unconnected/ResetPassword';
//import SplashScreen from '../SplashScreen';
//import FeedScreen from '../connected/FeedScreen';
//import SettingScreen from '../connected/SettingScreen';



export default function AuthChargementScreen() {
    const ACCESS_TOKKEN = useSelector((state ) => state)
    console.log(ACCESS_TOKKEN);
    return(
        <View>
            <Text style={styles.welcome}> ACCESS_TOKKEN: {typeof ACCESS_TOKKEN} </Text>
            <Button
            title={'test'}
            onPress={console.log(ACCESS_TOKKEN)}
            />
            <Button
            title={'state'}
            onPress={console.log('yo')}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });