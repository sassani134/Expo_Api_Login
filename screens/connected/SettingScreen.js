import React, { Component } from 'react';
import {  StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import {onUpdate, onDelete } from '../../redux/actions/authActions';
import {connect} from 'react-redux';


class SettingScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      new_password:'',
      new_password_confirm:''
    };
  }
  
  performChangePassword(){
    this.props.changePassword(
      this.state.new_password,
      this.state.new_password_confirm
      ).then(() => {})
  } 

  performDeleteAccount(){
    this.props.deleteAccount(this.props.tokenData['uid'],
    this.props.tokenData['access-token'],
    this.props.tokenData['client']
    ).then(() => {})
  }

  render() {
    //verifie le state global de l'app et si il est vide au départ
    //console.log(this.props)

    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            value={this.state.new_password}
            onChangeText={(new_password) => this.setState({ new_password })}
            placeholder={'New password'}
            secureTextEntry={true}
            style={styles.input}
          />

          <TextInput
            value={this.state.new_password_confirm}
            onChangeText={(new_password_confirm) => this.setState({ new_password_confirm })}
            placeholder={'New Password confirmation'}
            secureTextEntry={true}
            style={styles.input}
          />
          
          <Button
            title={'Change password'}
            style={styles.input}
            onPress={this.performChangePassword.bind(this)}
          />
          
          <Button
            title={'delete account'}
            style={styles.input}
            onPress={this.performDeleteAccount.bind(this)}
          />

        </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

const mapStateToProps = state => ({
  isLogged:state.auth.isLoggedIn,
  isLoading:state.auth.isLoading,
  userData:state.auth.userData,
  tokenData:state.auth.tokenData,
  error:state.auth.error
})

const mapDispatchToProps = dispatch => ({
  changePassword:(new_password,new_password_confirm) => dispatch(onUpdate({new_password, new_password_confirm})),
  deleteAccount:(uid, accessToken,client) => dispatch(onDelete({uid, accessToken,client}))
})

export default connect(mapStateToProps,mapDispatchToProps)(SettingScreen)

//password, password_confirm || /password || put