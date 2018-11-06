import {fetch as myFetch} from 'whatwg-fetch';


let nextTodoId = 0;
export let nextUserId = 0;
let nextMsgId = 0;

export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        id: nextTodoId++,
        text
    };
}

export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

export const filterTodos = (filter) =>{
    return {
        type: "FILTER_TODOS",
        filter
    }
}

export const login = (email) => {

    return {
        type: "LOGIN",
        email
    }
}


export const addChat = (username, socket) => {
    return {
        type: "ADD_CHAT",
        userid: nextUserId++,
        username,
        socket
    }
}

export const exitChat = (socket, username, userid) => {
    return {
        type: "EXIT_CHAT",
        socket,
        username,
        userid
    }
}

export const addMsg = (username, msg, userid) => {
    return {
        type: "ADD_MSG",
        nextMsgId: nextMsgId++,
        msg,
        username,
        userid
    }
}

export const externalActionTest = (payload) => {
    return dispatch => {
        myFetch('http://119.84.60.71:3000/api/version')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                console.log('parsed json', json)
                dispatch(addTodo(json.status));
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            });

    }
}
