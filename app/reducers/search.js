import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const getSearch=createReducer({},{
    [types.SET_SEARCH](state,action){
        return 'CONST'
    }
})