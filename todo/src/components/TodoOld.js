import React, {useState, useReducer} from 'react';
import reducer, {initialState} from '../reducers/reducer';

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [newTodoText, setNewTodoText] = useState('');

    const handleChanges = e => {
        setNewTodoText(e.target.value);
    };

    return (
        <div>
            {!state.editing ? (
                <h1>
                    {state.todo}{' '}
                    <i
                        onClick={() => dispatch({type: 'ADD_TODO'})}
                        className='far fa-edit'
                    />
                </h1>
            ) : (
                 <div>
                    <input
                        className='todo-input'
                        type='text'
                        name='newTodoText'
                        value={newTodoText}
                        onChange={handleChanges}
                    />
                    <button
                        onClick={() =>
                            dispatch({ type: 'MARK_TODO', payload: newTodoText })
                        }
                    >
                        Mark Todo    
                    </button>    
                </div>
            )}
        </div>
    );
};

export default Todo;