import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, FlatList, StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchPost as performPostFetch } from '../../redux/actions/postActions';



function Item({ title, content, entry, rdv, category, tag1, tag2, tag3, user, updated_at  }) {
  return (
    <View>
        <Text>Titre:{title}</Text>
        <Text>{content}</Text>
        <Text>{entry}</Text>
        <Text>rdv:{rdv}</Text>
        <Text>Category:{category}</Text>
        <Text>{tag1}</Text>
        <Text>{tag2}</Text>
        <Text>{tag3}</Text>
        <Text>User:{user}</Text>
        <Text>{updated_at}</Text>
        <Text>--------------------------------</Text>
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

     <View>
    <FlatList
        data={this.props.allPosts}
        renderItem={({ item })=>(
          <TouchableOpacity onPress = {() => this.props.navigation.navigate('Post',{
            itemId: item.id
          }) } >
            <Item style={{flex: 1, flexDirection:'column', justifyContent:'space-evenly', alignItems:'center' }}
            title={item.title}
            content={item.content}
            entry={item.entry}
            rdv={item.rdv}
            category={item.category_id} 
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3} 
            user={item.user_id}
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