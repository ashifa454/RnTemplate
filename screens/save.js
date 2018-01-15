import React,{Component} from 'react';
import {connect} from 'react-redux';
import {View,Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../app/actions';
import { human } from 'react-native-typography'
class save extends Component{
    static navigatorStyle = {
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
    render(){
        return(
            <View>
                <Text style={human.largeTitle}>I can Save !</Text>
            </View>
        )
    }
}
function mapStateToProps(state){
    return {
        place:state.getAboutPlace
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(save);