import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, FlatList, StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchPost as performPostFetch } from '../../redux/actions/postActions';

import PostScreen from './PostScreen';

const DATA =[
  {"id":1,
  "title":"noobTest",
  "content":"Card Test",
  "entry":8,// must be correct in the API, need to be a number equal or above 2 and not too much
  "category_id":1,
  "tag1":"tag",
  "tag2":"tagtag",
  "tag3":"tagtagtag",
  "user_id":2, // same as the category DB in the API
  "created_at":"2020-05-15T13:51:23.716Z",
  "updated_at":"2020-05-15T13:51:23.716Z"},
  
  {"id":2,
  "title":"test-o-test",
  "content":"loreum ipsum",
  "entry":4,
  "category_id":2,
  "tag1":"test1",
  "tag2":null,
  "tag3":null,
  "user_id":2,
  "created_at":"2020-05-15T13:51:23.716Z",
  "updated_at":"2020-05-15T13:51:23.716Z"}
]

function Item({ title, content, entry, category_id, tag1, tag2, tag3, user_id, updated_at  }) {
  return (
    <View>
        <Text>Titre:{title}</Text>
        <Text>{content}</Text>
        <Text>{entry}</Text>
        <Text>{category_id}</Text>
        <Text>{tag1}</Text>
        <Text>{tag2}</Text>
        <Text>{tag3}</Text>
        <Text>{user_id}</Text>
        <Text>{updated_at}</Text>
    </View>
  );
}

class FeedScreen extends Component {

  constructor(props) {
    super(props);}
  
  componentDidMount(){
  this.props.fetchPost();
  }
  
  
  render(){
    return(
      /*
      <View>
        
      <Button
      title={'POST'}
      onPress = {() => console.log(this.props.allPosts)}
      />

      <Button
            title={'ERROR'}
            onPress = {() => console.log(this.props.errorPost)}
            />

      <Button
            title={'PENDING'}
            onPress = {() => console.log(this.props.pendingPost)}
            />

      <Button
            title={'ALLProps'}
            onPress = {() => console.log(this.props)}
            />
      */
     <View>
    <FlatList
        data={this.props.allPosts}
        renderItem={({ item })=>(
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('Post') } >
            <Item style={{flex: 1, flexDirection:'column', justifyContent:'space-evenly', alignItems:'center' }}
            title={item.title}
            content={item.content}
            entry={item.entry}
            category_id={item.category_id} 
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3} 
            user_id={item.user_id}
            updated_at={item.updated_at}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item)=> (item.id)}
      />

      </View>

    )
  }
}

const mapStateToProps = state => ({
    errorPost: state.post.error,
    allPosts: state.post.posts,
    pendingPost: state.post.pending
})


const mapDispatchToProps = dispatch => ({
  fetchPost:() => dispatch(performPostFetch())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});