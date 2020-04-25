import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, Alert, View } from 'react-native';
import {connect} from 'react-redux';
import {onSignUp} from '../../redux/actions/authActions'

class SignUpScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      email:'',
      password:'',
      password_confirm:''
    };
  }

  performSignUp(){
    this.props.signUp(this.state.email, this.state.password, this.state.password_confirm).then(() => {})
  }

  onVerify(){
    console.log(this.props);
  }

  render() {
    //verifie le state global de l'app et si il est vide au départ
    //console.log(this.props)
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none" 
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'email'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

        <TextInput
          value={this.state.password_confirm}
          onChangeText={(password_confirm) => this.setState({ password_confirm })}
          placeholder={'Password confirmation'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Sign Up'}
          style={styles.input}
          onPress={this.performSignUp.bind(this)}
        />

        <Button
          title={'test'}
          style={styles.input}
          onPress={this.onVerify.bind(this)}
        />

      </View>
      
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
  signUp:(email,password,password_confirm) => dispatch(onSignUp({email,password,password_confirm}))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUpScreen)