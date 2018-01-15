import React,{Component} from 'react';
import {Text,List,ListItem,Left,Right,Body,Thumbnail} from 'native-base';
class FriendListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{uri:this.props.friendInfo.userAvatar}} />
                </Left>
                <Body>
                    <Text>{this.props.friendInfo.name}</Text>
                    <Text note>{this.props.friendInfo.lastMessage}</Text>
                </Body>
                <Right>
                    <Text note>3:43PM</Text>
                </Right>
            </ListItem>
        )
    }
}
export default FriendListItem;