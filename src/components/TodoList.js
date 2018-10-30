import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => {
    return (<ul className="list-group">
        {
            todos.map(item=> (
                <Todo
                    key={item.id}
                    {...item}
                    onClick={()=>onTodoClick(item.id)}
                />
            ))
        }
    </ul>);
}


export default TodoList;