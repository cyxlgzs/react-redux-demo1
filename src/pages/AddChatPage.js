import React from 'react';
import {connect} from 'react-redux';
import AddChat from '../components/AddChat';
import {addChat} from '../actions';
import getNewSocket from '../socket.js';
import {nextUserId, addMsg} from '../actions';

function mapStateToProps(state, ownProps){
    return {

    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        onAddChatClick: (username) => {
            if(username==''){
                return;
            }
            const socket = getNewSocket();
            socket.on('login', function(res){
                //console.log(res);
                dispatch(addMsg(res.user.username, "加入聊天室", res.user.userid));
            });
            socket.on('logout', function(res){
                //console.log(res);
                dispatch(addMsg(res.user.username, "离开聊天室", res.user.userid));
            });

            socket.on('message', function(res){
                //console.log(res);
                dispatch(addMsg(res.username, res.content, res.userid));
            });
            socket.on('disconnect', function(res){
                console.log(res);
            });
            dispatch(addChat(username, socket));
            //dispatch(addMsg(username, "加入聊天室", nextUserId));
            socket.emit('login', {userid:nextUserId, username:username});
        }
    }
}

const AddChatPage = connect(mapStateToProps, mapDispatchToProps)(AddChat);

export default AddChatPage;