const chat = (state = {}, action) => {
    switch(action.type){
        case "ADD_CHAT":
            return {
                username: action.username,
                socket: action.socket,
                userid: action.userid
            };
        default:
            return state;
    }
}

const chats = (state = [], action) => {
    switch(action.type){
        case "ADD_CHAT":
            return [...state, chat(null, action)];
        case "EXIT_CHAT":
            return state.filter(n=>n.socket.connected);
        default:
            return state;
    }
}



export default chats;