import { createStore, applyMiddleware, compose } from 'redux';
import UserReducer from './reducer/UserReducer';
import thunk from "redux-thunk";

const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(UserReducer, compose(applyMiddleware(thunk),devtools));
export default store;