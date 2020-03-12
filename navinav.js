import React from 'react'
import {connect} from 'react-redux';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';

//provider

//From Redux integration doc
<NavigationContainer> 
  //From AuthFlow doc----------------------------------------
  <Stack.Navigator>
    {state.isLoading ? (
      // We haven't finished checking for the token yet
      <Stack.Screen name="Splash" component={SplashScreen} />
    ) : state.TokenData == null ? (
      <>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </>
    ) : (
      <>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </>
    );
    }
  </Stack.Navigator>
</NavigationContainer>

//provider

const mapStateToProps = state => ({
    //isLoggedIn:state.auth.isLoggedIn,
    //voir LoginScreen
  })
  
  const mapDispatchToProps = dispatch => ({
    login:(email,password) => dispatch(actions.onLogin({email,password}))
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)