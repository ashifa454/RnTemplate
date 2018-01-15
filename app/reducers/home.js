import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const getHome=createReducer({},{
    [types.SET_HOME](state,action){
        let home=[];
        return home;
    }
});