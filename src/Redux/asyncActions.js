import { LOAD_FROM_DB } from './reducers/tasks'
import { getDatabase, ref, get } from 'firebase/database';

export const getTodosFromDb = () => {
    return async(dispatch) => {
        const db = getDatabase();
        const reference = ref(db, 'todos/todos/');
        const snapshot = await get(reference)
        let responsedTodos = snapshot.val() || []
        console.log('responsedTodos = ', responsedTodos)
        dispatch({ type: LOAD_FROM_DB, todos: responsedTodos })
    }
}