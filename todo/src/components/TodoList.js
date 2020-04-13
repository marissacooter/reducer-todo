import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
      <div>
        {props.todos.map(todo => <Todo todo={todo} toggleComplete={props.toggleComplete}/>)}
      </div>
    );
}

export default TodoList;