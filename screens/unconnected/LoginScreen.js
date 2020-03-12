import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/authActions'

class LoginScreen extends Component {
  
  componentDidUpdate() {
    if (this.props.isLoggedIn === true && this.props.tokenData) {
      this.props.navigation.navigate("App");
    }
  }


  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    };
  }
  
  onLogin(){
    this.props.login(this.state.email,this.state.password).then(() => {})
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
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
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
  isLoggedIn:state.isLoggedIn,
  isLoading:state.isLoading,
  userData:state.userData,
  tokenData:state.auth.tokenData,
  error:state.error
})

const mapDispatchToProps = dispatch => ({
  login:(email,password) => dispatch(actions.onLogin({email,password}))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)