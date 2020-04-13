import React, {useState} from "react";

const TodoForm = (props) => {
  const [newTodoText, setNewTodoText] = useState("");

  const handleChanges = (e) => {
    e.preventDefault();
    setNewTodoText( e.target.value );
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
          props.addToDo(newTodoText);
        }}
      >
        Add
      </button>
      <button onClick={handleClear}>Clear</button>
    </form>
  );
};

export default TodoForm;
