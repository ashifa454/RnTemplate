import React,{Component} from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';
import {Left,Text,Right,Body,Thumbnail,ListItem} from 'native-base';
const {widht}=Dimensions.get('window');
const height=widht*0.2;
class AddPost extends Component{
    
    render(){
        return(
            <ListItem>
                <Left>
                    <Thumbnail source={{uri:'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-512.png'}}/>
                </Left>
                <Body>
                    <Text>Hi, Asif Ansari</Text>
                    <Text note>Write Something About your Trip</Text>
                </Body>
                    <Right>

                    </Right>
            </ListItem>
        )
    }
}
const homeStyle=StyleSheet.create({

});
export default AddPost;