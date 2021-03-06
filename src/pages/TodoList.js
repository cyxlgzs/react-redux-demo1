import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions';

const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(t=>t.completed);
        case "SHOW_ACTIVE":
            return todos.filter(t=>!t.completed);
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        todos: getVisibleTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
}


const TodoListPage= connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListPage;