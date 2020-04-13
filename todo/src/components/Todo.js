import React from 'react';
import './Todo.css';

const Todo = props => {    
        return (
        <p onClick={() => props.dispatch({type: 'MARK_TODO', payload: props.todo.id})} className={props.todo.completed ? "strike" : ""}>{props.todo.item}</p>
        )
}


export default Todo;