import { } from 'antd/es/table/createStore';
import {combineReducers} from 'redux';
import * as reducers from './reducer/';
import {createStore} from 'redux';

const myReducer = combineReducers(reducers);

export default createStore(myReducer);