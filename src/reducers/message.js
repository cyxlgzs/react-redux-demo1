const messages = (state = [], action) => {
    switch(action.type){
        case "ADD_MSG":
            return [...state, {userid: action.userid, username:action.username, msg:action.msg, nextMsgId: action.nextMsgId}];
        default:
            return state;
    }
}



export default messages;