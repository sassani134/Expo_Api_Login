import React, { Component } from 'react';
import { ScrollView, StyleSheet, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { onCreate as performCreatePost } from '../../redux/actions/postActions';

import DateTimePicker from '@react-native-community/datetimepicker';


class NewPost extends Component {
 
    constructor(props) {
        super(props);
        
        this.state = {
          title: '',
          content: '',
          category:'',
          entry:'',
          rdv:'3019-11-24T20:29:29.150Z',
          tag1:'',
          tag2:'',
          tag3:'',
        };
      }

      onCreatePost(){
        this.props.createPost(this.state.title,this.state.content,this.state.category
            ,this.state.entry,this.state.rdv,this.state.tag1,this.state.tag2
            ,this.state.tag3,this.props.userData.data.id).then(() => {})
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
         onPress={this.onCreatePost.bind(this)}
         />

         <Button
         title="test"
         onPress = {()=> console.log(this.props)}
         />
    </View>

    )
  }
}

const mapStateToProps = state => ({
    userData: state.auth.userData,
    tokenData: state.auth.tokenData,
    pendingPost: state.post.pending
})


const mapDispatchToProps = dispatch => ({
  createPost:(title,content,category_id,entry,rdv,tag1,tag2,tag3,user_id) => 
  dispatch(performCreatePost({title,content,category_id,entry,rdv,tag1,tag2,tag3,user_id}))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPost);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
//"rdv": "3019-11-24T20:29:29.150Z"
//"updated_at": "2020-06-07T13:22:49.032Z"
//"created_at": "2020-06-07T13:22:49.032Z"