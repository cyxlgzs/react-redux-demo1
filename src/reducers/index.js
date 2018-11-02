import todos from './todo';
import filter from './filter';
import login from './login';

import {combineReducers} from 'redux';


const todoReducers = combineReducers({
    todos,
    filter,
    login
});


export default todoReducers;