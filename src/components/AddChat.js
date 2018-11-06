import React from 'react';

const AddChat = ({onAddChatClick}) => {
    let usernameInput;

    return (<div className="container">
        <div className="row">
            <div className="col">
                <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    ref={node=>{usernameInput=node}}
                ></input>
            </div>
            <div className="col">
                <input
                    type="button"
                    className="btn btn-primary"
                    onClick={()=>{onAddChatClick(usernameInput.value);usernameInput.value="";}}
                    value="Add Chat"
                ></input>
            </div>
        </div>
    </div>);
}

export default  AddChat;