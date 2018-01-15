import React,{Component} from 'react';
import {Text,List,ListItem,Left,Body,Right,Switch,Separator,Icon,Thumbnail} from 'native-base';
import {iconsLoaded,iconsMap} from '../components/helper/appIcons';
import { human } from 'react-native-typography';
import appStyle from '../components/css/app';
class settings extends Component{
    static navigatorStyle={
        navBarTextColor: '#FFFFFF',
        statusBarTextColorScheme:'light',
        drawUnderTabBar:true,
        screenBackgroundColor:'#FCFCFC',
        navBarBackgroundColor: '#3F51B5',
        statusBarColor:'#3F51B5'
    }
    constructor(props){
        super(props);
    }
    componentWillMount(){
        iconsLoaded.then(()=>{
            this.props.navigator.setButtons({
                rightButtons: [{
                    icon:iconsMap['settings'],
                    buttonColor:'white',
                    id:'settings'
                    }],
                leftButtons: [],
                animated: true 
              });
        })
    }
    render(){
        return(
            <List>
              <ListItem>
              <Thumbnail square size={120} source={require('../assets/icons/mountains.png')} />
              <Body>
                <Text style={[human.largeTitle,appStyle.lightTitle]}>Asif Ansari</Text>
                <Text style={[human.footnote]}>Asif Ansari</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={[human.title2,appStyle.lightTitle]}>Notifications</Text>
              </Body>
              <Right>
                <Icon name="notifications" style={{fontSize: 30, color: 'black'}}  />
              </Right>
            </ListItem>
            <ListItem>
            <Body>
              <Text style={[human.title2,appStyle.lightTitle]}>Friends</Text>
            </Body>
            <Right>
                <Icon name="ios-contacts" style={{fontSize: 30, color: 'black'}}  />
              </Right>
          </ListItem>
          <ListItem>
          <Body>
            <Text style={[human.title2,appStyle.lightTitle]}>Photos</Text>
          </Body>
          <Right>
                <Icon name="ios-images" style={{fontSize: 30, color: 'black'}}  />
              </Right>
        </ListItem>
        <ListItem>
        <Body>
          <Text style={[human.title2,appStyle.lightTitle]}>Bookings</Text>
        </Body>
        <Right>
                <Icon name="egg" style={{fontSize: 30, color: 'black'}} />
              </Right>
      </ListItem>
          </List>
        )
    }
}
export default settings;