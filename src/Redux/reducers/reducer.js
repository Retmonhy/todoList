import { combineReducers } from "redux";
import tasks from "./tasks";
import { dbload } from "./dbload";



const rootReducer = () => combineReducers({
    tasks,
    dbload

})

export default rootReducer;