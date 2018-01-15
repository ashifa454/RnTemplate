import * as types from './types';
import Api from '../lib/api';
export function getHotel(coords){
    return(dispatch,event)=>{
        const params={
            //JSON OBJECT THAT IS TO BE PASSED
        }
        return Api.post('URL',params).then((response)=>{
            dispatch(setHotel({hotels:response.message}))
        }).catch((err)=>{
            
        });
    }
}
export function setHotel({hotels}){
    return{
        type:types.SET_HOTEL,
        NearByFriends
    }
}