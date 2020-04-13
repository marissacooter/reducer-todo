import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
      <div>
        {props.todos.map(todo => <Todo todo={todo} dispatch={props.dispatch}/>)}
      </div>
    );
}

export default TodoList;