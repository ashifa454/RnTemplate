import React,{Component} from 'react';
import {Text,View,StyleSheet,ScrollView,ActivityIndicator} from 'react-native';
import {Separator,List,ListItem,Left,Body} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
class ListTemplate extends Component{
  render(){
      return(
          <ScrollView style={style.mainContainer}>
            <View>
                <Text style={style.textContainer}>
                    About
                </Text>
            </View>
            <View style={style.secondaryTextContainer}>
            <Text style={style.secondaryText}>
                {this.props.sectionInfo[0]}
            </Text>
            </View>
            <View style={style.PrimarytextContainer}>
                <Text style={style.textContainer}>
                    Main Attraction
                </Text>
            </View>
            {
                (this.props.sectionInfo[1])?(
                    <List 
                        dataArray={this.props.sectionInfo[1]}
                        renderRow={(item)=><ListItem icon>
                    <Left>
                        <Icon name="arrow-forward" />
                    </Left>
                    <Body>
                        <Text>{item.value}</Text>
                    </Body>
                </ListItem>}/>
                ):(
                    <ActivityIndicator size='large' animating={true} color='#E81123' />
                )   
            }
            <View style={style.PrimarytextContainer}>
                <Text style={style.textContainer}>
                    Things to Enjoy
                </Text>
            </View>
                {
                    (this.props.sectionInfo[2])?(
                        <List 
                            dataArray={this.props.sectionInfo[2]}
                            renderRow={(item)=><ListItem icon>
                        <Left>
                            <Icon name="arrow-forward" />
                        </Left>
                        <Body>
                            <Text>{item.value}</Text>
                        </Body>
                    </ListItem>}/>
                    ):(
                        <ActivityIndicator size='large' animating={true} color='#E81123' />
                    )   
                }
                <View style={style.PrimarytextContainer}>
                <Text style={style.textContainer}>
                    Things to Buy
                </Text>
            </View>
                {
                    (this.props.sectionInfo[4])?(
                        <List 
                            dataArray={this.props.sectionInfo[4]}
                            renderRow={(item)=><ListItem icon style={style.listItem}>
                            <Left>
                                <Icon name="arrow-forward" />
                            </Left>
                            <Body style={style.listItem}>
                                <Text>{item.value}</Text>
                            </Body>
                        </ListItem>
                        }/>
                    ):(
                        <ActivityIndicator size='large' animating={true} color='#E81123' />
                    )   
                }
            <View>
                <Text style={style.textContainer}>
                    Inspirational History
                </Text>
            </View>
            <View style={style.secondaryTextContainer}>
                <Text style={style.secondaryText}>
                    {this.props.sectionInfo[3]}
                </Text>
            </View>
        </ScrollView>
      )
  }  
}
const style=StyleSheet.create({
    mainContainer:{
        padding:10
    },
    textContainer:{
        fontSize:22,
        color:'#212121',
        fontWeight:'400',
    },
    PrimarytextContainer:{
        paddingTop:10,
    },
    secondaryTextContainer:{
        paddingLeft:10,
    },
    secondaryText:{
        fontSize:14,
        lineHeight:25,
        includeFontPadding:true,
        textAlign:'justify',
        color:'#424242',
    }
});
export default ListTemplate;