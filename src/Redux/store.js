import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/reducer'
import thunk from 'redux-thunk'

const initialState = {};
// const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composeEnhancers = applyMiddleware(thunk)

const store = createStore(rootReducer(), initialState, composeEnhancers)


export default store;