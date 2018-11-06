import React from 'react';

const StatelessLogin = ({onLoginClick, chats}) => {
    let emailDom;

    return (
        <form>
            <div className="form-group">
                <label>Email address</label>
                <input type="text" ref={(node) => emailDom = node} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label">Check me out</label>
            </div>
            <button type="button" className="btn btn-primary" onClick={()=>{onLoginClick(emailDom.value)}}>Login</button>
        </form>
    );
}

export default StatelessLogin;
