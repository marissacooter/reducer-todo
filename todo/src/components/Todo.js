import React from 'react';
import './Todo.css';

const Todo = props => {    
        return (
        <p onClick={() => props.toggleComplete(props.todo.id)} className={props.todo.completed ? "strike" : ""}>{props.todo.task}</p>
        )
}


export default Todo;