import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
import { human } from 'react-native-typography'
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../app/actions';
class Search extends Component{
    static navigatorStyle = {
        navBarTextColor: '#F3f3f3',
        statusBarTextColorScheme:'light',
        drawUnderTabBar:true,
        screenBackgroundColor:'#FCFCFC',
        navBarHideOnScroll:false,
        navBarBackgroundColor: '#3F51B5',
        statusBarColor:'#3F51B5'
      }
    constructor(props,context){
          super(props,context);
      }
    render(){
        return (
            <View>
                <Text style={human.largeTitle}>I am Search!</Text>
            </View> 
        )
    }
}
function mapStateToProps(state){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);