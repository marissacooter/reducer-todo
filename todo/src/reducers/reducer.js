export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}];

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