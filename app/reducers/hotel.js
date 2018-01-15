import createReduder from '../lib/createReducer';
import * as types from '../actions/types';

export const getHotel=createReduder({},{
    [types.SET_HOTEL](state,action){
        let hotel=[];

        return hotel;
    }
});