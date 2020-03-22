import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux';
import * as actions  from "../../redux/actions/authActions";

import LoginScreen from "../unconnected/LoginScreen";


class FeedScreen extends Component {
  


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit pp.js</Text>
        <Button
          title={'test'}
          onPress={console.log(this.props)}
        />
        <Button
          title={'Logout'}
          onPress={this.props.disconnect(this.props.tokenData)}
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
  isLoggedIn: state.auth.isLoggedIn,
  isLoading: state.auth.isLoading
  
});


const mapDispatchToProps = (dispatch) => {
  return {
    disconnect:(tokenData) => dispatch(actions.onLogout(tokenData))
    
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);