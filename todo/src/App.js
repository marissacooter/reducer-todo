import React, {useReducer} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import reducer, {initialState} from './reducers/reducer';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <TodoList todos={state} dispatch={dispatch} />
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
