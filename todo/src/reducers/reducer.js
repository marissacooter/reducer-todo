import {v4 as uuidv4} from 'uuid';

export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: uuidv4()
}];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat(action.payload)
        case 'MARK_TODO':
            return {
                ...state,
                editing: false,
                title: action.payload
            }
        case 'CLEAR_TODO':
            return {
                ...state,
                editing: false
            }
    }
}
export default reducer;