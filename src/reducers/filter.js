const filter = (state = "SHOW_ALL", action) => {
    switch(action.type){
        case "FILTER_TODOS":
            return action.filter;
        default:
            return state;
    }
}

export default filter;