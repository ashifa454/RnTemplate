import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const getSave=createReducer({},{
    [types.SET_SAVE](state,action){
        let saved=[];
  
        return saved;
    }
})