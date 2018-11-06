import React from 'react';
import {connect} from 'react-redux';
import MessageList from '../components/MessageList.js';

function mapStateToProps(state, ownProps){
    return {
        messages: state.messages
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {

    }
}

const MessageCenter = connect(mapStateToProps, mapDispatchToProps)(MessageList);

export default MessageCenter;