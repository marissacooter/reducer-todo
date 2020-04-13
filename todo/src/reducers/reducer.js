import React, {useState, useReducer} from 'react';

const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                editing: true
            }
        case 'MARK_TODO':
            return {
                ...state,
                editing: true
            }
        case 'CLEAR_TODO':
            return {
                ...state,
                editing: true
            }
    }
}

const addTodo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value);
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

export default Reducer;