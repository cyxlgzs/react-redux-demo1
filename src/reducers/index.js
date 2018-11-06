import todos from './todo';
import filter from './filter';
import login from './login';
import chats from './chat';
import messages from './message.js';

import {combineReducers} from 'redux';


const todoReducers = combineReducers({
    todos,
    filter,
    login,
    chats,
    messages
});


export default todoReducers;