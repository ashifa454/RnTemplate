import React,{Component} from 'react';
import {
  View,Text
} from 'react-native';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../app/actions';
import {connect} from 'react-redux';
import { human } from 'react-native-typography'

class Home extends Component {
static navigatorStyle = {
  navBarTextColor: '#FFFFFF',
  statusBarTextColorScheme:'light',
  drawUnderTabBar:true,
  screenBackgroundColor:'#F5F5F5',
  navBarBackgroundColor: '#3F51B5',
  statusBarColor:'#3F51B5'
}
  constructor(props,context) {
    super(props,context);
  }
  render() {
    return (
      <View>
        <Text style={human.largeTitle}>I am home!</Text>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {

  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);