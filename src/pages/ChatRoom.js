import React from 'react';
import ChatListPage from '../pages/ChatListPage';
import AddChatPage from '../pages/AddChatPage';
import MessageCenter from './MessageCenter.js';

class ChatRoom extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <AddChatPage />
                    <hr />
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <ChatListPage />
                    </div>
                    <div className="col">
                        <MessageCenter />
                    </div>
                </div>

            </div>
        )
    }
}

export default ChatRoom;