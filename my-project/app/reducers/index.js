import * as TYPES from '../constants/action_types'

const initialState = {
    todos: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.INITIALIZE_STORE:
            return {
                todos: [...action.items]
            }
        case TYPES.CLEAR_STORE:
            return {
                todos: []
            }
        case TYPES.ADD_ITEM:
            return {
                todos: [action.item, ...state.todos]
            }
        case TYPES.DELETE_ITEM:
            return {
                todos: state.todos.filter((element) => !(element.key === action.item_key))
            }
    }
}

export default reducer;