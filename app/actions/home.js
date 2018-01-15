import * as types from './types';
import Api from '../lib/api';
export function getHome(limit,skip,appendFlag){
    return(dispatch,event)=>{
            dispatch(setHome({}));
     }
}
export function setHome({feed}){
    return{
        type:types.SET_HOME,
        feed
    }
}