import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = (props) => {
  const [newTodoText, setNewTodoText] = useState("");

  const handleChanges = (e) => {
    e.preventDefault();
    setNewTodoText(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        name="todo"
        value={newTodoText}
        onChange={handleChanges}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          props.dispatch({
            type: "ADD_TODO",
            payload: { item: newTodoText, completed: false, id: uuidv4() },
          });
        }}
      >
        Add
      </button>
      <button onClick={handleChanges}>Clear</button>
    </form>
  );
};

export default TodoForm;
