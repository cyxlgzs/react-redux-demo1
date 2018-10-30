import React from 'react';

const Todo = ({id, text, completed, onClick}) => {
    return (
        <li className="list-group-item" style={ {textDecoration:completed?'line-through':'none'} }>
        <span onClick={onClick}>{text}</span>
        </li>
    );
}


export default Todo;