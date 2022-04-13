const LOAD = 'LOAD'
const initialState = {
    loadDone: false
}

export const dbload = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            {
                return {
                    loadDone: true
                }
            }
        default:
            return state
    }
}

export const alreadyLoad = () => {
    return (dispatch) => {
        return dispatch({ type: LOAD })
    }
}