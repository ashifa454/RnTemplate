import {combineReducers} from 'redux';
import * as hotelReducers from './hotel';
import * as homeReducers from './home';
import * as saveReducers from './save';
import * as searchReducer from './search';
export default combineReducers(Object.assign(
    hotelReducers,homeReducers,saveReducers,searchReducer
));