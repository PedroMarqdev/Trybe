import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers'
import countReducer from '../reducers/count'

const rootReducer = combineReducers({ listReducer, countReducer });

const store = createStore(rootReducer);

export default store;