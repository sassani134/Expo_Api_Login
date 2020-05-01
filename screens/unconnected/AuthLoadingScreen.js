import * as React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//localisation
import SplashScreen from '../SplashScreen';
import AppNavigator from '../../navigator/AppNavigator';
import AuthNavigator from '../../navigator/AuthNavigator';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class AuthLoadingScreen extends React.Component {


    // Render any loading content that you like here
    render() {

      if (this.props.isLoading === true) {
        // We haven't finished checking for the token yet
        return <SplashScreen />;
      }
      return (
        <Stack.Navigator headerMode='none' >
          {this.props.tokenData  && this.props.userData && this.props.isLoggedIn === true
           ? (
            <>
              <Stack.Screen name="App" component={AppNavigator} />
            </>
          ) : (
            <>
            <Stack.Screen name="Auth" component={AuthNavigator} />
            </>
          )}
        </Stack.Navigator>
      );

      

    }
}

export const AppDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={FeedScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = state => ({
    tokenData: state.auth.tokenData,
    userData: state.auth.userData,
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.auth.isLoading

});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps,mapDispatchToProps)(AuthLoadingScreen);