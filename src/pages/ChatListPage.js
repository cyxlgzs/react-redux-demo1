import React from 'react';
import {connect} from 'react-redux';
import ChatList from '../components/ChatList';
import {addMsg, exitChat} from '../actions';

function mapStateToProps(state, ownProps){
    return {
        chats: state.chats
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        onSendClick: (socket, username, msg, userid) => {
            if(socket.connected){
                socket.emit('message', {userid: userid, username:username, content:msg})
                //dispatch(addMsg(username, msg, userid));
            }

        },
        onExitClick: (socket, username, userid) => {
            socket.disconnect();
            dispatch(exitChat(socket, username, userid))
            //dispatch(addMsg(username, "离开聊天室", userid));
        }
    }
}

const ChatListPage = connect(mapStateToProps, mapDispatchToProps)(ChatList);

export default ChatListPage;