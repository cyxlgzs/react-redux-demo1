import React from 'react';
import StatelessChat from './Chat';

const ChatList = ({chats, onSendClick, onExitClick}) => (
    <ul className="list-group">
            {
                chats.map(item=> (
                    <li key={item.userid} className="list-group-item">
                        <StatelessChat
                            key={item.userid}
                            {...item}
                            onSendClick={onSendClick}
                            onExitClick={onExitClick}
                        />
                    </li>
                ))
                }
    </ul>
);

export default ChatList;