let nextTodoId = 0;

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