
import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchPost as performPostFetch } from '../../redux/actions/postActions';


class FeedScreen extends Component {

  constructor(props) {
    super(props);}
    
  componentDidMount(){
  this.props.fetchPost();
  }
  
  
  render(){
    return(
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
      
      <Button
            title={'Specifique'}
            onPress = {() => console.log(this.props)}
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