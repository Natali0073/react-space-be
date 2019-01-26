import {applyMiddleware, createStore} from 'redux';
import rootReducer from "../reducers";
import {checkTechnologyMiddleware} from '../middleware';

const store = createStore(
    rootReducer,
    applyMiddleware(checkTechnologyMiddleware)
);
export default store;