import {StyleSheet,Dimensions} from 'react-native';
const width=Dimensions.get('window').width;
import { systemWeights } from 'react-native-typography';
import { human } from 'react-native-typography';
const screenheight=Dimensions.get('window').height;
export default appStyle=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        flexWrap:'wrap',
        padding:15
    },
    _100Container:{
        flex:1,
    },
    _80Container:{
        flex:.8,
        padding:15,
    },
    _90Container:{
        flex:.9,
    },
    _10Container:{
        flex:.1,
    },
    locationContainer:{
        paddingTop:25,
        borderBottomWidth:1,
        flexDirection:'row'      
    },
    buttonContainer:{
        paddingTop:25
    },
    _20Container:{
        flex:.2,
        alignItems:'baseline'
    },
    _5050SideBySide:{
        flexDirection:'column',
        flex:1
    },
    thinTitle:{
        ...systemWeights.thin,
    },
    lightTitle:{
        ...systemWeights.light
    },
    locationSubContainer:{
        flexDirection:'column',
        paddingLeft:10
    },
    subHead:{
        paddingTop:3
    },
    leftAlign:{
        alignItems:'center',
        justifyContent: 'center'
    },
    rightAlign:{
        alignItems:'flex-end',
        right:0,
        justifyContent:'center'
    },
    _50RowContainer:{
        flex:.5,
        paddingTop:25,
        borderBottomWidth:1
    },
});