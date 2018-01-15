import * as types from './types';
export function setSavel(datom){
    return (dispatch,getState)=>{
        dispatch(setSave())
    }
}
export function setSave(){
    return{
        type:types.SET_SAVE,
        carPoolingDetails
    }
}
