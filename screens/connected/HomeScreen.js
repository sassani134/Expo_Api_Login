import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux';
import {onLogout as performLogout} from '../../redux/actions/authActions'
import SettingScreen from './SettingScreen';


class HomeScreen extends Component {
  
  onLogout(){
    this.props.logout(
      this.props.tokenData.uid,
      this.props.tokenData.client,
      this.props.tokenData['access-token']
    ).then(() => {})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit pp.js</Text>
        <Button
          title={'test'}
          onPress = {() => console.log(this.props)}
        />
        
        <Button
          title={'FetchOut'}
          onPress = {this.onLogout.bind(this) }
          />
      </View>
      
    );
  }
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

const mapStateToProps = state => ({
  tokenData: state.auth.tokenData,
  userData: state.auth.userData,
  isLoggedIn: state.auth.isLoggedIn,
  isLoading: state.auth.isLoading,
  error:state.auth.error  
});


const mapDispatchToProps = dispatch => ({
  logout:(uid, client, accessToken) => dispatch(performLogout({uid,client,accessToken}))
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);