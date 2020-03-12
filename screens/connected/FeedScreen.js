import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import {connect} from 'react-redux';
import * as actions  from "../../redux/actions/authActions";

import LoginScreen from "../unconnected/LoginScreen";


class FeedScreen extends Component {
  
  componentDidUpdate() {
    if (this.isLoggedIn === false || this.tokenData === null || undefined) {
      this.props.navigation.navigate("Auth");
    }
  }

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
          onPress={this.props.disconnect}
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
  tokenData: state.tokenData,
  isLoggedIn: state.isLoggedIn,
  isLoading: state.isLoading
  
});


const mapDispatchToProps = (dispatch) => {
  return {
    disconnect:() => dispatch(actions.onLogout())
    
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);