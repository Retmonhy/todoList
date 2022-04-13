const ADD = 'ADD'
const REMOVE = 'REMOVE'
const DONE = 'DONE'
const EDIT = 'EDIT'
export const LOAD_FROM_DB = 'LOAD_FROM_DB'

const initialState = {
    todos: '',
    count: 0,
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            {
                return {
                    ...state,
                    todos: [{
                        id: Date.now().toString(),
                        title: action.title,
                        description: '',
                        isDone: false,
                        isImportant: false,
                        isOvertimed: false,
                    }, ...state.todos]
                }
            }
        case REMOVE:
            {
                return {
                    ...state,
                    todos: state.todos.filter(item => item.id !== action.id)
                }
            }
        case DONE:
            {
                return {
                    ...state,
                    todos: state.todos.map(item => {
                        if (item.id !== action.id) return item

                        return {
                            ...item,
                            isDone: action.isDone
                        }

                    })
                }
            }
        case EDIT:
            {
                return {
                    ...state,
                    todos: state.todos.map(item => {
                        if (item.id !== action.id) return item

                        return {
                            ...item,
                            isImportant: action.important,
                            title: action.title,
                            description: action.description
                        }

                    })
                }
            }
        case LOAD_FROM_DB:
            {
                console.log('action =', action)
                return {
                    ...state,
                    todos: [...state.todos, ...action.todos]
                }
            }
        default:
            return state
    }
}

export const addTodo = (title) => {
    return (dispatch) => {
        return dispatch({ type: ADD, title: title })
    }
}
export const removeTodo = (id) => {
    return (dispatch) => {
        return dispatch({ type: REMOVE, id: id })
    }
}
export const setDone = (id, doneState) => {
    return (dispatch) => {
        return dispatch({ type: DONE, id, isDone: doneState })
    }
}

export const editTodo = (id, title, description, important) => {
    return (dispatch) => {
        return dispatch({ type: EDIT, id, title, description, important })
    }
}
export const loadTodosFromDB = ({ todos }) => {
    console.log('todos  in dispatch = ', todos)
    return (dispatch) => {
        return dispatch({ type: LOAD_FROM_DB, todos: todos })
    }
}

export default tasks