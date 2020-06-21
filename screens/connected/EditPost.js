import React, { Component } from 'react';
import { ScrollView, StyleSheet, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchPost as performPostFetch } from '../../redux/actions/postActions';

class EditPost extends Component {
 
    constructor(props) {
        super(props);
        
        this.state = {
          title: '',
          content: '',
          category:'',
          entry:'',
          rdv:'',
          tag1:'',
          tag2:'',
          tag3:'',
        };
      }
  render(){
    return(

     <View>

        <TextInput
            value={this.state.title}
            onChangeText={(title) => this.setState({ title })}
            placeholder={'Titre'}
         />
         
         <TextInput
            value={this.state.content}
            onChangeText={(content) => this.setState({ content })}
            placeholder={'content'}
         />
         
         <TextInput
            value={this.state.category}
            onChangeText={(category) => this.setState({ category })}
            placeholder={'category'}
         />
         
         <TextInput
            value={this.state.entry}
            onChangeText={(entry) => this.setState({ entry })}
            placeholder={'entry'}
         />
         
         <TextInput
            value={this.state.rdv}
            onChangeText={(rdv) => this.setState({ rdv })}
            placeholder={'rdv'}
         />
         
         <TextInput
            value={this.state.tag1}
            onChangeText={(tag1) => this.setState({ tag1 })}
            placeholder={'tag1'}
         />
         
         <TextInput
            value={this.state.tag2}
            onChangeText={(tag2) => this.setState({ tag2 })}
            placeholder={'tag2'}
         />         
         <TextInput
            value={this.state.tag3}
            onChangeText={(tag3) => this.setState({ tag3 })}
            placeholder={'tag3'}
         />
         
         <Button
         title="Validé"
         />
         <Button
         title="Suprimé"
         />
    </View>

    )
  }
}
