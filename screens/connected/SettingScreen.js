import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

export default class SettingScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      new_password:'',
      new_password_confirm:''
    };
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
            onPress={this.props}
          />
          <Text>

          </Text>
          <Button
            title={'delete account'}
            style={styles.input}
            onPress={this.props}
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