import React,{Component} from 'react';
import {Text,Left,Thumbnail,Body,Card,CardItem,Icon,Right,Button} from 'native-base';
import {View,FlatList,StyleSheet} from 'react-native'
class UserList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri:'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-512.png'}} />
                        <Body>
							<Text style={{fontWeight:'bold',fontSize:17}}>Asif Ansari</Text>
							<Text note style={{fontSize:15}}>2 hours Ago</Text>
						</Body>
                </Left>
              <Right>
              <Button small rounded success iconLeft>
                    <Text>Add Friend</Text>
              </Button>
              </Right>
             </CardItem>
        </Card>
        )
    }
}
export default UserList;