import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import io from './socket';

import { Provider } from 'react-redux';

import {BrowserRouter as Router, Route, NavLink, Switch, Redirect, withRouter } from "react-router-dom";


import {setAuth} from './global';


import PrivateRoute from './PrivateRoute';

import store from './store';

import Login from './pages/LoginPage';



const requireAuth = (nextState, replace) => {
    if (true) {
        replace({ pathname: '/login' }) // 路由转发
    }else{
        // ...
    }
}

//监听新用户登录
io.on('login', function(o){
    console.log(o);
});

const Home = () => (<ul className="list-group">
    <li className="list-group-item"><NavLink to="/todo_list" activeStyle={{color:'green'}}>Todo List</NavLink></li>
    <li className="list-group-item"><NavLink to="/about" activeStyle={{color:'green'}}>About Us</NavLink></li>
    <li className="list-group-item"><NavLink to="/home" activeStyle={{color:'green'}}>Home</NavLink></li>
    <li className="list-group-item"><a href="/">Logout</a></li>
</ul>);

class About extends React.Component{
    logout(){
        setAuth(false);
        this.props.history.push("/home");
    }
    render(){
        return (<div>
            <input type="button" value="Logout" onClick={()=>{this.logout()}} />
        </div>);
    }
};



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Redirect from="/" exact to="login" />
                    <PrivateRoute path="/home" component={Home}/>
                    <PrivateRoute path="/todo_list" component={App} />
                    <PrivateRoute path="/about" component={About} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
