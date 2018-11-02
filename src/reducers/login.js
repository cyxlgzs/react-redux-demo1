const login = (state = "", action) => {
    switch(action.type){
        case "LOGIN":
            return action.email;
        default:
            return state;
    }
}

export default login;