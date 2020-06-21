//screen or component it's more like a component????
import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { onRead as performOnRead, onDelete, onUpdate, onSub, onUnsub } from '../../redux/actions/postActions';
import { connect } from 'react-redux';

class PostScreen extends Component {

  constructor(props) {
    super(props);}
    

    componentDidMount(){
      this.props.fetchOnePost(this.props.route.params.itemId);
      }
    componentWillUnmount(){}
    
  render(){
    return(

     <View>
       <Text>title:{this.props.onePost.title}</Text>
       <Text>category:{this.props.onePost.category.title}</Text>
       <Text>content:{this.props.onePost.content}</Text>
       <Text>creer le:{this.props.onePost.created_at}</Text>
       <Text>entry:{this.props.onePost.entry}</Text>
       <Text>rdv:{this.props.onePost.rdv}</Text>
       <Text>tag1:{this.props.onePost.tag1}</Text>
       <Text>tag2:{this.props.onePost.tag2}</Text>
       <Text>tag3:{this.props.onePost.tag3}</Text>
       <Button 
       title="test" 
       onPress = {()=>console.log(this.props.onePost)}
        />
      </View>

    )
  }
}

const mapStateToProps = state => ({
    errorPost: state.post.error,
    onePost: state.post.onepost,
    pendingPost: state.post.pending
})

const mapDispatchToProps = dispatch => ({
  fetchOnePost:(id) => dispatch(performOnRead({id}))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostScreen);


/*//ideas
Save: save the post in case u wont to participate
Slide in: a +1 in the project, and u can access the chatroom / lobby
slide out: a -1 in the project lost the ability to access the chat lobby
Queue in: a +1 in the queue waiting for sombody to slide out
Queue out:
Message: Send a message to the owner of the project // can lead to corruption or problem
Tokens: priority +1 on other person in queue or went u slide in at the same time with an other person in
the last place.
Can be used to create new project and gain visibility
Can be used to slide out from a project
Can be used to participate at more than n project
Janken: janken when people slide in at the same time for the last place with same amount of priority
Abonement: give Monthly advantage like tokens
Watch a ad: gain token by wathing ad
Premium: remove ad for a amount of money
Don: give us money
Code créateur/ Parainage:type
Award: type;
*/