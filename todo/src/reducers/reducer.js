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
            };
    }
}

const addTodo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    return (

        
    )
}