import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducers from './reducers/index';

import {BrowserRouter as Router, Route, NavLink } from "react-router-dom";

let store = createStore(todoReducers);

const home = () => (<ul className="list-group">
    <li className="list-group-item"><NavLink to="/todo_list" activeStyle={{color:'green'}}>Todo List</NavLink></li>
    <li className="list-group-item"><NavLink to="/about" activeStyle={{color:'green'}}>About Us</NavLink></li>
    <li className="list-group-item"><NavLink to="/" activeStyle={{color:'green'}}>Home</NavLink></li>
</ul>);

const about = () => (<div>
    About us
</div>);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/todo_list" component={App} />
                <Route path="/about" component={about} />
                <Route path="/" component={home} />

            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
