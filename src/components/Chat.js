import React from 'react';


const StatelessChat = ({userid, username, socket, onSendClick, onExitClick}) => {
    let msgInput;

    return (
        <div className="container">
            <div className="row">
                <div className="col-8"><h3>{username}</h3></div>
                <div className="col-4">
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={()=>{onExitClick(socket, username, userid)}}
                    >exit</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <textarea className="form-control"
                    ref={node=>{msgInput=node}}></textarea>
                </div>
                <div className="col">
                    <input
                        type="button"
                        className="btn btn-primary"
                        onClick={()=>{onSendClick(socket, username, msgInput.value, userid);msgInput.value="";}}
                        value="Send"
                    ></input>
                </div>
            </div>
        </div>
    );
};

export default  StatelessChat;