import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import todoReducers from './reducers/index';

import logger from 'redux-logger';


let store = createStore(todoReducers, applyMiddleware(thunk, logger));

export default store;