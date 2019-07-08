import {applyMiddleware, createStore} from 'redux';
import rootReducer from "../reducers";
import {checkTechnologyMiddleware} from '../middleware';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    applyMiddleware(checkTechnologyMiddleware, thunk)
);
export default store;