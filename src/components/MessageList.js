import React from 'react';

const MessageList = ({messages}) => {
    return (
        <ul className="list-group">
        {
            messages.map(message=>
                    <li
                        key={message.nextMsgId}
                        className="list-group-item"
                    >
                    {"["+message.username+"]: "+message.msg}
                    </li>
            )
        }
        </ul>
    )
}

export default MessageList;