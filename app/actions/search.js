import * as types from './types';
//import Api from '../lib/api';
export function getAllPlaces(limit){
    return(dispatch,getState)=>{
        dispatch(setAllPlaces({}))
    }
}
export function setAllPlaces({places}){
    return {
        type:types.SET_HOME,
        places
    }
}