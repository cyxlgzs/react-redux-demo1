import todos from './todo';
import filter from './filter';

import {combineReducers} from 'redux';


const todoReducers = combineReducers({
    todos,
    filter,
    ccc: (state = "test", action) => {
        return state;
    }
});


export default todoReducers;