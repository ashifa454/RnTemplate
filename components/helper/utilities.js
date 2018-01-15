import DialogAndroid from 'react-native-dialogs';
import {TimePickerAndroid,DatePickerAndroid} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../app/actions';
export function _getTime(props){
    try{
        const {action,hour,minute}=TimePickerAndroid.open({
            hour:14,
            minute:0,
            is24Hour:true
        }).then((response)=>{
            if(response.action===TimePickerAndroid.timeSetAction){
             var time=new Date(2012,12,12,response.hour,response.minute);
             props.setPoolingDetail({
                 type:'TIME',
                 time
             })
            }
        });
    }catch({code,message}){
        var dialog = new DialogAndroid();
        dialog.set({
            title:'Error',
            titleColor:'#f44336',
            content:message,
            cancalable:false,
            negativeText:'Retry',
            negativeColor:'#f44336',
            onNegative:()=>{
                dialog.dismiss();
            }
        });
        dialog.show();    
    }
}
export function _getDate(props){
    try{
        const {action,year,month,day}=DatePickerAndroid.open({
            date: Date.now(),
            minDate:Date.now(),
        }).then((response)=>{
            if(response.action===DatePickerAndroid.dateSetAction){
                var date=new Date(response.year,response.month,response.day);
                props.setPoolingDetail({
                    type:'DATE',
                    date})
            }
            alert(JSON.stringify(response));
        });
        if(action!==DatePickerAndroid.dismissedAction){
            
        }
    }catch({code,message}){
        var dialog = new DialogAndroid();
        dialog.set({
            title:'Error',
            titleColor:'#f44336',
            content:message,
            cancalable:false,
            negativeText:'Retry',
            negativeColor:'#f44336',
            onNegative:()=>{
                dialog.dismiss();
            }
        });
        dialog.show();    
    }
}
export function _getNumber(props){
    var dialog=new DialogAndroid();
    dialog.set({
        title:'How Many People can Come along with you?',
        input:{
            hint:'Number of People',
            type:1,
            allowEmptyInput:true,
            prefill:'3'
        },
        positiveText:'Confirm',
        negativeText:'Cancel',
        onPositive:()=>{

        },
        onNegative:()=>{
            dialog.dismiss();
        },
    });
    dialog.show();
}
showErrorDialog=(data)=>{
    var dialog=new DialogAndroid();
    dialog.set({
        title:data.title,
        titleColor:'#f44336',
        content:data.message,
        cancalable:false,
        negativeText:'Retry',
        negativeColor:'#f44336',
        onNegative:()=>{
            dialog.dismiss();
        }
    })
    dialog.show();
}
_addLocation=(navigator)=>{
    navigator.showModal({
        screen:'tripyworld.chooseLocation',
        passProps:{

        },
        navigatorStyle:{
        navBarTextColor: '#FFFFFF',
        statusBarTextColorScheme:'light',
        navBarHidden:true,
        screenBackgroundColor:'#FCFCFC',
        navBarBackgroundColor: '#f44336',
        statusBarColor:'#f44336'
        },
        animationType:'slide-up' 
    })
}
function mapStateToProps(state){
    return {
        poolingDetails:state.poolingDetails
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(
    _getDate,_getTime,_getNumber
)
/*export{
    _getTime,
    //_getDate,
    _getNumber,
    _addLocation
}*/